var myEcharts = echarts.init(document.getElementById('supermarket_gender'));

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
            name: '男性',
            type: 'line',
            data: [-0.41, -0.29, -0.10]
        },
        {
            name: '女性',
            type: 'line',
            data: [-0.43, -0.29, -0.11]
        }
    ]
});
