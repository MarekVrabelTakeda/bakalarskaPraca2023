<template>
    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>
            <v-card-title>
                Settings
            </v-card-title>

            <v-card-text>
                <v-container fluid>
                    <v-row align="center">
                     <v-col class="d-flex" cols="12" lg="12" sm="12">
                            <v-text-field label="Purchase value " placeholder="Placeholder" outlined></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="items2" label="How many arms?" outlined></v-select>
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="items" label="Version Bot" outlined></v-select>
                        </v-col>

                        
                        <v-col class="d-flex" cols="12" sm="12">
                            <v-slider v-model="ex3.val" :label="ex3.label" :thumb-color="ex3.color"
                                thumb-label="always"></v-slider>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="12">
                            <v-slider v-model="ex1.val" color="green" :label="ex1.label" :thumb-color="ex1.color"
                                thumb-label="always"></v-slider>
                        </v-col>
                       
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-card>



</template>

<script>
    export default {
        data: () => ({
            items: ['Version m1', 'Version m2', 'Version m3', 'Version m3'],
            items2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ex1: {
                label: 'PROFIT',
                val: 10000,
                color: 'green'
            },
            ex3: {
                label: 'LOSS',
                val: 10,
                color: 'red'
            },
        }),
    }
</script>