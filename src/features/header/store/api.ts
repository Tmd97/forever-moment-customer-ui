const API_BASE = import.meta.env.VITE_API_URL || '/api/platform';

export const fetchCategories = async () => {
    const response = await fetch(`${API_BASE}/public/categories`);
    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};
