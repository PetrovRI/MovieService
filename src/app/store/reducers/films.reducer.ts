import {FILM_ACTION, FilmAction} from '../actions/films.action';

const initialState = {
  films: []
};

export function reducer(state = initialState, action: FilmAction) {
  switch (action.type) {
    case FILM_ACTION.LOAD__FILM:
      return {
        ...state,
        films: [...action.payload]
      };
    default:
      return state;
  }
}

