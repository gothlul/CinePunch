import { useState, type ReactNode } from 'react';
import SearchBar from '../inputs/searchbar';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserCard from '../cards/user-card';
import userImage from '../../../shared/assets/user-default-image.svg';

type NavbarParametters = {
    imageSrc: string 
    children: ReactNode
}

function Navbar({
    imageSrc,
    children
}: NavbarParametters) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
    <nav className='flex items-center h-[10vh] max-h-100px justify-between py-5 min-w-3/4 max-w-9/10 gap-30'>
        <div className='flex items-center gap-15'>
            <a href='\'>
                <img src={imageSrc}/>
            </a>

            <ul className='flex gap-x-9 text-white'>
                {children}
            </ul>
        </div>

        <div className='flex items-center gap-10 flex-1 max-w-90'>
            <SearchBar icon={faSearch} placeholder='Pesquisar' term={searchTerm} onChange={setSearchTerm}></SearchBar>
            <UserCard imageSrc={userImage} onTap={() => {}} size={30}></UserCard>
        </div>


    </nav>
    )
}

export default Navbar
