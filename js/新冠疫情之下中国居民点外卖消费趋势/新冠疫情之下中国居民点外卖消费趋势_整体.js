var myEcharts = echarts.init(document.getElementById('takeout_all'));

myEcharts.setOption(reactOption = {
    // title: {
    //     text: '新冠疫情之下中国居民外出就餐消费趋势',
    //     top:'1%',
    //     left:'center'
    // },
    backgroundColor: '#080b30',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['整体'],
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
        data: ['疫情期间', '疫情结束1个月内', '疫情结束1-3个月', '疫情结束3个月后'],
        axisLine: {
            lineStyle: {
                color: '#65C6E7'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#65C6E7'
            }
        },
    },
    series: [
        {
            name: '整体',
            type: 'line',
            data: [-0.45, -0.41, -0.29, -0.14],
            itemStyle: {
                normal: {
                    color: '#28f0f5'
                },
            },
            itemStyle: {
                color: '#28f0f5',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            lineStyle: {
                color: '#a45cc9',
                width: 3,
            },
        },
        
    ]
});
