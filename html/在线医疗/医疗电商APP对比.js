


var myChart = echarts.init(document.getElementById('app'));
myChart.setOption(
    option = {
       color:["#CC6600","#FFCC33","#33CC99"],
        title: [{
            text: '疫情防控期间O2O医疗电商的订单增量情况',
            right: 'center',
            top:'5%',
            left: '60%',
            textStyle: {
                color: "#eee",
                fontSize: "12"
            }
        }, {
            text: '2020年疫情防控期间在线医疗类APP日均独立设备数',
            left: '12%',
            right: 'center',
            top:'5%',
            textStyle: {
                color: "#eee",
                fontSize: "12"
            }

        },
        {
            subtext: '来源：UserTracker多平台网民行为监测数据库（桌面及智能终端）',
            left: 'center',
            top: '8%',
            subtextStyle: {
                color: "#eee",
                fontSize: "9"
            }
        }
        ],

        legend: [{
           
            data: ['叮当快药日订单量', '美团外卖送药上门服务慢性病处方药销量'],
            left: '60%',
            top: '95%',
            textStyle: {
                color: "#eee",
                fontSize: "9"
            }
        }, {
            data: ['日均独立设备数（万台）'],
            left: '18%',
            top: '95%',
            textStyle: {
                color: "#eee",
                fontSize: "9"
            }
        }],
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['2019年春节期间', '2020年春节期间'],
            axisLabel: {
                textStyle: {
                    color: "#eee",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eee', // 颜色
               
                }
            }

        }

            , {
            type: 'category',
            gridIndex: 1,
            data: ['19春节前', '19春节', '20春节前', '20春节', '20春节后'],
            axisLabel: {
                textStyle: {
                    color: "#eee",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eee', // 颜色
               
                }
            }

        }
        ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            show: false

        }, {
            show: false,
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} 万台',
                textStyle: {
                    color: "#eee",
                    fontSize: "12"
                }
            }
        }

            ,],
        grid: [
            { left: '55%', },
            { right: '55%' ,},
           
        ],

        series: [{
            name: '叮当快药日订单量',
            data: [21, 21 * 7],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',

        },
        {
            name: '美团外卖送药上门服务慢性病处方药销量',
            data: [34, 34 * 2.37],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
        },
        {
            name: '日均独立设备数（万台）',
            data: [610.6, 549.6, 620.5, 628.7, 613.4],
            xAxisIndex: 1, yAxisIndex: 1,
            type: 'bar',
            label: {
                show: true,
                formatter: '{c}万台'
            },
        },

        ]
    }

)