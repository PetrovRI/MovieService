export interface Film {
     Title: string,
     Year: string,
     imdbID: string,
     Type: string,
     poster: string
}

// export class Film {
//   constructor(
//     Title: string,
//     Year: string,
//     imdbID: string,
//     Type: string,
//     poster: string
//   ) {}
// }

export class FilmItem {
  constructor(
    title: string,
    year: number,
    imdbID: number,
    type: string,
    poster: string
  ) {}
}

export interface Rating {
  ratings: [{
    Source: string,
    Value: string
  },
    {
      Source: string,
      Value: string
    },
    {
      Source: string,
      Value: string
    }
  ];

}
export class SearchFilm {
  constructor(
    Title: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Rating,
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    BoxOffice: string,
    Production?: string,
    Website?: string,
    Response?: string
  ) {}
}


export interface IFilms {
  Search: Film[];
}


