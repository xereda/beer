<template>
  <div class="">
    <footer class="footer">
      <nav class="level">
        <div class="level-item">
          <img :src="'static/images/transparentLogo.svg'" class="footer-image-logo">
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'JmobFooter'
}
</script>

<style lang="scss">
  .footer-image-logo {
    width: 300px;
  }
  .custom-nav-center {
    background-color: rgba(255, 255, 255, 0) !important;
    height: 300px;
  }
</style>
