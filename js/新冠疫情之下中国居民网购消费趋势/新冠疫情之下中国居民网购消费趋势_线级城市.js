var myEcharts = echarts.init(document.getElementById('online_shopping_city'));

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
        data: ['整体','一线','新一线','二线','三线','四线及以下'],
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
            name: '一线',
            type: 'line',
            data: [-0.15, -0.23, -0.15, -0.05]
        },
        {
            name: '新一线',
            type: 'line',
            data: [-0.20, -0.24, -0.13, -0.01]
        },
        {
            name: '二线',
            type: 'line',
            data: [-0.25, -0.26, -0.15, 0.01]
        },
        {
            name: '三线',
            type: 'line',
            data: [-0.28, -0.24, -0.17, -0.25]
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [-0.38, -0.31, -0.19, 0.00]
        }
    ]
});
