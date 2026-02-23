import { useState, useEffect } from 'react';
import '../../css/styles.scss';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';

interface HeaderProps {
    categories: any[];
    categoriesLoading: boolean;
    categoriesError?: string | null;
    getCategories: () => void;
}

const Header = ({ categories, getCategories }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Vizag');

    // 🔥 NEW STATE (mobile menu control)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
                </div>
            </header>

            <div className='lowerHeader'>
                <div className='inner'>
                    <LowerHeader
                        categories={categories}
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;