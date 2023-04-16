<template>

<div id="chart1"></div></template>

<script>
export default {
    mounted() {
            function generateData(count, yrange) {
                var i = 0;
                var series = [];
                while (i < count) {
                    var x = '$' + (i + 1).toString();
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    series.push({
                        x: x,
                        y: y
                    });
                    i++;
                }
                return series;
            }

            var options = {
          series: [{
            name: 'BTC',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'LINK',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'LTC',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'AVOX',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'MANA',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'BAT',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'DOGE',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'SOL',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          },
          {
            name: 'SHIB',
            data: generateData(20, {
              min: -30,
              max: 55
            })
          }
        ],
          chart: {
          height:750,
          type: 'heatmap',  
          tooltip: {
             theme: "dark",
         
        },
       toolbar: {
        show: false}
        
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.9,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                  from: -30,
                  to: 5,
                  name: 'LOSS',
                  color: '#FF0000'
                },
                
                
                {
                  from: 5,
                  to: 55,
                  name: 'PROFIT',
                  color: '#378b29'
                }
              ]
            }
          }
        },
         dataLabels: {
          enabled: true,
          style: {
            colors: ['#000']
          }
        }, tooltip: {
             theme: "dark",
         
        },
        stroke: {
          width: 10
        },
        title: {
          text: '',
          color:['#eee']
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
        },
}
</script>