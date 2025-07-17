import {  expect, test } from 'vitest';
import { films, genres, actors, rate, newFilms, filteredFilms,} from './functions.ts';


  // 1. Тест для уникальных жанров
  test('should collect all unique genres', () => {
    expect(genres.length).toBe(6);
    expect(genres[0]).toBe('Action');
    expect(genres[1]).toBe('Sci-Fi');
    expect(genres[2]).toBe('Adventure');
    expect(genres[3]).toBe('Drama');
    expect(genres[4]).toBe('Fantasy');
    expect(genres[5]).toBe('Family');
  });

  // 2. Тест для уникальных актеров
  test('should collect all unique actors', () => {
    expect(actors.length).toBe(10);
    expect(actors[0]).toBe('Scarlett Johansson');
    expect(actors[1]).toBe('Florence Pugh');
    expect(actors[2]).toBe('David Harbour');
    expect(actors[3]).toBe('Daniel Radcliffe');
    expect(actors[4]).toBe('Emma Watson');
  });

  // 3. Тест сортировки по рейтингу
  test('should sort films by rating descending', () => {
    expect(rate.length).toBe(5);
    expect(rate[0].title).toBe('Star Wars');
    expect(rate[0].imdbRating).toBe(8.6);
    expect(rate[1].title).toBe('Harry Potter and the Deathly Hallows: Part 2');
    expect(rate[1].imdbRating).toBe(8.1);
    expect(rate[4].title).toBe('Black Widow');
    expect(rate[4].imdbRating).toBe(6.9);
  });

  // 4. Тест создания нового массива с полями
  test('should create new array with specific fields', () => {
    expect(newFilms.length).toBe(5);
    expect(newFilms[0].id).toBe(1);
    expect(newFilms[0].title).toBe('Black Widow');
    expect(newFilms[0].released).toBe('09 Jul 2021');
    expect(newFilms[0].plot).toBe('Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.');
    expect(newFilms[4].id).toBe(5);
  });

  // 5. Тест фильтрации по году
  test('should filter films by year', () => {
    const result2009 = filteredFilms(films, 2009);
    expect(result2009.length).toBe(1);
    expect(result2009[0].title).toBe('Harry Potter and the Half-Blood Prince');
    
    const result2021 = filteredFilms(films, 2021);
    expect(result2021.length).toBe(1);
    expect(result2021[0].title).toBe('Black Widow');
  });

  