 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('jiaoyu'));
 var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
 option = {
     "title": {
         "text": title[0],
         "left": "center",
         "y": "10",
         "textStyle": {
             "color": "#fff",
             "fontsize": 20
         }
     },
    //  "backgroundColor": "#1c2e40",
     "color": myColor,
     "tooltip": {
         "trigger": "axis",
         "axisPointer": {
             "type": "cross",
             "crossStyle": {
                 "color": "#384757"
             }
         }
     },
     "legend": {
         "data": [
             {
                 "name": "月独立设备数",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
             {
                 "name": "(1)环比增长率",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
             {
                 "name": "单机日使用时长",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
             {
                 "name": "(2)环比增长率",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
             {
                 "name": "单机日使用次数",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
             {
                 "name": "(3)环比增长率",
                 "icon": "circle",
                 "textStyle": {
                     "color": "#fff"
                 }
             },
           
         ],
         "top": "10%",
         "textStyle": {
             "color": "#fff"
         }
     },
     "xAxis": [
         {
             "type": "category",
             "data": date,
             "axisPointer": {
                 "type": "shadow"
             },
             "axisLabel": {
                 "show": true,
                 "textStyle": {
                     "color": '#fff'
                 }
             },
             axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
         }
     ],
     "yAxis": [
         {
             "type": "value",
             "name": "千万台",
             "nameTextStyle": {
                 "color": '#fff'
             },
             // "min": 0,
             // "max": 50,
             "interval": 10,
             "axisLabel": {
                 "show": true,
                 "textStyle": {
                     "color": '#fff'
                 },

             },
             axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
             "splitLine": {
                 "lineStyle": {
                     "color": "#7d838b"
                 }
             }
         },
         {
             // "min": -180,
             // "max": 190,
             "type": "value",
             "name": "完成率",
             "nameTextStyle": {
                "color": '#fff'
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
             "show": true,
             "axisLabel": {
                 "show": true,
                 "color":"rgba(255,37,117,0.7)",
                 "textStyle": {
                     "color": '#fff'
                 },
                 "formatter": "{value}%"
             },
             // "formatter": '{value}%'
         }
     ],
     "grid": {
         "top": "20%",
         "bottom": "10%",
         "right": "5%",
         "left": "5%"
     },
     "series": [
         {
             "name": "月独立设备数",
             "type": "bar",
             "data": numbers,
             "barWidth": "auto",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "type": "linear",
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "colorStops": [
                             {
                                 "offset": 0,
                                 "color": "#00FFFF"
                             },
                             {
                                 "offset": 0.5,
                                 "color": "#FFB6C1"
                             },
                             {
                                 "offset": 1,
                                 "color": "#FFFF00"
                             }
                         ],
                         "globalCoord": false
                     }
                 }
             }
         },
         {
             "name": "(1)环比增长率",
             "type": "line",
             "yAxisIndex": 1,
             "data": rate1,
             "itemStyle": {
                 "normal": {
                     "color": "rgba(0,133,245,0.7)"
                 }
             },
             "smooth": true
         },
         {
             "name": "单机日使用时长",
             "type": "bar",
             "data": time,
             "barWidth": "auto",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "type": "linear",
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "colorStops": [
                             {
                                 "offset": 0,
                                 "color": "rgba(255,37,117,0.7)"
                             },
                             {
                                 "offset": 0.5,
                                 "color": "rgba(0,255,252,0.7)"
                             },
                             {
                                 "offset": 1,
                                 "color": "orange"
                             }
                         ],
                         "globalCoord": false
                     }
                 }
             },
             "barGap": "0"
         },
         {
             "name": "(2)环比增长率",
             "type": "line",
             "yAxisIndex": 1,
             "data": rate2,
             "itemStyle": {
                 "normal": {
                     "color": "rgba(0,255,252,0.7)"
                 }
             },
             "smooth": true
         },
         {
             "name": "单机日使用次数",
             "type": "bar",
             "data": use_times,
             "barWidth": "auto",
             "itemStyle": {
                 "normal": {
                     "color": {
                         "type": "linear",
                         "x": 0,
                         "y": 0,
                         "x2": 0,
                         "y2": 1,
                         "colorStops": [
                             {
                                 "offset": 0,
                                 "color": "rgba(255,37,117,0.7)"
                             },
                             {
                                 "offset": 0.5,
                                 "color": "#00FF00"
                             },
                             {
                                 "offset": 1,
                                 "color": "#00FF00"
                             }
                         ],
                         "globalCoord": false
                     }
                 }
             },
             "barGap": "0"
         },
         {
             "name": "(3)环比增长率",
             "type": "line",
             "yAxisIndex": 1,
             "data": rate3,
             "itemStyle": {
                 "normal": {
                     "color": "#00FF00"
                 }
             },
             "smooth": true
         }
     ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);