import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/app.state";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Film} from "../../models/film.model";

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html'
})
export class RatingListComponent implements OnInit {

  constructor(private dataService: DataService, private store: Store<IAppState>, private activatedRoute: ActivatedRoute) { }

  public filmState: Observable<{films: Film[]}>;


  ngOnInit() {
    this.filmState = this.store.select('filmPage');
  }

  // loading = false;
  //
  // change(): void {
  //   this.loading = true;
  //   if (this.data.length > 0) {
  //     setTimeout(() => {
  //       this.data = [];
  //       this.loading = false;
  //     }, 1000);
  //   } else {
  //     setTimeout(() => {
  //       this.data = [
  //         {
  //           title: 'Ant Design Title 1'
  //         },
  //         {
  //           title: 'Ant Design Title 2'
  //         },
  //         {
  //           title: 'Ant Design Title 3'
  //         },
  //         {
  //           title: 'Ant Design Title 4'
  //         }
  //       ];
  //       this.loading = false;
  //     }, 1000);
  //   }
  // }
}
