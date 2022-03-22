var myChart = echarts.init(document.getElementById('gdpadd'));

var myColor = ["#00FFFF","#9B30FF", "orange", "#FFFF00", "#FFA07A", "#BA55D3", "#00BFFF","#FFA500", "#00FA9A"]
 var   option = {
     color:myColor,
        title: {
            top:'4%',
            text: '2003年中国非典前后和2020年中国新冠前后的GDP增长率',
            subtext: '来源：国家统计局，IMF，Wind，泽平宏观，艾瑞投研',
         
            textStyle:{
                // color:'rgb(190, 184, 184)',
                color:'#fff',
                fontSize:16,
            }
        },
        tooltip: {
            trigger: 'axis',
            show:false
        },
        legend: {
            top:'27%',
            data: ['非典前后', '新冠前后'],
            show:'false',
            textStyle:{
        //   color:'rgb(190, 184, 184)',
        color:'#fff',
            }
        },
        grid:{
top:'46%',
left:'8%',
right:'10%',
bottom:'6%'
        },
        
        toolbox: {
            top:'18%',
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: [
            {type: 'category',
            boundaryGap: false,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff",
                    width:2
                },
            },
            data: 
            ['2018Q1', '20182Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3','2019Q4','2020Q1','2020Q2','2020Q3','2020Q4'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff",
                    width:2
                },
            },
            axisLabel:{
           
                textStyle:{
                    color:'#fff'
                }
            }
        },
           
            {type: 'category',
            boundaryGap: false,
    
            data: ['2002Q1', '2002Q2', '2002Q3', '2002Q4', '2003Q1', '2003Q2', '2003Q3','2003Q4','2004Q1','2004Q2','2004Q3','2004Q4'],
        axisLabel:{
           
            textStyle:{
                color:'#fff'
            }
        }
        }

        ],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize: 12
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff",
                    width:2
                },
            },
        }],
        series: [
            {
                name: '非典前后',
                type: 'line',
                top:'80%',
                data: [8.9,8.9,9.2,9.1,10.8,9.7,10.1,10.0,10.4,10.9,10.5,10.1],
          
                label:{show:true,},
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {
                            name: '非典发生',
                            coord: [5, 9.7],
                            value:'非典发生时9.7%',
                            
                        }
                    ],
                 
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
    
                    ]
                }
            },
            {
                name: '新冠前后',
                type: 'line',
                data: [6.8,6.7,6.5,6.4,6.4,6.2,6.0,6.0,3,6.0,5.8,5.6],
                label:{show:true,
                    textStyle: {
                        color: "#ffffff", //X轴文字颜色
                      
                    },},
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {
                            name: '新冠发生',
                            coord: [8, 3],
                            value:'新冠发生时3%~5%'
                        }
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值',
                                textStyle: {
                                    color: "rgb(190, 184, 184)", //X轴文字颜色
                                  
                                },
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    }
    
    myChart.setOption(option)