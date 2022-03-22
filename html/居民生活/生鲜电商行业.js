 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('shengxian'));
 var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
 option = {
     title: {
         top:"2%",
         text: title,
         left: "4%",
        //  y: "1%",
        textStyle:{
            color:"#fff",
            fontsize:"10"
        }
     },
    //  backgroundColor: '#05163B',
    color:myColor,
     tooltip: {
         trigger: 'axis'
     },
     toolbox: {
         show: true,
         feature: {
             mark: { show: true },
             // dataView: { show: true, readOnly: false },
             magicType: { show: true, type: ['line', 'bar'] },
             restore: { show: true },
             saveAsImage: { show: true }
         }
     },
     grid: {
         top: 'middle',
         left: '3%',
         right: '4%',
         bottom: '1%',
         top: '15%',
         containLabel: true
     },
     legend: {
         data: type,
         textStyle: {
             color: "#fff"
         },
         top:"8%"

     },
     xAxis: [
         {
             type: 'category',
             data: date,
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: "#fff" //X轴文字颜色
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: '#fff'
                 }
             },
         }
     ],
     yAxis: [
         {
             type: 'value',
             name: '万台',
             axisLabel: {
                 formatter: '{value}',
                 textStyle: {
                     color: "#fff" //X轴文字颜色
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: '#fff'
                 }
             },
         },
         {
             type: 'value',
             name: '温度',
             axisLabel: {
                 formatter: '{value}%',
                 textStyle: {
                     color: "#fff" //X轴文字颜色
                 }
             },
             axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
         }
     ],
     series: [

         {
             name: type[0],
             type: 'bar',
             itemStyle: {
                 normal: {
                     barBorderRadius: 5,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: "#FFFF00"
                     },
                     {
                         offset: 1,
                         color: "orange"
                     }
                     ])
                 }
             },
             data: numbers1
         },
         {
             name: type[1],
             type: 'bar',
             itemStyle: {
                 normal: {
                     barBorderRadius: 5,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: "#FFB6C1"
                     },
                     {
                         offset: 1,
                         color: "#00FFFF"
                     }
                     ])
                 }
             },
             data: numbers2
         },
         {
             name: type[2],
             type: 'line',
             yAxisIndex: 1,
             data: rate1,
             lineStyle: {
                 normal: {
                     width: 5,
                     color: {
                         type: 'linear',

                         colorStops: [{
                             offset: 0,
                             color: '#FF00FF' // 0% 处的颜色
                         },
                         {
                             offset: 0.4,
                             color: '#FFA07A' // 100% 处的颜色
                         }, {
                             offset: 1,
                             color: '#BA55D3' // 100% 处的颜色
                         }
                         ],
                         globalCoord: false // 缺省为 false
                     },
                     shadowColor: 'rgba(71,216,190, 0.5)',
                     shadowBlur: 10,
                     shadowOffsetY: 7
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#AAF487',
                     borderWidth: 10,
                     /*shadowColor: 'rgba(72,216,191, 0.3)',
                      shadowBlur: 100,*/
                     borderColor: "#AAF487"
                 }
             },
             smooth: true,
         }

     ]
 };
 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);