<template>
  <section id="layanan">
    <div class="container mt-5">
      <div data-aos="fade-up" data-aos-duration="1500" class="row service">
        <div class="col-md-5 align-self-center">
          <h3 class="title">Sering kirim barang?</h3>
        </div>
        <div class="col-md-7 text-start description">
          Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat keuntungan dan kenyamanan dalam melakukan pengiriman barang. Komship kini hadir untuk memudahkan pengiriman kamu dengan berbagai benefit
          <span>TANPA MINIMUM JUMLAH PENGIRIMAN</span>
        </div>
      </div>

      <div class="row mt-5 service-desktop">
        <div class="col-lg-4 col-md-6 text-start" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons" src="../assets/bgwallet..png" alt="wallet" /><br />
              <span class="title-content">Terima Pembayaran COD Instan</span>
              <p class="description-content">Semua bisa COD di Komship. Otomatis dan tanpa ribet urus persyaratan kerjasama satu persatu ke ekspedisi.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-start" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons" src="../assets/calender.png" alt="calender" /><br />
              <span class="title-content">Pencairan Setiap Hari</span>
              <p class="description-content">Kamu bisa tarik dana COD kapanpun karena pencairan dapat dilakukan setiap hari.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-start hemat" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons download" src="../assets/bgwallet..png" alt="dwn" /><br />
              <span class="title-content">Lebih Hemat</span>
              <p class="description-content">Dapatkan diskon kirim MULAI dari 25% (COD dan Non-COD) Lebih hemat dibandingkan dengan yang lain</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-start mt-5" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons" src="../assets/dompet.png" alt="dompet" /><br />
              <span class="title-content">Biaya COD Termurah</span>
              <p class="description-content">Biaya COD cuma 2,8% ,ngga pake mahal !</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-start mt-5" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons" src="../assets/retur.png" alt="retur" /><br />
              <span class="title-content">Gratis Biaya Retur</span>
              <p class="description-content">Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD seluruh Indonesia. *S&K berlaku.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-start mt-5" data-aos="zoom-in-down" data-aos-duration="1500">
          <div class="card-content">
            <div class="card-body">
              <img class="icons" src="../assets/jemputpaket.png" alt="paket" /><br />
              <span class="title-content">Gratis Jemput paket</span>
              <p class="description-content">Cukup tunggu saja di rumah, kurir akan mendatangi lokasimu untuk mengambil paket TANPA MINIMUM ORDER.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LayananPage",
  components: {},
};
</script>

<style scoped>
.row {
  padding: 10px;
}
h3 {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 32px;

  font-family: Poppins;
}
.description {
  color: #828282;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: Poppins;
}
.description span {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-family: Poppins;
}
.service-desktop {
  background: linear-gradient(90deg, #ff6a3a -20.91%, #fba63c 85.49%);
  border-radius: 20px;
  padding: 80px 20px;
}
.service .content {
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  min-height: 230px;
  margin-bottom: 50px;
  font-family: Poppins;
}
.card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  height: 200px;
}
.icons {
  position: absolute;
  top: -45px;
  left: 10px;
  box-shadow: 3px 5px 10px rgb(64, 64, 64);
  border-radius: 15px;
}

.title-content {
  font-weight: bold;
  padding-left: 10px;
}
.description-content {
  font-size: 14px;
  color: #828282;
  padding-left: 10px;
  margin-top: 15px;
}

/* Responsive */
@media (max-width: 768px) {
  .description {
    text-align: center;
  }
  .hemat {
    margin-top: 48px;
  }
}
@media (max-width: 575.98px) {
  h3 {
    font-size: 24px;
    text-align: left;
  }

  .service-desktop {
    display: none;
  }
}
</style>
