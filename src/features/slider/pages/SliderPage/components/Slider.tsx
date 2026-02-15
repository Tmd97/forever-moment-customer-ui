import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../../css/styles.scss';

/* ─── SVG Icons ─── */
const ChevronLeftIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='m15 18-6-6 6-6' />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='m9 18 6-6-6-6' />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M5 12h14' />
        <path d='m12 5 7 7-7 7' />
    </svg>
);

/* ─── Gradient fallbacks for categories without images ─── */
const gradientMap: Record<string, string> = {
    'Birthday': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'Anniversary': 'linear-gradient(135deg, #c3413e 0%, #8b1a1a 50%, #d4a574 100%)',
    'Wedding': 'linear-gradient(135deg, #f5f7fa 0%, #d4af37 50%, #b76e79 100%)',
    'Gifts': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 50%, #c9a96e 100%)',
    'Festivals': 'linear-gradient(135deg, #f093fb 0%, #feda75 50%, #fa7e1e 100%)',
    'Candlelight Dinner': 'linear-gradient(135deg, #2d1b00 0%, #8b4513 50%, #d4a574 100%)',
};

const AUTOPLAY_INTERVAL = 5000;

/* ─── Slider Component ─── */
interface SliderProps {
    slides: any[];
    slidesLoading: boolean;
    getSlides: () => void;
}

const Slider = ({ slides, getSlides }: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Touch swipe state
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        getSlides();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning]);

    const goNext = useCallback(() => {
        if (slides.length === 0) return;
        goToSlide((currentIndex + 1) % slides.length);
    }, [currentIndex, slides.length, goToSlide]);

    const goPrev = useCallback(() => {
        if (slides.length === 0) return;
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }, [currentIndex, slides.length, goToSlide]);

    // Autoplay
    useEffect(() => {
        if (isPaused || slides.length <= 1) return;
        intervalRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, goNext, slides.length]);

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].screenX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    const handleImageError = (slideId: number) => {
        setImageErrors((prev) => new Set(prev).add(slideId));
    };

    if (slides.length === 0) return null;

    return (
        <section
            className='slider'
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ── Slides ── */}
            <div className='slidesContainer'>
                {slides.map((slide: any, index: number) => {
                    const hasImageError = imageErrors.has(slide.id);
                    const showGradient = hasImageError || !slide.image;
                    const gradient = gradientMap[slide.category] || 'linear-gradient(135deg, #667eea, #764ba2)';

                    return (
                        <div
                            key={slide.id}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={showGradient ? { background: gradient } : undefined}
                        >
                            {!showGradient && (
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className='slideImage'
                                    onError={() => handleImageError(slide.id)}
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                />
                            )}
                            <div className='slideOverlay' />
                            <div className='slideContent'>
                                <span className='slideBadge'>{slide.category}</span>
                                <h2 className='slideTitle'>{slide.title}</h2>
                                <p className='slideSubtitle'>{slide.subtitle}</p>
                                <Link to={slide.link} className='slideCta'>
                                    {slide.cta}
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── Navigation Arrows ── */}
            <button className='sliderArrow sliderArrowLeft' onClick={goPrev} aria-label='Previous slide'>
                <ChevronLeftIcon />
            </button>
            <button className='sliderArrow sliderArrowRight' onClick={goNext} aria-label='Next slide'>
                <ChevronRightIcon />
            </button>

            {/* ── Dots Navigation ── */}
            <div className='sliderDots'>
                {slides.map((_: any, index: number) => (
                    <button
                        key={index}
                        className={`sliderDot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* ── Progress Bar ── */}
            <div className='sliderProgress'>
                <div
                    className={`sliderProgressBar ${!isPaused ? 'animating' : ''}`}
                    key={currentIndex}
                />
            </div>
        </section>
    );
};

export default Slider;
