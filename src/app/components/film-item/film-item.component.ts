import { Component, OnInit } from '@angular/core';
import { SearchFilm} from '../../models/film.model';
import {DataService} from '../../shared/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  public film: SearchFilm;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const filmId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(filmId);
    this.dataService.getFilmId(filmId)
      .subscribe(film => {
        console.log(film);
        this.film = film;
      });
  }

}
