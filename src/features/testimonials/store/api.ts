const API_BASE = import.meta.env.VITE_API_URL || '/api/platform';

export const fetchTestimonials = async () => {
    const response = await fetch(`${API_BASE}/public/testimonials`);
    if (!response.ok) {
        throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};
