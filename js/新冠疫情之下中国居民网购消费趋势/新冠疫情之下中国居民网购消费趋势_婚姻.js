var myEcharts = echarts.init(document.getElementById('online_shopping_marriage'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民网购消费趋势',
    //     top:'1%',
    //     left:'center'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['整体','未婚','已婚未育','已婚已育'],
        // top:'5%',
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
    },
    grid: {
        left: '3%',
        right: '14%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['疫情期间', '疫情结束1个月内', '疫情结束1-3个月', '疫情结束3个月后']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '整体',
            type: 'line',
            data: [-0.22, -0.25, -0.15, -0.02]
        },
        {
            name: '未婚',
            type: 'line',
            data: [-0.23, -0.25, -0.17, -0.05]
        },
        {
            name: '已婚未育',
            type: 'line',
            data: [-0.24, -0.27, -0.19, -0.03]
        },
        {
            name: '已婚已育',
            type: 'line',
            data: [-0.22, -0.24, -0.14, -0.01]
        }
    ]
});
