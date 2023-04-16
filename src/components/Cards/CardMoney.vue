<template>
    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>

            <v-card-text>
                <v-row no-gutters>

                    <v-col col="12" lg="6" xs="6">
                     <div class="my-4 text-h5">
                            $ • Wallet Deposit Address
                        </div>
                        <v-list subheader two-line>
                          

                            <v-list-item v-for="file in files" :key="file.title">
                                <v-list-item-avatar>
                                    <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="file.title"></v-list-item-title>

                                    <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                       

                        <div class="mb-10">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats
                            plus patio
                            seating.</div>
                        <v-text-field label="Qr Code" outlined></v-text-field>
                    </v-col>
                    <v-col col="12" lg="4" xs="6">
                        <div class="justify-center pl-15"><img width="200" src="../../assets/images/qrcode.png"></div>
                    </v-col>


                </v-row>
                <v-row no-gutters>
                    <v-btn class="green pa-2 mb-2" block>
                       Deposit
                    </v-btn>
                </v-row>
                <v-row no-gutters>
                    <v-btn class="red pa-2" dense  block>
                      Withdraw
                    </v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-card>

</template>
<script>
  export default {
    data: () => ({
      files: [
        {
          color: 'red',
          icon: 'paid',
          subtitle: '5.5894 BTC',
          title: 'Total Equity',
        },
        {
          color: 'green',
          icon: 'sync_alt',
          subtitle: '2.480 BTC',
          title: 'Available Margin',
        },
      ],
    
    }),
  }
</script>