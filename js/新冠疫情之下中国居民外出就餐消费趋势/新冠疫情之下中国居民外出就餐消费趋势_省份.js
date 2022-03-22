var myEcharts = echarts.init(document.getElementById('out_province'));

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
        data: ['整体','湖北省','其他省份'],
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
            name: '湖北省',
            type: 'line',
            data: [-0.81, -0.57, -0.42, -0.27]
        },
        {
            name: '其他省份',
            type: 'line',
            data: [-0.70, -0.50, -0.33, -0.11]
        }
    ]
});
