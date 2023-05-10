<template>
  <section class="bar">
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/"><img src="../assets/komship.svg" alt="logo komship" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li class="nav-item mx-4">
              <a class="nav-link" aria-current="page" href="#">Beranda</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#layanan">Layanan</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#alur">Alur Pengiriman</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#fitur">Fitur</a>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/ongkir">Cek Ongkir</router-link>
            </li>
          </ul>

          <button class="btn btn-outline-primary button-primary" type="submit">Masuk</button>
        </div>
      </div>
    </nav>
  </section>
  <!-- <nav class="navbar navbar navbar-expand-xl navbar-light fixed-top navbar-light navbar-expand-xl" data-v-a8e75f0e="">
    <div class="container-fluid" data-v-a8e75f0e="">
      <a href="/" aria-current="page" class="navbar-brand nuxt-link-exact-active nuxt-link-active" data-v-a8e75f0e="">
        <img src="../assets/ko" alt="logo komship" class="image-navbar" data-v-a8e75f0e="" />
      </a>
      <button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed" data-v-a8e75f0e="" aria-expanded="false" aria-controls="navbar-toggle-collapse" style="overflow-anchor: none">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAFVBMVEUAAAD5UDH6UDL3UDD2UDD5UDD5UDFkuFgKAAAABnRSTlMA35+AcFAlQS1pAAAAJklEQVQI12MgDIKUwEAVyDRLA4NkBtKAoyAYiCAzSQMIixHOIQgASgcJ94TV3BEAAAAASUVORK5CYII="
          alt="toggler icon"
          data-v-a8e75f0e=""
        />
      </button>
      <div data-v-a8e75f0e="" id="navbar-toggle-collapse" class="collapse navbar-collapse nav-menu navbar-collapse collapse" style="display: none">
        <ul data-v-a8e75f0e="" class="navbar-nav navbar-nav ms-auto mb-2 mb-lg-0">
          <div data-v-a8e75f0e="" class="close-toggler" style="justify-content: end; margin-top: -16px">
            <button data-v-a8e75f0e="" type="button" aria-label="Close" class="collapsed" aria-expanded="false" aria-controls="navbar-toggle-collapse" style="overflow-anchor: none">
              <img
                data-v-a8e75f0e=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAgEC3KR0FAAAAUElEQVQY02OgGCgwMHCAGSUMDLIgmukvA0N9A4hV78D4Fywlf4H9C5jB/kX+ApjB+LfeAaK/HqgEougLggGXgiuGa0cYCLMCYSnMGQiHUQoAIroZKfaLcJ8AAAAASUVORK5CYII="
                alt="close icon"
              />
            </button>
          </div>
          <li data-v-a8e75f0e="" class="nav-item nav-item">
            <a data-v-a8e75f0e="" href="#" target="_self" class="nav-link">
              <a data-v-a8e75f0e="" id="navmenuhome" class="nav-link active"> Beranda </a>
            </a>
          </li>
          <li data-v-a8e75f0e="" class="nav-item nav-item">
            <a data-v-a8e75f0e="" href="#" target="_self" class="nav-link">
              <a data-v-a8e75f0e="" id="navmenuservice" class="nav-link"> Layanan </a>
            </a>
          </li>
          <li data-v-a8e75f0e="" class="nav-item nav-item">
            <a data-v-a8e75f0e="" href="#" target="_self" class="nav-link">
              <a data-v-a8e75f0e="" id="navmenualur" class="nav-link"> Alur Pengiriman </a>
            </a>
          </li>
          <li data-v-a8e75f0e="" class="nav-item nav-item">
            <a data-v-a8e75f0e="" href="#" target="_self" class="nav-link">
              <a data-v-a8e75f0e="" id="navmenufitur" class="nav-link"> Fitur </a>
            </a>
          </li>
          <li data-v-a8e75f0e="" class="nav-item nav-item">
            <a data-v-a8e75f0e="" href="#" target="_self" class="nav-link">
              <a data-v-a8e75f0e="" id="cek-ongkir" class="nav-link"> Cek Ongkir </a>
            </a>
          </li>
        </ul>
        <ul data-v-a8e75f0e="" class="navbar-nav">
          <button data-v-a8e75f0e="" type="button" class="btn btn btn-outline-primary btn-sign-in btn-outline-primary">Masuk</button>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: "HeaderPage",
  components: {},
};
</script>

<style scoped>
.navbar-brand {
  padding: 10px;
}
.navbar-toggler {
  border-color: #f95031 !important;
  box-shadow: unset !important;
  margin-right: 2.5vw;
}
.nav-item.active {
  color: #f95031;
  font-weight: 700;
  border-bottom: 1px solid #f95031;
}

.button-primary {
  padding: 0 !important;
  margin: 0 0 0 6px;
  width: 150px;
  height: 42px;
  border-radius: 8px !important;
  color: #dc3545 !important;
  background-color: #fff !important;
  border-color: #dc3545;
}

@media (max-width: 540px) {
  .navbar-brand img {
    width: 135px;
  }
}
@media (min-width: 1200px) {
  button.navbar-toggler {
    display: none;
  }
}
</style>
