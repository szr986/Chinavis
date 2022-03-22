var myChart = echarts.init(document.querySelector(".after .bar"));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
var option = {
    title: {
      text: '2019&2020年春节假期后生鲜电商平台日均活跃用户数',
      right:'center',
            textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0
            },
      left: 'center',
      top: '0%',
  },
  tooltip: {
      trigger: 'axis',
      formatter: function(params, ticket, callback) {

          var res = params[0].name;

          for (var i = 0, l = params.length; i < l; i++) {
              if (params[i].seriesType === 'line') {
                  res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '%';
              } else {
                  res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '万台';
              }
          }
          return res;

      }
  },
  grid: {
      containLabel: true
  },
//   color:['#FF4500','#9B30FF','#40E0D0'],
  legend: {
    x:'center',
    y:'30',
    textStyle:{
        color:'#fff',
        fontSize:8
      },
      data: ['增长率（%）', '2020年（万台）', '2019年（万台）']
  },
  xAxis: [{
      type: 'category',
      axisLine: {
        lineStyle: {
            type: 'solid',
            color: '#fff',//左边线的颜色
            width:'1.5'
        }
    },
    axisLabel: {
        textStyle: {
            color: '#fff',//坐标值得具体的颜色

        }
    },

      axisTick: {
          alignWithLabel: true
      },
      data: ['春节假期后第一天', '春节假期后第二天','春节假期后第三天','春节假期后第四天','春节假期后第五天','春节假期后第六天','春节假期后第七天']
  }],
  dataZoom: [{
      type: 'slider',
      xAxisIndex: 0,
      filterMode: 'empty',
      start: 0,
      end: 100,
      textStyle:{
          color:"#fff"
      }
  }, {
      type: 'slider',
      yAxisIndex: 0,
      filterMode: 'empty',
      start: 0,
      end: 100,
      textStyle:{
          color:"#fff"
      }
  }, {
      type: 'inside',
      xAxisIndex: 0,
      filterMode: 'empty',
      start: 0,
      end: 100,
      textStyle:{
          color:"#fff"
      }
  }, {
      type: 'inside',
      yAxisIndex: 0,
      filterMode: 'empty',
      start: 0,
      end: 100,
      textStyle:{
          color:"#fff"
      }
  }],
  yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
            type: 'solid',
            color: '#fff',//左边线的颜色
            width:'1.5'
        }
    },
      name: '增长率（%）',
      min: 0,
      position: 'left',
      axisLabel: {
          formatter: '{value} %',
          textStyle: {
            color: '#fff',//坐标值得具体的颜色

        }
      }
  }, {
      type: 'value',
      axisLine: {
        lineStyle: {
            type: 'solid',
            color: '#fff',//左边线的颜色
            width:'1.5'
        }
    },
      name: '活跃用户数（万台）',
      min: 0,
      position: 'right',
      axisLabel: {
          formatter: '{value} 万台',
          textStyle: {
            color: '#fff',//坐标值得具体的颜色

        }
      }
  }],
  color:myColor,
  series: [{
      name: '增长率（%）',
      type: 'line',
      label: {
          normal: {
              show: true,
              position: 'top',
            //   textStyle: {
            //     color: '#FFFF00',//坐标值得具体的颜色
    
            // }
          }
      },
      lineStyle: {
          normal: {
              width: 3,
            //   color:'#FF4500',
            //   shadowColor: 'rgba(0,0,0,0.4)',
            //   shadowBlur: 10,
            //   shadowOffsetY: 10
          }
      },
      data: [45.4,41.8,38.1,41.3,16.4,8.2,11.8]
  }, {
      name: '2020年（万台）',
      type: 'bar',
//       itemStyle: {
//         normal: {
// 　　　　　　　　//这里是重点
//             color: function(params) {
//                 //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
//                 var colorList = ['#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF','#9B30FF'];
//                 return colorList[params.dataIndex]
//             }
//         }
//     },
      yAxisIndex: 1,
      label: {
          normal: {
              show: true,
              position: 'top',
            //   textStyle:{color:'orange'}
          }
      },
      data: [366.5,358.5,351.2,358.0,368.2,351.0,372.2]
  }, {
      name: '2019年（万台）',
      type: 'bar',
//       itemStyle: {
//         normal: {
// 　　　　　　　　//这里是重点
//             color: function(params) {
//                 //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
//                 var colorList = ['#40E0D0','#40E0D0','#40E0D0','#40E0D0','#40E0D0','#40E0D0','#40E0D0'];
//                 return colorList[params.dataIndex]
//             }
//         }
//     },
      yAxisIndex: 1,
      label: {
          normal: {
              show: true,
              position: 'top',
            //   textStyle:{color:'#00FFFF'}
          }
      },
      data: [252.1,252.9,254.3,253.3,361.2,324.3,332.9]
  }]
};
myChart.setOption(option);
