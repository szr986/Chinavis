var xData = ["兴趣培养", "职业培训", "语言学习", "高等教育", "早幼教", "K12课外辅导", "留学服务", "不使用"],
    yData1 = [30.7, 30.2, 28.1, 18.5, 16.7, 13.1, 10.9, 25.2],
    yData2 = [28.2, 26.9, 25.7, 14.7, 16.8, 12.8, 7.9, 25.7],
    borderData = [],
    legend = ["2019年", "疫情期间"],
    colorArr = [{
            start: "rgba(255, 255, 0,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(255, 165, 0,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let seriesData = [];
var borderHeight = 4;
// for(var i=0;i<yData1.length;i++){
//     yData1[i]=yData11[i]-4;
//     yData2[i]=yData22[i]-4;
// }
xData.forEach(element => {
    borderData.push(borderHeight);
});
[yData1, yData2].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: legend[index],
            type: "bar",
            stack: legend[index],
            data: item,
            barWidth: "15%",
            itemStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: colorArr[index].end
                            }
                        ],
                        globalCoord: false
                    }
                }
            }
        };
        obj2 = {
            name: "",
            type: "bar",
            stack: legend[index],
            itemStyle: {
                normal: {
                    color: colorArr[index].start + "1)"
                }
            },
            data: borderData
        };
        seriesData.push(obj1);
        seriesData.push(obj2);
    } else {
        var obj3 = {
            name: legend[index],
            type: "line",
            yAxisIndex: 1,
            smooth: false,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: colorArr[index].color,
                    borderColor: "#fff",
                    borderWidth: 1
                }
            },
            data: item,
            label: {
                normal: {
                    show: false
                }
            }
        };
        seriesData.push(obj3);
    }
});
// console.log(seriesData);
var myEcharts = echarts.init(document.getElementById('educational_product_type'));

myEcharts.setOption(reactOption = {
    title: {
        text: '中国居民使用的在线教育产品类型',
        // subtext: '企业占比(%)',
        left: 'center',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    // backgroundColor: "#000",
    grid: {
        left: "3%",
        top: "16%",
        right: "3%",
        bottom: 0,
        containLabel: true
    },
    legend: {
        show: true,
        icon: "rect",
        itemWidth: 20,
        itemHeight: 3,
        right: "15%",
        top: "5%",
        textStyle: {
            color: "#fff"
        },
        data: legend,
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var str = "";
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== "") {
                    str +=
                        params[i].name +
                        ":" +
                        params[i].seriesName +
                        params[i].value + "%" +
                        "<br/>";
                }
            }
            return str;
       
        }
    },
    xAxis: [{
        type: "category",
        data: xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            interval:0,
            textStyle: {
                color: "#fff",
                fontSize: 12
            }
        },
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    yAxis: [
        {
            type: "value",
            name: "%",
            nameTextStyle: {
                color: "#fff",
                fontSize: 12
            },
            // min: 0,
            // max: 100,
            axisLabel: {
                formatter: "{value}%",
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255,255,255,0.2)"
                }
            }
        }
    ],
    series: seriesData
});