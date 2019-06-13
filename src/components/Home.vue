<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imgSrc"
            >
              <div class="carusel-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id">
          <v-card>
            <v-img
              :src="ad.imgSrc"
              height="200px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div> {{ ad.descr }} </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
          },
          {
            title: 'Third ad',
            descr: 'hello',
            promo: true,
            imgSrc: 'http://wallpapers-images.ru/1280x720/autumn/wallpapers/wallpapers-autumn-07.jpg',
            id: '3'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .carusel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, 0.5);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
