export default {
  state: {
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
  },
  mutations: {},
  actions: {},
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
    }
  }
}
