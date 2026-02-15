const slides = [
    {
        id: 1,
        category: 'Birthday',
        title: 'Make Every Birthday Magical',
        subtitle: 'Stunning decorations, custom cakes & unforgettable celebrations',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Explore Birthday',
        link: '/category/birthday',
    },
    {
        id: 2,
        category: 'Anniversary',
        title: 'Celebrate Your Love Story',
        subtitle: 'Romantic setups, surprise planning & curated gift hampers',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Plan Anniversary',
        link: '/category/anniversary',
    },
    {
        id: 3,
        category: 'Wedding',
        title: 'Your Dream Wedding Awaits',
        subtitle: 'Grand venue décor, bridal entries & designer stage setups',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Explore Wedding',
        link: '/category/wedding',
    },
    {
        id: 4,
        category: 'Gifts',
        title: 'Gifts That Speak From The Heart',
        subtitle: 'Personalized gifts, premium bouquets & artisan chocolates',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238f7e4?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Browse Gifts',
        link: '/category/gifts',
    },
    {
        id: 5,
        category: 'Festivals',
        title: 'Festivals, Lit Like Never Before',
        subtitle: 'Diwali lights, Holi colors, Christmas magic & more',
        image: 'https://images.unsplash.com/photo-1574265935856-ef56e422e939?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Explore Festivals',
        link: '/category/festivals',
    },
    {
        id: 6,
        category: 'Candlelight Dinner',
        title: 'An Evening To Remember',
        subtitle: 'Rooftop dining, garden setups & intimate home experiences',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&h=1080&fit=crop&crop=center&q=85',
        cta: 'Book a Dinner',
        link: '/category/candlelight-dinner',
    },
];

export const fetchSlides = async () => {
    // Simulating API delay
    return new Promise((resolve) => {
        setTimeout(() => resolve(slides), 300);
    });
};
