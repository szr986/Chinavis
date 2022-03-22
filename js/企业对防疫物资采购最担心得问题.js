const colorArray = [{
    top: '#FFFF00', //黄
    bottom: 'orange'
}, {
    top: '#FFB6C1', //绿
    bottom: '#00FFFF'
},
{
    top: '#FF00FF', //蓝
    bottom: '#FFA07A'
}, {
    top: '#BA55D3', //深蓝
    bottom: '#FF6347'
},
{
    top: '#FF0000', //粉
    bottom: '#FFFF00'
}
];

var myEcharts = echarts.init(document.getElementById('problem'));

myEcharts.setOption(reactOption = {
    title: {
        text: '企业对防疫物资采购最担心的问题-企业占比(%)',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    grid:{
        left:'50%',
        top:"10%",
        bottom:"1%",
        // right:"5%"
    },
    // backgroundColor: "#38445E",
    tooltip: {
        show: true,
        formatter: '{b} : {c}%'
    },
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5,
        },
        inverse: 'true',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        data: ['市场资源紧张，找不到资源', '物资到货时间延后，迟迟无法收到', '已有物资储备，无法确定足够应对疫情周期', '物资质量无法得到保障', '其他']
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%',
                color: '#fff'
            }
        },
        data: [57.5, 27.8, 12.3, 1.9, 0.5],
        barWidth: '20px',
        barCategoryGap: '50%',
        itemStyle: {
            normal: {
                show: true,
                color: function (params) {
                    let num = colorArray.length;
                    return {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }]
                    }
                },
                barBorderRadius: 20,
                borderWidth: 0,
                borderColor: '#333',
            }
        }
    }]
});
