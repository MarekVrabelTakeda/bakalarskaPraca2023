<template>
    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>
     <v-card-title >Market Trader</v-card-title>
     <v-divider></v-divider>
        <v-card outlined class="mb-8">
            <v-data-table :headers="headers" :items="usdt" class="elevation-1">
                <template v-slot:item.calories="{ item }">
                    <v-chip :color="getColor(item.price)" dark>
                        {{ item.price }}
                    </v-chip>
                </template>
            </v-data-table>

        </v-card>
    </v-card>
   </v-card>

</template>

<script>
    import btc from '../../utils/btc.js'
    export default {
        
        data() {
            return {
                headers: [{
                        text: 'Coin',
                        align: 'start',
                        sortable: false,
                        value: 'coin',
                    },
                    {
                        text: 'Price',
                        value: 'price'
                    },
                    {
                        text: 'Change',
                        value: 'updow'
                    },
                    {
                        text: 'Vol',
                        value: 'vol'
                    },
                    {
                        text: 'Profite',
                        value: 'profite'
                    },
                    {
                        text: 'Loss',
                        value: 'loss'
                    },
                ],

                usdt: [{
                        coin: 'BNB/USDT',
                        price: 0.00020255,
                        updow: '-2.58%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50
                    },
                    {
                        coin: 'KCS/USDT',
                        price: 0.00013192,
                        updow: '+5.6%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: ' XRP/USDT',
                        price: 0.00002996,
                        updow: '-1.55% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: 'VET/USDT',
                        price: 0.00000103,
                        updow: '+1.8%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: ' EOS/USDT',
                        price: 0.00000103,
                        updow: '-2.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: ' BTT/USDT',
                        price: 0.00002303,
                        updow: '-1.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: 'LTC/USDT',
                        price: 0.03520103,
                        updow: '+1.5%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                    {
                        coin: ' TRX/USDT',
                        price: 0.00330103,
                        updow: '-3.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'BSV/USDT',
                        price: 0.00300103,
                        updow: '+2.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'COTI/USDT',
                        price: 0.003500103,
                        updow: '+2.85%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: ' XYT/USDT',
                        price: 0.00003103,
                        updow: '+3.55%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: ' BNB/USDT',
                        price: 0.003500103,
                        updow: '-2.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'XMR/USDT',
                        price: 0.003500103,
                        updow: '-1.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: ' TRY/USDT',
                        price: 0.00000123,
                        updow: '-2.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50
                    }, {
                        coin: 'ADA/USDT',
                        price: 0.00050103,
                        updow: '+5.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: '	NEO/USDT',
                        price: 0.00340103,
                        updow: '-1.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'XLM/USDT',
                        price: 0.00035103,
                        updow: '+5.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'ENQ/USDT',
                        price: 0.00354103,
                        updow: '+2.02%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50
                    }, {
                        coin: 'AVA/USDT',
                        price: 0.02535103,
                        updow: '+3.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'AMB/USDT',
                        price: 0.05335103,
                        updow: '+1.0%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: ' MAP/USDT',
                        price: 0.00234103,
                        updow: '-2.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'GO/USDT',
                        price: 0.00354103,
                        updow: '-6.50%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50
                    }, {
                        coin: 'KICK/USDT',
                        price: 0.02053103,
                        updow: '-6.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: 'DBC/USDT',
                        price: 0.02535103,
                        updow: '+7.05% ',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    }, {
                        coin: '	GGC/USDT',
                        price: 0.00353103,
                        updow: '-4.05%',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50
                    }, {
                        coin: 'CAKE',
                        price: 484.458,
                        updow: '-5.584',
                        vol:23234433,
                        profite:'1%',
                        loss:0.50

                    },
                ]
            }
        },
        methods: {
            getColor(price) {
                if (price > 0.000001) return 'red'
                else if (price < 0) return 'orange'
                else return 'green'
            },
        },
    }
</script>