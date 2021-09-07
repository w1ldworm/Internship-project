import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { Page404Component } from './components/page404/page404.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: ['Ali', 'Saeed']
  },
  {
    path: 'category/:id',
    component: HeroListComponent
  },
  {
    path: 'category/:id/:name',
    component: HeroListComponent
  },
  {
    path: 'portfolio',
    loadChildren: ()=>import('./modules/portfolio/portfolio.module').then(mod => mod.PortfolioModule)
  },
  {
    path: 'profile',
    component: HeroListComponent,
    canActivate: [AuthGuardService],
    resolve: [ResolverService]
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
