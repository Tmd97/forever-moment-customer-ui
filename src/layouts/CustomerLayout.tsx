import { Outlet } from 'react-router-dom';
import Header from '@/features/header/pages/HeaderPage';
import Footer from '@/components/navigation/footer';

const CustomerLayout = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
