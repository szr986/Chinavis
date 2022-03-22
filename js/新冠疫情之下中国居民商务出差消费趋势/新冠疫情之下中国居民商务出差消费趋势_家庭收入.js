var myEcharts = echarts.init(document.getElementById('business_income'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民商务出差消费趋势',
    //     top:'1%',
    //     left:'center'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['整体','1万元及以下','1-2万元','2-3万元','3万元以上'],
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
            data: [-0.71, -0.55, -0.41, -0.21]
        },
        {
            name: '1万元及以下',
            type: 'line',
            data: [-0.77, -0.61, -0.49, -0.28]
        },
        {
            name: '1-2万元',
            type: 'line',
            data: [-0.72, -0.60, -0.41, -0.22]
        },
        {
            name: '2-3万元',
            type: 'line',
            data: [-0.69, -0.50, -0.37, -0.14]
        },
        {
            name: '3万元以上',
            type: 'line',
            data: [-0.65, -0.43, -0.37, -0.18]
        }
    ]
});
