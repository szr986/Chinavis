const colorArray = [{
    top: '#FFFF00', //黄
    bottom: 'rgba(248,195,248,.3)'
}, {
    top: 'orange', //绿
    bottom: 'rgba(100,255,249, 0.3)'
},
{
    top: '#FFB6C1', //蓝
    bottom: 'rgba(135,183,255,.3)'
}, {
    top: '#00FFFF', //深蓝
    bottom: 'rgba(11,42,84,.3)'
},
{
    top: '#FF00FF', //粉
    bottom: 'rgba(100,255,249,.3)'
}
];

var myEcharts = echarts.init(document.getElementById('reasons_for_going_out'));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

myEcharts.setOption(reactOption = {
    // backgroundColor: "#38445E",
    tooltip: {
        show: true,
        formatter: '{b} : {c}%'
    },
    grid:{
        left:'30%',
        top:'9%',
        bottom:'0%'
    },
    title: {
        text: '疫情期间中国居民的外出原因',
        right:'center',
            textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0
            },
    },
    xAxis: {
        type: 'value',
        show: false,
        axisLabel: {
            textAlign: {
                align: 'left',
            }
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5,
        },
        inverse: 'true',
        axisLabel: {
            textStyle: {
                fontSize: 12,
                 color:"#FFFF00",
                //   align:'5'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        data: ['买菜以及生活必需品', '丢垃圾', '买口罩或消毒用品等', '取快递/外卖', '上班', '遛弯/散步透气', '其他原因']
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%',
                textStyle: {
                     color: '#FFFF00',
                    // fontSize: 20,
                    fontWeight: 0
                    },
            }
        },
        data: [77.1, 54.7, 34.7, 28.0, 21.3, 14.4, 0.2],
        barWidth: '30px',
        barCategoryGap: '40%',
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
