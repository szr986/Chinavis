var myChart = echarts.init(document.querySelector(".active .bar"));
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
var option = {
    title: {
      text: '2019&2020年春节假期期间生鲜电商平台日均活跃用户数',
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
      data: ['春节假期第一天', '春节假期第二天','春节假期第三天','春节假期第四天','春节假期第五天','春节假期第六天','春节假期第七天']
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
      name: '增长率（%）',
      min: 0,
      position: 'left',
      axisLine: {
        lineStyle: {
            type: 'solid',
            color: '#fff',//左边线的颜色
            width:'1.5'
        }
    },
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
      data: [5.5,9.3,10.1,16.5,36.9,40.6,41.8]
  }, {
      name: '2020年（万台）',
      type: 'bar',
    
    
      yAxisIndex: 1,
      label: {
          normal: {
              show: true,
              position: 'top',
            //   textStyle:{color:'orange'}
          }
      },
      data: [335.3,336.8,337.4,341.7,343.8,349.8,351.0]
  }, {
      name: '2019年（万台）',
      type: 'bar',
    
      
         yAxisIndex: 1,
      label: {
          normal: {
              show: true,
              position: 'top',
            //   textStyle:{color:'#00FFFF'}
          }
      },
  
      data: [317.9,308.0,306.5,293.2,251.1,248.8,247.5]
    
  }]
};
myChart.setOption(option);
