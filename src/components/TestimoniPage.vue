<template>
  <section class="testimoni" style="padding-bottom: 50px">
    <h3 class="title" data-aos="fade up" data-aos-duration="1500"><span style="color: #f95031">Komship</span> telah dipercaya oleh Pebisnis dan UMKM di Indonesia</h3>
    <div class="desktop">
      <swiper :slides-per-view="3" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="margin-left: 20px">
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-6.b41dc9e.svg" alt="profile" />
                      </div>
                      <span class="name">Agus David Saputra</span>
                    </div>
                    <div class="content text-start">Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-5.4144a33.svg" alt="profile" />
                      </div>
                      <span class="name">Eko sulistiyono</span>
                    </div>
                    <div class="content text-start">
                      Alhamdulilah lancar , fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-1.d5e2c77.svg" alt="profile" />
                      </div>
                      <span class="name">Mansyur</span>
                    </div>
                    <div class="content text-start">
                      Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-2.db7627c.svg" alt="profile" />
                      </div>
                      <span class="name">Nursiswanto</span>
                    </div>
                    <div class="content text-start">Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-3.021e242.svg" alt="profile" />
                      </div>
                      <span class="name">Diki Moh.Ghani</span>
                    </div>
                    <div class="content text-start">
                      Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya jadi sangat membantu banget. Dan
                      jika ada kendala Tim Supportnya fast respon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>

    <div class="tablet">
      <swiper :slides-per-view="2" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="margin-left: 20px">
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-6.b41dc9e.svg" alt="profile" />
                      </div>
                      <span class="name">Agus David Saputra</span>
                    </div>
                    <div class="content text-start">Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-5.4144a33.svg" alt="profile" />
                      </div>
                      <span class="name">Eko sulistiyono</span>
                    </div>
                    <div class="content text-start">
                      Alhamdulilah lancar , fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-1.d5e2c77.svg" alt="profile" />
                      </div>
                      <span class="name">Mansyur</span>
                    </div>
                    <div class="content text-start">
                      Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-2.db7627c.svg" alt="profile" />
                      </div>
                      <span class="name">Nursiswanto</span>
                    </div>
                    <div class="content text-start">Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-3.021e242.svg" alt="profile" />
                      </div>
                      <span class="name">Diki Moh.Ghani</span>
                    </div>
                    <div class="content text-start">
                      Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya jadi sangat membantu banget. Dan
                      jika ada kendala Tim Supportnya fast respon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>

    <div class="mobile">
      <swiper :slides-per-view="1" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="margin-left: 20px">
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-6.b41dc9e.svg" alt="profile" />
                      </div>
                      <span class="name">Agus David Saputra</span>
                    </div>
                    <div class="content text-start">Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-5.4144a33.svg" alt="profile" />
                      </div>
                      <span class="name">Eko sulistiyono</span>
                    </div>
                    <div class="content text-start">
                      Alhamdulilah lancar , fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-1.d5e2c77.svg" alt="profile" />
                      </div>
                      <span class="name">Mansyur</span>
                    </div>
                    <div class="content text-start">
                      Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-2.db7627c.svg" alt="profile" />
                      </div>
                      <span class="name">Nursiswanto</span>
                    </div>
                    <div class="content text-start">Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slick-slide slick-clone" data-aos="slide-left" data-aos-duration="1500">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-3.021e242.svg" alt="profile" />
                      </div>
                      <span class="name">Diki Moh.Ghani</span>
                    </div>
                    <div class="content text-start">
                      Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya jadi sangat membantu banget. Dan
                      jika ada kendala Tim Supportnya fast respon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>
  </section>
</template>
<!-- <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  name: "TestimoniPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script> -->

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "TestimoniPage",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<!-- <div class="slick-slider">
      <div class="slick-list">
        <div class="slick-track">
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-slide slick-clone" style="width: 480px">
            <div>
              <div class="content-desktop swiper" id="swiper" style="display: inline-block; width: 100%">
                <div class="swiper-wrapper">
                  <div class="card carausel__item swiper-slide">
                    <div class="head">
                      <div class="profile">
                        <img src="../assets/testimoni-4.dcc0b30.svg" alt="profile" />
                      </div>
                      <span class="name">Diky Arliansyah</span>
                    </div>
                    <div class="content text-start">
                      Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

<!-- <script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "TestimoniPage",
  components: { VueSlickCarousel },
  data() {
    return {
      setting: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script> -->

<style scoped>
h3.title {
  max-width: 624px;
  font-weight: 700;
  margin: 50px auto 30px;
  text-align: center;
  font-family: "Poppins";
  font-size: 32px;
}

.slick-slide {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.testimoni .card {
  width: 90%;
  border: none;
  border-radius: 20px;
  height: 22rem;
  margin: 10px 0;
  font-family: "Poppins";
}
.testimoni .card .head {
  font-size: 20px;
  font-weight: 500;
  background-color: #ff6a3a;
  border-radius: 20px 20px 0 0;
  height: 80px;
  display: flex;
}
.testimoni .card .head .profile {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 5%;
  margin-top: 20px;
  color: #828282;
}
.testimoni .card .head .profile img {
  width: 90px;
  height: 90px;
  margin-top: 5px;
}
.testimoni .card .name {
  font-size: 20px;
  color: #fff;
  margin: auto 30px;
  padding-top: 10px;
  text-align: left;
  font-family: "Poppins";
}
.testimoni .card .content {
  padding: 30px 40px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  background-color: #efefef;
  font-family: "Poppins";
  border-radius: 0 0 20px 20px;
  height: 400px;
  cursor: pointer;
}
.desktop {
  display: none;
}
.tablet {
  display: none;
}
.mobile {
  display: none;
}

@media (max-width: 599px) {
  .mobile {
    display: unset;
  }
  h3.title {
    font-size: 24px;
  }
}
@media (min-width: 600px) {
  .mobile {
    display: none;
  }
  .tablet {
    display: unset;
  }
}

@media (min-width: 1200px) {
  .tablet {
    display: none;
  }
  .desktop {
    display: unset;
  }
}
</style>
