var myEcharts = echarts.init(document.getElementById('business_gender'));

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
        data: ['整体','男性','女性'],
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
            name: '男性',
            type: 'line',
            data: [-0.71, -0.53, -0.39, -0.18]
        },
        {
            name: '女性',
            type: 'line',
            data: [-0.73, -0.59, -0.45, -0.27]
        }
    ]
});
