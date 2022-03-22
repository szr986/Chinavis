  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('elma'));

  var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
  option = {
      title: {
          text: title,
          left: "center",
        //   y: "10",
          "textStyle": {
            "color": "#fff",
            "fontsize":"20"
        }
      },
    //   backgroundColor: "#1c2e40",
      color: myColor,
      tooltip: {
          trigger: "axis",
          axisPointer: {
              type: "cross",
              crossStyle: {
                  color: "#FFFFFF"
              }
          }
      },
      toolbox: {
          show: true,
          feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
          }
      },
      legend: {
          data: [{
              name: type[0],
              icon: "bar",
              textStyle: {
                  color: "#fff"
              }
          },
          {
              name: type[1],
              icon: "circle",
              textStyle: {
                  "color": "#fff"
              }
          },
          {
              name: type[2],
              icon: "bar",
              textStyle: {
                  color: "#fff"
              }
          },
          {
              name: type[3],
              icon: "circle",
              textStyle: {
                  "color": "#fff"
              }
          }
          ],
          top: "7%",
          textStyle: {
              color: "#fff"
          }
      },
      xAxis: [{
          type: "category",
          data:date,
          axisPointer: {
              type: "shadow"
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#fff"
              }
          },
          axisLine: {
            lineStyle: {
                color: '#26D9EF'
            }
        },
      }],
      yAxis: [{
          type: "value",
          name: "人数",
          nameTextStyle: {
              color: "#fff"
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#fff"
              }
          },
          axisLine: {
            lineStyle: {
                color: '#26D9EF'
            }
        },
      },
      {
          type: "value",
          name: "百分比",
          nameTextStyle: {
              color: "#fff"
          },
          axisLabel: {
              show: true,
              formatter: '{value} %',
              textStyle: {
                  color: "#fff"
              }
          },
          axisLine: {
            lineStyle: {
                color: '#26D9EF'
            }
        },
      }
      ],
      grid: {
          top: "22%",
          bottom: "5%",
          left:"5%"
      },
      series: [{
          name: type[0],
          type: "bar",
          data:numbers1,
          barWidth: "auto",
        //   itemStyle: {
        //       normal: {
        //           "color": "#48a1c7"
        //       }
        //   }
      },
      {
          name: type[2],
          type: "bar",
          data:numbers2,
          barWidth: "auto",
        //   itemStyle: {
        //       normal: {
        //           color: "#c75548"
        //       }
        //   }
      },
      {
          name: type[1],
          type: "line",
          yAxisIndex: 1,
          data: rate1,
        //   itemStyle: {
        //       normal: {
        //           color: "#7FFF00"
        //       }
        //   },
          smooth: true
      },
      {
          name: type[3],
          type: "line",
          yAxisIndex: 1,
          data:rate2,
        //   itemStyle: {
        //       normal: {
        //           color: "#ae6fa3"
        //       }
        //   },
          smooth: true
      }
      ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);