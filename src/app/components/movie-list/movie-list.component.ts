import { Component, Input, OnInit } from '@angular/core';
import { IMovie, IGenre } from 'src/app/components/interface/interface';
import { MovieService } from 'src/app/lib/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

@Input() movieList!: IMovie[];
//definir propiedad como input porque llegara el array desde el padre, entonces en home tendre el ngOnInit que llame a getData. Primero llevarme ngOnInit y getData ( hacer un console log para revisar que me lleve la informacion), despues se envia al componente hijo
private genresMapping: { [id: number]: string } = {};

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // Llama a la función para obtener el mapeo de géneros al inicializar el componente
    this.movieService.getGenres().subscribe(genres => {
      this.genresMapping = this.movieService.getGenresMapping();
      this.movieList.forEach(movie => {
        console.log(`Genres for ${movie.title}:`, this.getGenresByIds(movie.genre_ids));
      });
    });
  }

  getGenresByIds(genreIds: number[]): string[] {
    // Utiliza el mapeo de géneros para obtener los nombres
    return genreIds.map(id => this.genresMapping[id] || '');
  }
}