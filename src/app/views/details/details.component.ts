import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/components/interface/interface';
import { MovieService } from 'src/app/lib/movie-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  idParams: number | null = 0;
  detailMovie: IMovie | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
    ) { }

    getId(){

    }

    ngOnInit(): void {
      this.idParams = +this.route.snapshot.params['id'];
    
      if (this.idParams != null) {
        this.movieService.getDetail(this.idParams).subscribe((resp: IMovie) => {
          this.detailMovie = resp;
          console.log(resp);
        });
      }
    }

}
