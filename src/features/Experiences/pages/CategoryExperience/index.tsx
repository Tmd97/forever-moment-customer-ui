import { connect } from 'react-redux';
import { getData } from '../../store/actions';
import type { RootState } from '@/store/store';
import CategoryExperienceView from './components/CategoryExperienceView';

const mapStateToProps = (state: RootState) => ({
    experiences: state.experiences.data,
    loading: state.experiences.loading,
});

const mapDispatchToProps = {
    getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryExperienceView);
