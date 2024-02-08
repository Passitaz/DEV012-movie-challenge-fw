import { TestBed } from '@angular/core/testing';
import { MovieService } from 'src/app/lib/movie-service.service';

describe('MovieServiceService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
