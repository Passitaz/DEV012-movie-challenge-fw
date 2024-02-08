export interface Interface {
}

export interface IMovie {
    title: string;
    release_date: string;
    genre_ids: Array<number>;
    poster_path: string;
}

export interface IGenre {
    id: number;
    name: string;
}
