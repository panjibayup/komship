<template>
  <section id="benefitPage">
    <div class="container benefit-container">
      <div class="card benefit-head" data-aos="fade-up" data-aos-duration="1500">
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col-lg-5 content text-start">
              Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung pengiriman <br />
              <span class="benefit-content-span">COD dan Non-COD</span>
            </div>
            <div class="col-lg-6 d-flex justify-content-between">
              <img src="../assets/JNE.png" class="logo" alt="JNE" />
              <img src="../assets/sicepat.png" class="logo" alt="Sicepat" />
              <img src="../assets/idexpress.png" class="logo" alt="logo" />
              <img src="../assets/sapexpress.png" class="logo" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="benefit-table-desktop">
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-2 p-4 head">Benefit</div>
          <div class="col-md-2 p-4 subhead">JNE</div>
          <div class="col-md-3 p-4 subhead">SiCepat</div>
          <div class="col-md-3 p-4 subhead">ID Expess</div>
          <div class="col-md-2 p-4 subhead-sap">SAP</div>
        </div>

        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-2 p-4 head">Diskon Ongkir</div>
          <div class="col-md-2 p-4">Reg 25%</div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Reg 30%</li>
            <li class="list-benefit">Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)</li>
          </div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Reg 25%</li>
            <li class="list-benefit">"(>1/2 kg)1/2 Kg bayar 1/2-nya* +diskon 15%"</li>
          </div>
          <div class="col-md-2 p-4">35%</div>
        </div>

        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-2 p-4 head">Biaya Ongkir</div>
          <div class="col-md-2 p-4">2.8%(PPN ditanggung Komship)</div>
          <div class="col-md-3 p-4">2.8%(PPN ditanggung Komship)</div>
          <div class="col-md-3 p-4">2.8%(PPN ditanggung Komship)</div>
          <div class="col-md-2 p-4">2.8%(PPN ditanggung Komship)</div>
        </div>

        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-2 p-4 head">Diskon Biaya Return</div>
          <div class="col-md-2 p-4 second">Gratis se-lndonesia*</div>
          <div class="col-md-3 p-4 second">Gratis se-lndonesia*</div>
          <div class="col-md-3 p-4 second">Gratis se-lndonesia*</div>
          <div class="col-md-2 p-4 second">Gratis se-lndonesia*</div>
        </div>
        <p class="p-content text-start">*S&K berlaku</p>
      </div>
      <div class="benefit-table-mobile">
        <div class="mt-4 mb-2" style="text-align: center">
          <button class="btn btn-sm btn-menu" @click="benefitJne()">JNE</button>
          <button class="btn btn-sm btn-menu" @click="benefitSicepat()">SiCepat</button>
          <button class="btn btn-sm btn-menu" @click="benefitId()">IDExpress</button>
          <button class="btn btn-sm btn-menu" @click="benefitSap()">SAP</button>
        </div>
        <div v-if="benefitJneChecked === true" class="jne">
          <div class="row">
            <div class="col-6 p-3 head" style="font-size: 16px; font-weight: 700">Benefit</div>
            <div class="col-6 p-3 subhead">JNE</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Diskon Ongkir</div>
            <div class="col-6 p-3">Reg 25%</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya COD</div>
            <div class="col-6 p-3">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya Retur</div>
            <div class="col-6 p-3">Gratis se-lndonesia*</div>
          </div>
        </div>
        <div v-else-if="benefitSicepatChecked === true" class="sicepat">
          <div class="row">
            <div class="col-6 p-3 head" style="font-size: 16px; font-weight: 700">Benefit</div>
            <div class="col-6 p-3 subhead">Sicepat</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Diskon Ongkir</div>
            <div class="col-6 p-3">
              <li class="list-benefit">Reg 30%</li>
              <li class="list-benefit">Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)</li>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya COD</div>
            <div class="col-6 p-3">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya Retur</div>
            <div class="col-6 p-3">Gratis se-lndonesia*</div>
          </div>
        </div>
        <div v-else-if="benefitIdChecked === true" class="idexpress">
          <div class="row">
            <div class="col-6 p-3 head" style="font-size: 16px; font-weight: 700">Benefit</div>
            <div class="col-6 p-3 subhead">ID Express</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Diskon Ongkir</div>
            <div class="col-6 p-3">
              <li class="list-benefit">Reg 25%</li>
              <li class="list-benefit">"(>1/2 kg)1/2 Kg bayar 1/2-nya* +diskon 15%"</li>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya COD</div>
            <div class="col-6 p-3">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya Retur</div>
            <div class="col-6 p-3">Gratis se-lndonesia*</div>
          </div>
        </div>
        <div v-else class="sap">
          <div class="row">
            <div class="col-6 p-3 head" style="font-size: 16px; font-weight: 700">Benefit</div>
            <div class="col-6 p-3 subhead">SAP</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Diskon Ongkir</div>
            <div class="col-6 p-3">Reg 35%</div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya COD</div>
            <div class="col-6 p-3">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-3 head">Biaya Retur</div>
            <div class="col-6 p-3">Gratis se-lndonesia*</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenefitPage",
  components: {},

  data() {
    return {
      benefitJneChecked: true,
      benefitSicepatChecked: true,
      benefitIdChecked: true,
      benefitSapChecked: true,
    };
  },
  methods: {
    benefitJne() {
      this.benefitJneChecked = true;
      this.benefitSicepatChecked = false;
      this.benefitIdChecked = false;
      this.benefitSapChecked = false;
    },
    benefitSicepat() {
      this.benefitJneChecked = false;
      this.benefitSicepatChecked = true;
      this.benefitIdChecked = false;
      this.benefitSapChecked = false;
    },
    benefitId() {
      this.benefitJneChecked = false;
      this.benefitSicepatChecked = false;
      this.benefitIdChecked = true;
      this.benefitSapChecked = false;
    },
    benefitSap() {
      this.benefitJneChecked = false;
      this.benefitSicepatChecked = false;
      this.benefitIdChecked = false;
      this.benefitSapChecked = true;
    },
  },
};
</script>

