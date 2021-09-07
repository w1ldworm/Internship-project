import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Hero list constructor');
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data);
      }
    )
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Category ID:', params.id)
        console.log('Category Name:', params.name)
      }
    )
  }

  ngOnInit(): void {
  }

}
