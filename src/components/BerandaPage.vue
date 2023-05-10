<template>
  <div class="container beranda" style="">
    <div class="row kepala">
      <div class="col-md-6 mt-5 text-start">
        <h2 class="title">Juaranya Platform Kirim Barang, Mudah dan Murah dengan <span style="color: #f95031">Komship</span></h2>
        <p class="description">Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur se-Indonesia! Pelajari lebih lanjut untuk dapat tawaran menarik</p>
        <div class="peminat"><span class="number">13000+</span> <span class="label align-items-center">Pebisnis online sudah bergabung dengan Komship</span></div>
        <div class="button-komponen">
          <a>
            <button type="button" class="btn btn-1 btn-primary" style="font-weight: 600">Mulai Sekarang</button>
          </a>
        </div>
        <!-- <div class="button-secondary btn-mulai"><button class="btn text-white">Mulai Sekarang</button></div> -->
      </div>
      <div class="col-md-6 image-hero">
        <img src="../assets/imghero.png" alt="foto beranda" />
      </div>
    </div>
  </div>
  <div class="kontainer mt-5">
    <div class="row justify-content-center row-cod">
      <div class="col-xl-8 col-md-9 col-sm-10 banner text-center">
        <p class="pbanner">Khusus kamu yang setiap hari kirim COD</p>
        <a class="link-cod" href="#">Klik disini buat lihat fitur powerfullnya</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BerandaPage",
  components: {},
};
</script>

<style scoped>
.kepala {
  padding: 10px;
}
h2.title {
  font-size: 32px;
  font-weight: 700;
  font-family: "Poppins";
}
.number {
  font-size: 42px;
  font-weight: 600;
  color: #fe783a;
  font-family: "Poppins", sans-serif;
  align-self: center;
}

/* .label {
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0 10px 10px;
  font-family: "Poppins", sans-serif;
} */
.button-komponen a {
  text-decoration: none;
}
.btn-primary {
  margin-top: 20px;
  height: 60px;
  width: 231px;
  border-radius: 12px;
  text-align: center;
  padding-top: 10px;
  background-color: #f95031;
  color: white;
}
.row-cod {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
.banner {
  border-radius: 60px;
  padding: 20px 30px;
  background-color: #f0c101;
  justify-content: center;
}
.link-cod {
  color: #132243;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-decoration: none;
  font-family: "Poppins";
  letter-spacing: 0.5px;
  text-align: center;
}
.image-hero img {
  max-width: 100%;
}
p.pbanner {
  margin-top: 10px;
}

/* Responsive */
/* @media (min-width: 999px) {
  .image-hero img {
    width: 450px;
    margin-top: 50px;
    margin-left: 15px;
  }
  .col-md-9 {
    width: 75%;
    flex: 0 0 auto;
  }
}
@media (max-width: 999px) {
  .title {
    margin-top: -20px;
  }

  .peminat {
    text-align: center;
  }
  .btn-mulai {
    text-align: center;
  }
  .image-hero img {
    width: 340px;
    margin-top: 50px;
    margin-left: 15px;
  }
}
@media (max-width: 480px) {
  h2.title {
    margin-top: -20px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  .peminat {
    text-align: center;
  }
  .description {
    text-align: center;
  }
  .btn-1.btn-primary {
    width: 100%;
  }
  .row-cod {
    margin-top: -50px;
    margin-bottom: 20px;
    margin-left: 35px;
    width: 80%;
    justify-content: center;
  }
  .image-hero img {
    width: 340px;
    margin-top: 50px;
    margin-left: 15px;
  }
  .banner {
    border-radius: 60px;
    padding: 10px 20px;
    background-color: #f0c101;
  }
} */
@media (max-width: 480px) {
  span.number {
    font-size: 24px;
  }
  .button-komponen {
    text-align: center;
  }
  .btn-1 {
    width: 100%;
    margin-bottom: 20px;
  }
  .row-cod {
    margin-top: -50px;
    margin-bottom: 20px;
  }
  .banner {
    margin-left: 20px;
    border-radius: 60px;
    padding: 10px 20px;
    background-color: #f0c101;
    max-width: 90%;
  }
  a.link-cod {
    color: #132243;
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
  }
}
@media (max-width: 767.98px) {
  .description,
  .title {
    text-align: center;
  }
  .peminat {
    justify-content: center;
  }
  .image-hero {
    margin-top: 20px;
  }
}
@media (max-width: 991.98px) {
  .container {
    margin-top: -50px;
  }
  .title {
    margin-top: 15px;
  }
  .description {
    width: 100%;
  }
  .number {
    font-size: 34px;
  }
  span.label {
    font-size: 14px;
    margin-left: 10px;
  }
  .image-hero {
    margin: auto 0;
  }
}
@media (max-width: 1199.98px) {
  .description {
    font-size: 16px;
  }
}
@media (min-width: 992px) {
  .container {
    margin-top: 50px;
  }
}
.link-cod {
  color: #132243;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  text-decoration: none;
  font-family: Poppins;
  letter-spacing: 0.5px;
  text-align: center;
}
</style>
