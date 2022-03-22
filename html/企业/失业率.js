  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('shiye'));

  option = {
      title: {
        text: '疫情期失业率',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
      },
      grid:{
          bottom:"15%"
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          },
      },
      legend: {
          data: ['全国城镇调查失业率(%)', '31个大城市城镇调查失业率(%)'],
          top:"8%",
          "textStyle": {
            "color": "#fff"
        }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: unemployment_data[0],
          "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#fff"
            }
        }
      },
      yAxis: {
          type: 'value',
          axisLabel: {
              formatter: '{value} %'
          },
          axisPointer: {
              snap: true
          },
          "axisLine": {
            "show": false,
        //    lineStyle:{
        //        color:"#fff"
        //    }
        },
          scale:true,  //y轴下标自适应从值的最小值开始
          "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#fff"
            },
        },
      },
      // visualMap: {
      //     show: false,
      //     dimension: 0,
      //     pieces: [
      //     {
      //         gt: 10,
      //         lte: 12,
      //         color: 'red'
      //     }
      //     ]
      // },
      series: [
          {
              name: '全国城镇调查失业率(%)',
              type: 'line',
              smooth: true,
              data: unemployment_data[1],
              "itemStyle": {
                "normal": {
                    "color": "#FFFF00"
                }
              },
              markArea: {
                  data: [
                      [{
                      name: '疫情高峰期',
                      xAxis: '2020年1月'
                  }, 
                  {
                      xAxis: '2020年3月'
                  }]
                  ]
              }
          },
          {
              name: '31个大城市城镇调查失业率(%)',
              type: 'line',
              smooth: true,
              data: unemployment_data[2],
              "itemStyle": {
                "normal": {
                    "color": "orange"
                }
              },
              markArea: {
                  data: [
                      [{
                      name: '',
                      xAxis: '2020年1月'
                  }, 
                  {
                      xAxis: '2020年3月'
                  }]
                  ]
              }
          }
      ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);