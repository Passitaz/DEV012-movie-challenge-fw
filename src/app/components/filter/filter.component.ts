import { Component, OnInit } from '@angular/core';
import { IGenre } from '../interface/interface';
import { MovieService } from 'src/app/lib/movie-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  genres: IGenre[] = [];
  selectedGenreId: number | null = null;

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void{
    this.movieService.getGenres().subscribe((genres: IGenre[]) => {
      this.genres = genres;
  });
  }
}