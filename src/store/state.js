export default {
  beers: [],
  states: {
    loading: false,
    currentPag: 1
  },
  config: {
    api: {
      uri: 'https://api.punkapi.com/v2/',
      accessToken: ''
    },
    limitePerPage: 40,
    images: {
      defaultImagePreview: 'static/images/backgroundImage.svg',
      logo: {
        header: 'static/images/beerHeader.svg',
        hero: 'static/images/beerHero.svg'
      }
    },
    urls: {
      linkedin: 'https://www.linkedin.com/in/xereda/',
      facebook: 'https://www.facebook.com/xereda',
      github: 'https://github.com/xereda',
      twitter: 'https://twitter.com/xereda'
    }
  }
}
