import React from 'react';
import {
    CakeIcon,
    HeartIcon,
    RingsIcon,
    GiftIcon,
    SparklesIcon,
    CandleIcon,
    StarIcon,
} from './HeaderIcons';

export const iconMap: Record<string, React.ReactNode> = {
    'Birthday': <CakeIcon />,
    'Anniversary': <HeartIcon />,
    'Wedding': <RingsIcon />,
    'Gifts': <GiftIcon />,
    'Festivals': <SparklesIcon />,
    'Candlelight Dinner': <CandleIcon />,
    'Decorations': <SparklesIcon />,
    "Kid's Celebration": <StarIcon />,
};

export const defaultIcon = <StarIcon />;

export const dummySubcategories: Record<string, { name: string; description: string; price?: string }[]> = {
    'Birthday': [
        { name: 'Balloon Decoration', description: 'Vibrant balloon arches & walls', price: '₹2,999' },
        { name: 'Theme Party Setup', description: 'Complete themed party packages', price: '₹7,499' },
        { name: 'Birthday Cake', description: 'Custom designer cakes', price: '₹1,499' },
        { name: 'Party Props & Costumes', description: 'Fun photo props & outfits', price: '₹999' },
    ],
    'Anniversary': [
        { name: 'Room Decoration', description: 'Romantic room setup with flowers', price: '₹4,999' },
        { name: 'Couple Photoshoot', description: 'Professional photography session', price: '₹3,999' },
        { name: 'Surprise Planning', description: 'Custom surprise experiences', price: '₹5,999' },
        { name: 'Gift Hamper', description: 'Curated luxury gift boxes', price: '₹2,499' },
    ],
    'Wedding': [
        { name: 'Venue Decoration', description: 'Grand wedding venue styling', price: '₹49,999' },
        { name: 'Bridal Entry', description: 'Stunning bridal entry setups', price: '₹14,999' },
        { name: 'Stage Decoration', description: 'Designer stage & mandap', price: '₹29,999' },
        { name: 'Car Decoration', description: 'Wedding car floral decor', price: '₹4,999' },
    ],
    'Gifts': [
        { name: 'Personalized Gifts', description: 'Custom engraved & printed items', price: '₹799' },
        { name: 'Flower Bouquets', description: 'Fresh premium arrangements', price: '₹1,299' },
        { name: 'Chocolate Boxes', description: 'Handcrafted artisan chocolates', price: '₹999' },
        { name: 'Experience Gifts', description: 'Adventure & spa vouchers', price: '₹2,999' },
    ],
    'Festivals': [
        { name: 'Diwali Decoration', description: 'Lights, rangoli & lanterns', price: '₹3,499' },
        { name: 'Holi Party Setup', description: 'Colorful celebration packages', price: '₹4,999' },
        { name: 'Christmas Decor', description: 'Trees, wreaths & ornaments', price: '₹2,999' },
        { name: 'New Year Party', description: 'Countdown celebration setup', price: '₹6,999' },
    ],
    'Candlelight Dinner': [
        { name: 'Rooftop Dinner', description: 'Private dining under the stars', price: '₹5,999' },
        { name: 'Garden Setup', description: 'Fairy-lit garden table for two', price: '₹4,499' },
        { name: 'Poolside Dinner', description: 'Candles & floating flowers', price: '₹6,499' },
        { name: 'Home Setup', description: 'Transform your home into a bistro', price: '₹3,499' },
    ],
    'Decorations': [
        { name: 'Floral Decoration', description: 'Premium flower arrangements', price: '₹5,999' },
        { name: 'Balloon Decoration', description: 'Balloon arches, walls & more', price: '₹2,999' },
        { name: 'LED & Lights', description: 'Fairy lights & neon signage', price: '₹1,999' },
        { name: 'Themed Decor', description: 'Customized theme decorations', price: '₹8,999' },
    ],
    "Kid's Celebration": [
        { name: 'Kids Party', description: 'Fun games & entertainment', price: '₹6,999' },
        { name: 'Character Theme', description: 'Superhero, princess & cartoon', price: '₹9,999' },
        { name: 'Magic Show', description: 'Professional magician booking', price: '₹3,999' },
        { name: 'Puppet Show', description: 'Interactive puppet performances', price: '₹2,999' },
    ],
};

export const dummyCities = [
    'Vizag',
    'Hyderabad',
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Kolkata',
    'Pune',
];
