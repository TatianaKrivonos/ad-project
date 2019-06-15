<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
        class="elevation-10 mb-4"
        v-for="ad in ads"
        :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img
              :src="ad.imgSrc"
              height="160">gs
              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.descr }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/ad' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            descr: 'hello',
            promo: false,
            imgSrc: 'http://wallpapers-images.ru/1280x720/space/wallpapers/wallpapers-space-025.jpg',
            id: '1'
          },
          {
            title: 'Second ad',
            descr: 'hello',
            promo: true,
            imgSrc: 'http://wallpapers-image.ru/1280x720/winter/wallpapers/winter-wallpapers-1280x720-00012.jpg',
            id: '2'
          }
        ]
      }
    }
  }
</script>
