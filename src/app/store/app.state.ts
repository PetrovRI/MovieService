import { Film } from '../models/film.model';

export interface IAppState {
  filmPage: {
    films: Film[]
  };
}
