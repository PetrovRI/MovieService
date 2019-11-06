import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Film} from "../../models/film.model";


export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'app-search',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public films: Observable<{films: Film[]}>;
  public options Array<string> = [];
  inputValue: string;
  optionGroups: AutocompleteOptionGroups[];

  constructor(private store: Store<IAppState>) { }

  onChange(value: string): void {
    console.log(value);
  }

  ngOnInit(): void {
    this.films = this.store.select('filmPage');
    this.films.map(({Title}) => this.options.push(Title));
  }
}
