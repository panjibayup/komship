<template>
  <footer>
    <div class="container">
      <div class="col md-12 text-start">
        <div class="row">
          <div class="col-lg-5 col-md-8 profile">
            <a href="#"><img src="../assets/komship.svg" class="profile-image" alt="logo komship" /></a>
            <div class="row">
              <div class="col-1"><img src="../assets/lokasi.png" alt="lokasi" /></div>
              <div class="col-11">Head Office Komerce</div>
              <div class="col-10 offset-1">Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan Karangmoncol Kabupaten Purbalingga (53355)</div>
            </div>
            <div class="row">
              <div class="col-1"><img src="../assets/email.png" alt="email" /></div>
              <div class="col-11">bd@komerce.id</div>
            </div>
            <div class="row">
              <div class="col-1"><img src="../assets/telp.png" alt="telepon" /></div>
              <div class="col-11">081328014170</div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 company">
            <h3 class="company-title">Perusahaan</h3>
            <ul class="company-link">
              <li><router-link to="/"></router-link></li>
              <li><router-link to="/about">Tentang kami</router-link></li>
              <li><router-link to="/terms" class="">Syarat & Ketentuan</router-link></li>
              <li><router-link to="/privacy" class="">Kebijakan privasi</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-8 col-12 partner">
            <h3 class="partner-title mb-4">Kerjasama Ekspedisi</h3>
            <div class="image-partner">
              <img src="../assets/JNE.png" alt="logo jne" height="30px" class="image-partner-img" />
              <img src="../assets/sicepat.png" alt="logo sicepat" height="50px" />
              <br />
              <img src="../assets/idexpress.png" alt="logo idexpress" height="35px" style="margin-top: -5px" />
              <img src="../assets/sapexpress.png" alt="logo sap" style="margin-top: 10px; margin-left: 10px" />
            </div>
            <h3 class="partner-title mb-4">Segera Hadir</h3>
            <div class="image-partner"><img src="../assets/lion-parcel.c09c245.png" alt="logo lion" style="widht: 139px" /></div>
          </div>

          <div class="container mt-5">
            <div class="row row-footer">
              <div class="col-xl-10 col-md-8 col-12 copyright">Copyright 2022 Komship.id. All rights reserved.</div>
              <div class="col-xl-2 col-md-4 col-12 icon-copyright">
                <img src="../assets/wa.png" alt="whatsaap" class="icon-sosmed" />
                <img src="../assets/instagram.png" alt="instagram" class="icon-sosmed" />
                <img src="../assets/facebook.png" alt="facebook" class="icon-sosmed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <script>
export default {
  name: "FooterPage",
  components: {},
};
</script> -->

<style scoped>
footer {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff;
}
.row {
  padding: 10px;
}
.profile {
  color: #828282;
}
.profile .profile-image {
  max-width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.profile .row {
  margin-bottom: 10px;
}
.company .company-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 20px;
}
.company-link {
  list-style-type: none;
  padding-left: 0;
}
.company-link li {
  margin: 8px 0;
}
.company-link a {
  text-decoration: none;
  color: #828282;
}
.partner .partner-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
}
.image-partner {
  margin-left: 10px;
}
.image-partner-img {
  width: 70px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.partner .partner-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
}
.copyright {
  color: #828282;
  font-size: 15px;
  padding-left: 20px;
}
.icon-copyright {
  text-align: right;
}
.icon-sosmed {
  margin-right: 5px;
  margin-left: 5px;
}

@media (max-width: 540px) {
  img.profile-image {
    width: 135px;
  }
}
</style>
