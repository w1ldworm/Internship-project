import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  {
    path: 'profile',
    component: SectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
