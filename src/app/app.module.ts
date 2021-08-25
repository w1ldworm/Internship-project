import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { TopHerosComponent } from './components/top-heros/top-heros.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    HeroListComponent,
    TopHerosComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
