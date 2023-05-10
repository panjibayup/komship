<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6 content">
          <h2 class="title text-start">Tentang Kami</h2>
          <div class="description-desktop">
            <p>
              Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman. Kamu juga dapat mencairkan pendapatan COD kamu
              kapanpun itu tanpa harus menunggu, karena setiap paket kamu dibayar maka saat itu juga kamu bisa mencairkan. Komship memberikan kemudahan untuk UMKM, Pebisnis Online, atau seluruh warga Indonesia yang akan atau ingin mengirim
              paket kemanapun.
            </p>
            <p>
              Dengan layanan yang ditawarkan kami akan memberikan pengalaman pengiriman yang dapat kamu rasakan perbedaannya. Kami juga berkomitmen dan akan berkontribusi aktif dalam perkembangan perekonomian Indonesia, khususnya untuk
              UMKM, Pebisnis Online supaya terus berkembang.
            </p>
          </div>
        </div>
        <div class="col-md-6 image"><img src="../assets/about-model.1809b11.png" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TentangKami",
  components: {},
};
</script>

<style scoped>
.about {
  background-color: #f8f9fa;
  height: 100%;
  padding: 60px;
}
.content {
  margin: auto;
}

.title {
  font-weight: 700;
  font-family: "Poppins";
  font-size: 32px;
}
.description-desktop {
  margin-top: 2vw;
  width: 85%;
  text-align: justify;
}
.image {
  margin: auto;
}

/* responsive */
/* @media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
} */
</style>
