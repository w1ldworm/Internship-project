import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Hero, HeroList } from 'src/app/models/hero.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

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
}
