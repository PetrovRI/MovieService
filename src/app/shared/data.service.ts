import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadPosts } from '../store/actions/posts.action';
import { Store } from '@ngrx/store';
import { IAppState} from '../store/app.state';
import { Film, IFilms, SearchFilm } from  '../post.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  public films: Film[] = [];
  public film: SearchFilm = {};
  public apiUrlSuperman = 'http://www.omdbapi.com/?apikey=9816ce92&s=superman';
  public apiUrlAll = 'http://www.omdbapi.com/?apikey=9816ce92&t=';


  getData() {
    this.http.get<IFilms>(this.apiUrlSuperman).subscribe((data: IFilms) => {
      this.films = data.Search;
      this.store.dispatch(new LoadPosts(this.films));
    });
  }
  //
  // getFilmId(filmId: number): Observable<Film> {
  //   return this.http.get<Film>(this.apiUrlSuperman + '/' + filmId);
  // }


  getFilmTitle(title: string): Observable<SearchFilm> {
    return this.http.get<SearchFilm>(this.apiUrlAll + '/' + title);
  }

  getSearchFilm(searchValue: string) {
    this.http.get<SearchFilm>(`${this.apiUrlAll}${searchValue}`).subscribe((data: IFilms) => {
      console.log(data);
      this.film = data;
    });
  }
}


