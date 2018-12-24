const cityMap = [
    '杭州市',
    '宁波市',
    '温州市',
    '嘉兴市',
    '湖州市',
    '绍兴市',
    '金华市',
    '衢州市',
    '舟山市',
    '台州市',
    '丽水市',
    '省传输局',
    '信产公司',
    '省本部'
];
const categoryCount = [
    '通信机房用电量',
    'IDC机房用电量',
    '无线基站用电量',
    '接入点用电量',
    '办公营销和其他电量'
];
const categoryCost = [
    '通信机房电费',
    'IDC机房电费',
    '无线基站电费',
    '接入点电费',
    '办公营销和其他电费'
];
const topImpData = [
    { title: '能源费占收入比排名', subtitle: '(当前累计)', leg1: '能源费', leg2: '收入' },
    { title: '能源费占付现成本比排名', subtitle: '(当前累计)', leg1: '能源费', leg2: '付现成本' },
    { title: 'IDC机房电费与收入比Top10', subtitle: '(当前累计)', leg1: 'IDC机房电费', leg2: '收入' },
    { title: 'IDC客户电费与收入比Top10', subtitle: '(当前累计)', leg1: 'IDC客户电费', leg2: '收入' },
    { title: '实际能耗费波动Top10', leg1: '本月', leg2: '上月' }
];
const detailXarr = ['定额线', '大工业用电', '一般工商', '居民生活用电', '不明'];
const tableTh = [
    '序号',
    '异常指标', '异常说明', '异常统计规则', '异常月份', '累计规则', '异常数量',
    '省本部',
    '杭州市',
    '宁波市',
    '温州市',
    '嘉兴市',
    '湖州市',
    '绍兴市',
    '金华市',
    '衢州市',
    '丽水市',
    '台州市',
    '舟山市',
    '传输局',
    // '互网与号百',
    '信产公司'
];
const tableThCurrent = [
    '序号',
    '异常指标', '异常说明', '异常统计规则', '异常数量',
    '杭州市',
    '宁波市',
    '温州市',
    '嘉兴市',
    '湖州市',
    '绍兴市',
    '金华市',
    '衢州市',
    '丽水市',
    '台州市',
    '舟山市',
    '传输局',
    // '互网与号百',
    '信产公司',
    '省本部'

];
const tableTd = [
    // ['合同电价异常', '合同电价<0.3或>2', '当月合同电价异常的站点数'],
    ['总电量异常', '总电量<0', '当月发生报账且报账总电量异常的站点数'],
    ['单表电费异常', '单表电费超过同期50%', '当月相比上年同期电表电费异常的电表数'],
    // ['单表电量异常', '单表电量超过同期50%', '当月相比上年同期电表电量异常的电表数'],
    ['单表平均电价异常', '单表平均电价<0.3或>2', '当月平均电价异常的电表数'],
    ['PUE异常站点', 'PUE<1或>3', '当月PUE值异常的站点数']
];
const topData = [

];
// 配置需要缩放显示的区县名称
const labelZoom = {
    '杭州': ['拱墅区', '下城区', '上城区', '滨江区', '下沙区'],
    '宁波': ['江东区', '镇海区'],
    '绍兴': ['越城区'],
    controlArr: ['拱墅区', '下城区', '上城区', '滨江区', '下沙区', '江东区', '镇海区', '越城区']
};
// 配置各个地市的区县对应到市本级的数据---只针对大网综合和IDC电耗图表
const centerCityPart = {
    '杭州市': ['拱墅区', '下城区', '上城区', '滨江区', '西湖区', '江干区', '下沙区'],
    '嘉兴市': ['南湖区', '秀洲区'],
    '绍兴市': ['越城区'],
    '宁波市': ['江东区'],
    '衢州市': ['柯城区', '衢江区'],
    '丽水市': ['南城区', '莲都区'],
    '温州市': [],
    '湖州市': [],
    '金华市': [],
    '台州市': [],
    '舟山市': []
};
export {
    cityMap,
    categoryCount,
    categoryCost,
    detailXarr,
    tableTh,
    tableThCurrent,
    tableTd,
    topImpData,
    labelZoom,
    centerCityPart
};