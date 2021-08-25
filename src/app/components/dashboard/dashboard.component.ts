import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Hero, HeroList } from 'src/app/models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input('heros') heroList: HeroList | undefined;

  canViewTopHeros: boolean = false;
  canViewHeroList: boolean = false;
  canViewHeroDetail: boolean = false;
  topHeros: Hero[] | undefined;
  selectedHero: Hero | undefined;

  constructor() { 
    console.log('Dashboard constructor.');
  }

  ngOnInit(): void {
    console.log('Dashboard Init');
    console.log('Init Heros: ', this.heroList);
    this.showDashboard();
  }

  ngOnChanges(): void {
    console.log('Dashboard Change');
    console.log('Change Heros: ', this.heroList);
    this.topHeros = this.heroList?.results.slice(0,4);
  }

  showDashboard(): void {
    this.canViewHeroDetail = false;
    this.canViewHeroList = false;
    this.canViewTopHeros = true;
  }
  
  showHeroList(): void {
    this.canViewHeroDetail = false;
    this.canViewHeroList = true;
    this.canViewTopHeros = false;
  }
  
  showHeroDetail(): void {
    this.canViewHeroDetail = true;
    this.canViewHeroList = false;
    this.canViewTopHeros = false;
  }

  onHeroClick(hero: Hero) {
    this.showHeroDetail();
    this.selectedHero = {...hero};
  }

  onHeroUpdate(hero: Hero) {
    const selected = this.heroList?.results.find(item => item.id == hero.id);
    if(selected) {
      selected.name = hero.name;
    } else {
      alert('Hero NOT FOUND!!!!')
    }
    this.showDashboard();
  }
}
