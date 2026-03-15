const API_BASE = import.meta.env.VITE_API_URL || '/api/platform';

export const fetchFeaturedExperiences = async () => {
    const response = await fetch(`${API_BASE}/public/experiences/featured`);
    if (!response.ok) {
        throw new Error(`Failed to fetch featured experiences: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};

export const fetchLocations = async () => {
    const response = await fetch(`${API_BASE}/public/locations`);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};
