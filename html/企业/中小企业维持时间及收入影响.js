

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(
    option = {
        title: [{
            text: '新冠疫情下中国中小企业现金维持时间的情况',
            subtext: '来源：《中欧商业评论》文章，作者朱武祥，刘军，魏炜，N=995；艾瑞咨询研究院',
            right:'center'
        },{
            text: '新冠疫情对中国中小企业营业收入的影响情况',
            top: '50%',
            right:'center'
        }],
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['1个月以内','2个月','3个月','4个月','5个月','6个月以上'],

        },
        {
            type: 'category',
            gridIndex: 1,
            data: ['下降10%以下','下降10%~20%','下降20%~50%','下降50%以上','无法判断'],
        }
    ],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLabel: {
                formatter: '{value} %'},
        },{
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} %'},
        }],
        grid: [
            {bottom: '55%'},
            {top: '55%'}
        ],

        series: [{
            data: [34,33.1,17.0,1.6,3.4,10],
            xAxisIndex: 0, yAxisIndex: 0,
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
           
        },
        {
            data: [4,17,28.5,29.6,20.9],
            type: 'bar',
            label:{show:true,
                formatter:'{c}%'},
            xAxisIndex: 1, yAxisIndex: 1
        }
    ]
    }
    
)