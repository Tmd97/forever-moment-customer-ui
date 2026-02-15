import { useState, useEffect } from 'react';
import '../../css/styles.scss';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';

/* ─── Header Component ─── */
interface HeaderProps {
    categories: any[];
    categoriesLoading: boolean;
    categoriesError?: string | null;
    getCategories: () => void;
    isMenuOpen?: boolean;
    searchQuery?: string;
    toggleMenu?: () => void;
    setSearchQuery?: (query: string) => void;
}

const Header = ({ categories, getCategories }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Vizag');

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header className={`stickyHeader ${scrolled ? 'scrolled' : ''}`}>
                <div className='inner'>
                    <UpperHeader
                        showLocationDropdown={showLocationDropdown}
                        setShowLocationDropdown={setShowLocationDropdown}
                        selectedCity={selectedCity}
                        setSelectedCity={setSelectedCity}
                    />
                </div>
            </header>
            <div className='lowerHeader'>
                <div className='inner'>
                    <LowerHeader categories={categories} />
                </div>
            </div>
        </>
    );

};

export default Header;
