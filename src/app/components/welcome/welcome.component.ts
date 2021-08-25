import { Component, OnInit } from '@angular/core';
import { HeroList } from 'src/app/models/hero.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  heroList: HeroList | undefined;

  constructor() {
    console.log('Welcome constructor.');
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
