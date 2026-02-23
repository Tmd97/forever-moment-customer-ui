import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CUSTOMER_CONFIG } from '@/config/constants';
import {
  SearchIcon,
  LocationIcon,
  ChevronIcon,
  MenuIcon,
} from './HeaderIcons';
import { dummyCities } from './HeaderData';

interface UpperHeaderProps {
  showLocationDropdown: boolean;
  setShowLocationDropdown: (show: boolean) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;

  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const UpperHeader = ({
  showLocationDropdown,
  setShowLocationDropdown,
  selectedCity,
  setSelectedCity,
  mobileMenuOpen,
  setMobileMenuOpen,
}: UpperHeaderProps) => {
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowLocationDropdown]);

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setShowLocationDropdown(false);
  };

  return (
    <div
      className="w-full
      bg-gradient-to-r from-[#fff9ec] via-[#fbeed7] to-[#fff9ec]
      border-b border-[#d4af37]/30
      px-3 sm:px-6 lg:px-14 py-2
      flex items-center justify-between gap-3
      relative z-50
      shadow-[0_6px_25px_rgba(212,175,55,0.12)]"
    >
      {/* LEFT BRAND */}
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img
          src={CUSTOMER_CONFIG.logo}
          alt={CUSTOMER_CONFIG.name}
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
        />
        <div className="hidden sm:flex flex-col">
          <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#b76e79] to-[#c9a96e] bg-clip-text text-transparent tracking-wide">
            {CUSTOMER_CONFIG.name}
          </span>
          <span className="text-xs text-gray-500 tracking-widest">
            Celebrate Every Moment
          </span>
        </div>
      </Link>

      {/* CENTER SEARCH */}
      <div className="flex flex-1 justify-center">
        <div
          className="w-full
          max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-xl
          flex items-center bg-white rounded-full
          px-3 sm:px-4 py-1
          shadow-md border border-[#b76e7925]
          focus-within:ring-2 focus-within:ring-[#b76e79]
          transition-all duration-300"
        >
          {/* Search Input */}
          <div className="flex items-center gap-2 flex-1">
            <div className="w-4 h-4 text-[#b76e79]">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-xs sm:text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-[#b76e7925] mx-2 sm:mx-3" />

          {/* Location Dropdown */}
          <div className="relative" ref={locationRef}>
            <button
              onClick={toggleLocationDropdown}
              className={`flex items-center gap-1 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-all duration-300 ${
                showLocationDropdown
                  ? 'bg-gradient-to-r from-[#b76e79] to-[#c9a96e] text-white shadow-md'
                  : 'text-gray-700 hover:bg-[#b76e7910]'
              }`}
            >
              <div className="w-4 h-4 text-[#b76e79]">
                <LocationIcon />
              </div>

              {/* Hide city name on very small screens */}
              <span className="hidden sm:block">{selectedCity}</span>

              <div className="w-4 h-4">
                <ChevronIcon />
              </div>
            </button>

            {showLocationDropdown && (
              <ul className="absolute right-0 mt-4 w-48 bg-white border border-[#b76e7925] rounded-xl shadow-xl p-2 space-y-1 z-50">
                {dummyCities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition ${
                      selectedCity === city
                        ? 'bg-gradient-to-r from-[#b76e79] to-[#c9a96e] text-white font-medium'
                        : 'text-gray-700 hover:bg-[#b76e7910]'
                    }`}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-6 shrink-0">
        {/* Help Center (hidden on mobile) */}
        <Link
          to="/help"
          className="hidden sm:block text-sm font-medium text-gray-700 hover:text-[#b76e79] transition"
        >
          Help Center
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full
          bg-gradient-to-r from-[#b76e79] to-[#c9a96e]
          text-white shadow-md hover:shadow-lg
          hover:scale-[1.03] transition-all duration-300"
        >
          Login
        </Link>

     <button
  onClick={() => setMobileMenuOpen(true)}
  className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md 
  bg-white border border-[#d4af37]/40 
  shadow-sm hover:shadow-md 
  transition-all duration-200"
>
  <span className="w-5 h-5 text-[#b76e79] [&>svg]:w-5 [&>svg]:h-5">
    <MenuIcon />
  </span>
</button>
      </div>
    </div>
  );
};

export default UpperHeader;