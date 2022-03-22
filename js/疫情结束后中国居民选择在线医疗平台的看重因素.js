const colorArray = [{
    top: '#ffa800', //黄
    bottom: 'rgba(248,195,248,.3)'
}, {
    top: '#1ace4a', //绿
    bottom: 'rgba(100,255,249, 0.3)'
},
{
    top: '#4bf3ff', //蓝
    bottom: 'rgba(135,183,255,.3)'
}, {
    top: '#4f9aff', //深蓝
    bottom: 'rgba(11,42,84,.3)'
},
{
    top: '#b250ff', //粉
    bottom: 'rgba(100,255,249,.3)'
}
];

var myEcharts = echarts.init(document.getElementById('medical_treatment'));

myEcharts.setOption(reactOption = {
    title: {
        text: '疫情结束后中国居民选择在线医疗平台的看重因素',
        left: 'center',
        textStyle: {
            color: '#00FF00'
        }
    },
    backgroundColor: "#38445E",
    tooltip: {
        show: true,
        formatter: '{b} : {c}%'
    },
    grid:{
        left:'15%'
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
        data: ['医生资质', '医生看诊响应速度', '医生科室类别丰富', '医生容易预约', '看诊价格', '看诊之外的其他功能', '医生数量', 'APP设计及体验']
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%',
            }
        },
        data: [54.4, 50.8, 49.5, 37.0, 36.2, 30.3, 24.8, 19.2],
        barWidth: '40px',
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
