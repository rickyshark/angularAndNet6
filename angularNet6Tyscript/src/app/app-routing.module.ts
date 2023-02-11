//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterModule, Routes } from '@angular/router';
//import { CategoriesComponent } from './categories/categories.component';

//const routes: Routes = [
//  { path: 'categories', component: CategoriesComponent }   
//];

//@NgModule({
//  declarations: [],
//  imports: [
//    CommonModule, RouterModule.forChild(routes)
//  ],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
