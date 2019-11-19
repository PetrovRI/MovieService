import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Store} from '@ngrx/store';
import {AddFilm} from '../../store/actions/films.action';
import {IAppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Film, IFilms, FilmItem} from '../../models/film.model';
import {ActivatedRoute} from '@angular/router';
// import ADD_FILM = FILM_ACTION.ADD_FILM;

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


  ngOnInit() {
    this.filmState = this.store.select('filmPage');
  }

  onAdd(film: FilmItem) {
    this.store.dispatch(new AddFilm(film));
  }
}
