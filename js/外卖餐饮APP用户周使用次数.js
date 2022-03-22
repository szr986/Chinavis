var myChart = echarts.init(document.getElementById('appshiyongcishu'));
var myColor = ["#00FFFF","#9B30FF", "orange", "#FFFF00", "#FFA07A", "#BA55D3", "#00FF00","#FFB6C1", "#8B4513"]
myChart.setOption(
option = {
    title: {
      text: '疫情期间到店/外卖餐饮APP用户周使用次数',
      left: 'center',
      top: 0,
      textAlign:'left',
      textStyle: {
          color: '#fff',
          fontSize: "20",
          fontWeight: 0
        }
    },
    color:myChart,
    grid: {
        top: "20%",
        bottom: "5%",
        right:"11%",
        left:"12%"
    },
      // backgroundColor:"#0f375f",
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
        data: ["APP使用次数（到店）", "APP使用次数（外卖）", "到店同比","外卖同比"],
        top: "5%",
        right:'10',
        textStyle: {
          color: "#fff",
          fontSize: 16
        }
      },
      xAxis: {
        data: [
          "12月第一周",
          "12月第二周",
          "12月第三周",
          "12月第四周",
          "1月第一周",
          "1月第二周",
          "1月第三周",
          "1月第四周",
          "2月第一周" ],
          axisLine: {
            lineStyle: {
                color: '#26D9EF'
            }
           },
        axisTick: {
          show: true //隐藏X轴刻度
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff", //X轴文字颜色
            fontSize: 16
          }
        },axisLine: {
                lineStyle: {
                    color: '#26D9EF'
                }
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
          color: "#fff",
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
            color: '#fff',
            width:2
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
    
      },
        {
          type: "value",
          /*name: "同比",*/
          nameTextStyle: {
            color: "#fff",
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
              color: "#fff",
              fontSize: 16
            }
          }
        }
      ],
      series: [
        {
          name: "APP使用次数（到店）",
          type: "bar",
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#FFFF00"
              },
                {
                  offset: 1,
                  color: "orange"
                }
              ]),
              borderColor:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#FFB6C1"
              },
                {
                  offset: 1,
                  color: "#00FFFF"
                }
              ]),
              borderWidth: 2
            }
          },
          data: [23990.9,23991.9,23894.1,23961.1,22837.1,21605.6,22452.3,17876.5,17087.0]
        },
        {
          name: "APP使用次数（外卖）",
          type: "bar",
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#BA55D3'}, {offset: 1, color: '#FF6347'}]),
              borderColor:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(180,240,255,1)'}, {offset: 1, color: 'rgba(15,197,243,1)'}]),
              borderWidth: 2
            }
          },
          data: [14118.5,13538.1,14060.3,13886.2,13672.6,13581.2,12642.0,11358.5,10266.4]
        },
        {
            name: "到店同比",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "rgba(15,197,243,1)",
              borderColor: "#3D7EEB",
              width: 2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4
            },
            lineStyle: {
              color: "rgba(15,197,243,1)",
              width:2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#FF00FF"
              },
                {
                  offset: 1,
                  color: "#FFA07A"
                }
              ])
            },
            data: [19,12,11,10,7,-7,-1,-18,-12]
          },
          {
            name: "外卖同比",
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
              width:2,
              shadowColor: "#3D7EEB",
              shadowBlur: 4
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(61,126,235, 0.5)"
              },
                {
                  offset: 1,
                  color: "rgba(61,126,235, 0)"
                }
              ])
            },
            data: [6,4,9,4,2,0,-7,-10,-4]
          },
      ]
    })