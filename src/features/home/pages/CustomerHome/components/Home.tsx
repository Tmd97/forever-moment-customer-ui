import { useEffect } from 'react';
import Slider from '@/features/slider/pages/SliderPage';

interface HomeProps {
    data: any;
    loading: boolean;
    error: string | null;
    getHomeData: () => void;
}

const Home = ({ data, loading, error, getHomeData }: HomeProps) => {
    useEffect(() => {
        getHomeData();
    }, [getHomeData]);

    if (loading) {
        return (
            <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
                <p className='text-gray-500'>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
                <p className='text-red-500'>Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <Slider />
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
                {data?.message || 'Welcome'}
            </h1>
        </div>
    );
};

export default Home;
