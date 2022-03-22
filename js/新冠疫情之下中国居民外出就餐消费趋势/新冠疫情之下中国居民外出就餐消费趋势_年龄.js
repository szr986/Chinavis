var myEcharts = echarts.init(document.getElementById('out_age'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民外出就餐消费趋势',
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
            data: [-0.70, -0.50, -0.34, -0.12]
        },
        {
            name: '30岁及以下',
            type: 'line',
            data: [-0.63, -0.44, -0.32, -0.15]
        },
        {
            name: '31-40岁',
            type: 'line',
            data: [-0.72, -0.54, -0.35, -0.11]
        },
        {
            name: '41岁及以上',
            type: 'line',
            data: [-0.83, -0.55, -0.34, -0.07]
        }
    ]
});
