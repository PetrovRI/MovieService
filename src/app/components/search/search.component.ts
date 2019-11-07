import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Film, SearchFilm} from '../../models/film.model';


@Component({
  selector: 'app-search',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public inputValue: string;
  public film: SearchFilm = {};
  public  data: Film[] = [];
  public searchData: Array<string> = [];
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.select('filmPage').subscribe( (data: { films: Film[] }) => {
      this.data = data.films;
      this.data.map(({Title}) => this.searchData.push(Title));
    });
  }

  onChange(value: string): void {
    console.log(value);
    console.log(this.searchData);
  }
}
