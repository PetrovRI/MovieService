import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Film, IFilms, FilmItem} from '../../models/film.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  public filmItem: FilmItem;

  constructor(private dataService: DataService, private store: Store<IAppState>, private activatedRoute: ActivatedRoute) { }

  // постоянная подписка.
  public filmState: Observable<{films: Film[]}>;
  // public filmState: Observable<IFilms>;

  ngOnInit() {
    this.filmState = this.store.select('filmPage');  // передаем даные в filmState
    console.log(this.filmState);
  }
}
