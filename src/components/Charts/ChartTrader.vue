<template>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
        <div id="tradingview_e3ce7"></div>
        <div class="tradingview-widget-copyright"><a href="https://br.tradingview.com/symbols/NASDAQ-AAPL/"
                rel="noopener" target="_blank"><span class="blue-text">Gráfico AAPL</span></a> por TradingView</div>

       
    </div>

</template>
<script>
    import TradingVue from 'trading-vue-js'

    export default {
      
        components: {
            TradingVue
        },
        data() {
            return {
                ohlcv: [
                    [1551128400000, 33, 37.1, 14, 14, 196],
                    [1551132000000, 13.7, 30, 6.6, 30, 206],
                    [1551135600000, 29.9, 33, 21.3, 21.8, 74],
                    [1551139200000, 21.7, 25.9, 18, 24, 140],
                    [1551142800000, 24.1, 24.1, 24, 24.1, 29],
                ],
            }
        },mounted() {
              new TradingView.widget({
              "autosize":true,
                "height": 660,
                "symbol": "NASDAQ:AAPL",
                "timezone": "Etc/UTC",
            "theme": 'dark',
                "style": "1",
                "locale": "br",
                "toolbar_bg": "transparent",
                "enable_publishing": true,
                "withdateranges": true,
                "range": "YTD",
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "details": false,
                "hotlist": false,
                "calendar": false,
             
                "container_id": "tradingview_e3ce7"
            });
        },
    }
</script>
<style>
.tradingview-widget-container{

    padding-top:5px;
}
#tradingview_e3ce7 div {
	height: 610px !important;
}
</style>