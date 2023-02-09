import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/home/home.component';
import { ListComponent } from './Components/list/list.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'list',component: ListComponent},
  {path:'add',component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
