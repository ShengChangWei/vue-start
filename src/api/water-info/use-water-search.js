import request from '../services/request.service';
const useWaterSearchApi = {
    getUserResources() {
        return request.get('/mock/getUserResources.json');
    }
};
export default useWaterSearchApi;
