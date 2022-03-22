  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('office'));
  var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
  option = {
    title: {
        text: title[0],
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    //   "backgroundColor": "#1c2e40",
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
                  "name": "月独立设备数(千万台)",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  }
              },
              {
                  "name": "(1)环比增长率(%)",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  }
              },
              {
                  "name": "单机日使用时长(分)",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  }
              },
              {
                  "name": "(2)环比增长率(%)",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  }
              },
              {
                  "name": "单机日使用次数(次)",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  }
              },
              {
                  "name": "(3)环比增长率(%)",
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
              "axisLine": {
                "show": true,
                lineStyle:{
                    color:"#B4B4B4"
                }
            },
          }
      ],
      "yAxis": [
          {
              "type": "value",
            //   "name": "千万台",
              "nameTextStyle": {
                  "color": "#B4B4B4",
                //   left:"1%"
              },
              // "min": 0,
              // "max": 50,
              "interval": 10,
              "axisLabel": {
                  "show": true,
                  "textStyle": {
                      "color": "#fff",
                      fontSize:10
                  },
                  formatter:"{value}"
              },
              "axisLine": {
                  "show": true,
                  lineStyle:{
                      color:"#B4B4B4"
                  }
              },
              "splitLine": {
                  "lineStyle": {
                      "color": "#B4B4B4",
                      type:"dashed"
                  }
              }
          },
          {
              // "min": -180,
              // "max": 190,
              "type": "value",
            //   "name": "完成率",
              "show": true,
              "axisLabel": {
                  "show": true,
                  "textStyle": {
                      "color": "#fff"
                  },
                  "formatter": "{value}%"
              },
              // "formatter": '{value}%'
          }
      ],
      "grid": {
          "top": "30%",
          bottom:"10%",
          left:"12%"
        //   x:"10%",
        //   y:"20%",
        //   x2:"10%",
        //   y2:"20%"
      },
      "series": [
          {
              "name": "月独立设备数(千万台)",
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
              "name": "(1)环比增长率(%)",
              "type": "line",
              "yAxisIndex": 1,
              "data": rate1,
              "itemStyle": {
                  "normal": {
                      "color": "#FFFF00"
                  }
              },
              "smooth": true
          },
          {
              "name": "单机日使用时长(分)",
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
                                  "color": "#00FFFF"
                              },
                              {
                                  "offset": 0.5,
                                  "color": "#FF00FF"
                              },
                              {
                                  "offset": 1,
                                  "color": "#FFA07A"
                              }
                          ],
                          "globalCoord": false
                      }
                  }
              },
              "barGap": "0"
          },
          {
              "name": "(2)环比增长率(%)",
              "type": "line",
              "yAxisIndex": 1,
              "data": rate2,
              "itemStyle": {
                  "normal": {
                      "color": "#00FFFF"
                  }
              },
              "smooth": true
          },
          {
              "name": "单机日使用次数(次)",
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
                                  "color": "#BA55D3"
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
              "name": "(3)环比增长率(%)",
              "type": "line",
              "yAxisIndex": 1,
              "data": rate3,
              "itemStyle": {
                  "normal": {
                      "color": "#BA55D3"
                  }
              },
              "smooth": true
          }
      ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);