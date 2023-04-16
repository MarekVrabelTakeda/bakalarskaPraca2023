<template>
    <v-container>
        <v-row no-gutters>
           <v-col cols="12" lg="3" xl="3">
                <base-card>
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark1"></div>
                    </div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark2"></div>
                    </div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark3"></div>
                    </div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark4"></div>
                    </div>
                </base-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark5"></div>
                    </div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark6"></div>
                    </div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body"><div id="chart-spark7"></div></div>
                </base-card>
            </v-col>
           <v-col cols="12" lg="3" xl="3">
                <base-card >
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <div id="chart-spark8"></div>
                    </div>
                </base-card>
            </v-col>
        </v-row>
        

    </v-container>

</template>

<script>
    import BaseCard from '../Base/BaseCard'
    export default {
        components: {
            BaseCard
        },
        mounted() {


            var randomizeArray = function (arg) {
                var array = arg.slice();
                var currentIndex = array.length,
                    temporaryValue, randomIndex;

                while (0 !== currentIndex) {

                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            // data for the sparklines that appear below header area
            var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43,
                19, 46
            ];
            var options = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#ff0000'],
                title: {
                    text: '$424,652',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#ff0000'
                    }
                },
                subtitle: {
                    text: 'Sales',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#ff0000'
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#chart-spark1"), options);
            chart.render();

            var optionsSpark2 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#74d680'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#74d680'
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#74d680'
                    }
                }
            };

            var chartSpark2 = new ApexCharts(document.querySelector("#chart-spark2"), optionsSpark2);
            chartSpark2.render();

            var optionsSpark3 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },

                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.1
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                yaxis: {
                    min: 0
                },
                 colors: ['#74d680'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#74d680'
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#74d680'
                    }
                }
            };

            var chartSpark3 = new ApexCharts(document.querySelector("#chart-spark3"), optionsSpark3);
            chartSpark3.render();
            var optionsSpark4 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                 colors: ['#ff0000'],
                title: {
                    text: '$424,652',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#ff0000'
                    }
                },
                subtitle: {
                    text: 'Sales',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#ff0000'
                    }
                }
            };

            var chartSpark4 = new ApexCharts(document.querySelector("#chart-spark4"), optionsSpark4);
            chartSpark4.render();
            var optionsSpark5 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#ff0000'],
                title: {
                    text: '$424,652',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#ff0000'
                    }
                },
                subtitle: {
                    text: 'Sales',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#ff0000'
                    }
                }
            };

            var chartSpark5 = new ApexCharts(document.querySelector("#chart-spark5"), optionsSpark5);
            chartSpark5.render();
            var optionsSpark6 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                 colors: ['#ff0000'],
                title: {
                    text: '$424,652',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#ff0000'
                    }
                },
                subtitle: {
                    text: 'Sales',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#ff0000'
                    }
                }
            };

            var chartSpark6 = new ApexCharts(document.querySelector("#chart-spark6"), optionsSpark6);
            chartSpark6.render();
            var optionsSpark7 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                 colors: ['#74d680'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#74d680'
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#74d680'
                    }
                }
            };

            var chartSpark7 = new ApexCharts(document.querySelector("#chart-spark7"), optionsSpark7);
            chartSpark7.render();
            var optionsSpark8 = {
                series: [{
                    data: randomizeArray(sparklineData)
                }],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                tooltip: {
                    theme: "dark"
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                  colors: ['#74d680'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        color: '#74d680'
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        color: '#74d680'
                    }
                }
            };

            var chartSpark8 = new ApexCharts(document.querySelector("#chart-spark8"), optionsSpark8);
            chartSpark8.render();
        },
    }
</script>