<template>
  <infinite-slide-bar :barStyle="{ background: 'transparent', padding: '5px 0' }">
    <span style="color: #fff;">
      <v-row no-gutters>
       <v-col cols="12" lg="3" xl="3">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/btc.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline ">
                  BTC
                </div>
                <v-list-item-title class="text-h5 ">
                  $59.59548
                </v-list-item-title>

              </v-list-item-content>


            </v-list-item>


          </v-card>
        </v-col>
       <v-col cols="12" lg="3" xl="3">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/ada.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline ">
                 ADA
                </div>
                <v-list-item-title class="text-h5 ">
                  $9548
                </v-list-item-title>

              </v-list-item-content>


            </v-list-item>


          </v-card>
        </v-col>
       <v-col cols="12" lg="3" xl="3">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/zil.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline ">
                  ZIL
                </div>
                <v-list-item-title class="text-h5 ">
                  $000548
                </v-list-item-title>

              </v-list-item-content>


            </v-list-item>


          </v-card>
        </v-col>
       <v-col cols="12" lg="3" xl="3">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-avatar tile class="rounded-lg" size="80"> <img src="../../assets/images/coin/solana.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline ">
                 SOLANA
                </div>
                <v-list-item-title class="text-h5 ">
                  $9548
                </v-list-item-title>

              </v-list-item-content>


            </v-list-item>


          </v-card>
        </v-col>
      </v-row>
    </span>
  </infinite-slide-bar>
</template>

<script>
  import InfiniteSlideBar from 'vue-infinite-slide-bar'

  export default {
    components: {
      InfiniteSlideBar
    }
  }
</script>