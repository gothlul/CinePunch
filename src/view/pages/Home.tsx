import { useState, useEffect } from 'react'
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

export default function HomePage(){
    const [categoryList, setCategoryList] = useState<Genre[]>([]);
    const [mediaMatrix, setMediaMatrix] = useState<Media[][]>([]);

    async function _onInit(){
        const categories = await Controller.getCategories();
        setCategoryList(categories);

        let matchs: Genre[][] = [];

        for(let index = 0; index < 2; index++){
            matchs.push(UtilsService.pickRandomItems(categories, 3));
        }

        const results: Media[][] = await Promise.all(
            matchs.map((e: Genre[]) =>
                Controller.getMediaByCategory(e)
            )
        );

        setMediaMatrix((last) => [...last, ...results]);
    }

    useEffect(() => {
        _onInit();
    }, []);

    return (
        <div>
            <div className='flex justify-center bg-[(--background-color)] shadow-lg/30'>
            <Navbar imageSrc={logo}>
                <NavItem href="\search" icon={faLayerGroup}>Catgeorias</NavItem>
                <NavItem href="\display" icon={faFilm}>Em cartaz</NavItem>
            </Navbar>
            </div>
            <AgeRatingCard rating={rating.y10}/>
            <div className='flex justify-center py-5 w-full gap-30 '>
                <div className='min-w-6/10 max-w-[220px]'>
                    
                </div>
            </div>
        </div>
    );
}