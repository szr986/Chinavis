 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('buy'));
 // 使用刚指定的配置项和数据显示图表。
 var myColor = ["#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

 option = {
     color:myColor,
     title: {
         text: '居民各类消费指数(相比上年同月增减)',
         x: 'center',
         y: 'top',

        textStyle:{
                // color:'rgb(190, 184, 184)',
                color:'#fff',
            fontSize:16,
        }
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
     },
   
     legend: {
         data: expense_data[0],
         top:"8%" ,  //解决title和legend重合
       itemHeight:10,
         textStyle: {
          fontSize:12,
        //   color:'rgb(190, 184, 184)',
        color:'#fff',
    }
     },
     grid: {
         top:'25%',
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: [
         {
             type: 'category',
             data: expense_data[1],
             axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff"
                },
            },
             axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize: 12
                }
            },
        
         }
     ],
     yAxis: [
         {
             type: 'value',
             axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //y轴文字颜色
                    fontSize: 12
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#26d9ff"
                },
            },
         }
     ],
     series: [
         {
             name: '衣着类',
             type: 'bar',
             data: expense_data[2],
             markPoint:{
                 data:[
                     {name:'衣着1',value:-0.3,xAxis:2,yAxis:-0.3}
                 ],
                 itemStyle:{
                     normal:{
                         label:{
                             color:"#000"
                         }
                     }
                 }
             }
         },
         {
             name: '居住服务类',
             type: 'bar',
             data: expense_data[3],
             markPoint:{
                 data:[
                     {name:'居住1',value:-0.1,xAxis:2,yAxis:0}
                 ],
                 itemStyle:{
                    normal:{
                        label:{
                            color:"#000"
                        }
                    }
                }
             }
         },
         {
             name: '生活用品及服务类',
             type: 'bar',
             data: expense_data[4]
         },
         {
             name: '交通和通信类',
             type: 'bar',
             data: expense_data[5],
             markPoint:{
                 data:[
                     {name:'减少1',value:-3.8,xAxis:2,yAxis:-3.8},
                     {name:'减少2',value:-1.6,xAxis:1,yAxis:-1.6}
                 ],
                 itemStyle:{
                    normal:{
                        label:{
                            color:"#000"
                        }
                    }
                }
             },
             // markLine:{
             //     data:expense_data[5]
             // }
         },
         {
             name: '教育文化和娱乐类',
             type: 'bar',
             data: expense_data[6]
         },
         {
             name: '医疗保健类',
             type: 'bar',
             data: expense_data[7]
         },
         {
             name: '交通和通信类',
             type:'line',
             data: expense_data[5],
             smooth: true
         },
     ]
 };
 myChart.setOption(option);