var titles = [
    {
        text:'症状性住院病例百分比',
        top:'10%',
        left:'20%'
    },
    {
        text:'m',
        top:'10%',
        right:'20%'
    },
    {
        text:'n',
        top:'',
        left:'',
    }
]
var myChart = echarts.init(document.getElementById('severity_by_age'));
myChart.setOption(reactOption =
 {
    legend: {},
    tooltip: {},
    grid:{
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    dataset: {
        source: Severity_by_age
    },
    // title:{
    //         text:'Percent_of_symptomatic_cases_hospitalized',
    //         textStyle:{
    //         color: '#00EEEE',
    //         width:50,
    //         height:50
    //         },
    //         center:['25%', '30%'],
    //         top: 'middle',
    //     },
    // {
    //     text:'Percent_hospitalized_cases_critical',
    //     textStyle:{
    //     color: '#00EEEE',
    //     width:50,
    //     height:50
    //     },
    //     center:['75%', '30%'],
    //     top: 'middle',
    // },
    title:titles,
    series: [{
        type: 'pie',
        radius: 60,
        top:'60',
        center: ['25%', '30%'],
        name:"Percent_of_symptomatic_cases_hospitalized",
        title : {
            text:'Percent_of_symptomatic_cases_hospitalized',
            x:'center',
            y: 'bottom',
            textStyle:{
            color: '#00EEEE',
            },
        },

        encode: {
            itemName: 'Age',
            value: 'Percent_of_symptomatic_cases_hospitalized'
        }
        // No encode specified, by default, it is '2012'.
    }, {
        type: 'pie',
        radius: 60,
        center: ['75%', '30%'],
        name:"Percent_hospitalized_cases_critical",
        encode: {
            itemName: 'Age',
            value: 'Percent_hospitalized_cases_critical'
        }
    }, {
        type: 'pie',
        radius: 60,
        center: ['50%', '75%'],
        name:"Infection_fatality_ratio_corrected",
        encode: {
            itemName: 'Age',
            value: 'Infection_fatality_ratio_corrected'
        }
    }]
})
// myChart.setOption(option);