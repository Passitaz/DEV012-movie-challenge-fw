import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  selectedSortBy: string | null = null;
  sortOptions: string[] = [];
  

  @Output() filteredGenreEmitter: EventEmitter<number | null> = new EventEmitter<number | null>();

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void{
    this.movieService.getGenres().subscribe((genres: IGenre[]) => {
      this.genres = genres;
  });

  this.sortOptions = this.movieService.getSortOptions();
  
  }

  emitFilteredGenre() {
    this.filteredGenreEmitter.emit(this.selectedGenreId);
  }
}