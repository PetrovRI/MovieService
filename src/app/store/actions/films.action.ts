import { Action} from '@ngrx/store';
import {Film} from '../../models/film.model';

export namespace FILM_ACTION {
  export const LOAD__FILM = 'LOAD__FILM';
}

export class LoadFilms implements Action {
  readonly type = FILM_ACTION.LOAD__FILM;
  constructor(public payload: Film[]) {}
}


export type FilmAction = LoadFilms;
