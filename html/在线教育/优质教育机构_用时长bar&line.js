  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('yongshi'));
  option = {
      grid: {
          top: "12%",
          bottom: "11%",
          left: "8%"
        },
      title:{
          text: title,
          x: 'center',
          y: 0,
          textStyle: {
              color: '#fff',
              fontSize: 20,
            //   fontWeight: 'normal',
          },
      },
    //   backgroundColor: "#0f375f",
      tooltip: {
          trigger: "axis",
          axisPointer: {
              type: "shadow",
              label: {
                  show: true
              }
          }
      },
      legend: {
          data: zuobiao,
          top: "5%",
          right: '10',
          textStyle: {
              color: "#fff",
              fontSize: 16
          }
      },
      xAxis: {
          data: type,
          axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                  color: '#26D9FF',
                  width: 2
              }
          },
          axisTick: {
              show: true //隐藏X轴刻度
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: '#fff', //X轴文字颜色
                  fontSize: 10,

              },
              rotate: 30
          },
          splitArea: {
              show: true,
              areaStyle: {
                  color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
              }
          }
      },
      yAxis: [{
          type: "value",
          /*name: "亿元",*/
          nameTextStyle: {
              color: '#fff',
              fontSize: 16
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: true
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: '#26D9FF',
                  width: 2
              }
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: '#fff',
                  fontSize: 16
              }
          },

      },
      {
          type: "value",
          /*name: "同比",*/
          nameTextStyle: {
              color: '#26D9FF',
              fontSize: 16
          },
          position: "right",
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                  color: '#fff',
                  fontSize: 16
              }
          }
      }
      ],
      series: [{
          name: zuobiao[1],
          type: "line",
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: true, //平滑曲线显示
          showAllSymbol: true, //显示所有图形。
          symbol: "circle", //标记的图形为实心圆
          symbolSize: 8, //标记的大小
          itemStyle: {
              //折线拐点标志的样式
              color: "#1045A0",
              borderColor: "#3D7EEB",
              width: 2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4
          },
          lineStyle: {
              color: "#3D7EEB",
              width: 2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4
          },
          areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#FFFF00"
            },
            {
                offset: 1,
                color: "#FFB6C1"
              }
              ])
          },
          data: increase
      },
      {
          name: zuobiao[0],
          type: "bar",
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'orange' }, { offset: 1, color: '#FFA07A' }]),
                  borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#00FFFF' }, { offset: 1, color: '#FF6347' }]),
                  borderWidth: 2
              }
          },
          data: duli_numbers
      }
      ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);