<style scoped>
.jne {
  padding: 0 15px;
}
.sicepat {
  padding: 0 15px;
}
.idexpress {
  padding: 0 15px;
}
.sap {
  padding: 0 15px;
}
.benefit-head {
  position: relative;
  margin: 20px 0px 0;
  padding: 20px;
  border-radius: 30px;
  border: none;
  font-family: "Poppins";
  background-color: #f0efef;
}
.card-body {
  padding: 0;
}
.content {
  font-weight: 600;
}
.benefit-content-span {
  color: #ff6a3a;
  font-weight: 600;
  font-size: 18px;
}
.col-lg-6.d-flex img {
  width: 80px;
  height: 40px;
  margin-top: 20px;
}
img.logo {
  margin: auto;
  width: 100%;
}

.benefit-table-desktop {
  margin-top: 50px;
  text-align: center;
  vertical-align: middle;
  font-weight: 500;
}

.benefit-table-desktop .row {
  border-radius: 12px;
  background-color: #f0efef;
  padding: 0;
  margin-bottom: 10px;
  overflow-x: hidden;
  font-family: Poppins;
}
.benefit-table-desktop .head {
  background-color: #fba63c;
  font-family: Poppins;
  font-size: 20px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.benefit-table-desktop .subhead {
  background-color: #ff6a3a;
  font-family: Poppins;
  font-size: 20px;
}
.benefit-table-desktop .subhead-sap {
  background-color: #ff6a3a;
  font-family: Poppins;
  font-size: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

/* Mobile*/
.active {
  color: #ff6a3a;
  border: 1px solid #ff6a3a;
}
.btn {
  border-radius: 12px;
}
.btn-menu {
  width: auto;
  margin-right: 8px;
  color: #c2c2c2;
  background-color: #f2f2f2;
  border: none;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins";
}

/* Responsive */
/* @media (max-width: 768px) {
  .benefit-head {
    margin-top: 40px;
  }
  .col-lg-6.d-flex img {
    width: 80px;
    height: 40px;
    margin-top: 10px;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
}
@media (max-width: 480px) {
  .benefit-head {
    padding: 10px;
    width: 80%;
  }
  .benefit.content {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .card-body {
    padding: 10px;
  }
  .benefit .logo {
    width: 70%;
  }
} */
@media (max-width: 480px) {
  .benefit-head {
    padding: 10px;
    max-width: 90%;
  }
  .content {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .col-lg-6.d-flex img {
    width: 50px;
    height: 30px;
  }
}
@media (min-width: 767.98px) {
  .benefit-table-mobile {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .benefit-table-desktop {
    display: none;
  }
  .benefit-head {
    margin: 10px 0 0;
  }
  .benefit-table-mobile {
    display: unset;
    text-align: center;
    vertical-align: middle;
    font-weight: 500;
  }
  .benefit-table-mobile .row {
    border-radius: 12px;
    background-color: #efefef;
    padding: 0;
    margin-bottom: 10px;
    overflow-x: hidden;
  }
  .benefit-table-mobile .head {
    background-color: #fba63c;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 14px;
  }
  .benefit-table-mobile .subhead {
    background-color: #ff6a3a;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 14px;
  }
}
@media (max-width: 991.98px) {
  .benefit-head {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
