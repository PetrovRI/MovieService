import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoadFilms} from '../store/actions/films.action';
import { Store } from '@ngrx/store';
import { IAppState} from '../store/app.state';
import { Film, IFilms, SearchFilm } from  '../models/film.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  public films: Film[] = [];
  public film: {} = {};
  public apiUrlAllFilms = 'http://www.omdbapi.com/?apikey=9816ce92&s=old';
  public apiUrlAll = 'http://www.omdbapi.com/?apikey=9816ce92&s=';
  public apiUrlSearchId = 'http://www.omdbapi.com/?apikey=9816ce92&i=';

  getFilmList() {
    this.http.get<IFilms>(this.apiUrlAllFilms).subscribe((data: IFilms) => {
      this.films = data.Search;
      this.store.dispatch(new LoadFilms(this.films));
    });
  }

  getFilmId(id: string): Observable<SearchFilm> {
    return this.http.get<SearchFilm>(this.apiUrlSearchId + id + '&plot=full');
  }

  getSearchFilm(searchValue: string): Observable<IFilms> {
    this.http.get<IFilms>(`${this.apiUrlAll}${searchValue}`).subscribe((data: IFilms) => {
      this.film = data;
    });
    return this.http.get<IFilms>(`${this.apiUrlAll}${searchValue}`);
  }

  getRating(ratingIndex: string) {
    const rating = +ratingIndex;
    switch (true) {
      case (rating >= 0 && rating <= 2):
        return 1;
        break;
      case (rating >= 2 && rating <= 4):
        return 2;
        break;
      case (rating >= 4 && rating <= 6):
        return 3;
        break;
      case (rating >= 6 && rating <= 8):
        return 4;
        break;
      case (rating >= 8 && rating <= 10):
        return 5;
        break;
      default:
        break;
    }
  }
}


