 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('huoyuedu'));
       

 option = {
     title: {
         top: '0',
         left: 'center',
         text: '2月教育行业用户活跃度分布',
         textStyle: {
             align: 'center',
             color: '#fff',
             fontSize: 20,
         }

     },
    //  backgroundColor: '#043491',
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross'
         }
     },
     legend: {
         x: 'center',
         y: '40px',
         textStyle: {
             color: '#fff',
             fontSize: 13,
         },
         icon: 'circle',
         data: ['用户活跃分布']
     },
    //  dataZoom: [{
    //      type: 'slider',
    //      show: true,
    //      height: 20,
    //      left: '10%',
    //      right: '10%',
    //      bottom: '2%',
    //      start: 50,
    //      end: 100,
    //      textStyle: {
    //          color: '#d4ffff',
    //          fontSize: 11,
    //      },
    //  }, {
    //      type: 'inside'
    //  }

    //  ],
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        
        "start": 35,
        "end": 95,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#5B3AAE",
        },
        textStyle:{
            color:"rgba(204,187,225,0.5)",
        },
        fillerColor:"rgba(67,55,160,0.4)",
        borderColor: "rgba(204,187,225,0.5)",

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 24
    }],
    
     grid: {
         right: '6%',
         bottom: '10%',
         left: '2%',
         top: '80px',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         data: hour,
         name: '时间',
         nameTextStyle: {
             color: '#fff'
         },
         axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#26D9FF',
                width: 2
            }
        },
         axisTick: {
             show: false,
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#fff',
                 fontSize: 12,
             },
             //interval:0,
             //rotate:30
         },
     }],
     yAxis: [{
         type: 'value',
         name: '(%)',
         nameTextStyle: {
             color: '#fff'
         },
         position: 'left',
         axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#26D9FF',
                width: 2
            }
        },
         splitLine: {
             lineStyle: {
                 color: "#0B4CA9",
             }

         },
         axisLabel: {
             color: '#fff',
             fontSize: 12,
             formatter: '{value}%'
         }
     },],
     series: [{
         name: '用户活跃分布',
         type: 'line',
         yAxisIndex: 0,
         symbolSize: 12,
         itemStyle: {
             normal: {
                 color: '#FC30EE',
             }
         },
         data: rate,
         markArea: {
             data: [
                 [{
                     name: '',
                     xAxis: 9
                 },
                 {
                     xAxis: 11
                 }],
                 [{
                     name: '',
                     xAxis: 13
                 },
                 {
                     xAxis: 15
                 }],
                 [{
                     name: '',
                     xAxis: 19
                 },
                 {
                     xAxis: 21
                 }]
             ]
         }
     }
     ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);