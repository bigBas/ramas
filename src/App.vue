<template>
  <div id="app">
    <Header />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faUser,
    faLock,
    faGraduationCap,
    faExternalLinkAlt,
    faKey,
    faExclamationCircle,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faUser)
library.add(faLock)
library.add(faExternalLinkAlt)
library.add(faGraduationCap)
library.add(faExclamationCircle)
library.add(faKey)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: {
        Header,
        Footer
    },
}
</script>

<style scoped>

#app {
  
}

</style>
