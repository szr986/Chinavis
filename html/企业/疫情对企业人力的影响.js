  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('renli'));

  option = {

  title: {
    text: '疫情爆发对企业人力资源相关工作的影响',
    x: 'center',
    y: 0,
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
    },
},
  grid:{
      left:"25%",
      right:"5%",
      bottom:"15%"
  },
//   backgroundColor: "#0f375f",
  legend: {
      data: ["产出"],
      top: "5%",
      right: '10',
      textStyle: {
          color: "#fff",
          fontSize: 16
      }
  },
  barWidth: 15,
  xAxis: {
      type: 'value',
      splitLine: {
          lineStyle: {
              color: "rgba(255,255,255,0.2)"
          }
      },
      axisTick: {
          show: false
      },
      axisLine: { //  改变x轴颜色
          lineStyle: {
              color: '#fff'
          }
      },
      axisLabel: { //  改变x轴字体颜色和大小
          textStyle: {
              color: "#fff",
              fontSize: 16
          }
      }
  },
  yAxis: {
      type: 'category',
      data: aspects2,
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLine: { //  改变y轴颜色
          lineStyle: {
              color: '#fff'
          }
      },
      axisLabel: { //  改变y轴字体颜色和大小
          //formatter: '{value} m³ ', //  给y轴添加单位
          textStyle: {
              color: "#fff",
              fontSize: 12
          }
      }
  },
  series: [{
          type: 'bar',
          name: "产出",
          itemStyle: {
              normal: {
                  label: {
                      show: true, //开启显示
                      position: 'right', //在上方显示
                      textStyle: { //数值样式
                          color: "#fff ",
                          fontSize: 16,
                          fontWeight: 600,
                      }
                      
                  },
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: '#FFFF00'
                  }, {
                      offset: 1,
                      color: 'orange'
                  }]),
                  borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: '#FFB6C1'
                  }, {
                      offset: 1,
                      color: '#00FFFF'
                  }]),
                  borderWidth: 2
              }
          },
          data: persent2,
          label:{
              normal:{
                  formatter:"{c}%"
              }
          }
          
      },
  ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);