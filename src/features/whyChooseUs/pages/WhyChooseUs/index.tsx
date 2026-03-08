import { connect } from 'react-redux';
import '../css/styles.scss';
import { getSlides } from '@/features/slider/store/actions';
import type { RootState } from '@/store/store';
import WhyChooseUs from './components/WhyChooseUs';

const WhyChooseUsContainer = (props: any) => {
    return <WhyChooseUs {...props} />;
};

const mapStateToProps = (state: RootState) => ({
    slides: state.slider?.slides ?? [],
    slidesLoading: state.slider?.slidesLoading ?? false,
});

const mapDispatchToProps = {
    getSlides,
};

export default connect(mapStateToProps, mapDispatchToProps)(WhyChooseUsContainer);