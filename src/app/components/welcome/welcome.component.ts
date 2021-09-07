import { Component, OnInit } from '@angular/core';
import { HeroList } from 'src/app/models/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  heroList: HeroList | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Welcome constructor.');
    this.activatedRoute.data.subscribe(
      info => {
        console.log('Router Data:', info)
      }
    )

    this.activatedRoute.queryParams.subscribe(
      query_params => {
        console.log('Router Queryparams:', query_params)
      }
    )
  }

  ngOnInit(): void {
    console.log('Welcome Init');
  }

  generateHeros() {
    console.log('Heros generated');
    this.heroList = {
      count: 7,
      next: undefined,
      prev: undefined,
      results: [
        {
          id: 1,
          name: 'Spiderman'
        },
        {
          id: 2,
          name: 'Supergirl'
        },
        {
          id: 3,
          name: 'Hulk'
        },
        {
          id: 4,
          name: 'Wonder woman'
        },
        {
          id: 5,
          name: 'Batman'
        },
        {
          id: 6,
          name: 'Black widow'
        },
        {
          id: 7,
          name: 'Captain Marvel'
        }
      ]
    }
  }
}
