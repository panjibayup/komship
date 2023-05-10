<template>
  <section class="recomend mt-5">
    <div class="container">
      <h3 class="d-block mb-4 text-center">Rekomendasi Untuk Kamu</h3>
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-5">
          <div class="card my-2">
            <div class="image">
              <img src="../assets/jne-counter.png" alt="foto" />
            </div>
            <span class="content">Makin tenang kirim orderan dengan <span style="color: #fbbc05">gerai terbanyak dan cakupan terluas</span> di Indonesia</span>
          </div>
        </div>

        <div class="col-lg-5 col-md-5 col-sm-10">
          <div class="card my-2">
            <div class="image">
              <img src="../assets/sicepat-counter.png" alt="foto" />
            </div>
            <span class="content">Makin <span style="color: #fbbc05">untung dan hemat</span> kirim orderan bahkan ke pelosok Indonesia.Kirim pakai Cargo gak kalah hematnya!</span>
          </div>
        </div>

        <div class="col-lg-5 col-md-5">
          <div class="card my-2">
            <div class="image">
              <img src="../assets/idexpress-counter.png" alt="foto" />
            </div>
            <span class="content">Cocok bagi <span style="color: #fbbc05">pebisnis dengan paket ringan</span>. Kirim orderan makin hemat dan mantap</span>
          </div>
        </div>

        <div class="col-lg-5 col-md-5">
          <div class="card my-2">
            <div class="image">
              <img src="../assets/sap-counter.png" alt="foto" />
            </div>
            <span class="content">Jagonya <span style="color: #fbbc05">COD dengan cakupan gerai terluas</span> di Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecomendasiPage",
  components: {},
};
</script>

<style scoped>
section {
  overflow-x: hidden;
}
h3 {
  font-size: 32px;
  font-weight: 700;
  font-family: Poppins;
}
.recomend .card {
  border: none;
  background-color: transparent;
  overflow: hidden;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.1);
}
.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(42, 42, 42, 0.125);
  border-radius: 0.25rem;
  height: 250px;
}
.card .image {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 150px;
}
.image img {
  width: 180px;
}
.card .content {
  background-color: #fff;
  padding: 10px;
  height: 100px;
  border-radius: 0 0 20px 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  font-family: Poppins;
  border-top: 3px solid #000;
}

/* Responsive */
@media (max-width: 480px) {
  .recomend {
    text-align: center;
  }
  h3.text-center {
    justify-content: center;
  }
  .col-lg-5 {
    padding: 10px 30px;
  }
  .card.my-2 {
    width: 100%;
    height: 300px;
  }
  span.content {
    font-weight: 500;
    color: #000;
  }
}
@media (max-width: 575.98px) {
  h3 {
    font-size: 24px;
  }
}
@media (max-width: 767.98px) {
  h3 {
    font-size: 26px;
  }
  .card {
    width: 500px;
    height: 280px;
  }
  .card.image {
    margin: 0 auto;
  }
  .content {
    margin: 0 auto;
    max-width: 350px;
    color: #f0f0f0;
  }
  .recommend .card .content {
    max-width: 350px;
    margin: 0 auto;
  }
}
@media (max-width: 1199.98px) {
  .content {
    min-height: 140px;
  }
}
</style>
