<template>
  <section class="bar">
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/komship.svg" alt="logo komship" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="color: orangered"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li class="nav-item mx-4">
              <a class="nav-link" aria-current="page" href="#">Beranda</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link focus" href="#layanan">Layanan</a>
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
a.nav-link:focus {
  color: #f95031;
  font-weight: 700;
  border-bottom: 1px solid #f95031;
}

.button-primary {
  padding: 0;
  margin: 0 0 0 6px;
  width: 150px;
  height: 42px;
  border-radius: 8px;
  color: #dc3545;
  background-color: #fff;
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
