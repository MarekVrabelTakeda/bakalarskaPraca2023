<template>

    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>

            <base-search class="pa-3 ma-3" solo label="Search" append-icon="search"></base-search>

            <v-list class="mt-10 mb-4" two-line>
                <v-list-item-group v-model="selected" active-class="amber--text" multiple>
                    <template v-for="(item, index) in items">
                        <v-list-item :key="item.title">
                            <template v-slot:default="{ active }">
                                <v-avatar :color="item.color" class="pa-2 ma-2 d-flex flex-column" size="36">
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
        </v-card>
    </v-card>
</template>

<script>
    import BaseCard from '../Base/BaseCard'
import BaseSearch from '../Base/BaseSearch'

    export default {
        components: {
            BaseCard,BaseSearch
        },
        data: () => ({
            selected: [2],
            items: [{
                    color: 'green',
                    letra: 'J',
                    action: '15 %',
                  
                    subtitle: `$10.64`,
                    title: 'JUV | USDT',
                    icon:'south'
                },
                {
                    color: 'red',
                    letra: 'F',
                    action: '- 2 %',
                     icon:'south',
                        subtitle: '$1.794',
                    title: 'FIS|USDT'
                },
                {
                    color: 'green',
                    letra: 'D',
                    action: '+6 %',
                    icon:'north',
                         subtitle: '$0.18',
                    title: 'DS|USDT'
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
        }),
    }
</script>