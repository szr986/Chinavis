 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('allhangye'));
 var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
 // option
 option = {
     title: {
         text: '2月复工月-各行业-独立设备数环比增长数',
         x: 'center',
         y: 0,
         textStyle: {
             color: '#fff',
             fontSize: 16,
             fontWeight: 'normal',
         },
     },
    //  backgroundColor: '#191E40',

     tooltip: {
         trigger: 'axis',
         backgroundColor: 'rgba(255,255,255,0.1)',
         axisPointer: {
             type: 'shadow',
             label: {
                 show: true,
                 backgroundColor: '#7B7DDC'
             }
         }
     },

     legend: {
         data: ['月独立设备数（千万台）',  '环比增长率（%）',],
         textStyle: {
             color: '#fff'
         },
         top: '7%',
        //  left:"20%"
     },

     grid: {
         x: '10%',
         width: '82%',
         y: '12%',
         top:'15%',
         bottom:'15%',
         left:"8%"
     },
     xAxis: {
         data: industry,
         axisLine: {
             lineStyle: {
                 color: '#fff'
             }
         },
         axisTick: {
             show: false,
         },
         axisLabel:{
             interval:0,
             rotate:40
         }
     },
     yAxis: [{

         splitLine: { show: false },
         axisLine: {
             lineStyle: {
                 color: '#fff',
             }
         },

         axisLabel: {
             formatter: '{value} ',
         }
     },

     {
         splitLine: { show: false },
         axisLine: {
             lineStyle: {
                 color: '#fff',
             }
         },
         axisLabel: {
             formatter: '{value}%',
         }
     }],

     series: [{
         name: '环比增长率（%）',
         type: 'line',
         smooth: true,
         showAllSymbol: true,
         symbol: 'emptyCircle',
         symbolSize: 8,
         yAxisIndex: 1,
         itemStyle: {
             normal: {
                 color: '#FFB6C1'
             },
         },
         data: increase_rate
     },

     {
         name: '月独立设备数（千万台）',
         type: 'bar',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [
                         { offset: 0, color: '#FFFF00' },
                         { offset: 1, color: 'orange' }
                     ]
                 )
             }
         },
         data: use_numbers
     },
     ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);