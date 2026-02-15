import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CUSTOMER_CONFIG } from '@/config/constants';
import { SearchIcon, LocationIcon, ChevronIcon, UserIcon, MenuIcon } from './HeaderIcons';
import { dummyCities } from './HeaderData';
import '../../css/styles.scss';

interface UpperHeaderProps {
    showLocationDropdown: boolean;
    setShowLocationDropdown: (show: boolean) => void;
    selectedCity: string;
    setSelectedCity: (city: string) => void;
}

const UpperHeader = ({
    showLocationDropdown,
    setShowLocationDropdown,
    selectedCity,
    setSelectedCity,
}: UpperHeaderProps) => {
    const locationRef = useRef<HTMLDivElement>(null);

    // Close location dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
                setShowLocationDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setShowLocationDropdown]);

    const toggleLocationDropdown = () => {
        setShowLocationDropdown(!showLocationDropdown);
    };

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        setShowLocationDropdown(false);
    };

    return (
        <div className='topRow'>
            {/* Left: Brand */}
            <Link to='/' className='brand'>
                <img
                    src={CUSTOMER_CONFIG.logo}
                    alt={CUSTOMER_CONFIG.name}
                    className='logoImg'
                />
                <span className='brandText'>
                    <span className='brandName'>{CUSTOMER_CONFIG.name}</span>
                    <span className='brandTagline'>Celebrate Every Moment</span>
                </span>
            </Link>

            {/* Center: Search & Location Pill */}
            <div className='searchBarContainer'>
                <div className='searchPill'>
                    {/* Search */}
                    <div className='searchSection'>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search for celebrations..."
                            className='searchInput'
                        />
                    </div>

                    {/* Divider */}
                    <div className='divider' />

                    {/* Location */}
                    <div className='locationWrapper' ref={locationRef}>
                        <button
                            className={`locationSection ${showLocationDropdown ? 'active' : ''}`}
                            onClick={toggleLocationDropdown}
                        >
                            <LocationIcon />
                            <span>{selectedCity}</span>
                            <ChevronIcon />
                        </button>

                        {showLocationDropdown && (
                            <ul className='locationDropdown'>
                                {dummyCities.map((city) => (
                                    <li
                                        key={city}
                                        className={`cityItem ${selectedCity === city ? 'selected' : ''}`}
                                        onClick={() => handleCitySelect(city)}
                                    >
                                        {city}
                                        {selectedCity === city && <div className='cityCheck'>✓</div>}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Right: Login */}
            <div className='actions'>
                <Link to='/login' className='loginBtn'>
                    <UserIcon />
                    Login
                </Link>

                {/* Mobile Toggle (hidden on desktop) */}
                <button className='mobileToggle' aria-label='Menu'>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
};

export default UpperHeader;
