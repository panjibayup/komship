<template>
  <section id="fitur" class="fitur">
    <div class="container mt-5">
      <h3 data-aos="fade-up" data-aos-duration="1500" class="text-start" style="font-size: 32px; font-weight: 700">Fitur</h3>
      <div class="d-flex mb-5">
        <button id="div1" class="btn-feature m-2" style="display: block" @click="fiturUnggulan()">Fitur Unggulan</button>
        <button id="div2" class="btn-feature m-2" style="display: block" @click="fiturTambahan()">Fitur Tambahan</button>
      </div>
      <div v-if="fiturUnggulanChecked === true" class="div3" style="display: block">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5" data-aos="fade-right" data-aos-duration="1500">
            <div>
              <button id="arrow-btn" class="acc-fitur d-flex mb-3" href="#order" @click="fotoOrder()">
                <div class="subhead-fitur">Input Order Massal</div>
                <div class="arrow-feature"></div>
              </button>
              <p class="pdeskripsi text-start">Anti ribet untuk kamu yang harus input orderan cukup banyak setiap hari, Gak perlu lagi input data manual satu persatu.</p>
            </div>

            <div>
              <button id="arrow-btn" class="acc-fitur d-flex mb-3" href="data" @click="fotoData()">
                <div class="subhead-fitur">Tarik Data Otomatis dan Mudah</div>
                <div class="arrow-feature"></div>
              </button>
              <p class="pdeskripsi text-start">Data di dashboard akan semakin mudah kamu olah dengan memanfaatkan menu download. Kamu tinggal pilih klasifikasi data yang dibutuhkan.</p>
            </div>

            <div>
              <button id="arrow-btn" class="acc-fitur d-flex mb-3" @click="fotoKendala()">
                <div class="subhead-fitur">Pantau Kendala Pengiriman</div>
                <div class="arrow-feature"></div>
              </button>
              <p class="pdeskripsi text-start">Kendala pengiriman akan makin mudah dan cepat teratasi karena terhubung langsung dengan ekspedisi terkait.</p>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7">
            <div v-if="fotoOrderChecked === true" id="order" class="image-fitur-unggulan" data-aos="zoom-in" data-aos-duration="1500">
              <img src="../assets/bg-ordermasal.a94ed88.png" alt="order-masal" />
            </div>
            <div v-else-if="fotoDataChecked === true" id="data" class="image-fitur-unggulan" style="display: block" data-aos="zoom-in" data-aos-duration="1500">
              <img src="../assets/bg-dataorder.0c2a4af.png" alt="order-masal" />
            </div>
            <div v-else id="kendala" class="image-fitur-unggulan" style="display: block" data-aos="zoom-in" data-aos-duration="1500">
              <img src="../assets/bg-kendala.2e87fd8.png" alt="order-masal" />
            </div>
          </div>
        </div>
      </div>

      <div v-else id="div4" style="display: block">
        <div class="row">
          <div class="col-lg-6 col-12" data-aos="fade-right" data-aos-duration="1500">
            <div class="d-flex mb-3">
              <img src="../assets/produk-terlaris.cabbdcc.svg" style="width: 30%" />
              <div class="content text-start">
                <span class="title">Produk Terlaris</span> <br />
                <span class="description text-start"
                  >Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.</span
                >
              </div>
            </div>
            <div class="d-flex mb-3">
              <img src="../assets/produk-terlaris.cabbdcc.svg" style="width: 30%" />
              <div class="content text-start">
                <span class="title">Costumer Royal</span> <br />
                <span class="description text-start"> Merupakan data Customer yang sering melakukan order kembali (repeat order). Dengan mengetahui Customer Loyal kita, maka proses orderan akan semakin cepat. </span>
              </div>
            </div>
            <div class="d-flex mb-3">
              <img src="../assets/produk-terlaris.cabbdcc.svg" style="width: 30%" />
              <div class="content text-start">
                <span class="title">Top Admin Order</span> <br />
                <span class="description text-start">
                  Fitur yang akan mempermudah para pebisnis memantau produktifitas para admin dengan melihat data akumulasi performa masing-masing admin yang ada. Makin mudah juga untuk mengambil keputusan seperti pemberian bonus dan
                  meningkatkan semangat kerja para admin.
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 image-tambahan" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../assets/bg-newfeature.02a172d.png" alt="fitur" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="feature-mobile">
    <div class="feature-mobile container mb-5">
      <div class="head-feature-mobile text-center">
        <h2 data-aos="fade-right" data-aos-duration="1500" class="head-feature" style="font-family: Poppins; font-weight: 700; font-size: 24px; font-weight: 700">Fitur</h2>
      </div>
      <div class="d-flex mb-5">
        <button id="div1" type="button" class="btn-feature m-2" style="display: block" @click="mblUnggulan()">Fitur Unggulan</button>
        <button id="div2" type="button" class="btn-feature px- m-2" style="display: block" @click="mblTambahan()">Fitur Tambahan</button>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" v-if="mblUnggulanChecked === true" id="mbl-unggulan" style="display: block">
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img src="../assets/mbl-order.27cc076.svg" alt="order massal" />
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">Input Order Masal</div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature text-start">
                Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left subhead-feature-mobile">
            <div class="subhead-feature" style="padding-left: 20px">Tarik Data Otomatis dan Mudah</div>
          </div>
          <div class="col-6 text-right icon-newfeature">
            <img src="../assets/mbl-dataoto.77a807f.svg" alt="customer loyal" />
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature text-start">Data di dashboard akan semakin mudah kamu olah dengan memanfaatkan menu download. Kamu tinggal pilih klasifikasi data yang dibutuhkan.</div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img src="../assets/mbl-kendala.6f561a9.svg" alt="top admin order" />
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">Pantau Kendala Pengiriman</div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature text-start">Kendala pengiriman akan makin mudah dan cepat teratasi karena terhubung langsung dengan ekspedisi terkait.</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else id="mbl-tambahan" style="display: block">
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img src="../assets/produk-terlaris.cabbdcc.svg" alt="produk terlaris" />
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature" style="margin-top: 60px">Produk Terlaris</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature text-start">
                Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left subhead-feature-mobile">
            <div class="subhead-feature" style="margin-top: 60px">Customer Loyal</div>
          </div>
          <div class="col-6 text-right icon-newfeature">
            <img src="../assets/customer-loyal.65f57b8.svg" alt="customer loyal" />
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature text-start">Merupakan data Customer yang sering melakukan order kembali (repeat order). Dengan mengetahui Customer Loyal kita, maka proses orderan akan semakin cepat.</div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img src="../assets/top-admin.c666b76.svg" alt="top admin order" />
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature" style="margin-top: 60px">Top Admin Order</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature text-start">
                Fitur yang akan mempermudah para pebisnis memantau produktifitas para admin dengan melihat data akumulasi performa masing-masing admin yang ada. Makin mudah juga untuk mengambil keputusan seperti pemberian bonus dan
                meningkatkan semangat kerja para admin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="conclusion"></div>
  </section>

  <section id="conclusion">
    <div class="container-fluid mt-5" style="background-color: #fafad2">
      <div class="content-daftar">
        <h3 class="text-center" style="font-size: 32px; font-weight: 700" data-aos="zoom-in-down" data-aos-duration="1500">
          Percayakan Pengiriman Orderanmu <br />
          Pada Komship!
        </h3>
        <br />
        <button class="btn btn-register-now" style="font-weight: 500; font-size: 14px; font-family: Poppins; color: #fff; background-color: #f95031; padding: 20px">Daftar sekarang</button>
      </div>
    </div>
  </section>
  <section id="conclusion-mobile" class="conclusion-mobile-right">
    <div class="conclusion-mobile-left">
      <div class="content-mobile">
        <h3 data-aos="zoom-in-down" data-aos-duration="1500" style="font-weight: 600; font-size: 16px" class="aos-init aos-animate">Percayakan Pengiriman Orderanmu Pada Komship!</h3>
        <br />
        <button class="btn btn-register-now" style="font-weight: 500; font-size: 14px; font-family: Poppins; color: #fff; background-color: #f95031">Daftar sekarang</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FiturPage",
  components: {},

  data() {
    return {
      fiturUnggulanChecked: true,
      fiturTambahanChecked: false,
      fotoOrderChecked: true,
      fotoDataChecked: true,
      fotoKendalaChecked: true,
      mblUnggulanChecked: true,
      mblTambahanChecked: true,
    };
  },
  methods: {
    fiturUnggulan() {
      this.fiturUnggulanChecked = true;
      this.fiturTambahanChecked = false;
    },
    fiturTambahan() {
      this.fiturUnggulanChecked = false;
      this.fiturTambahanChecked = true;
    },
    fotoOrder() {
      this.fotoOrderChecked = true;
      this.fotoDataChecked = false;
      this.fotoKendalaChecked = false;
    },
    fotoData() {
      this.fotoOrderChecked = false;
      this.fotoDataChecked = true;
      this.fotoKendalaChecked = false;
    },
    fotoKendala() {
      this.fotoOrderChecked = false;
      this.fotoDataChecked = false;
      this.fotoKendalaChecked = true;
    },
    mblUnggulan() {
      this.mblUnggulanChecked = true;
      this.mblTambahanChecked = false;
    },
    mblTambahan() {
      this.mblUnggulanChecked = false;
      this.mblTambahanChecked = true;
    },
  },
};
</script>

