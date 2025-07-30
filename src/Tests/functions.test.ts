import { describe, it, expect } from 'vitest';
import { actors, genres, rate } from './functions';


describe('Фильмы', () => {

  it('уникальные жанры из всех фильмов', () => {
    const expectedGenres = [
      "Action",
      "Sci-Fi",
      "Adventure",
      "Drama",
      "Fantasy"
    ];
    expect(genres.length).toBe(expectedGenres.length); 
    expect(genres.sort()).toEqual(expectedGenres.sort()); 
  });

  it('уникальные актёры из всех фильмов', () => {
    const expectedActors = [
      "Scarlett Johansson",
      "Florence Pugh",
      "David Harbour",
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint",
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ];
    expect(actors.length).toBe(expectedActors.length); 
    expect(actors.sort()).toEqual(expectedActors.sort()); 
  });

  it('фильмы по убыванию рейтинга', () => {
    for (let i = 0; i < rate.length - 1; i++) {
      expect(rate[i].imdbRating).toBeGreaterThanOrEqual(rate[i + 1].imdbRating);
    }
    expect(rate[0].title).toBe("Star Wars");
    expect(rate[rate.length - 1].title).toBe("Black Widow");
  });

});
