// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {SearchFilm} from '../../models/film.model';

const count = 2;

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  isOk = true;
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  filmState: Observable<{ favoriteFilms: SearchFilm[]}>;

  constructor(private http: HttpClient, private msg: NzMessageService, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.filmState = this.store.select('filmPage');
    this.initLoading = false;
  }

  onLoadMore(): void {
    // this.loadingMore = true;
    // this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    // this.http.get().subscribe((res: any) => {
    //   this.data = this.data.concat(res.results);
    //   this.list = [...this.data];
    //   this.loadingMore = false;
    // });
  }

  onDelete(item: any): void {
    this.msg.success(item.email);
  }
}
