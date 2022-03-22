var myEcharts = echarts.init(document.getElementById('leave_the_country_marriage'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民出境旅游消费趋势',
    //     top:'1%',
    //     left:'center'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['整体','未婚','已婚未育','已婚已育'],
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
            data: [-0.59, -0.49, -0.38, -0.18]
        },
        {
            name: '未婚',
            type: 'line',
            data: [-0.61, -0.51, -0.45, -0.28]
        },
        {
            name: '已婚未育',
            type: 'line',
            data: [-0.51, -0.51, -0.38, -0.19]
        },
        {
            name: '已婚已育',
            type: 'line',
            data: [-0.60, -0.48, -0.36, -0.16]
        }
    ]
});
