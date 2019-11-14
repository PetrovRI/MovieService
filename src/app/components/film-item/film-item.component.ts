import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchFilm} from '../../models/film.model';
import {DataService} from '../../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Params } from '@angular/router';
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  public film: SearchFilm;
  public filmLoading: boolean;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

