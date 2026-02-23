import { Outlet } from 'react-router-dom';
import Header from '@/features/header/pages/HeaderPage';
import Footer from '@/components/navigation/footer';

const CustomerLayout = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col'>
       {/* HEADER OUTSIDE FLOW */}
      <div className="fixed top-0 left-0 w-full z-[9999]">
        <Header />
      </div>

      {/* CONTENT WITH TOP SPACE */}
      <main className="pt-[100px] relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
