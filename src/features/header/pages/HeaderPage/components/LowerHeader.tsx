import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronIcon, ArrowRightIcon, StarIcon } from './HeaderIcons';
import { iconMap, defaultIcon, dummySubcategories } from './HeaderData';
import '../../css/styles.scss';

interface LowerHeaderProps {
    categories: any[];
}

const LowerHeader = ({ categories }: LowerHeaderProps) => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (catId: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(catId);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    // Filter active categories and sort by displayOrder
    const activeCategories = categories
        .filter((cat) => cat.isActive)
        .sort((a, b) => a.displayOrder - b.displayOrder);

    return (
        <div className='bottomRow'>
            <nav className='nav'>
                {activeCategories.map((cat) => {
                    const subcategories = dummySubcategories[cat.name] || [];
                    const isOpen = activeDropdown === cat.id;

                    return (
                        <div
                            key={cat.id}
                            className='navItem'
                            onMouseEnter={() => handleMouseEnter(cat.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to={`/category/${cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`navLink ${isOpen ? 'active' : ''}`}
                            >
                                {iconMap[cat.name] || defaultIcon}
                                {cat.name}
                                {subcategories.length > 0 && <ChevronIcon />}
                            </Link>

                            {/* ── Dropdown Panel ── */}
                            {subcategories.length > 0 && (
                                <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                                    <div className='dropdownInner'>
                                        <div className='dropdownHeader'>
                                            <span className='dropdownIcon'>
                                                {iconMap[cat.name] || defaultIcon}
                                            </span>
                                            <div>
                                                <h3 className='dropdownTitle'>{cat.name}</h3>
                                                <p className='dropdownDesc'>{cat.description}</p>
                                            </div>
                                        </div>
                                        <div className='dropdownDivider' />
                                        <ul className='dropdownList'>
                                            {subcategories.map((sub, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className='dropdownItem'
                                                    >
                                                        <div className='dropdownItemInfo'>
                                                            <span className='dropdownItemName'>{sub.name}</span>
                                                            <span className='dropdownItemDesc'>{sub.description}</span>
                                                        </div>
                                                        {sub.price && (
                                                            <span className='dropdownItemPrice'>{sub.price}</span>
                                                        )}
                                                        <span className='dropdownItemArrow'>
                                                            <ArrowRightIcon />
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='dropdownFooter'>
                                            <Link
                                                to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                className='dropdownViewAll'
                                            >
                                                View All {cat.name}
                                                <ArrowRightIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
};

export default LowerHeader;
