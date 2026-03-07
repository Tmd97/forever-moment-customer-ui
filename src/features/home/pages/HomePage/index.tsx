import { connect } from 'react-redux';
import './css/styles.scss';
import { getHomeData } from '@/features/home/store/actions';
import Home from './components/HomeView';
import type { RootState } from '@/store/store';

const mapStateToProps = (state: RootState) => ({
  data: state.home.data,
  loading: state.home.loading,
  error: state.home.error,
});

const mapDispatchToProps = {
  getHomeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
