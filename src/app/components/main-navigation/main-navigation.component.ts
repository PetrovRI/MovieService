import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  navItem = [
    {section: 'Избранное', routerLink: ''},
    {section: 'Фильмы', routerLink: '/filmslist'},
    {section: 'Рейтинги', routerLink: ''},
    {section: 'Медиа', routerLink: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}