<style scoped>
.row {
  padding: 10px;
}
.btn-feature {
  padding: 8px;
  border: 1px solid #c2c2c2;
  color: #c2c2c2;
  font-weight: 500;
  border-radius: 8px;
  font-family: "Poppins";
}
.actived,
.actived,
.btn-fitur:focus,
.btn-feature:focus {
  border: 1px solid #f95031;
  color: #f95031;
}
.col-6 {
  flex: 0 0 auto;
  width: 50%;
}
.acc-fitur {
  border: none;
  background-color: transparent;
}
.subhead-fitur {
  font-weight: 600;
  font-size: 16px;
  font-family: "Poppins";
}
.pdeskripsi {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  color: #828282;
  -webkit-font-smoothing: antialiased;
  -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}
.content-daftar {
  padding-top: 40px;
  padding-bottom: 40px;
}
/* Tambahan */
.content {
  width: 70%;
  margin: auto 0;
  z-index: 1;
  font-family: "Poppins";
}
.title {
  font-size: 16px;
  font-weight: 600;
  color: #f95031;
  font-family: "Poppins";
}

/* tombol fitur */
.arrow-feature {
  width: 3rem;
  height: 2rem;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjQyOTcgNS45Mjk5OUwyMC40OTk3IDEyTDE0LjQyOTcgMTguMDciIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjUgMTJIMjAuMzMiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
  background-repeat: no-repeat;
  margin-left: 5px;
}
#arrow-btn:hover .arrow-feature {
  display: block;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuODM1OTQgMTJIMzMuODg1OSIgc3Ryb2tlPSIjRjk1MDMxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5IDUuOTI5OTlMMzUuMDcgMTJMMjkgMTguMDciIHN0cm9rZT0iI0Y5NTAzMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
  color: #f95031;
}
#arrow-btn:hover .subhead-fitur {
  color: #f95031;
}

