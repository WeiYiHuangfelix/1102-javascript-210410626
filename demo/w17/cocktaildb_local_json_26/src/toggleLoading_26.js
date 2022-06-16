import get from './getElement.js';

const loading = get('.loading');
// 匯出
export const showLoading = () => {
    loading.classList.remove('hide-loading');
};

export const hideLoading = () => {
    loading.classList.add('hide-loading');
};