import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {SearchFilm} from '../../models/film.model';
import {DeleteFilm} from '../../store/actions/films.action';
const count = 2;

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  list: Array<{ loading: boolean; name: any }> = [];
  filmState: Observable<{ favoriteFilms: SearchFilm[]}>;

  constructor(private http: HttpClient, private msg: NzMessageService, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.filmState = this.store.select('filmPage');
    this.initLoading = false;
  }

  onLoadMore(): void {
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteFilm(id));
  }
}
