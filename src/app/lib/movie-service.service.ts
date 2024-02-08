import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie } from '../components/interface/interface';
import { IGenre } from '../components/interface/interface';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private headers = new HttpHeaders({"AUTHORIZATION": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGE4MTcxMjcyM2JmMzUzMDA4ZTNmZDVlZmM4ZGRhYiIsInN1YiI6IjY1YjNmNWQ4NTc1MzBlMDEyZWQ5NTk4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ab7vxTEKixvyZ_3pFwpBaxL3bT51cbIYSZsR8dMHgf4"});
  private options = {headers: this.headers}
  private genresMapping: { [id: number]: string } = {};
  
  constructor(private http: HttpClient) { }
  getAllMovies():Observable<IMovie[]> {
    return this.http.get(`${this.baseUrl}/discover/movie`, this.options).pipe(map((resp:any) => {
      return resp.results as IMovie[];
    }))
  }
  
  getGenres(): Observable<void> {
    const genresUrl = `${this.baseUrl}/genre/movie/list`;
    return this.http.get<IGenre[]>(genresUrl, this.options).pipe(
      map((resp: any) => {
        resp.genres.forEach((genre: IGenre) => {
          this.genresMapping[genre.id] = genre.name;
        });
      })
    );
  }

  // Obtener géneros almacenados
  getGenresMapping(): { [id: number]: string } {
    return this.genresMapping;
  }
}




