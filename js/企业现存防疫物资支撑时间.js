const colorArray2 = [{
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

var myEcharts = echarts.init(document.getElementById('time'));

myEcharts.setOption(reactOption = {
// backgroundColor: "#38445E",

title: {
    text: '企业现存防疫物资支撑时间-企业占比(%)',
    x: 'center',
    y: 0,
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
    },
},
grid:{
    left:'30%',
    top:"10%",
    bottom:"1%"
},
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
    data: ['2个月以上', '1个月-2个月', '1至3周', '其他', '不发放']
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
    data: [3.8, 27.8, 54.2, 4.2, 9.9],
    barWidth: '20px',
    barCategoryGap: '50%',
    itemStyle: {
        normal: {
            show: true,
            color: function(params) {
                let num = colorArray2.length;
                return {
                    type: 'linear',
                    colorStops: [{
                            offset: 0,
                            color: colorArray2[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray2[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray2[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray2[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray2[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray2[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray2[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray2[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray2[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray2[params.dataIndex % num].top
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
