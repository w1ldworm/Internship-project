import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, HeroList } from 'src/app/models/hero.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageSize: number = 6;
  pageNumber: number = 1;
  totalUsers: number = 0;
  userList: User[] = []

  tokenForm: FormGroup = new FormGroup({});
  step1Form: FormGroup = new FormGroup({});
  step2Form: FormGroup = new FormGroup({});

  currentStep: number = 1;

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms():void {
    this.tokenForm = new FormGroup({
      token: new FormControl('', [Validators.required])
    });

    this.step1Form = new FormGroup({
      mobile: new FormControl('', [
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(11)
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      device_model: new FormControl('Safari'),
      device_os: new FormControl('Angular')
    });
    
    this.step2Form = new FormGroup({
      mobile: new FormControl('', [
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(11)
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      verification_code: new FormControl('', Validators.required),
      nickname: new FormControl('')
    });


  }

  getUserList(reset: boolean = false): void {
    if (reset) {
      this.pageNumber = 1;
    }

    const filter = {
      page: this.pageNumber,
      per_page: this.pageSize
    }

    this.apiService.getUserList(filter).subscribe(
      response => {
        console.log(response.page)
        this.totalUsers = response.total;
        this.userList = response.data;
      }
    )
  }

  createPageArray() {
    const pages: number = Math.ceil(this.totalUsers / this.pageSize)
    return Array(pages).fill(1).map((x,i) => i + 1);
  }

  getPageContent(page: number) {
    this.pageNumber = page;
    this.getUserList();
  }
  
  loginUser() {
    this.apiService.loginUser({
      "email": "eve.holts@reqres.in",
      "password": "cityslicka"
  }).subscribe(
      response => {
        console.log('Component: ', response)
      }
    )  
  }

  saveToken() {
    localStorage.setItem('token', this.tokenForm.value.token);
    this.getUserList();
  }

  getVerificationCode() {
    this.apiService.getVerificationCode(this.step1Form.value).subscribe(
      () => {
        this.currentStep = 2;
        this.step2Form.get('mobile')?.patchValue(this.step1Form.value.mobile);
      },
      error => {
        this.currentStep = 1;
      }
    )
  }

  getToken() {
    this.apiService.getTokenWithCode(this.step2Form.value).subscribe(
      data => {
        this.currentStep = -1;
        this.localStorageService.token = data.token;
        this.getProfileInfo();
      },
      error => {

      }
    )
  }

  getProfileInfo() {
    this.apiService.getUserProfile().subscribe(
      data => {
        console.log(data);
      }
    )
  }
  clickOnDiv() {
    console.log(('Div clicked'));
  }
  
}
