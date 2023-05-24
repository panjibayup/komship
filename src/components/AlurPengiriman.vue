<template>
  <section id="alur" class="flow pb-4">
    <div class="container mt-5">
      <h3 data-aos="fade-up" data-aos-duration="1500" class="text-start">Alur pengiriman menggunakan <span style="color: #f95031">Komship</span></h3>
      <div class="row content-desktop justify-content-center">
        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>1</span></div>
          <div class="image"><img src="../assets/alur-icon1.ac210df.svg" alt="foto" /></div>
          <div class="description"><span>Order masuk dari pelanggan</span></div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>2</span></div>
          <div class="image"><img src="../assets/alur-icon2.669de35.svg" alt="foto" /></div>
          <div class="description"><span>Seller menyiapkan orderan</span></div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>3</span></div>
          <div class="image"><img src="../assets/alur-icon3.f97f289.svg" alt="foto" /></div>
          <div class="description"><span>Seller memasukan data di dashboard Komship</span></div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>4</span></div>
          <div class="image"><img src="../assets/alur-icon4.3cf36d9.svg" alt="foto" /></div>
          <div class="description"><span>Ekspedisi menjemput barang ke lokasi seller</span></div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>5</span></div>
          <div class="image"><img src="../assets/alur-icon5.eb67350.svg" alt="foto" /></div>
          <div class="description"><span>Barang diterima pelanggan</span></div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>6</span></div>
          <div class="image"><img src="../assets/alur-icon6.0fe152d.svg" alt="foto" /></div>
          <div class="description"><span>Non COD (selesai) / COD (uang diterima)</span></div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1500" class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0">
          <div class="number"><span>7</span></div>
          <div class="image"><img src="../assets/alur-icon7.ec093d9.svg" alt="foto" /></div>
          <div class="description"><span>Dana dicairkan</span></div>
        </div>
      </div>
      <div class="content-mobile">
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="number-mobile"><span>1</span></div>
            <div class="image-mobile"><img src="../assets/alur-icon1.ac210df.svg" /></div>
            <div class="description-mobile"><span>Order masuk dari pelanggan</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="description-mobile"><span>Seller menyiapkan orderan</span></div>
            <div class="image-mobile d-flex justify-content-end"><img src="../assets/alur-icon2.669de35.svg" /></div>
            <div class="number-mobile"><span>2</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="number-mobile"><span>3</span></div>
            <div class="image-mobile"><img src="../assets/alur-icon3.f97f289.svg" /></div>
            <div class="description-mobile"><span>Seller memasukan data di dashboard Komship</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="description-mobile"><span>Ekspedisi menjemput barang ke lokasi seller</span></div>
            <div class="image-mobile d-flex justify-content-end"><img src="../assets/alur-icon4.3cf36d9.svg" /></div>
            <div class="number-mobile"><span>4</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="number-mobile"><span>5</span></div>
            <div class="image-mobile"><img src="../assets/alur-icon5.eb67350.svg" /></div>
            <div class="description-mobile"><span>Barang diterima pelanggan</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="description-mobile"><span>Non COD (selesai) / COD (uang diterima)</span></div>
            <div class="image-mobile d-flex justify-content-end"><img src="../assets/alur-icon6.0fe152d.svg" /></div>
            <div class="number-mobile"><span>6</span></div>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="d-flex">
            <div class="number-mobile"><span>7</span></div>
            <div class="image-mobile"><img src="../assets/alur-icon7.ec093d9.svg" /></div>
            <div class="description-mobile"><span>Dana dicairkan</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AlurPengiriman",
  components: {},
};
</script>

<style scoped>
h3.text-start {
  margin-left: 10px;
}
.row {
  padding: 15px;
}
.flow h3 {
  max-width: 450px;
  padding: 30px 0;
  font-weight: 700;
  font-family: Poppins;
  letter-spacing: 0.7px;
  font-size: 32px;
}
.content-mobile {
  display: none;
}
.flow .number {
  width: 54px;
  height: 54px;
  background-color: #ffece9;
  border: 1px solid #ff6a3a;
  border-radius: 50%;
  font-family: "Poppins";
  padding-top: 1.5vh;
}
.flow .number span {
  font-size: 24px;
  color: #ff6a3a;
  display: block;
  text-align: center;
  font-family: "Poppins";
}
.flow .image {
  position: relative;
  margin-top: -54px;
  display: flex;
  justify-content: center;
}
.flow .image img {
  width: 200px;
  height: 200px;
}
.flow .description {
  display: flex;
  justify-content: center;
  font-family: "Poppins";
}
.flow .description span {
  width: 200px;
  text-align: center;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #ff6a3a;
  font-family: "Poppins";
}
/* Responsive */
@media (max-width: 480px) {
  h3.text-start {
    max-width: 80%;
    font-size: 20px;
  }
}
@media (max-width: 575.98px) {
  h3 {
    font-size: 24px;
  }
  .content-desktop {
    display: none;
  }
  .content-mobile {
    display: unset;
  }
  .number-mobile {
    width: 34px;
    height: 34px;
    background-color: #ffece9;
    border: 1px solid #ff6a3a;
    border-radius: 50%;
    padding-top: 1%;
  }
  .number-mobile span {
    font-size: 18px;
    color: #ff6a3a;
    margin: 10px;
  }
  .image-mobile {
    width: 40%;
  }
  .image-mobile img {
    width: 90%;
  }
  .description-mobile {
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    font-family: "Poppins";
    color: #ff6a3a;
    width: 50%;
    display: flex;
    align-items: center !important;
  }
}
@media (max-width: 767.98px) {
  h3 {
    font-size: 26px;
  }
}
@media (max-width: 991.98px) {
  h3 {
    font-size: 28px;
  }
}
@media (max-width: 1199.98px) {
  .flow .image {
    justify-content: end;
  }
}
</style>
