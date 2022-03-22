var myEcharts = echarts.init(document.getElementById('education_income'));

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
            data: [0.12, -0.05, -0.05, -0.05]
        },
        {
            name: '1万元及以下',
            type: 'line',
            data: [0.08, -0.12, -0.12, -0.11]
        },
        {
            name: '1-2万元',
            type: 'line',
            data: [0.13, -0.03, -0.04, -0.04]
        },
        {
            name: '2-3万元',
            type: 'line',
            data: [0.14, -0.04, -0.03, 0.01]
        },
        {
            name: '3万元以上',
            type: 'line',
            data: [0.13, 0.03, -0.03, -0.01]
        }
    ]
});
