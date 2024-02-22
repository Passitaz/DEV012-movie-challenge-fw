import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  genre: number | null = null;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getData();
    //llamada de servicio que muestre las peliculas, guardar array de peliculas en una variable que luego se la envio atraves de un input a componente movie-list
  }

  getData(){
    this.movieService.getAllMovies(this.currentPage, this.genre).subscribe(movies => {
      console.log(movies);
      this.movieList = movies;
      console.log(this.movieList);
  })
}

pageChanged(page: number) {
  this.currentPage = page;
  this.getData();
}

selectFilteredGenre(genre: number | null){
  console.log('selectFilteredGenre');
  this.genre = genre;
  this.getData();
  }
}
