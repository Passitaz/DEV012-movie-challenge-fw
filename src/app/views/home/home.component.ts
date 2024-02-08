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

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getData();
    //llamada de servicio que muestre las peliculas, guardar array de peliculas en una variable que luego se la envio atraves de un input a componente movie-list
  }

  getData(){
    this.movieService.getAllMovies().subscribe(
      (resp) => {this.movieList = resp});
      console.log(this.movieList);
  }
}
