import {Film, SearchFilm} from '../models/film.model';

export interface IAppState {
  filmPage: {
    films: Film[],
    favoriteFilms: SearchFilm[]
  };
}
