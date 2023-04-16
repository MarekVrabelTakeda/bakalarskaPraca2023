<!--================================
=                                  =
=================================-->

<template>
    <v-card class="pa-2 ma-2 d-flex flex-column" outlined tile>
        <v-card outlined>
            <v-card-title>
                <span class="text-h5">
                    <slot name="card-header"></slot>
                </span>
            </v-card-title>

            <v-card-text>
                <slot name="card-body">
                </slot>
            </v-card-text>
        </v-card>
    </v-card>


</template>
<!--====  End of   ====-->