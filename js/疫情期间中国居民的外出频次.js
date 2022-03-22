var legend = ['几乎没有外出', '1天外出3次以上', '1天外出1-2次', '2-3天外出一次', '4-5天外出一次'];
var myColor = ["#FFFF00", "orange",  "#FFB6C1", "#00FFFF","#FF00FF",   "#FFA07A", "#BA55D3", "#FF6347", "#FF0000"]
var number = [15.8, 1.9, 18.3, 33.8, 30.2]
var data = []
for(var i=0; i<legend.length; i++){
    data.push({
        name:legend[i],
        value:number[i]
    })
}
var myEcharts = echarts.init(document.getElementById('frequency_of_going_out'));

myEcharts.setOption(reactOption = {
    // backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    tooltip: { //提示框
        trigger: "item",
        triggerOn: "mousemove",
        backgroundColor: "rgba(1,70,86,1)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 0.5,
        formatter:'{b}:{c}%',
        // formatter:null,
        textStyle: {
            fontSize: 14
        }
    },
    // yAxis: {
    //     axisLabel:{
    //         formatter:null
    //         }
    // },
    title: [{
        text: '疫情期间中国居民的外出频次',
        right:'center',
        top:"0",
            textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0},
            
        textAlign: "center",
        x: '50%',
        y: '10%',
    }],
    color:myColor,

    series: [{
            // color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['45', '90'],
            center: ['48%', '58%'],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 100,
                    lineStyle: {
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                   
                    // formatter(v) {
                    //     let text = v.name+":"+Math.round(v.percent*100)/100+'%'
                    //     if(text.length <= 6)
                    //     {
                    //         return text;
                    //     }else if(text.length > 6 && text.length <= 17){
                    //         return text = `${text.slice(0,6)}\n${text.slice(6,17)}`
                    //     }else if(text.length > 17){
                    //         return text = `${text.slice(0,6)}\n${text.slice(6,17)}\n${text.slice(17)}`
                    //     }
                    // },
                     formatter: (params) => {
                         console.log(params);
                         return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(1) + '%}'
                     },
                    //  textStyle: {
                    //     fontSize: 30
                    // },
                     borderWidth: 0,
                     borderRadius: 5,
                     padding: [0, -120],
                     height: 50,
                     fontSize: 8,
                     align: 'center',
                    // color: '#3494BD',
                     rich: {
                        b: {
                            fontSize: 12,
                            lineHeight: 10,
                            //  color: 'orange',
                             padding: [0, 0, 0, 0]
                         },
                        c: {
                            fontSize: 12,
                             lineHeight: 10,
                            // color: 'orange'
                         }

                     }
                }
            },
            data: data,
        },
        {
            type: 'pie',
            radius: ['55', '61'],
             center: ['48%', '58%'],
            data: [100],
            label: {
                show: false
            }
        }
    ]
});