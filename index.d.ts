/**
 * 微信小程序JavaScriptSDK
 *
 * @version 1.2
 * @date 2019-03-06
 */
declare class QQMapWX {
    key: any;
    /**
     * 构造函数
     *
     * @param {Object} options 接口参数,key 为必选参数
     */
    constructor(options: any);
    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */
    search(options: any): void;
    /**
     * sug模糊检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-suggestion.html
     */
    getSuggestion(options: any): void;
    /**
     * 逆地址解析
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-gcoder.html
     */
    reverseGeocoder(options: any): void;
    /**
     * 地址解析
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-geocoder.html
     */
    geocoder(options: any): void;
    /**
     * 获取城市列表
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    getCityList(options: any): void;
    /**
     * 获取对应城市ID的区县列表
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    getDistrictByCityId(options: any): void;
    /**
     * 用于单起点到多终点的路线距离(非直线距离)计算：
     * 支持两种距离计算方式：步行和驾车。
     * 起点到终点最大限制直线距离10公里。
     *
     * 新增直线距离计算。
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-distance.html
     */
    calculateDistance(options: any): void;
    /**
     * 路线规划：
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * https://lbs.qq.com/webservice_v1/guide-road.html
     */
    direction(options: any): void;
}
export default QQMapWX;
