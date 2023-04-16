<template>

    <v-row no-gutters>
          <v-col cols="12" md="3" sm="12">
            <v-card>
                <v-sheet class="v-sheet--offset mx-auto" color="green" elevation="12" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16">
                    </v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-bolder mb-2">
                        BTCUSDT
                    </div>
                    <div class="subheading font-weight-light grey--text">
                        $54.548
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2 red text" small>
                        south

                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">Profit Bot</span>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="12">
              <v-card>
                <v-sheet class="v-sheet--offset mx-auto" color="red" elevation="12" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16">
                    </v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-bolder mb-2">
                        BTCUSDT
                    </div>
                    <div class="subheading font-weight-light grey--text">
                        $54.548
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2 red text" small>
                        south

                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">Profit Bot</span>
                </v-card-text>
            </v-card>
        </v-col>
       <v-col cols="12" md="3" sm="12">
             <v-card>
                <v-sheet class="v-sheet--offset mx-auto" color="primary" elevation="12" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16">
                    </v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-bolder mb-2">
                        BTCUSDT
                    </div>
                    <div class="subheading font-weight-light grey--text">
                        $54.548
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2 red text" small>
                        south

                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">Profit Bot</span>
                </v-card-text>
            </v-card>
        </v-col>
       <v-col cols="12" md="3" sm="12">
              <v-card>
                <v-sheet class="v-sheet--offset mx-auto" color="accent" elevation="12" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16">
                    </v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-bolder mb-2">
                        BTCUSDT
                    </div>
                    <div class="subheading font-weight-light grey--text">
                        $54.548
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2 red text" small>
                        south

                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">Profit Bot</span>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>
<script>
  export default {
    data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
  }
</script>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>