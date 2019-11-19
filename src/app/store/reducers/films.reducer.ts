import {FILM_ACTION, FilmAction} from '../actions/films.action';

const initialState = {
  films: [],
  favoriteFilms: []
};

export function reducer(state = initialState, action: FilmAction) {
  switch (action.type) {
    case FILM_ACTION.LOAD_FILM:
      return {
        ...state,
        films: [...action.payload]
      };
    case FILM_ACTION.ADD_FILM:
      const filmIndex = state.favoriteFilms.findIndex(film => film.imdbID === action.payload.imdbID);
      if (filmIndex === -1) {
        return {
          ...state,
          favoriteFilms: [...state.favoriteFilms, action.payload]
        };
      }
    case FILM_ACTION.DELETE_FILM:
      return {
        ...state,
        cars: [...state.favoriteFilms.filter(film => film.imdbID === action.payload.imdbID)]
      };
    default:
      return state;
  }
}

