export interface Interface {
}

export interface IMovie {
    title: string;
    release_date: string;
    genre_ids: Array<number>;
    poster_path: string;
    id: number;
    overview: string;
    vote_average: number;
    vote_count: number;  
}

export interface IGenre {
    id: number;
    name: string;
}