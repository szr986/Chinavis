var myEcharts = echarts.init(document.getElementById('takeout_marriage'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民外出就餐消费趋势',
    //     top:'1%',
    //     left:'center'
    // },
    tooltip: {
        trigger: 'axis'
    },
    backgroundColor: '#2c343c',
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
            data: [-0.45, -0.41, -0.29, -0.14]
        },
        {
            name: '未婚',
            type: 'line',
            data: [-0.48, -0.39, -0.31, -0.19]
        },
        {
            name: '已婚未育',
            type: 'line',
            data: [-0.55, -0.60, -0.46, -0.31]
        },
        {
            name: '已婚已育',
            type: 'line',
            data: [-0.42, -0.38, -0.25, -0.09]
        }
    ]
});
