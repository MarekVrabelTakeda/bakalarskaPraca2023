<template>
  <v-card class="pa-2 ma-2" outlined tile>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card class="pa-2 ma-2" outlined tile>
      <v-textarea  label="Price"
          value="10.00" class="pa-1"
          suffix="BTC" auto-grow outlined rows="1" row-height="15"></v-textarea>
       <v-textarea  label="Amount" class="pa-1"
          value="10.00" 
          suffix="BTC" auto-grow outlined rows="1" row-height="15"></v-textarea>

          <v-chip-group label active-class="primary--text" column>
            <v-chip label v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>


          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts1" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-btn color="green" class="white--text" block>
            SELL
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-2 ma-2" outlined tile>
             <v-textarea  label="Price"
          value="10.00"
          suffix="BTC" auto-grow outlined rows="1" row-height="15"></v-textarea>
       <v-textarea  label="Amount" class="pa-2"
          value="10.00"
          suffix="BTC" auto-grow outlined rows="1" row-height="15"></v-textarea>

          <v-chip-group label active-class="primary--text" column>
            <v-chip label v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts1" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-btn  color="red"  block>
           BUY
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>

</template>
<script>
  export default {
    data() {
      return {
        headers: [{
            text: 'Dessert (100g serving)',
            align: 'start',
            value: 'name',
          },
          {
            text: 'Category',
            value: 'category'
          },
        ],
        desserts1: [{
            name: 'BTC',
            calories: 159,
          },
          {
            name: 'DOGE',
            calories: 237,
          },
          {
            name: 'ETH',
            calories: 262,
          },



        ],
        desserts: [{
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          }, {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },


        ],
        tags: [
          '25%',
          '50%',
          '75%',
          '100%',

        ],
      }
    },
  }
</script>