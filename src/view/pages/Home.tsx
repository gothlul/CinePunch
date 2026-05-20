import { useState, useEffect, useRef } from 'react'
import logo from '../../shared/assets/logo.svg'
import '../../shared/style/index.css'
import Navbar from '../components/navbar/navbar'
import rating from '../../core/models/age-rating-model';
import NavItem from '../components/navbar/nav-item';
import AgeRatingCard from '../components/cards/age-rating-card';
import { faLayerGroup, faFilm } from "@fortawesome/free-solid-svg-icons";
import Genre from "../../core/models/genre-model"

import UtilsService from '../../shared/utils/utils-service';
import Controller from '../../core/services/controller';
import type Media from '../../core/models/media-model';
import MediaCard from '../components/cards/media-card';
import { useNavigate } from "react-router-dom";
import Carrocel from '../components/carousel/carousel';

const globalCategoryMatrix: Genre[][] = [];
const newMedias: Media[] = [];

export default function HomePage(){
    const [mediaMatrix, setMediaMatrix] = useState<Media[][]>([]);
    const navigator = useNavigate();

    async function _onInit(){
        const categories = await Controller.getCategories();

        for(let index = 0; index < 2; index++){
            globalCategoryMatrix.push(UtilsService.pickRandomItems(categories, 3));
        }

        const results: Media[][] = await Promise.all(
            globalCategoryMatrix.map(async (e: Genre[]) =>
                await Controller.getMediaByCategory(e)
            )
        );

        // const newMediasList = await Controller.getNewMedias();
        // newMedias.push(...newMediasList);

        setMediaMatrix((last) => [...last, ...results]);
    }

    useEffect(() => {
        _onInit();
    }, []);

    return (
        <div>
            <div className='flex justify-center bg-[(--background-color)] shadow-lg/30'>
            <Navbar imageSrc={logo}>
                <NavItem href="\search" icon={faLayerGroup}>Categorias</NavItem>
                <NavItem href="\display" icon={faFilm}>Em cartaz</NavItem>
            </Navbar>
            </div>
            <AgeRatingCard rating={rating.y10}/>
            <div className='flex flex-col items-center py-5 w-full gap-30 '>
                <div className='flex flex-col min-w-6/10 max-w-[220px] gap-15'>
                    {
                        mediaMatrix.map((e, index) => {
                            if(index <= 1) return <div className='flex flex-col gap-3'>
                                <p className='text-white font-semibold'>{ globalCategoryMatrix[index].map((cat) => cat.description).join(', ').replace(/,([^,]*)$/, ' e$1') }</p>
                                <Carrocel
                                    items={e}
                                    renderItem={(item) => (
                                        <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}`)}></MediaCard>
                                    )}
                                />
                            </div>
})
                    }
                </div>
                <div className='flex w-full bg-[#371D69] justify-center'>
                    <div className='flex flex-col gap-15'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-white font-semibold'>Novidades: </p>
                            <Carrocel
                                items={newMedias}
                                renderItem={(item) => (
                                    <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}`)}></MediaCard>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col min-w-6/10 max-w-[220px] gap-15'>
                    {
                        mediaMatrix.map((e, index) => {
                            if(index > 1) return <div className='flex flex-col gap-3'>
                                <p className='text-white font-semibold'>{ globalCategoryMatrix[index].map((cat) => cat.description).join(', ').replace(/,([^,]*)$/, ' e$1') }</p>
                                <Carrocel
                                    items={e}
                                    renderItem={(item) => (
                                        <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}`)}></MediaCard>
                                    )}
                                />
                            </div>
})
                    }
                </div>
            </div>
        </div>
    );
}