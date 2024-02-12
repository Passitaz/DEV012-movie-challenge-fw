import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/lib/movie-service.service';
import { IMovie } from 'src/app/components/interface/interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList: IMovie[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getData();
    //llamada de servicio que muestre las peliculas, guardar array de peliculas en una variable que luego se la envio atraves de un input a componente movie-list
  }

  getData(){
    this.movieService.getAllMovies(this.currentPage).subscribe(movies => {
      this.movieList = this.movieList.concat(movies);
      //console.log(this.movieList);
  })
}

onFilterChanged(selectedGenre: number | null) {
  // Lógica para aplicar el filtro por género y obtener las películas filtradas
  // Puedes reiniciar la paginación y cargar las nuevas películas
  this.currentPage = 1;
  this.movieList = [];
  this.getData();
}

pageChanged(newPage: number) {
  this.currentPage = newPage;
  this.getData();
}
}
