import logo from '../../shared/assets/logo.svg'
import '../../shared/style/index.css'
import Navbar from '../components/navbar/navbar'
import rating from '../../core/models/age-rating-model';
import NavItem from '../components/navbar/nav-item';
import AgeRatingCard from '../components/cards/age-rating-card';
import { faLayerGroup, faFilm } from "@fortawesome/free-solid-svg-icons";

import UtilsService from '../../core/services/controller';

export default function DisplayPage(){
    const controller = new UtilsService();

    return (
        <div>
            <div className='flex justify-center bg-[(--background-color)] shadow-lg/30'>
            <Navbar imageSrc={logo}>
                <NavItem href="\search" icon={faLayerGroup}>Catgeorias</NavItem>
                <NavItem href="\display" icon={faFilm}>Em cartaz</NavItem>
            </Navbar>
            </div>
            <AgeRatingCard rating={rating.y10}/>
            
        </div>
    );
}