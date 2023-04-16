<template>
    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>
            <v-card-title>
                General Information <v-spacer></v-spacer>
                <v-btn color="primary darken-3" fab small @click="isEditing = !isEditing">
                    <v-icon v-if="isEditing">
                        mdi-close
                    </v-icon>
                    <v-icon v-else>
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form>

                    <v-row>
                       <v-col cols="12" lg="6" xl="6">
                            <v-text-field :disabled="!isEditing" v-model="first" label="First Name" outlined>
                            </v-text-field>
                        </v-col>

                       <v-col cols="12" lg="6" xl="6">
                            <v-text-field :disabled="!isEditing" v-model="last" label="Last Name" outlined>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col cols="12" lg="6" xl="6">
                            <v-text-field :disabled="!isEditing" v-model="email" label="Email" outlined></v-text-field>
                        </v-col>

                       <v-col cols="12" lg="6" xl="6">
                            <v-text-field :disabled="!isEditing" v-model="phone" label="Phone" outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col cols="12" lg="6" xl="6">
                            <v-combobox :disabled="!isEditing" v-model="select" :items="items" label="Language" multiple
                                outlined dense>
                            </v-combobox>
                        </v-col>
                       <v-col cols="12" lg="6" xl="6">
                            <v-combobox :disabled="!isEditing" v-model="select2" :items="items2" label="Currency"
                                multiple outlined dense>
                            </v-combobox>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!isEditing" color="success" @click="save">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-card>


</template>
<script>
    export default {
        data() {
            return {
                select: ['English'],
                items: [
                    'Spanish',
                    'English',
                    'Portuguese',
                    'Arabic'

                ],
                select2: ['USDT'],
                items2: [
                    'EUR',
                    'USDT',
                    'BRL',
                    'BNB'

                ],
                hasSaved: false,
                isEditing: null,
                model: null,
                states: [{
                        name: 'Florida',
                        abbr: 'FL',
                        id: 1
                    },
                    {
                        name: 'Georgia',
                        abbr: 'GA',
                        id: 2
                    },
                    {
                        name: 'Nebraska',
                        abbr: 'NE',
                        id: 3
                    },
                    {
                        name: 'California',
                        abbr: 'CA',
                        id: 4
                    },
                    {
                        name: 'New York',
                        abbr: 'NY',
                        id: 5
                    },
                ],
            }
        },

        methods: {
            customFilter(item, queryText, itemText) {
                const textOne = item.name.toLowerCase()
                const textTwo = item.abbr.toLowerCase()
                const searchText = queryText.toLowerCase()

                return textOne.indexOf(searchText) > -1 ||
                    textTwo.indexOf(searchText) > -1
            },
            save() {
                this.isEditing = !this.isEditing
                this.hasSaved = true
            },
        },
    }
</script>
​