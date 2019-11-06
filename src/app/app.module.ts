import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// store
import {StoreModule} from '@ngrx/store';
import {reducer} from "./store/reducers/films.reducer";

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FilmsListComponent} from './components/films-list/films-list.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

// pages
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FilmsListPageComponent} from './pages/films-list-page/films-list-page.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'filmslist', component: FilmsListPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsListComponent,
    MainNavigationComponent,
    HomePageComponent,
    FilmsListPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({filmPage: reducer}),
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
