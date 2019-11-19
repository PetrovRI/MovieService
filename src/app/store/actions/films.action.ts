import { Action} from '@ngrx/store';
import {Film, FilmItem} from '../../models/film.model';

export namespace FILM_ACTION {
  export const LOAD_FILM = 'LOAD__FILM';
  export const ADD_FILM = 'ADD_FILM';
  export const DELETE_FILM = 'DELETE_FILM';
}

export class LoadFilms implements Action {
  readonly type = FILM_ACTION.LOAD_FILM;
  constructor(public payload: Film[]) {}
}

export class AddFilm implements Action {
  readonly type = FILM_ACTION.ADD_FILM;
  constructor(public payload: FilmItem) {}
}

export class DeleteFilm implements Action {
  readonly type = FILM_ACTION.DELETE_FILM;
  constructor(public payload: FilmItem) {}
}

export type FilmAction = LoadFilms | AddFilm | DeleteFilm;
