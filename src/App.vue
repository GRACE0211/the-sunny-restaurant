<template>
  <div class="box-border ">
    <LandingPage/>
    <OptionMenu/>
    <FooterDiv/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import OptionMenu from './components/OptionMenu.vue'
import FooterDiv from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    OptionMenu,
    FooterDiv
  }
}
</script>

<style>

</style>
