   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.getElementById('meishi'));
   var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
   option = {
       "title": {
           "text": title[0],
           "left": "center",
           "y": "10",
           "textStyle": {
               "color": "#fff",
               "fontsize":"20"
           }
       },
       color:myColor,
    //    "backgroundColor": "#1c2e40",
       "color": "#384757",
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
                       "color": "#fff"
                   }
               },
               axisLine: {
                lineStyle: {
                    color: '#26D9EF'
                }
            },
           }
       ],
       "yAxis": [
           {
               "type": "value",
               "name": "千万台",
               "nameTextStyle": {
                   "color": "#fff"
               },
               // "min": 0,
               // "max": 50,
               "interval": 10,
               "axisLabel": {
                   "show": true,
                   "textStyle": {
                       "color": "#fff"
                   },

               },
               axisLine: {
                lineStyle: {
                    color: '#26D9EF'
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
                "color": "#fff"
            },
               "show": true,
               "axisLabel": {
                   "show": true,
                   "textStyle": {
                       "color": "#fff"
                   },
                   "formatter": "{value}%"
               },
               axisLine: {
                lineStyle: {
                    color: '#26D9EF'
                }
            },
               // "formatter": '{value}%'
           }
       ],
       "grid": {
           "top": "20%",
           "left": "4%",
           "right": "6%",
           "bottom": "4%"
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
                                   "color": "#FFFF00"
                               },
                               {
                                   "offset": 0.5,
                                   "color": "orange"
                               },
                               {
                                   "offset": 1,
                                   "color": "#FFB6C1"
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
                       "color": "#00FFFF"
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
                                   "color": "#FF00FF"
                               },
                               {
                                   "offset": 0.5,
                                   "color": "#FFA07A"
                               },
                               {
                                   "offset": 1,
                                   "color": "#BA55D3"
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
                                   "color": "#FF6347"
                               },
                               {
                                   "offset": 1,
                                   "color": "#FF0000"
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