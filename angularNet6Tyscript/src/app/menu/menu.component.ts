import { Component } from '@angular/core';
import { menuItem } from './menuItems';

@Component({
  selector: 'app-menu',
  template: `
    <mat-toolbar>Menu</mat-toolbar>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems" [routerLink]="item.path">{{item.label}}</a>
    </mat-nav-list>
  `,
  styles: [
  ]
})


export class MenuComponent {
  menuItems: Array<menuItem> = [
    {
      path: '/',
      label: 'home'
    },
    {
      path: '/categories',
      label: 'Categories'
    },
    {
      path: '/suppliers',
      label: 'Suppliers'
    },
  ];
}
