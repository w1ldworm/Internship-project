import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero, HeroList } from 'src/app/models/hero.model';

@Component({
  selector: 'app-top-heros',
  templateUrl: './top-heros.component.html',
  styleUrls: ['./top-heros.component.scss']
})
export class TopHerosComponent implements OnInit {

  @Input('heros') heroList: Hero[] | undefined;
  @Output('detailClick') heroDetailClick = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  showHeroDetail(hero: Hero) {
    this.heroDetailClick.emit(hero);
  }
}
