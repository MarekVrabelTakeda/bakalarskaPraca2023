<template>

  <div>
    <v-row no-gutters>
      <base-header>
        <div slot="page-header">Dashboard</div>
      </base-header>
    </v-row>

    <v-row no-gutters>
    <v-col cols="12" lg="3" xl="3">
        <base-card>
          <div slot="card-header">

          </div>
          <div slot="card-body">
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/btc.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline">
                  BTCUSDT
                </div>
                <v-list-item-title class="subtitle-1 ">
                  $431,684,298.45
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip color="green" class="white--text" label>
                    <v-icon left>
                      north
                    </v-icon>
                    + 0.45%
                  </v-chip>

                </v-list-item-subtitle>
              </v-list-item-content>


            </v-list-item>

            <v-card-actions>
              <v-sparkline :fill="fill" :gradient="selectedGradient" :line-width="width" :padding="padding"
                :smooth="radius || false" :value="value" auto-draw></v-sparkline>
            </v-card-actions>
          </div>
        </base-card>
      </v-col>
<v-col cols="12" lg="3" xl="3">
        <base-card>
          <div slot="card-header">

          </div>
          <div slot="card-body">
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/ada.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline">
                  ADAUSDT
                </div>
                <v-list-item-title class="subtitle-1 ">
                  $4298.45
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip color="red" class="white--text" label>
                    <v-icon left>
                      south
                    </v-icon>
                    - 3.45%
                  </v-chip>

                </v-list-item-subtitle>
              </v-list-item-content>


            </v-list-item>

            <v-card-actions>
              <v-sparkline :fill="fill" :gradient="selectedGradient2" :line-width="width" :padding="padding"
                :smooth="radius || false" :value="value" auto-draw></v-sparkline>
            </v-card-actions>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="3" xl="3">
        <base-card>
          <div slot="card-header">

          </div>
          <div slot="card-body">
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80">
                <img src="../../assets/images/coin/sxp.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline">
                  SXPUSDT
                </div>
                <v-list-item-title class="subtitle-1 ">
                  $4026.45
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip color="green" class="white--text" label>
                    <v-icon left>
                      north
                    </v-icon>
                    + 0.97%
                  </v-chip>

                </v-list-item-subtitle>
              </v-list-item-content>


            </v-list-item>

            <v-card-actions>
              <v-sparkline :fill="fill" :gradient="selectedGradient" :line-width="width" :padding="padding"
                :smooth="radius || false" :value="value" auto-draw></v-sparkline>
            </v-card-actions>
          </div>
        </base-card>
      </v-col>
<v-col cols="12" lg="3" xl="3">
        <base-card>
          <div slot="card-header">

          </div>
          <div slot="card-body">
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/link.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline">
                  LINKUSDT
                </div>
                <v-list-item-title class="subtitle-1 ">
                  $000.000.298.45
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip color="red" class="white--text" label>
                    <v-icon left>
                      south
                    </v-icon>
                    - 3.45%
                  </v-chip>

                </v-list-item-subtitle>
              </v-list-item-content>


            </v-list-item>

            <v-card-actions>
              <v-sparkline :fill="fill" :gradient="selectedGradient2" :line-width="width" :padding="padding"
                :smooth="radius || false" :value="value" auto-draw></v-sparkline>
            </v-card-actions>
          </div>
        </base-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
     <v-col cols="12" lg="4" xl="4">
        <card-search></card-search>
      </v-col>
   <v-col cols="12" lg="8" xl="8">
        <base-card>
          <div slot="card-header">

          </div>
          <div slot="card-body">
            <chart-dashboard></chart-dashboard>
          </div>
        </base-card>
      </v-col>

    </v-row>

    <v-row no-gutters>
    <v-col cols="12" lg="3" xl="3">
        <card-exchange></card-exchange>
      </v-col>
      <v-col cols="12" lg="6" xl="6">
        <card-transaction></card-transaction>
      </v-col>

     <v-col cols="12" lg="3" xl="3">
        <card-exchange></card-exchange>
      </v-col>
    </v-row>
    <v-row no-gutters>
<v-col cols="12" lg="12" xl="12">
        <card-tab></card-tab>
      </v-col>
    </v-row>


  </div>
</template>

<script>
  import BaseCard from "../../components/Base/BaseCard.vue";
    import BaseHeader from "../../components/Base/BaseHeader.vue";
  import CardSearch from '../../components/Cards/CardSearch.vue'
  import CardExchange from '../../components/Cards/CardExchange'
  import CardTab from '../../components/Cards/CardTab'
  import CardTransaction from '../../components/Cards/CardTransaction'
  import ChartDashboard from '../../components/Charts/ChartDashboard'
  import CardSlider from '../../components/Cards/CardSlider'
  const gradients = [
    ['	#e7f1e5', '	#167c00'],
    ['#42b3f4'],
    ['red', '	#ff9999', '	#ff0000'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
  export default {
    components: {
      BaseCard,
      CardSearch,
      CardExchange,
      CardTab,
      CardTransaction,
      ChartDashboard,
      CardSlider,BaseHeader
    },
    data() {
      return {
        fill: true,
        selectedGradient: gradients[0],
        selectedGradient2: gradients[2],
        gradients,
        padding: 8,
        radius: 10,
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        width: 2,
      }
    },

  }
</script>