import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
            <div className='relative flex items-center h-10 my-auto cursor-pointer'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
                <input className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
            </div>
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center p-2 border-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
