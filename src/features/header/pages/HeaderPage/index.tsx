import { connect } from 'react-redux';
import { toggleMenu, setSearchQuery, getCategories } from '@/features/header/store/actions';
import Header from './components/Header';
import type { RootState } from '@/store/store';

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
