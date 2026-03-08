import { connect } from 'react-redux';
import '../css/styles.scss';
import BeforeAfterView from './components/BeforeAfterSlide'; // Keeping original component name as View for now
import type { RootState } from '@/store/store';

const BeforeAfterContainer = () => {
    return <BeforeAfterView />;
};

const mapStateToProps = (state: RootState) => ({
    // Map data from state here when integrated with Redux
});

export default connect(mapStateToProps)(BeforeAfterContainer);
