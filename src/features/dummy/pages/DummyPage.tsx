import { Link } from 'react-router-dom';

const DummyPage = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Dummy Page with Full Header
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                This page demonstrates that the standard <strong>Customer Layout</strong> is used,
                meaning both the Sticky Upper Header and the Navigation Menu (Lower Header) should be visible.
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 inline-block">
                <p className="font-mono text-sm text-blue-600 dark:text-blue-300 mb-4">
                    Current Layout: Standard Customer Layout
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default DummyPage;
