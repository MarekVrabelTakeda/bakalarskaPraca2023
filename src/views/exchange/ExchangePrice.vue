<template>

    <div>
     <v-row no-gutters>
      <base-header>
        <div slot="page-header">Exchange Price</div>
      </base-header>
    </v-row>

 <v-row no-gutters>
    <card-slider></card-slider>
    </v-row>
        <v-row no-gutters>
            <v-col cols="12" lg="3" xl="3">
                <card-search></card-search>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
                <base-card color="primary">
                    <div slot="card-header">
                    </div>
                    <div slot="card-body">
                        <chart-candle></chart-candle>
                    </div>
                </base-card>
            </v-col>
            
           <v-col cols="12" lg="3" xl="3">
                <card-search></card-search>
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
            <v-col cols="12" sm="12">

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
import CardSlider from '../../components/Cards/CardSlider'

    import ChartCandle from '../../components/Charts/ChartCandle'
    export default {
        components: {
            BaseCard,BaseHeader,
            CardSearch,
            CardExchange,
            CardTransaction,
            CardTab,CardSlider,ChartCandle

        },
    }
</script>