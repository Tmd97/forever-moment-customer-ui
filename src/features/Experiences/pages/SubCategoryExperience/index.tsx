import { connect } from 'react-redux';
import { getSubCategoryExperiences } from '../../store/actions';
import type { RootState } from '@/store/store';
import SubCategoryExperienceView from './components/SubCategoryExperienceView';

const mapStateToProps = (state: RootState) => ({
    experiences: state.experiences.subCategoryData,
    loading: state.experiences.loading,
});

const mapDispatchToProps = {
    getSubCategoryExperiences,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryExperienceView);
