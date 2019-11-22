import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Film, IFilms, SearchFilm} from '../../models/film.model';
import {Subject} from 'rxjs';
import {DataService} from '../../shared/data.service';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {
  public isShow = true;
  public value: string;
  public products: Film[] = [];
  public stream$ = new Subject<string>();
  public film: SearchFilm;
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.stream$
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        filter((term) => term.length > 0),
        switchMap((term) => this.search(term))
      )
      .subscribe((results: IFilms) => {
        this.products = results.Search;
        console.log(results);
      });

    console.log(this.products);
  }

  public search(term: string) {
    return this.service.getSearchFilm(term);
  }

  public onSearchInput(value: string) {
    let term = value;
    if (term.length > 0) {
      term = term.charAt(0).toUpperCase() + term.slice(1);
      this.stream$.next(term);
    } else {
      this.products = [];
      this.stream$.next('');
    }
  }

  public isOpen() {
    this.isShow = true;
  }
  public isClose() {
    this.isShow = false;
    this.products = [];
  }
}
