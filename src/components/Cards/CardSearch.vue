<template>

  <v-card class="pa-2 ma-2" outlined tile>
    <v-card outlined>
      <v-col cols="12" sm="12">
       <base-search class="ma-2 pa-2"></base-search>
      </v-col>
      <v-tabs v-model="tab" centered dark small>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          BTC

        </v-tab>

        <v-tab href="#tab-2">
          ETH
        </v-tab>

        <v-tab href="#tab-3">
          USDT

        </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">

                          <v-icon small color="yellow darken-3">
                            mdi-star
                          </v-icon>
                          Pairs
                        </th>
                        <th class="text-center">
                          Last Price
                        </th>
                        <th class="text-left">
                          24h Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items" :key="item.coin">
                        <td>
                          <v-icon small class="pa-1" color="grey">mdi-star</v-icon>{{ item.coin }}
                        </td>
                        <td>{{ item.vlr }}</td>
                        <td :color="item.color">{{ item.updow }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">

                          <v-icon small color="yellow darken-3">
                            mdi-star
                          </v-icon>
                          Pairs
                        </th>
                        <th class="text-center">
                          Last Price
                        </th>
                        <th class="text-left">
                          24h Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items2" :key="item.coin">
                        <td>
                          <v-icon small class="pa-1" color="grey">mdi-star</v-icon>{{ item.coin }}
                        </td>
                        <td>{{ item.vlr }}</td>
                        <td :class="+item.color+'--text'">{{ item.updow }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-card flat>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">

                          <v-icon small color="yellow darken-3">
                            mdi-star
                          </v-icon>
                          Pairs
                        </th>
                        <th class="text-center">
                          Last Price
                        </th>
                        <th class="text-left">
                          24h Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items3" :key="item.coin">
                        <td>
                          <v-icon small class="pa-1" color="grey">mdi-star</v-icon>{{ item.coin }}
                        </td>
                        <td>{{ item.vlr }}</td>
                        <td :class="+item.color+'--text'">{{ item.updow }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>



    </v-card>
  </v-card>
</template>

<script>
  import BaseCard from '../Base/BaseCard'
  import btc from '../../utils/btc.js'
  import eth from '../../utils/eth.js'
  import usdt from '../../utils/usdt.js'
  import BaseSearch from '../Base/BaseSearch'
  export default {
    components: {
      BaseCard,BaseSearch
    },
    data() {
      return {
        tab: null,
        items: btc,
        items2: eth,
        items3: usdt
      }
    },
  }
</script>