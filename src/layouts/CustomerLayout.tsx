import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/features/header/pages/Header';
import Footer from '@/components/navigation/footer';
import FloatingBookingCTA from '@/components/FloatingBookingCTA/FloatingBooking';

const CustomerLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col'>
      {/* Header manages its own fixed positioning internally */}
      <Header />

      {/* CONTENT */}
      <main className="relative z-0">
        <Outlet />
        <FloatingBookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
