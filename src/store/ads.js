import * as fb from 'firebase'
// import 'firebase/database'

class Ad {
  constructor (title, descr, ownerId, imgSrc = '', promo = false, id = null) {
    this.title = title
    this.descr = descr
    this.ownerId = ownerId
    this.imgSrc = imgSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      // commit('createAd', payload)
      try {
        const newAd = new Ad(
          payload.title,
          payload.descr,
          getters.user.id,
          payload.imgSrc,
          payload.promo
        )
        const ad = await fb.database().ref('ads').push(newAd)
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })

      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultAds = []
      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.descr, ad.ownerId, ad.imgSrc, ad.promo, key)
          )
        })

        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
