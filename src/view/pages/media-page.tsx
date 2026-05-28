import logo from '../../shared/assets/logo.svg'
import '../../shared/style/index.css'
import Navbar from '../components/navbar/navbar'
import rating from '../../core/models/age-rating-model';
import NavItem from '../components/navbar/nav-item';
import AgeRatingCard from '../components/cards/age-rating-card';
import { faLayerGroup, faFilm } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/footer/footer';
import Author from '../../core/models/author-model';
import { useEffect, useRef, useState } from 'react';
import Controller from '../../core/services/controller';
import { useParams, useSearchParams } from 'react-router-dom';
import Media from '../../core/models/media-model';

export default function MediaPage(){
    const [media, setMedia] = useState<Media>();
    const [ urlParams ] = useSearchParams();    
    const ref = useRef(new Controller());
    const controller = ref.current;

    const { id } = useParams<{ id: string }>();
    const type: string = urlParams.get('type')??"";

    async function _onInit(){
        const data = await controller.getMedia(Number(id), type);
        setMedia(data);
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
            <AgeRatingCard rating={media?.ageRating??rating.unknow}/>
            <Footer
                color='#0F0425'
                authors={
                    [
                        new Author(
                            "Lucas Rasoppi",
                            "lrasoppi11@gmail.com"
                        ),
                        new Author(
                            "Marcella da Silveira Prado",
                            "marcellasilveiraprado@gmail.com"
                        )
                    ]
                }
                copy='© 2026 Lucas R. & Marcella S. P. - Design, layout e conteúdo textual protegidos por direitos autorais. Este site utiliza conteúdo licenciado sob a Licença Creative Commons Attribution-ShareAlike 4.0 International. - Desenvolvido por:'
            ></Footer>
        </div>
    );
}