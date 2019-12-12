import request from '@/services/request.service';
const useWaterManageApi = {
    getUserResources() {
        return request.get('/mock/getUserResources.json');
    }
};
export default useWaterManageApi;
