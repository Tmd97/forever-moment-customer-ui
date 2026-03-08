import { useState, useEffect } from 'react';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';

interface HeaderProps {
    categories: any[];
    categoriesLoading: boolean;
    categoriesError?: string | null;
    locations: any[];
    selectedLocation: string;
    getCategories: () => void;
    getLocations: () => void;
    setSelectedLocation: (location: string) => void;
}

const Header = ({ 
    categories, 
    locations, 
    selectedLocation, 
    getCategories, 
    getLocations, 
    setSelectedLocation 
}: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        getCategories();
        if (locations.length === 0) {
            getLocations();
        }
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Fixed Upper Header */}
            <div
                className="fixed top-0 left-0 right-0 z-[300]"
                style={{
                    boxShadow: scrolled ? '0 4px 20px rgba(44,36,32,0.08)' : 'none',
                    transition: 'box-shadow 0.3s',
                }}
            >
                <UpperHeader
                    showLocationDropdown={showLocationDropdown}
                    setShowLocationDropdown={setShowLocationDropdown}
                    locations={locations}
                    selectedCity={selectedLocation}
                    setSelectedCity={setSelectedLocation}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </div>

            {/* Scrollable Lower Header */}
            <div style={{ marginTop: 72 }}>
                <LowerHeader
                    categories={categories}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </div>
        </>
    );
};

export default Header;
