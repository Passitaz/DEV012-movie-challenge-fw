import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie, IGenre } from '../components/interface/interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private headers = new HttpHeaders({"AUTHORIZATION": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGE4MTcxMjcyM2JmMzUzMDA4ZTNmZDVlZmM4ZGRhYiIsInN1YiI6IjY1YjNmNWQ4NTc1MzBlMDEyZWQ5NTk4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ab7vxTEKixvyZ_3pFwpBaxL3bT51cbIYSZsR8dMHgf4"});
  private options: {headers: HttpHeaders, params?: HttpParams} = {headers: this.headers};
  private genresMapping: { [id: number]: string } = {};
  
  constructor(private http: HttpClient) { }
  setParams(page: number, genre: number | null, sortBy: string | null): HttpParams{
    let params: HttpParams = new HttpParams();
    if(page != null){
      params = params.set('page', page.toString());
    }
    if(genre != null) {
      params = params.set('with_genres', genre.toString());
    }
    if(sortBy != null) {
      params = params.set('sort_by', sortBy);
    }
    return params;
  }

  getAllMovies(page: number, genre: number | null, sortBy: string | null):Observable<IMovie[]> {
    const url = `${this.baseUrl}/discover/movie`;
    let options: {headers?: HttpHeaders, params?: HttpParams}  = {headers: this.headers};
    options.params = this.setParams(page, genre, sortBy);
    return this.http.get(url, options).pipe(map((resp: any) => {
      return resp.results as IMovie[];
    }))
  }
  
  getGenres(): Observable<IGenre[]> {
    const genresUrl = `${this.baseUrl}/genre/movie/list`;
    return this.http.get<IGenre[]>(genresUrl, this.options).pipe(
      map((resp: any) => {
        resp.genres.forEach((genre: IGenre) => {
          this.genresMapping[genre.id] = genre.name;
        });
        return resp.genres as IGenre[];
      })
    );
  }

  getSortOptions(): string[] {
    return [
      'original_title.asc',
      'original_title.desc',
      'popularity.asc',
      'popularity.desc',
      'revenue.asc',
      'revenue.desc',
      'primary_release_date.asc',
      'title.asc',
      'title.desc',
      'primary_release_date.desc',
      'vote_average.asc',
      'vote_average.desc ',
      'vote_count.asc',
      'vote_count.asc'
    ];
  }

  // Obtener géneros almacenados
  getGenresMapping(): { [id: number]: string } {
    return this.genresMapping;
  }
}