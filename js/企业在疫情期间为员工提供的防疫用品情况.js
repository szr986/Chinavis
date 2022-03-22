const colorArray3 = [{
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

var myEcharts = echarts.init(document.getElementById('situation'));

myEcharts.setOption(reactOption = {
title: {
    text: '企业在疫情期间为员工提供的防疫用品情况-企业占比(%)',
    x: 'center',
    y: 0,
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
    },
},
// backgroundColor: "#38445E",
tooltip: {
    show: true,
    formatter: '{b} : {c}%'
},
grid:{
    left:'30%',
    top:"10%",
    bottom:"1%"
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
    data: ['口罩', '酒精消毒水', '洗手液', '温度计', '手套', '泡腾片', '护目镜', '其他']
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
    data: [88.2, 80.2, 77.8, 64.2, 32.5, 15.1, 15.1, 3.8],
    barWidth: '20px',
    barCategoryGap: '50%',
    itemStyle: {
        normal: {
            show: true,
            color: function(params) {
                let num = colorArray3.length;
                return {
                    type: 'linear',
                    colorStops: [{
                            offset: 0,
                            color: colorArray3[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray3[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray3[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray3[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray3[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray3[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray3[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray3[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray3[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray3[params.dataIndex % num].top
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
