<template>
 <v-row  no-gutters>
            <v-col class="d-flex flex-column" >
                <v-card class="pa-2 ma-2" outlined tile>
                    <v-card outlined>
                        <v-card>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                        BTC
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Bitcoin</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="text-h5" cols="6">
                                        $56.975,453
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img src="../../assets/images/coin/btc.png" alt="Sunny image" width="92">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>arrow_downward</v-icon>
                                </v-list-item-icon>
                                <v-list-item-subtitle>-2.3 </v-list-item-subtitle>
                            </v-list-item>



                            <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

                            <v-list class="transparent">
                                <v-list-item v-for="item in forecast" :key="item.day">
                                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                                    <v-list-item-icon>
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-subtitle class="text-right">
                                        {{ item.temp }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn text>
                                    Full Report
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-card>
                </v-card>

            </v-col>
               <v-col class="d-flex flex-column" >
               <v-card class="pa-2 ma-2" outlined tile>
                    <v-card outlined>
                        <v-card>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                        ADA
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Cardano</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="text-h5" cols="6">
                                        $9.38
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img src="../../assets/images/coin/ada.png" alt="Sunny image" width="92">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>arrow_downward</v-icon>
                                </v-list-item-icon>
                                <v-list-item-subtitle>-3.9 </v-list-item-subtitle>
                            </v-list-item>



                            <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

                            <v-list class="transparent">
                                <v-list-item v-for="item in forecast" :key="item.day">
                                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                                    <v-list-item-icon>
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-subtitle class="text-right">
                                        {{ item.temp }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn text>
                                    Full Report
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-card>
                </v-card>

            </v-col>
                 <v-col class="d-flex flex-column" >
               <v-card class="pa-2 ma-2" outlined tile>
                    <v-card outlined>
                        <v-card>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                       BNB
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Binance Coin</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="text-h5" cols="6">
                                        $3,311.93

                                    </v-col>
                                    <v-col cols="6">
                                        <v-img src="../../assets/images/coin/bnb.png" alt="Sunny image" width="92">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>arrow_upward</v-icon>
                                </v-list-item-icon>
                                <v-list-item-subtitle>+1.563 </v-list-item-subtitle>
                            </v-list-item>



                            <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

                            <v-list class="transparent">
                                <v-list-item v-for="item in forecast" :key="item.day">
                                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                                    <v-list-item-icon>
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-subtitle class="text-right">
                                        {{ item.temp }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn text>
                                    Full Report
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-card>
                </v-card>

            </v-col>
           <v-col class="d-flex flex-column" >
               <v-card class="pa-2 ma-2" outlined tile>
                    <v-card outlined>
                        <v-card>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                       DOGE
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Dogecoin</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="text-h5" cols="6">
                                        $1.22
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img src="../../assets/images/coin/dogecoin.png" alt="Sunny image" width="122">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>arrow_downward</v-icon>
                                </v-list-item-icon>
                                <v-list-item-subtitle>-2.14 </v-list-item-subtitle>
                            </v-list-item>



                            <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

                            <v-list class="transparent">
                                <v-list-item v-for="item in forecast" :key="item.day">
                                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                                    <v-list-item-icon>
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-subtitle class="text-right">
                                        {{ item.temp }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn text>
                                    Full Report
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-card>
                </v-card>

            </v-col>
</v-row>
</template>

<script>
    export default {

        data() {
            return {
                labels: ['1m', '5m', '15m', '30m', '1h', '1M', '1Y'],
                time: 0,
                forecast: [{
                        day: 'Tuesday',
                        icon: 'north',
                        temp: '+2.4%'
                    },
                    {
                        day: 'Wednesday',
                        icon: 'south',
                        temp: '-2.2%'
                    },
                    {
                        day: 'Thursday',
                        icon: 'north',
                        temp: '+2.5%'
                    },
                ],
            }
        },
    }
</script>