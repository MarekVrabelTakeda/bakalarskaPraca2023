<template>
  <div id="chart13"></div>
</template>
<script>
  import VGauge from 'vgauge';

  export default {
    components: {
      VGauge
    },
    data() {
      return {

      };
    },
    mounted() {
      var options = {
        series: [67],
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        colors:['	#ff0000','	#378b29'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['BUY'],
      };

      var chart = new ApexCharts(document.querySelector("#chart13"), options);
      chart.render();

    }
  };
</script>

<style scoped>

</style>