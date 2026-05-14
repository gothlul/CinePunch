import Controller from "../services/controller";
import rating, { type AgeRating } from "./age-rating-model"
import Channel from "./channel-model"
import Genre from "./genre-model"

export const MediaOptions = {
  movie: "movie",
  serie: "serie",
};

export default class Media {
  id: number;
  title: string;
  description: string;
  poster: string;
  ageRating: AgeRating | undefined;
  genres: Genre[];
  channels: Channel[];
  score: number | undefined;
  releaseDate: Date | undefined;
  type: string | undefined;
  runtime: number | undefined;
  seasons: number | undefined;

  constructor(
    id: number,
    title: string,
    description: string,
    poster: string,
    releaseDate: Date,
    ageRating: AgeRating,
    genres: Genre[],
    channels: Channel[],
    type: string,
    runtime: number,
    seasons: number,
    score: number
  ){
    this.id = id;
    this.title = title;
    this.description = description;
    this.poster = poster;
    this.releaseDate = releaseDate;
    this.ageRating = ageRating;
    this.genres = genres;
    this.channels = channels;
    this.type = type;
    this.runtime = runtime;
    this.seasons = seasons;
    this.score = score;
  }

  
  static fromJson(json: string){
    let obj = JSON.parse(json);

    return new Media(
      obj['id'],
      obj['name'],
      obj['overview'],
      obj['poster_path'],
      obj['release_date']??obj['first_air_date'],
      obj['ageRating']??rating.unknow,
      obj['genres'] != null? obj['genres'].map((e: string) => Genre.fromJson(e)): obj['genre_ids'].map((e: number) => Controller.getCategoryById(e)),
      obj['networks'] != null? obj['networks'].map((e: string) => Channel.fromJson(e)): [],
      obj['seasons'] != null? MediaOptions.serie: MediaOptions.movie,
      obj['runtime'],
      obj['seasons'],
      obj['vote_average']
    );
  }
}