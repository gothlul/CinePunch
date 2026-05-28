
import Repository from "../../shared/repository/repository";
import UtilsService from "../../shared/utils/utils-service";
import Genre from "../models/genre-model";
import Media from "../models/media-model";

export default class Controller{
    private categoryMatrix: Genre[][] = [];
    private newMedias: Media[] = [];

    getCategoryMatrix(){
        return this.categoryMatrix;
    }

    getNewMedias(){
        return this.newMedias;
    }

    async initializeHome(
        updateMediaMatrix: (value: React.SetStateAction<Media[][]>) => void
    ){
        const categories = await Repository.getCategories();

        for(let index = 0; index < 5; index++){
            this.categoryMatrix.push(UtilsService.pickRandomItems(categories, 3));
        }

        const results: Media[][] = await Promise.all(
            this.categoryMatrix.map(async (e: Genre[]) =>
                await Repository.getMediaByCategory(e)
            )
        );

        const newMediasList = await Repository.getNewMedias();
        this.newMedias.push(...newMediasList);

        updateMediaMatrix((last) => [...last, ...results]);
    }

    async getMedia(id: number, type: string): Promise<Media>{
        return await Repository.getMediaById(id, type);
    }
}