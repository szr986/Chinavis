var myEcharts = echarts.init(document.getElementById('medical_treatment_age'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民在线医疗使用趋势',
    //     top:'1%',
    //     left:'center'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['整体','30岁及以下','31-40岁','41岁及以上'],
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
            data: [0.05, -0.05, -0.07, -0.06]
        },
        {
            name: '30岁及以下',
            type: 'line',
            data: [0.08, -0.02, -0.05, -0.05]
        },
        {
            name: '31-40岁',
            type: 'line',
            data: [0.01, -0.10, -0.11, -0.07]
        },
        {
            name: '41岁及以上',
            type: 'line',
            data: [0.09, 0.01, -0.05, -0.05]
        }
    ]
});
