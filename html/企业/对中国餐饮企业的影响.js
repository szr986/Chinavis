var colorList2 = ['#FF1493', '#32CD32', '#00BFFF','#FFFF00', '#D2A2CC']
var colorList3 = ['#00BFFF','#FFFF00', '#D2A2CC']


var myChart = echarts.init(document.getElementById('canyin'));
myChart.setOption(
    option = {

        title: [{
            text: '2020年春节期间中国餐饮企业闭店情况',
            top: '5%',
            left:'18%',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        },
        {
            text: '2020年春节期间中国餐饮企业营收情况',
            top: '5%',
            left:'58%',
            right:'center',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        },{
            text:'截止2020年2月19日中国餐饮企业倒闭情况',
            top:'50%',
            left:'18%',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        },
        {
            text:'防控期间外卖占比分布情况',
            top:'50%',
            left:'60%',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'normal',
            },
        }
    ],
    color:["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"],


        series: [
            {
                data: [  {value: 73.0, name: '关闭旗下所有门店'},
                {value: 8.0, name: '关闭旗下80%以上门店'},
                {value: 7.0, name: '关闭旗下50%以上门店'},
                {value: 7.0, name: '关闭旗下不到一半门店'},
                {value: 5.0, name: '继续经营'},
            ],
                type: 'pie',
                radius: '30%',
                center: ['30%', '30%'],
                label:{
                    show:true,
                    formatter:'{b}:{d}%'},
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList2[params.dataIndex]
                            }
                        }
                    },

            },
            {
                data: [  {value: 78.0, name: '同比损失达到100%'},
                {value: 9.0, name: '同比损失90%以上'},
                {value: 7.0, name: '同比损失70~90%'},
                {value: 5.0, name: '同比损失70%以下'},
            ],
                type: 'pie',
                
                radius: '30%',
                center: ['70%', '30%'],
                label:{show:true,
                    formatter:'{b}:{d}%'},
                     itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList2[params.dataIndex]
                            }
                        }
                    },
            },
             
        {
            data: [  {value: 53.9, name: '响应当地政策停业或者关闭部分门店'},
            {value: 33.1, name: '自发停业或者关闭部分门店'},
            {value: 13.0, name: '通过开展外卖或门店设立窗口，\n设点设摊等多种经营方式坚持经营'},
        ],
            type: 'pie',
            roseType: 'area',
            radius: '30%',
            center: ['30%', '75%'],
            label:{show:true,
                formatter:'{b}:{d}%'},
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList3[params.dataIndex]
                        }
                    }
                },
        },
        {
            data: [  {value: 46.4, name: '外卖收入占比50%以下'},
            {value: 16.6, name: '外卖收入占比70%以上'},
            {value: 20.5, name: '外卖收入占比50~70%'},
        ],
            type: 'pie',
            radius: '30%',
            roseType: 'radius',
            center: ['70%', '75%'],
            label:{show:true,
            formatter:'{b}:{d}%'},
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList3[params.dataIndex]
                    }
                }
            },
        }
    ]
    }
    
)