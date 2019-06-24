<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn
      class="warning mr-2"
      flat
      slot="activator"
    >Edit
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
              >
              </v-text-field>
              <v-textarea
                name="descr"
                label="Descr"
                type="text"
                v-model="editedDescr"
              >
              </v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                @click="onCancel"
              >Cancel
              </v-btn>
              <v-btn
                flat
                class="success"
                @click="onSave"
              >Save
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        editedTitle: this.ad.title,
        editedDescr: this.ad.descr
      }
    },
    methods: {
      onCancel () {
        this.editedDescr = this.ad.descr
        this.editedTitle = this.ad.title
        this.modal = false
      },
      onSave () {
        if(this.editedDescr !== '' && this.editedTitle !== '') {
          this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            descr: this.editedDescr,
            id: this.ad.id
          })
          this.modal = false
        }
      }
    }
  }
</script>
