var myEcharts = echarts.init(document.getElementById('education_city'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民在线教育时长趋势',
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
            data: [0.12, -0.05, -0.05, -0.05]
        },
        {
            name: '一线',
            type: 'line',
            data: [0.13, -0.01, -0.03, -0.01]
        },
        {
            name: '新一线',
            type: 'line',
            data: [0.11, -0.03, -0.02, 0.00]
        },
        {
            name: '二线',
            type: 'line',
            data: [0.16, 0.03, -0.02, -0.06]
        },
        {
            name: '三线',
            type: 'line',
            data: [0.09, -0.13, -0.13, -0.14]
        },
        {
            name: '四线及以下',
            type: 'line',
            data: [0.08, -0.20, -0.16, -0.12]
        }
    ]
});
