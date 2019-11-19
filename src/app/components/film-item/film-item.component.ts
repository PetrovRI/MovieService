import { Component, OnInit, OnDestroy } from '@angular/core';
import {FilmItem, SearchFilm} from '../../models/film.model';
import {DataService} from '../../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Params } from '@angular/router';
import {AddFilm} from '../../store/actions/films.action';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  public film: SearchFilm;
  public filmLoading: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router, private store: Store<IAppState>) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.getFilm();
      });
  }

  getFilm() {
    this.filmLoading = true;
    const filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getFilmId(filmId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(film => {
        if (film) {
          this.film = film;
          this.filmLoading = false;
        } else {
          // this.router.navigate(['/404-product-not-found']);
        }
      });
  }

  onAdd(film: FilmItem) {
    this.store.dispatch(new AddFilm(film));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

