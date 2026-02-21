import { connect } from 'react-redux';
import { getSlides } from '@/features/slider/store/actions';
import type { RootState } from '@/store/store';
import FeaturedPackagesCarousel from './components/PackageCrousel';

const mapStateToProps = (state: RootState) => ({
    slides: state.slider?.slides ?? [],
    slidesLoading: state.slider?.slidesLoading ?? false,
});

const mapDispatchToProps = {
    getSlides,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPackagesCarousel);
