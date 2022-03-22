var resumptionOfWork = echarts.init(document.getElementById('resumptionOfWork'));
var colorList1 = ['#FF1493', '#FFFF00']

resumptionOfWork.setOption(reactOption ={
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{d}%',
        textStyle:{
            fontSize:16
        }
    },
    // grid:{
    //     left:20
    // },
    // backgroundColor: '#080b30',
    legend: {
        orient: 'vertical', 
        left: 20,
        data: ['已复工', '未复工'],
        textStyle:{
            fontSize:10,
            color:'#fff'
        }
    },

    title: {
        text: '复工情况',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    series: [
        {
            name: '复工情况：',
            type: 'pie',
            radius: ['50%', '70%'], 
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                normal:{
                    formatter:'{b}:{d}%',
                    color:''
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList1[params.dataIndex]
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 17.7, name: '未复工'},
                {value: 82.3, name: '已复工'},

            ]
        }
    ]
});
