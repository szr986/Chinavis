
 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('waimai'));

 option = {
     "title": {
         "text": "2月-3月外卖行业周变化",
         "left": "center",
        //  "top":"1%",
        //  "y": "10",
         "textStyle": {
            "color": "#fff",
            "fontsize":"20"
        }
     },
    //  backgroundColor: '#fff',
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
         // top: 'middle',
         left: '3%',
         right: '2%',
         bottom: '1%',
         top: '20%',
         containLabel: true
     },
     legend: {
         data:type,
         top:"8%",
         textStyle: {
             color: "#fff",
             fontSize: 14
         }

     },
     xAxis: [
         {
             type: 'category',
             data: date ,
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: "#fff", //X轴文字颜色
                     fontSize: 16
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
             name: '',
             axisLabel: {
                 formatter: '{value} ',
                 textStyle: {
                     color: "#fff",//X轴文字颜色
                     fontSize: 16
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
             name: '百分比',
             
             axisLabel: {
                 formatter: '{value} %',
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
             name:type[0],
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
                         color: "#FFB6C1"
                     }
                     ])
                 }
             },
             data:numbers1
         },
         {
             name: type[2],
             type: 'bar',
             itemStyle: {
                 normal: {
                     barBorderRadius: 5,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: "orange"
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
             name: type[1],
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
                             color: '#04F9E4' // 0% 处的颜色
                         },
                         {
                             offset: 0.4,
                             color: '#0DA5C9' // 100% 处的颜色
                         }, {
                             offset: 1,
                             color: '#125DDE' // 100% 处的颜色
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
                     borderColor: "#04F9E4"
                 }
             },
             smooth: true,
         },

         {
             name: type[3],
             type: 'line',
             yAxisIndex: 1,
             data: rate2,
             lineStyle: {
                 normal: {
                     width: 5,
                     color: {
                         type: 'linear',

                         colorStops: [{
                             offset: 0,
                             color: '#F9D74D' // 0% 处的颜色
                         },
                         {
                             offset: 0.4,
                             color: '#EFB94A' // 100% 处的颜色
                         }, {
                             offset: 1,
                             color: '#FFA700' // 100% 处的颜色
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
                     color: '#F7AD3E',
                     borderWidth: 10,
                     /*shadowColor: 'rgba(72,216,191, 0.3)',
                      shadowBlur: 100,*/
                     borderColor: "#F7AD3E"
                 }
             },
             smooth: true,
         }
     ]
 };


 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);