import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  navItem = [
    {section: 'Фильмы', routerLink: '/films'},
    {section: 'Избранное', routerLink: '/favorites'},
    {section: 'Рейтинги', routerLink: '/rating'},
  ];

  constructor() { }

  ngOnInit() {
  }

}



