import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {Film, IFilms, SearchFilm} from '../../models/film.model';
import {Subject} from 'rxjs'; // следит сразу за несколькими источниками
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
  products: Film[] = [];
  stream$ = new Subject<string>();

  public inputValue: string;
  public film: SearchFilm = {};
  public  data: Film[] = [];
  public searchData: Array<string> = [];
  constructor(private store: Store<IAppState>, public service: DataService) {}

  ngOnInit(): void {

    // console.log(this.service.getSearchFilm('london'));
    // this.store.select('filmPage').subscribe((data: { films: Film[] }) => {
    //   this.data = data.films;
    //   this.data.map(({Title}) => this.searchData.push(Title));
    // });

    this.stream$
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        filter((term) => term.length > 0),
        switchMap((term) => this.search(term))
      )
      .subscribe((results: IFilms) => {
        this.products = results.Search;
        this.products.map((item) => this.searchData.push(item.Title));
        console.log(results);
      });

    console.log(this.products);
  }

  public search(term: string) { // поиск совпадений по полученному из input значения
    return this.service.getSearchFilm(term);
  }

  public onSearchInput(event) {
    let term = event.target.value;
    if (term.length > 0) {
      term = term.charAt(0).toUpperCase() + term.slice(1); // преобразование (слово в Слово)
      this.stream$.next(term); //  заставляет зрителя отреагировать на событие, произошедшее во время зрелища,
    } else {
      this.products = [];
      this.stream$.next('');
    }
  }

}


  // onChange(value: string): void {
  //   console.log(value);
  //   console.log(this.searchData);
  // }

  // public search(term: string) { // поиск совпадений по полученному из input значения
  //   // return this.productService.findProducts(term);
  //   return this.service.getSearchFilm(term);
  // }



