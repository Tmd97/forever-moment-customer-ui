import { connect } from 'react-redux';
import type { RootState } from '@/store/store';
import CategoryListView from './components/CategoryListView';

const mapStateToProps = (state: RootState) => ({
    categories: state.header?.categories ?? [],
});

export default connect(mapStateToProps)(CategoryListView);