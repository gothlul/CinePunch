import { useState, useEffect, useRef } from 'react'
import logo from '../../shared/assets/logo.svg'
import '../../shared/style/index.css'
import Navbar from '../components/navbar/navbar'
import NavItem from '../components/navbar/nav-item';
import { faLayerGroup, faFilm } from "@fortawesome/free-solid-svg-icons";
import Controller from '../../core/services/controller';
import type Media from '../../core/models/media-model';
import MediaCard from '../components/cards/media-card';
import { useNavigate } from "react-router-dom";
import Caroucel from '../components/carousel/carousel';
import Footer from '../components/footer/footer';
import Author from '../../core/models/author-model';

export default function HomePage(){
    const ref = useRef(new Controller());
    const controller = ref.current;

    const [mediaMatrix, setMediaMatrix] = useState<Media[][]>([]);
    const navigator = useNavigate();

    async function _onInit(){
        await controller.initializeHome(setMediaMatrix);
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
            <div className='flex flex-col items-center py-5 w-full gap-30'>
                {/* <Caroucel
                    items={[]}
                    renderItem={(item) => (
                        <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}`)}></MediaCard>
                    )}
                ></Caroucel> */}
                <div className='flex flex-col min-w-1/4 max-w-5/8 gap-15'>
                    {
                        mediaMatrix.map((e, index) => {
                            if(index <= 1) return <div className='flex flex-col gap-5'>
                                <p className='text-white font-semibold text-xl'>{ controller.getCategoryMatrix()[index].map((cat) => cat.description).join(', ').replace(/,([^,]*)$/, ' e$1') }</p>
                                <Caroucel
                                    items={e}
                                    renderItem={(item) => (
                                        <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}?type=${item.type}`)}></MediaCard>
                                    )}
                                />
                            </div>
                        })
                    }
                </div>
                <div className='flex w-full bg-[#371D69] justify-centers'>
                    <div className='flex flex-col pb-20 pt-10 min-w-4/10 max-w-7/12 m-auto'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-white font-semibold text-xl'>Novidades: </p>
                            <Caroucel
                                items={controller.getNewMedias()}
                                renderItem={(item) => (
                                    <MediaCard media={item} onTap={() => navigator(`/movie/${item.id}`)}></MediaCard>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col min-w-1/4 max-w-5/8 gap-15 pb-50'>
                    {
                        mediaMatrix.map((e, index) => {
                            if(index > 1) return <div className='flex flex-col gap-5'>
                                <p className='text-white font-semibold text-xl'>{ controller.getCategoryMatrix()[index].map((cat) => cat.description).join(', ').replace(/,([^,]*)$/, ' e$1') }</p>
                                <Caroucel
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