@media (min-width: 575px) {
  .image-fitur-unggulan img {
    width: 400px;
  }
}
@media (max-width: 768px) {
  .image-tambahan {
    display: none;
  }
}
@media (min-width: 992px) {
  .image-tambahan img {
    width: 400px;
  }
  .image-fitur-unggulan img {
    width: 450px;
  }
}
@media (max-width: 575.98px) {
  #fitur {
    display: none;
  }
  #conclusion {
    display: none;
  }
  .subhead-feature {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
    color: #f95031;
    text-align: start;
    margin-top: 30px;
  }
  .content-feature {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 12px;
  }
  #conclusion-mobile {
    background-color: #fcebbe;
    display: block;
    height: 180px;
    text-align: -webkit-center;
  }
  .conclusion-mobile-right {
    background-image: url(../assets/model-conclusion-mobile-right.9e6a289.png);
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }
  .conclusion-mobile-left {
    background-image: url(../assets/model-conclusion-mobile-left.04c48f5.png);
    background-repeat: no-repeat;
    background-position: 0 100%;
    height: 180px;
  }
  .content-mobile {
    padding-top: 20px;
    width: 60%;
    text-align: center;
    font-size: 16px;
  }
}
@media (min-width: 575.98px) {
  #feature-mobile {
    display: none;
  }
  #conclusion-mobile {
    display: none;
  }
}
</style>
