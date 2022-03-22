var myChart = echarts.init(document.getElementById('yuedukanfa'));
var colorArray = [
    {
        top: '#FFB6C1', //黄
        bottom: '#FFFF00'
    }, {
        top: '#00FFFF', //绿
        bottom: 'orange'
    },
    {
        top: '#FF00FF', //蓝
        bottom: '#FFA07A'
    }, 
    {
        top: '#FF0000', //粉
        bottom: '#BA55D3'
    }
];
myChart.setOption(
option = {
    title: {
        text: '2020年疫情结束后用户对阅读看法',
        x: 'center',
        // y: 'center',
        textStyle:{
            color:"#fff",
            fontsize:"20"
        }
    },
    // backgroundColor: '#0E2A43',
     tooltip: {
          show: true,
          formatter: "{b}:{c}%"
        },
   grid: {
          left: '4%',
          top: '12%',
          right: '3%',
          bottom: '8%',
          containLabel: true
        },
  
    xAxis: {
        type: 'value',
        show:false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['会继续看，并且会持续一段时间', '会继续看，但可能不会持续太久', '不太会继续看，但会偶尔看一下', '不会再看了']
        }

    ],
    series: [{
            name: '能耗值',
            type: 'bar',
                label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}%',
                  textStyle: {
                    color: '#01FCE3' //color of value
                  }
                }
              },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
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
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [57.1, 29.1, 11.1, 1.4]
        }

    ]
})



