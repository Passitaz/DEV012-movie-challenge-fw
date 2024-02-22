import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie, IGenre } from '../components/interface/interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private headers = new HttpHeaders({"AUTHORIZATION": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGE4MTcxMjcyM2JmMzUzMDA4ZTNmZDVlZmM4ZGRhYiIsInN1YiI6IjY1YjNmNWQ4NTc1MzBlMDEyZWQ5NTk4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ab7vxTEKixvyZ_3pFwpBaxL3bT51cbIYSZsR8dMHgf4"});
  private options = {headers: this.headers}
  private genresMapping: { [id: number]: string } = {};
  
  constructor(private http: HttpClient) { }
  getAllMovies(page: number | null, genre: number | null):Observable<IMovie[]> {
    const url = genre !== null ? `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
    : `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    return this.http.get(url, this.options).pipe(map((resp: any) => {
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
    // Definir manualmente las opciones de clasificación que quieres ofrecer
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