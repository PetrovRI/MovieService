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
  public film: SearchFilm = {};
  public apiUrlAllFilms = 'http://www.omdbapi.com/?apikey=9816ce92&s=old';
  public apiUrlAll = 'http://www.omdbapi.com/?apikey=9816ce92&s=';
  public apiUrlSearchId = 'http://www.omdbapi.com/?apikey=9816ce92&i=';
  // public apiUrlAll = 'http://www.omdbapi.com/?apikey=9816ce92&t=';


  getData() {
    this.http.get<IFilms>(this.apiUrlAllFilms).subscribe((data: IFilms) => {
      this.films = data.Search;
      this.store.dispatch(new LoadFilms(this.films));
    });
  }

  // getFilmTitle(title: string): Observable<SearchFilm> {
  //   return this.http.get<SearchFilm>(this.apiUrlAll + '/' + title);
  // }

  getFilmId(id: string): Observable<SearchFilm> {
    return this.http.get<SearchFilm>(this.apiUrlSearchId + id + '&plot=full');
  }

  getSearchFilm(searchValue: string): Observable<IFilms> {
    this.http.get<IFilms>(`${this.apiUrlAll}${searchValue}`).subscribe((data: IFilms) => {
      this.film = data;
      console.log(data);
    });
    return this.http.get<IFilms>(`${this.apiUrlAll}${searchValue}`);
  }
}


