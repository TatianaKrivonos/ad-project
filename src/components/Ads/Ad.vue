<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img
            :src="ad.imgSrc"
            height="300">
          </v-img>
          <v-card-text>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <p>{{ ad.descr }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn class="warning" flat>Edit</v-btn> -->
            <app-edit-ad-modal
              :ad="ad"
              v-if="isOwner"
            >
            </app-edit-ad-modal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
          <v-container>
            <v-layout row>
              <v-flex xs12 class="text-xs-center pt-5">
                <v-progress-circular
                  :size="100"
                  color="primary"
                  indeterminate
                >
                </v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import EditAdModal from './EditAdModal'
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      },
      loading () {
        return this.$store.getters.loading
      },
      isOwner () {
        return this.ad.ownerId === this.$store.getters.user.id
      }
    },
    components: {
      appEditAdModal: EditAdModal
    }
  }
</script>
