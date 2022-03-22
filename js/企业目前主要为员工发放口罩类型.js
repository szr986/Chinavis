const colorArray1 = [{
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


var myEcharts = echarts.init(document.getElementById('type'));

myEcharts.setOption(reactOption = {
title: {
    text: '企业目前主要为员工发放口罩类型-企业占比(%)',
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
    data: ['一般医用口罩', '医用外科口罩', '普通口罩', '颗粒物防护口罩', '医用防护口罩', '其他', '不发放口罩']
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
    data: [42.9, 15.6, 15.6, 13.7, 0.5, 1.4, 10.4],
    barWidth: '20px',
    barCategoryGap: '50%',
    itemStyle: {
        normal: {
            show: true,
            color: function(params) {
                let num = colorArray1.length;
                return {
                    type: 'linear',
                    colorStops: [{
                            offset: 0,
                            color: colorArray1[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray1[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray1[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray1[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray1[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray1[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray1[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray1[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray1[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray1[params.dataIndex % num].top
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
