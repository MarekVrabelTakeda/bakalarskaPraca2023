<template>
    <v-sheet>
        <v-slide-group v-model="model" class="pa-2" multiple show-arrows>
            <v-slide-item v-for="n in items" :key="n.id" v-slot="{ active, toggle }">
                <v-card :color="active ? 'orange' : 'transparent lighten-1'" class="ma-4 outlined " height="200"
                    width="200" @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                            <v-list class="transparent pa-2">
                                <v-list-item>
                                    <v-avatar :color="n.color" class="pa-2 ma-2" size="36">
                                        <span class="white--text text-h5">{{n.letra}}</span>
                                    </v-avatar>
                                </v-list-item>

                                <v-list-item link>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">
                                            {{n.title}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{n.subtitle}}</v-list-item-subtitle>
                                    </v-list-item-content>


                                </v-list-item>
                                <v-sparkline :fill="fill" :gradient="n.selectedGradient" :line-width="width"
                                    :padding="padding" :smooth="radius || false" :value="value" auto-draw></v-sparkline>
                            </v-list>
                            <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>
<script>
    const gradients = [
        ['	#ff0000', '	#ff7878'],
        ['	#74d680', '#378b29'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ]

    export default {
        data: () => ({
            model: [],
            fill: true,
            selectedGradient: gradients[0],
            gradients,
            padding: 8,
            radius: 10,
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            width: 2,
            items: [{id:1,
                    color: 'green',
                    letra: 'J',
                    action: '15 %',
                    selectedGradient: gradients[1],
                    subtitle: `$10.64`,
                    title: 'JUV | USDT',
                    icon: 'south'
                },
                {id:2,
                    color: 'red',
                    letra: 'F',
                    action: '- 2 %',
                    icon: 'south',
                    selectedGradient: gradients[0],
                    subtitle: '$1.794',
                    title: 'FIS|USDT'
                },
                {id:3,
                    color: 'green',
                    letra: 'D',
                    action: '+6 %',
                    selectedGradient: gradients[1],
                    icon: 'north',
                    subtitle: '$0.18',
                    title: 'DS|USDT'
                },
                {id:4,
                    color: 'green',
                    letra: 'A',
                    action: '12 %',
                    selectedGradient: gradients[1],
                    icon: 'north',
                    subtitle: '$10.13',
                    title: 'ATM|USDT'
                },
                {id:5,
                    color: 'red',
                    letra: 'C',
                    action: '-18%',
                    selectedGradient: gradients[0],
                    icon: 'south',
                    subtitle: '$43.2',
                    title: 'CREAM|USDT',
                }, {id:6,
                    color: 'green',
                    letra: 'J',
                    action: '15 %',
                    selectedGradient: gradients[1],

                    subtitle: `$10.64`,
                    title: 'JUV | USDT',
                    icon: 'south'
                },
                {id:7,
                    color: 'red',
                    letra: 'F',
                    selectedGradient: gradients[0],
                    action: '- 2 %',
                    icon: 'south',
                    subtitle: '$1.794',
                    title: 'FIS|USDT'
                },
                {id:8,
                    color: 'green',
                    letra: 'D',
                    action: '+6 %',
                    selectedGradient: gradients[1],
                    icon: 'north',
                    subtitle: '$0.18',
                    title: 'DS|USDT'
                },
                {id:9,
                    color: 'green',
                    letra: 'A',
                    action: '12 %',
                    selectedGradient: gradients[1],
                    icon: 'north',
                    subtitle: '$10.13',
                    title: 'ATM|USDT'
                },
                {id:10,
                    color: 'red',
                    letra: 'C',
                    action: '-18%',
                    icon: 'south',
                    subtitle: '$43.2',
                    selectedGradient: gradients[0],
                    title: 'CREAM|USDT',
                },
            ],
        }),
    }
</script>