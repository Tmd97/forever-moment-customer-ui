import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CUSTOMER_CONFIG } from '@/config/constants';
import {
  SearchIcon,
  MenuIcon,
} from './HeaderIcons';


interface UpperHeaderProps {
  showLocationDropdown: boolean;
  setShowLocationDropdown: (show: boolean) => void;
  locations: any[];
  selectedCity: string;
  setSelectedCity: (city: string) => void;

  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const UpperHeader = ({
  showLocationDropdown,
  setShowLocationDropdown,
  locations,
  selectedCity,
  setSelectedCity,
  // mobileMenuOpen,
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
      className="w-full px-3 sm:px-6 lg:px-14 py-2 flex items-center justify-between gap-3 relative z-50"
      style={{
        background: 'rgba(253,246,238,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-light)',
        height: 72,
      }}
    >
      {/* LEFT BRAND */}
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img
          src={CUSTOMER_CONFIG.logo}
          alt={CUSTOMER_CONFIG.name}
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
        />
        <div className="hidden sm:flex flex-col">
          <span
            className="text-lg font-semibold tracking-wide"
            style={{ color: 'var(--burgundy)', fontFamily: "'Cormorant Garamond', serif" }}
          >
            {CUSTOMER_CONFIG.name}
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--mid)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            Celebrate Every Moment
          </span>
        </div>
      </Link>

      {/* CENTER SEARCH */}
      <div className="flex flex-1 justify-center">
        <div className="input-search max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-xl">
          {/* Search Input */}
          <div className="flex items-center gap-2 flex-1">
            <span style={{ color: 'var(--gold)' }}><SearchIcon /></span>
            <input
              type="text"
              placeholder="Search experiences, venues, decorations…"
              className="w-full bg-transparent outline-none text-xs sm:text-sm placeholder-gray-400"
              style={{ color: 'var(--charcoal)', fontFamily: "'Jost', sans-serif" }}
            />
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-[var(--primary-light)] mx-2 sm:mx-3 opacity-50" />

          {/* Location Dropdown */}
          <div className="relative" ref={locationRef}>
            <button
              onClick={toggleLocationDropdown}
              className="location-pill"
            >
              📍
              <span className="hidden sm:block">{selectedCity}</span>
              ▾
            </button>

            {showLocationDropdown && (
              <ul className="absolute right-0 mt-3 w-48 bg-[var(--bg-white)] border border-[var(--border-light)] rounded-xl shadow-[var(--shadow-soft)] p-2 space-y-1 z-50">
                {locations.filter((loc: any) => loc.isActive).map((loc: any) => (
                  <li
                    key={loc.id || loc.name}
                    onClick={() => handleCitySelect(loc.name)}
                    className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition ${selectedCity === loc.name
                        ? 'font-medium'
                        : ''
                      }`}
                    style={{
                      background: selectedCity === loc.name ? 'var(--burgundy)' : 'transparent',
                      color: selectedCity === loc.name ? 'white' : 'var(--charcoal)',
                    }}
                  >
                    {loc.name}
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
        {/* <Link
          to="/help"
          className="hidden sm:block text-sm font-medium text-[var(--text-main)] hover:text-[var(--primary)] transition"
        >
          Help Center
        </Link> */}

        {/* Login Button */}
        <Link
          to="/login"
          className="btn-primary !px-5 !py-2 text-sm"
        >
          Login
        </Link>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden btn-icon !w-9 !h-9 !rounded-md"
        >
          <span className="w-5 h-5 text-[var(--primary)]">
            <MenuIcon />
          </span>
        </button>

      </div>
    </div>
  );
};

export default UpperHeader;