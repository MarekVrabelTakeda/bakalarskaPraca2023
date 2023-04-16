<template>

    <div>
        <v-row no-gutters>
            <base-header>
                <div slot="page-header">Exchange Traders</div>
            </base-header>
        </v-row>
        <v-row no-gutters>
          
                <card-trader></card-trader>
           
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" lg="3" xl="3">
                <card-search></card-search>
            </v-col>
           <v-col cols="12" lg="9" xl="9">
                <base-card color="primary">
                    <div slot="card-header">

                    </div>
                    <div slot="card-body">
                        <chart-candle></chart-candle>
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
    import CardTrader from '../../components/Cards/CardTrader'
    import CardSearch from '../../components/Cards/CardSearch.vue'
    import CardExchange from '../../components/Cards/CardExchange'
    import CardTab from '../../components/Cards/CardTab'
    import CardTransaction from '../../components/Cards/CardTransaction'
    import ChartCandle from '../../components/Charts/ChartCandle'

    export default {
        components: {
            BaseCard,
            BaseHeader,
            ChartCandle,
            CardSearch,
            CardExchange,
            CardTab,
            CardTransaction,
            CardTrader
        },
    }
</script>