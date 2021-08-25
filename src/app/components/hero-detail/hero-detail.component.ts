import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input('hero') selectedHero: Hero | undefined;
  @Output('updateHero') updateHeroEvent: EventEmitter<Hero> = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedHero);
  }

  updateHero() {
    this.updateHeroEvent.emit(this.selectedHero);
  }
}
