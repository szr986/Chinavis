var myEcharts = echarts.init(document.getElementById('supermarket_city'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民线下超市消费趋势',
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
        data: ['疫情结束1个月内', '疫情结束1-3个月', '疫情结束3个月后']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '整体',
            type: 'line',
            data: [-0.42, -0.29, -0.11]
        },
        {
            name: '一线',
            type: 'line',
            data: [-0.39, -0.29, -0.13]
        },
        {
            name: '新一线',
            type: 'line',
            data: [-0.42, -0.28, -0.10]
        },
        {
            name: '二线',
            type: 'line',
            data: [-0.41, -0.25, -0.06]
        },
        {
            name: '三线',
            type: 'line',
            data: [-0.44, -0.32, -0.11]
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [-0.50, -0.34, -0.12]
        }
    ]
});
