import { connect } from 'react-redux';
import '../css/styles.scss';
import PackageView from './components/PackageView';
import type { RootState } from '@/store/store';

const PackageContainer = () => {
    return <PackageView />;
};

const mapStateToProps = (state: RootState) => ({
    // Map packages from state here when integrated with Redux
});

export default connect(mapStateToProps)(PackageContainer);