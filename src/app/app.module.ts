import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { TopHerosComponent } from './components/top-heros/top-heros.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    HeroListComponent,
    TopHerosComponent,
    HeroDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
