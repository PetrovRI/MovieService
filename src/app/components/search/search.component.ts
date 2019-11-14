import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Film, IFilms, SearchFilm} from '../../models/film.model';
import {Subject} from 'rxjs';
import { debounceTime ,  distinctUntilChanged ,  filter ,  switchMap } from 'rxjs/operators';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-search',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public show = false;
  public value = '';
  public products: Film[] = [];
  public stream$ = new Subject<string>();
  public film: SearchFilm = {};
  public searchData: Array<string> = [];
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.stream$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        filter((term) => term.length > 0),
        switchMap((term) => this.search(term))
      )
      .subscribe((results: IFilms) => {
        this.products = results.Search;
        this.products.map((item) => this.searchData.push(item.Title));
        console.log(results);
        this.show = true;
      });

    console.log(this.products);
  }

  public search(term: string) {
    return this.service.getSearchFilm(term);
  }

  public onSearchInput(event) {
    console.log(this.value);
    let term = event.target.value;
    if (term.length > 0) {
      term = term.charAt(0).toUpperCase() + term.slice(1);
      this.stream$.next(term);
    } else {
      this.products = [];
      this.stream$.next('');
    }
  }

  public clearValue() {
    this.value = '';
  }
}



