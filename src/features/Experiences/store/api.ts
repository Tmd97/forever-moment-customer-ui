// Base API template
const API_BASE = '/api';

export const fetchData = async () => {
    const response = await fetch(`${API_BASE}/public/experiences`);
    if (!response.ok) {
        throw new Error(`Failed to fetch experiences: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};

export const fetchExperienceDetail = async (id: string | number) => {
    const response = await fetch(`${API_BASE}/public/experiences/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch experience detail: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};

export const fetchSubCategoryExperiences = async (subCategoryId: string | number) => {
    const response = await fetch(`${API_BASE}/public/experiences/subcategory/${subCategoryId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch sub-category experiences: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
};
