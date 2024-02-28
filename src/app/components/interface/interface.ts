export interface Interface {
}

export interface IMovie {
    title: string;
    release_date: string;
    genre_ids: Array<number>;
    poster_path: string;
    id: number;
    vote_average: number;
    vote_count: number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IMovieDetail {
    poster_path: string;
    original_title: string;
    release_date: string;
    genre_ids: Array<number>;
    id: number;
    title: string;
    vote_average: number;
    vote_count: number;    
  }