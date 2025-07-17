
export interface Film {
    id: number;
    title: string;
    year: number;
    released: string;
    runtime: string
    genre: string[];
    director: string;
    writer: string;
    actors: string[];
    plot: string;
    country: string;
    poster: string;
    imdbRating: number;
    imdbVotes: number;
    type?: string;
    boxOffice: string;
    production: string;

}



export const films: Film[] = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },

    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States", poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
    {
        id: 3,
        title: "Star Wars",
        year: 1977,
        released: "25 May 1977",
        runtime: "121 min",
        genre: ["Action", "Adventure", "Fantasy"],
        director: "George Lucas",
        writer: "George Lucas",
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
        country: "United States, United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        imdbRating: 8.6,
        imdbVotes: 1259440,
        type: "movie",
        boxOffice: "$460,998,507",
        production: "Lucasfilm Ltd.",
    },
]

// 1. Собрать в массив все жанры фильмов (без повторения)

export const genres = films.reduce((acc: string[], film) => {
    film.genre.forEach(genre => {
        if (!acc.includes(genre)) {
            acc.push(genre);
        }
    });
    return acc;
}, []);

console.log(genres);

// 2. Собрать в массив всех актеров всех фильмов (без повторения)

export const actors = films.reduce((acc: string[], film) => {
    film.actors.forEach(actor => {
        if (!acc.includes(actor)) {
            acc.push(actor);
        }
    });
    return acc;
}, []);

console.log(actors);

// 3. Сортировать фильмы по рейтингу по убыванию

export const rate = films.reduce<Film[]>((acc, film) => {
    acc.push(film);
    return acc;
}, []).sort((a, b) => b.imdbRating - a.imdbRating);

console.log(rate);

// 4. Создать новый массив, где объекты фильмов будут состоять из следующих
// полей: id, title, released, plot

export const newFilms = films.reduce<{ id: number; title: string; released: string; plot: string }[]>((acc, film) => {
    acc.push({
        id: film.id,
        title: film.title,
        released: film.released,
        plot: film.plot,
    });
    return acc;
}, []);

console.log(newFilms);

// 5. Создать функцию, которая бы принимала массив фильмов и число. А
// результатом этой функции должен быть отфильтрованный массив, с фильмами
// где число равно году выхода фильма.

export function filteredFilms(films: Film[], year: number): Film[] {
    return films.reduce<Film[]>((acc, film) => {
        if (film.year === year) {
            acc.push(film);
        }
        return acc;
    }, []);
}

console.log(filteredFilms(films, 2009));

