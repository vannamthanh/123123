import { Link } from 'react-router';
import { Search } from 'lucide-react';
import MetaLogo from '@/assets/meta-logo.png';

const Header = () => {
    return (
        <header className='bg-[#355797]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <Link to='/' className='flex items-center'>
                            <img src={MetaLogo} alt='Meta Logo' />
                        </Link>
                        <span className='mx-4 text-white/50'>|</span>
                        <Link to='/support-inbox' className='flex items-center space-x-2 text-white/90 hover:text-white transition-colors'>
                            <span>Support Inbox</span>
                        </Link>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <button className='p-2 rounded-md hover:bg-white/10 text-white/90 hover:text-white transition-colors'>
                            <Search className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
