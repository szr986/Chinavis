 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('biye_xuesheng'));

 option = {

     title: {
        text: '2001-2020应届毕业生人数',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },


    //  "backgroundColor": "rgb(20, 58, 110)",
     "color": ["#3cefff"],
     "tooltip": {},
     "grid": {
         "containLabel": true,
         left:"0%",
         right:"1%",
         bottom:"5%"
     },

     "xAxis": [{
         "type": "category",
         "data": ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
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
                 "color": "#fff"
             },
             "rotate": 40
         }
     }],
     "yAxis": [{
         "type": "value",
         "axisLabel": {
             "textStyle": {
                 "color": "#fff",
                //  fontSize:8
             },
             "formatter": "{value}w"
         },
         "splitLine": {
             "lineStyle": {
                 "color": "#0c2c5a"
             }
         },
         "axisLine": {
             "show": false,
            // lineStyle:{
            //     color:"#fff"
            // }
         }
     }],
     "series": [{
         "name": "",
         "type": "pictorialBar",
         "symbolSize": [20, 10],
         "symbolOffset": [0, -5],
         "symbolPosition": "end",
         "z": 12,
         "label": {
             "normal": {
                 "show": true,
                 "position": "top",
                 "formatter": "{c}w",
                 textStyle:{
                    fontSize:8
                }
             },
            
         },
         "data": [114, 145, 212, 280, 338, 413, 495, 559, 611, 631, 660, 680, 699, 727, 749, 770, 795, 820, 834, 874]
     }, {
         "name": "",
         "type": "pictorialBar",
         "symbolSize": [20, 10],
         "symbolOffset": [0, 5],
         "z": 12,
         "data": [114, 145, 212, 280, 338, 413, 495, 559, 611, 631, 660, 680, 699, 727, 749, 770, 795, 820, 834, 874]
     }, {
         "type": "bar",
         "itemStyle": {
             "normal": {
                 "opacity": 0.7
             }
         },
         "barWidth": "20",
         "data": [114, 145, 212, 280, 338, 413, 495, 559, 611, 631, 660, 680, 699, 727, 749, 770, 795, 820, 834, 874],
        
     },
     {
         type: 'effectScatter',
         silent: true,
         tooltip: {
             show: false
         },
         zlevel: 3,
         symbolSize: 10,
         showEffectOn: 'render',
         rippleEffect: {
             brushType: 'stroke',
             color: '#3cefff',
             scale: 5
         },
         itemStyle: {
             color: '#3cefff'
         },
         hoverAnimation: true,
         data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0]
     },
     ]
 }


 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);