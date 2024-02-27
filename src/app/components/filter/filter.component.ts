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
  

  @Output() filterGenreEmitter: EventEmitter<number | null> = new EventEmitter<number | null>();
  @Output() filterSortByEmitter: EventEmitter<string | null> = new EventEmitter<string | null>();
  @Output() clearFilters: EventEmitter<null> = new EventEmitter<null>();

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void{
    this.movieService.getGenres().subscribe((genres: IGenre[]) => {
      this.genres = genres;
  });

  this.sortOptions = this.movieService.getSortOptions();
  }
  
  emitFilterGenre() {
    //console.log(this.selectedGenreId);
    if (this.selectedGenreId !== null) {
    this.filterGenreEmitter.emit(this.selectedGenreId);
    }
  }

  emitFilterSortBy() {
    //console.log(this.selectedSortBy)
    if (this.selectedSortBy !== null) {
      this.filterSortByEmitter.emit(this.selectedSortBy)
    }
  }

  emitFilterClear() {
    // Emitir el evento para notificar al componente padre que se deben limpiar los filtros
    this.selectedGenreId = null;
    this.selectedSortBy = null;
    this.clearFilters.emit();
    //console.log(this.selectedGenreId, this.selectedSortBy);
    
  }
}