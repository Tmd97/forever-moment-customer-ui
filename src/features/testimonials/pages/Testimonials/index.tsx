import { connect } from 'react-redux';
import '../css/styles.scss';
import TestimonialsView from './components/TestimonialsView';
import type { RootState } from '@/store/store';

const mapStateToProps = (state: RootState) => ({
    // Add mapping for dynamic testimonials if implemented in Redux later
});

export default connect(mapStateToProps)(TestimonialsView);
