import { connect } from 'react-redux';
import { getSlides } from '@/features/slider/store/actions';
import Slider from './components/Slider';
import type { RootState } from '@/store/store';

const mapStateToProps = (state: RootState) => ({
    slides: state.slider?.slides ?? [],
    slidesLoading: state.slider?.slidesLoading ?? false,
});

const mapDispatchToProps = {
    getSlides,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
