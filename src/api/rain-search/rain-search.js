import request from '@/services/request.service';
const rainSearchService = {
    getUserResources() {
        return request.get('/mock/getUserResources.json');
    }
};
export default rainSearchService;
