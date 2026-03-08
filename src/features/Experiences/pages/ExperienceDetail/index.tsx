import { connect } from 'react-redux';
import { getExperienceDetail } from '@/features/experiences/store/actions';
import type { RootState } from '@/store/store';
import ExperienceDetails from './components/ExperienceView';
import '../css/styles.scss';

const mapStateToProps = (state: RootState) => ({
    experience: state.experiences?.currentExperience,
    loading: state.experiences?.loading ?? false,
    error: state.experiences?.error ?? null,
});

const mapDispatchToProps = {
    getExperienceDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceDetails);
