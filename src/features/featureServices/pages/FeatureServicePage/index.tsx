import { connect } from 'react-redux';
import './css/styles.scss';
import { toggleMenu, setSearchQuery, getCategories } from '@/features/header/store/actions';
import type { RootState } from '@/store/store';
import FeaturedServices from './components/FeatureServices';

const mapStateToProps = (state: RootState) => ({
    isMenuOpen: state.header?.isMenuOpen,
    searchQuery: state.header?.searchQuery,
    categories: state.header?.categories ?? [],
    categoriesLoading: state.header?.categoriesLoading ?? false,
    categoriesError: state.header?.categoriesError ?? null,
});

const mapDispatchToProps = {
    toggleMenu,
    setSearchQuery,
    getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedServices);
