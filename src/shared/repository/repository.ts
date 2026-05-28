import Genre from "../../core/models/genre-model";
import Media from "../../core/models/media-model";
import UtilsService from "../utils/utils-service";



export default class Repository{
    private static api_key: string = import.meta.env.VITE_API_KEY;
    private static api_token: string = import.meta.env.VITE_API_TOKEN;
    private static api_url: string = import.meta.env.VITE_API_URL;

    static async getCategories(): Promise<Genre[]>{
        let categoryList: Genre[] = [];

        const response = await fetch(
            `${this.api_url}/genre/movie/list?language=pt-BR`,
            {
            headers: {
                Authorization: `Bearer ${this.api_token}`
            }
            }
        );

        const data = await response.json();
        data.genres.forEach((e: any) => categoryList.push(Genre.fromJson(JSON.stringify(e))));

        return categoryList;
    }

    static async getCategoryById(id: number): Promise<Genre>{
        const [movieRes, tvRes] = await Promise.all([
            fetch(`${this.api_url}/genre/movie/list?language=pt-BR`,{
                headers: {
                    Authorization: `Bearer ${this.api_token}`
                }
            }),
            fetch(`${this.api_url}/genre/tv/list?language=pt-BR`,{
                headers: {
                    Authorization: `Bearer ${this.api_token}`
                }
            })
        ]);

        const movieData = await movieRes.json();
        const serieData = await tvRes.json();

        let obj: any = [...movieData.genres, ...serieData.genres].find((genere) => genere.id === id);

        return Genre.fromJson(JSON.stringify(obj));
    }

    static async getMediaById(id: number, type: string): Promise<Media>{
        const response = await fetch(
            `${this.api_url}/${type}/${id}`,
            {
            headers: {
                Authorization: `Bearer ${this.api_token}`
            }
            }
        );

        const data = await response.json();
        
        return Media.fromJson(JSON.stringify(data));
    }

    static async getMediaByCategory(categoryList: Genre[]): Promise<Media[]>{
        let categoriesIds: number[] = [];
        categoryList.map((e: Genre) => categoriesIds.push(e.id));

        const [moviesResponse, seriesResponse] = await Promise.all([
            fetch(
                `${this.api_url}/discover/movie?with_genres=${categoriesIds}&language=pt-BR`,
                {
                    headers: {
                        Authorization: `Bearer ${this.api_token}`
                    }
                }
            ),
            fetch(
                `${this.api_url}/discover/tv?with_genres=${categoriesIds}&language=pt-BR`,
                {
                    headers: {
                        Authorization: `Bearer ${this.api_token}`
                    }
                }
            )
        ]);

        const moviesData = await moviesResponse.json();
        const seriesData = await seriesResponse.json();

        let mediaList: Media[] = [
            ...moviesData.results.map((e: any) => Media.fromJson(JSON.stringify(e))),
            ...seriesData.results.map((e: any) => Media.fromJson(JSON.stringify(e)))
        ]

        console.log(mediaList)

        return UtilsService.shuffle(mediaList);
    }

    static async getNewMedias(): Promise<Media[]>{
        const response = await fetch(`${this.api_url}/movie/now_playing?language=pt-BR`,{
            headers: {
                Authorization: `Bearer ${this.api_token}`
            }
        });

        const data = await response.json();

        return data.results.map((movie: any) => Media.fromJson(JSON.stringify(movie))) as Media[];
    }
}