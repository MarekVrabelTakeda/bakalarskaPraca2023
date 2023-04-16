<template>


    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>
            <v-card-title>
               API KEY
            </v-card-title>

            <v-card-text> <v-row><v-col cols="12" lg="6" xl="6">
                       
                            <v-text-field v-model="key" label="Key" outlined></v-text-field>
                        </v-col>

                       <v-col cols="12" lg="6" xl="6">
                            <v-text-field v-model="secrety" label="Secret" outlined></v-text-field>
                        </v-col>
                    </v-row>
<v-row>
                        <v-col cols="4">
                            <v-subheader>TOTAL</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field label="TOTAL" value="10.00" suffix="USDT"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader>LOSS</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field label="LOSS" value="0.1" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader>PROFIT</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field label="Profit" value="1" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>

                    
            </v-card-text>
        </v-card>
    </v-card>

</template>