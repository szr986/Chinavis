var myEcharts = echarts.init(document.getElementById('Store_city'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民百货商场消费趋势',
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
            data: [-0.46, -0.32, -0.14]
        },
        {
            name: '一线',
            type: 'line',
            data: [-0.43, -0.31, -0.14]
        },
        {
            name: '新一线',
            type: 'line',
            data: [-0.47, -0.33, -0.14]
        },
        {
            name: '二线',
            type: 'line',
            data: [-0.44, -0.29, -0.11]
        },
        {
            name: '三线',
            type: 'line',
            data: [-0.51, -0.36, -0.16]
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [-0.52, -0.36, -0.15]
        }
    ]
});
