  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('caipua_app'));
  var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]

  option = {
    //   backgroundColor: '#0e202d',
      "grid": {
          "top": "15%",
          "left": "8%",
          "bottom": "5%",
          "right": "8%",
          "containLabel": true
      },
      "title": {
          "text": "菜谱类APP增长数",
          "left": "center",
          "y": "10",
          "textStyle": {
            "color": "#fff",
            "fontsize":"20"
        }
      },
      color:myColor,
      legend: {
          "data": [
              {
                  "name": "豆果美食",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  },
                //   "color": "#FF00FF"
              },
              {
                  "name": "下厨房",
                  "icon": "circle",
                  "textStyle": {
                      "color": "#fff"
                  },
                //   "color": "#FF0000"
              }],
          "top": "10%",

      },
      "xAxis": [
          {
              "type": "category",
              "data": ["豆果美食", "下厨房"],
              "axisTick": {
                  "alignWithLabel": true
              },
              "nameTextStyle": {
                  "color": "#fff"
              },
              "axisLine": {
                  "lineStyle": {
                      "color": "#fff"
                  }
              },
              "axisLabel": {
                  "textStyle": {
                      "color": "#fff",
                      fontSize:16
                  },
                  "bottom": "5%",
                  "fontSize": 10
              }
          }
      ],
      "yAxis": [{
          "name": "千万台",
          "nameTextStyle": {
            "color": "#fff"
        },
          "type": "value",
          "axisLabel": {
              "textStyle": {
                  "color": "#fff"
              },
              "formatter": "{value}"
          },
          "splitLine": {
              "lineStyle": {
                  "color": "#fff"
              }
          },
          "axisLine": {
              "show": false
          }
      }],
      "series": [{
          "name": "",
          type: 'pictorialBar',
          symbolSize: [60, 16],
          symbolOffset: [0, -10],
          symbolPosition: 'end',
          z: 12,
          //"barWidth": "20",
          "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}"
              }
          },
          "data": [{
              "name": "豆果美食",
              "value": 6.16,
            //   "itemStyle": {
            //       "color": "#FFD700"
            //   }
          }, {
              "name": "下厨房",
              "value": 12.25,
            //   "itemStyle": {
            //       "color": "#3cefff"
            //   }
          }]
      },
      {
          name: '豆果美食',
          type: 'pictorialBar',
          symbolSize: [60, 16],
          symbolOffset: [0, 10],
          // "barWidth": "20",
          z: 12,
          "data": [{
              "value": 6.16,
            //   "itemStyle": {
            //       "color": "#59cb42"
            //   }
          }, {
              "value": 12.25,
            //   "itemStyle": {
            //       "color": "#3cefff"
            //   }
          }]
      },
      {
          name: '下厨房',
          type: 'pictorialBar',
          symbolSize: [90, 30],
          symbolOffset: [0, 20],
          z: 10,
          itemStyle: {
              normal: {
                  color: 'transparent',
                  borderColor: '#14b1eb',
                  borderType: 'dashed',
                  borderWidth: 5
              }
          },
          data: [6.15, 12.25]
      },
      {
          type: 'bar',
          itemStyle: {
              normal: {
                  //color: '#14b1eb',
                  opacity: .7
              }
          },
          //silent: true,
          "barWidth": "60",
          //barGap: '-100%', // Make series be overlap
          "data": [{
              "value": 6.16,
            //   "itemStyle": {
            //       "color": "#59cb42"
            //   }
          }, {
              "value": 12.25,
            //   "itemStyle": {
            //       "color": "#3cefff"
            //   }
          }]
      }


      ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);