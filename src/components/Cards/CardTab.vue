<template>
    <v-card class="pa-3 ma-3" outlined tile>
        <v-card outlined>
            <v-tabs v-model="tab" left  small>
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1">
                    Position

                </v-tab>

                <v-tab href="#tab-2">
                    Ordens
                </v-tab>

                <v-tab href="#tab-3">
                    Closed
                </v-tab>
                <v-tab href="#tab-4">
                    Exchanges
                </v-tab>
                <v-tab href="#tab-5">
                    Balances
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1">
                    <v-card flat>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                                <template v-slot:item.price="{ item }">
                                    <v-chip :color="getColor(item.price)" dark>
                                        {{ item.price }}
                                    </v-chip>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item value="tab-2">
                    <v-card flat>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="ordens" class="elevation-1">
                                <template v-slot:item.price="{ item }">
                                    <v-chip :color="getColor(item.price)" dark>
                                        {{ item.price }}
                                    </v-chip>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item value="tab-3">
                    <v-card flat>
                        <v-card class="pa-2 ma-2" outlined tile>
                            <v-card outlined>
                             

                                <v-card-text>
                                    <v-list dense two-line>
                <v-list-item-group v-model="selected" active-class="amber--text" multiple>
                    <template v-for="(item, index) in items">
                        <v-list-item :key="item.title">
                            <template v-slot:default="{ active }">
                                <v-avatar :color="item.color" class="pa-2 ma-2" size="36">
                                    <span class="white--text text-h5">{{item.letra}}</span>
                                </v-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>

                                  

                                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                                    <v-icon v-if="!active" color="grey lighten-1">
                                      {{item.icon}}
                                    </v-icon>

                                    <v-icon v-else color="amber darken-3">
                                          {{item.icon}}
                                    </v-icon>
                                </v-list-item-action>
                            </template>
                        </v-list-item>

                        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-card>
                </v-tab-item>
                <v-tab-item value="tab-4">
                    <v-card flat>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                                <template v-slot:item.price="{ item }">
                                    <v-chip :color="getColor(item.price)" dark>
                                        {{ item.price }}
                                    </v-chip>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item value="tab-5">
                    <v-card flat>
                        <v-card class="pa-2 ma-2" outlined tile>
                            <v-card outlined>
                            
                                <v-card-text>
                                                               <v-list dense two-line>
                <v-list-item-group v-model="selected" active-class="amber--text" multiple>
                    <template v-for="(item, index) in items">
                        <v-list-item :key="item.title">
                            <template v-slot:default="{ active }">
                                <v-avatar :color="item.color" class="pa-2 ma-2" size="36">
                                    <span class="white--text text-h5">{{item.letra}}</span>
                                </v-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>

                                  

                                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                                    <v-icon v-if="!active" color="grey lighten-1">
                                      {{item.icon}}
                                    </v-icon>

                                    <v-icon v-else color="amber darken-3">
                                          {{item.icon}}
                                    </v-icon>
                                </v-list-item-action>
                            </template>
                        </v-list-item>

                        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>


        </v-card>
    </v-card>


</template>
<script>
    export default {
        data() {
            return {
                tab: null,
                headers: [{
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Price',
                        value: 'price'
                    },
                    {
                        text: 'Type',
                        value: 'type'
                    },
                    {
                        text: 'Total',
                        value: 'total'
                    },
                    {
                        text: 'Volume ',
                        value: 'volume'
                    },
                    {
                        text: 'Change (%)',
                        value: 'change'
                    },
                ],
                desserts: [{
                        name: 'ZIL',
                        price: 1.5954,
                        type: 'LONG',
                        total: 24,
                        volume: 4.0,
                        change: '1%',
                    },
                    {
                        name: 'BNB',
                        price: 1.5954,
                        type: 'LONG',
                        total: 24,
                        volume: 4.0,
                        change: '1%',
                    },
                    {
                        name: 'LTC',
                        price: 1.5954,
                        type: 'LONG',
                        total: 24,
                        volume: 4.0,
                        change: '1%',
                    },
                    {
                        name: 'CREAM',
                        price: -5954,
                        type: 'LONG',
                        total: 24,
                        volume: 4.0,
                        change: '1%',
                    },
                    {
                        name: 'META',
                        price: 1.5954,
                        type: 'LONG',
                        total: 24,
                        volume: 4.0,
                        change: '1%',
                    },

                ],
                ordens: [{
                    name: 'ETH',
                    price: 1.5954,
                    type: 'LONG',
                    total: 24,
                    volume: 4.0,
                    change: '1%',
                }, {
                    name: 'BAT',
                    price: -1.5954,
                    type: 'LONG',
                    total: 24,
                    volume: 4.0,
                    change: '1%',
                }, {
                    name: 'BTC',
                    price: 1.5954,
                    type: 'LONG',
                    total: 24,
                    volume: 4.0,
                    change: '1%',
                }, {
                    name: 'LTO',
                    price: 1.5954,
                    type: 'LONG',
                    total: 24,
                    volume: 4.0,
                    change: '1%',
                }, {
                    name: 'LINA',
                    price: -1.5954,
                    type: 'LONG',
                    total: 24,
                    volume: 4.0,
                    change: '1%',
                }, ], selected: [2],
            items: [{
                    color: 'green',
                    letra: 'J',
                    action: '15 %',
                  
                    subtitle: `$10.64`,
                    title: 'JUV | USDT',
                    icon:'south'
                },
                
                {
                    color: 'green',
                    letra: 'A',
                    action: '12 %',
                      icon:'north',
                       subtitle: '$10.13',
                    title: 'ATM|USDT'
                },
                {
                    color: 'red',
                    letra: 'C',
                    action: '-18%',
                    icon:'south',
                    subtitle: '$43.2',
                    title: 'CREAM|USDT',
                },
            ],
            }
        },
        methods: {
            getColor(price) {
                if (price > 0) return 'green'
                else if (price < 0) return 'red'
                else return 'green'
            },
        },
    }
</script>