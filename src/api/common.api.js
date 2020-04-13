import request from '@/services/request.service';

const commonApi = {
    /**
   * 获取当前用户菜单
   * @returns {Observable<any>}
   */
    getUserMenus(projectId) {
        return request.get(`/portal/subsystem/myResourceTree/${projectId}`);
    },

    /**
       * 当前当前用户资源
       * @returns {Observable<ServerData>}
       */
    getUserResources() {
        return request.get('/mock/getUserResources.json');
    }
};

export default commonApi;
