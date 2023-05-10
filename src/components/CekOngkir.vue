<template>
  <div id="appongkir" style="margin-top: 5rem">
    <section class="container mt-4 mb-4">
      <div class="banner text-center"><span class="title">Cek Ongkos Kirim</span> <img src="../assets/cek-ongkir.f1e8881.png" class="image" /></div>
      <div class="card form">
        <div class="row justify-content-center">
          <div class="col-lg-3 mb-2">
            <div dir="auto" class="v-select form-address vs--single vs--searchable">
              <div id="vs1__combobox" role="combobox" aria-expanded="false" aria-owns="vs1__listbox" aria-label="Search for option" class="vs__dropdown-toggle">
                <div class="vs__selected-options">
                  <input placeholder="Alamat Asal" aria-autocomplete="list" aria-labelledby="vs1__combobox" aria-controls="vs1__listbox" type="search" autocomplete="off" class="vs__search" />
                </div>
                <div class="vs__actions">
                  <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                      ></path>
                    </svg>
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator">
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                    ></path>
                  </svg>
                  <div class="vs__spinner" style="display: none">Loading...</div>
                </div>
              </div>
              <ul id="vs1__listbox" role="listbox" style="display: none; visibility: hidden"></ul>
            </div>
            <div class="custom-checkbox p-3 mt-2">
              <div class="custom-control custom-checkbox b-custom-control-md">
                <input variant="succes" type="checkbox" class="custom-control-input" value="1" id="__BVID__79" /><label class="custom-control-label" for="__BVID__79"
                  ><span style="font-family: poppins">Tanpa Kelurahan</span>
                  <span id="tooltip-target-1" style="color: rgb(8, 160, 247)"
                    ><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="info circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-info-circle b-icon bi">
                      <g>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path
                          d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                        ></path>
                      </g></svg></span
                ></label>
              </div>
              <!---->
            </div>
          </div>
          <div class="col-lg-3 mb-2">
            <div dir="auto" class="v-select form-address border-0 vs--single vs--searchable">
              <div id="vs2__combobox" role="combobox" aria-expanded="false" aria-owns="vs2__listbox" aria-label="Search for option" class="vs__dropdown-toggle">
                <div class="vs__selected-options"><input placeholder="Alamat Tujuan" aria-autocomplete="list" aria-labelledby="vs2__combobox" aria-controls="vs2__listbox" type="search" autocomplete="off" class="vs__search" /></div>
                <div class="vs__actions">
                  <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                      ></path>
                    </svg>
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator">
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                    ></path>
                  </svg>
                  <div class="vs__spinner" style="display: none">Loading...</div>
                </div>
              </div>
              <ul id="vs2__listbox" role="listbox" style="display: none; visibility: hidden"></ul>
            </div>
            <div class="mt-2 custom-checkbox p-3">
              <div class="custom-control custom-checkbox" style="font-family: poppins">
                <input type="checkbox" class="custom-control-input" value="1" id="__BVID__85" /><label class="custom-control-label" for="__BVID__85">
                  Tanpa Kelurahan
                  <span id="tooltip-target-2" style="color: rgb(8, 160, 247)"
                    ><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="info circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-info-circle b-icon bi">
                      <g>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path
                          d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                        ></path>
                      </g></svg></span
                ></label>
              </div>
              <!---->
            </div>
          </div>
          <div class="col-lg-3 mb-2">
            <div class="input-group">
              <input type="number" class="form-control form-weight" />
              <div class="input-group-append"><span class="input-group-text label-weight">Kg</span></div>
            </div>
            <p style="font-size: 10px; color: rgb(130, 130, 130); margin-bottom: 0px">Berat &lt;1kg gunakan titik, contoh; 400 gr = 0.4 kg</p>
          </div>
          <div class="col-lg-2 mb-4 d-flex justify-content-end">
            <button class="btn btn-cek-ongkir" style="color: rgb(255, 255, 255); background-color: rgb(251, 188, 5)">
              <!---->
              Cek Ongkir
            </button>
          </div>
        </div>
      </div>
      <div class="card mt-3 table-responsive result" style="overflow-x: hidden">
        <div class="row justify-content-center text-center">
          <div><img src="../assets/cek-ongkir.be4686c.svg" width="595" class="img-fluid" /></div>
        </div>
      </div>
      <!-- <div id="faq" class="faq">
        <div class="header"><span class="header-title"> FAQ </span></div>
        <div class="accordion">
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-1" style="overflow-anchor: none">
                <div class="item-header">Apa itu Cek Ongkir ?</div>
              </button>
            </div>
            <div id="accordion-1" class="accordion-collapse collapse">
              <div class="accordion-body">
                <p>
                  Cek ongkir merupakan salah satu fitur yang untuk mengecek besaran biaya pengiriman di jasa ekspedisi populer di Indonesia, yakni JNE, SiCepat, dan ID Express. Dengan fitur ini, kamu bisa mengetahui biaya yang perlu
                  dibayarkan ketika hendak mengirimkan barang.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-2" style="overflow-anchor: none"><div class="item-header">Bagaimana Cara Cek Ongkos Kirim Paket?</div></button>
            </div>
            <div id="accordion-2" class="accordion-collapse collapse" style="display: none">
              <div class="accordion-body">
                <p>Untuk mengetahui biaya ongkir pengiriman paket, kamu bisa menggunakan situs pengecekan ongkos kirim terbaik yaitu komship.id. Halaman pengecekan sangat mudah digunakan.</p>
                <ol>
                  <li>Pertama, silahkan buka aplikasi browser yang sering kamu gunakan dan akan lebih baik jika menggunakan “Google Chrome”.</li>
                  <li>Jika halaman pencarian sudah terbuka dengan ditandai adanya “Kolom Pencarian”, maka silahkan masukkan alamat website “Komship.id” atau klik di sini.</li>
                  <li>Tunggu sampai halaman terbuka dengan sempurna dengan tanda adanya “Form Pengecekan Ongkos Kirim”.</li>
                  <li>Selanjutnya, silahkan isi kolom “Alamat Asal” dengan kota tempat kamu melakukan pengiriman barang Pada kolom “Alamat Tujuan”, isi dengan kota tujuan pengiriman.</li>
                  <li>Sedangkan di kolom “Berat”, silahkan isi dengan taksiran berat barang yang akan kamu kirim dalam bentuk “Kg”.</li>
                  <li>Pastikan kembali bahwa data-data yang kamu masukkan dalam form pengecekan ongkos kirim sudah benar.</li>
                  <li>Apabila sudah benar, silahkan klik tombol “Cek Ongkir” dan tunggu proses loading sampai selesai.</li>
                  <li>Selanjutnya, kamu tinggal melengkapi profil akun Komship kamu dengan data-data yang valid.</li>
                  <li>Daftar ongkos kirim akan muncul beserta dengan detail estimasi, ekspedisi, serta jenis pengiriman.</li>
                  <li>Selesai</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-3" style="overflow-anchor: none"><div class="item-header">Apakah Harga yang Ditampilkan Terbaru?</div></button>
            </div>
            <div id="accordion-3" class="accordion-collapse collapse" style="display: none">
              <div class="accordion-body">
                <p>
                  Data mengenai harga jasa pengiriman yang kami miliki akan langsung muncul di layar pencarian atau halaman cek tarif ongkir tanpa adanya perubahan sama sekali, sehingga dijamin akurat. Namun, ada beberapa kasus yang tidak
                  bisa dihindari, misalnya saja harga pada database kami dan jasa ekspedisi berbeda ketika kamu datang langsung ke konter. Alasan adanya perbedaan tersebut adalah belum adanya informasi update yang dirilis ke website resmi
                  ekspedisi, sehingga hal tersebut bukan tanggung jawab dari fitur cek ongkos pengiriman Komship.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-4" style="overflow-anchor: none"><div class="item-header">Apakah Bisa Cek Ongkir Luar Pulau Jawa?</div></button>
            </div>
            <div id="accordion-4" class="accordion-collapse collapse" style="display: none">
              <div class="accordion-body">
                <p>
                  Data harga atau biaya jasa pengiriman yang tertera di dalam database kami mencakup seluruh provinsi serta kecamatan di Indonesia, sehingga pengecekan ongkir luar Pulau Jawa dapat dilakukan dengan sangat mudah melalui situs
                  Komship.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-5" style="overflow-anchor: none"><div class="item-header">Data Tarif dari Kota yang Saya Cari, Tidak Ada?</div></button>
            </div>
            <div id="accordion-5" class="accordion-collapse collapse" style="display: none">
              <div class="accordion-body">
                <p>Tidak jarang kota yang dicari tidak tersedia atau datanya tidak ada di situs resmi pengecekan ongkos kirim, hal tersebut kemungkinan besar dikarenakan pihak ekspedisi yang bersangkutan tidak memiliki data-datanya.</p>
                <span>
                  Jika pada saat pengecekan kamu menemukan kejanggalan, khususnya pengecekan dari kota besar ke kota besar, maka silahkan langsung laporkan hal tersebut kepada kami melalui bd@komship.id atau langsung menghubungi nomor
                  0813-2801-4170.
                </span>
              </div>
            </div>
          </div>
          <div id="faq-button" class="collapse" style="display: none">
            <div class="accordion-item">
              <div class="accordion-header">
                <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-6" style="overflow-anchor: none"><div class="item-header">Kenapa Cek Tarif di Komship.id?</div></button>
              </div>
              <div id="accordion-6" class="accordion-collapse collapse" style="display: none">
                <div class="accordion-body">
                  <p>Komship.id merupakan platform digital yang memberikan pelayanan pengiriman guna membantu kamu dalam mengirimkan barang, mulai dari sistem pengiriman COD maupun Non-COD tanpa adanya batas minimum pengiriman.</p>
                  <p>Selain itu, Komship juga memiliki fitur canggih untuk kamu yang ingin mengecek besaran ongkos pengiriman ke seluruh Indonesia dengan tiga jasa ekspedisi terbaik yaitu JNE, SiCepat, dan juga ID Express.</p>
                  <p>
                    Di laman Komship, kamu bisa mendapatkan data terkait harga jasa pengiriman ke seluruh Indonesia paling akurat dan terbaru, sehingga pastinya akan memberikan keuntungan. Tak hanya itu saja, masih ada banyak alasan mengapa
                    kamu perlu cek tarif ongkir di Komship.id, seperti berikut ini:
                  </p>
                  <ol>
                    <b><li>Situs Cek Ongkir Cepat dan Mudah</li></b>
                    <p>
                      Salah satu kelebihan yang dimiliki oleh Komship.id sebagai platform digital pengecekan ongkos kirim adalah mudah digunakan, karena tampilan yang disajikan sangat human-friendly dan selain itu bisa diakses secara cepat,
                      dimana saja, serta kapan saja. <br />
                      Kamu sebagai pengguna juga tidak perlu mengisi berbagai macam data yang rumit, karena cukup isi kolom kota asal, kota tujuan, dan berat paket (Kg), kamu sudah bisa mengetahui besaran ongkos kirim beserta estimasi dan
                      jenis pengiriman barang.
                    </p>
                    <b><li>Situs Cek Ongkir yang Selalu Update</li></b>
                    <p>
                      Hasil penelusuran tarif pengiriman dari Komship.id merupakan data paling update dan akurat, sebab tim kami selalu memperbaharui database secara rutin dan berkala. Kami selalu berusaha untuk menampilkan data biaya
                      pengiriman barang dari jasa ekspedisi terpopuler paling baru dan terupdate.
                    </p>
                    <b><li>Situs Cek Ongkir yang Akurat dan Terintegrasi Resmi</li></b>
                    <p>
                      Tak hanya bersifat update, data yang ada di database Komship.id juga merupakan data akurat dan lengkap, mulai dari pilihan jasa ekspedisi, kemudian jenis pengiriman, estimasi waktu pengiriman, dan pastinya ongkos
                      kirimnya.
                      <br />
                      Ketika kamu hanya mencari data terkait ongkos kirim salah satu jasa ekspedisi, misalnya saja SiCepat, maka Komship tetap akan menampilkan data jasa ekspedisi lainnya juga.
                      <br />
                      Hal tersebut pastinya sangat menguntungkan, karena kamu juga bisa membandingkan ongkos pengiriman jasa ekspedisi satu dengan yang lainnya. Dengan begitu, kamu bisa mendapatkan harga jasa pengiriman yang paling murah
                      apabila diperlukan.
                    </p>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header">
                <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-7" style="overflow-anchor: none"><div class="item-header">Cek Ongkir JNE Express (YES, REG, OKE)</div></button>
              </div>
              <div id="accordion-7" class="accordion-collapse collapse" style="display: none">
                <div class="accordion-body">
                  <p>Kamu dapat cek ongkos kirim JNE Express melalui Komship.id. Perlu kamu ketahui, JNE memiliki tiga kategori layanan populer dengan tarif pengiriman berbeda-beda, yakni sebagai berikut ini:</p>
                  <ul style="list-style: inherit">
                    <li>
                      <b>Layanan YES</b>, dapat mengirimkan barang dengan jaminan sampai tujuan pada keesokan harinya, sehingga pengiriman ini dapat dikatakan pengiriman super kilat. Meskipun hari libur nasional sekalipun, kamu masih tetap
                      bisa kirim paket menggunakan layanan ini.
                    </li>
                    <li>
                      <b>Layanan REG</b>, pengiriman barang dengan estimasi waktu standar yakni sekitar 1 sampai dengan 7 hari kerja. Berbeda dengan layanan sebelumnya, layanan REG hanya bisa digunakan pada hari kerja, sehingga Minggu dan
                      libur nasional tidak ada pengiriman.
                    </li>
                    <li>
                      <b>Layanan OKE</b>, pengiriman paket dengan jasa ekspedisi JNE dengan harga super ekonomis, akan tetapi estimasi waktu pengirimannya sedikit lebih lama dibandingkan layanan REG. Pengiriman barang tidak bisa dilakukan
                      pada hari Sabtu, Minggu, dan juga libur nasional.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header">
                <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-8" style="overflow-anchor: none"><div class="item-header">Cek Ongkir SiCepat</div></button>
              </div>
              <div id="accordion-8" class="accordion-collapse collapse" style="display: none">
                <div class="accordion-body">
                  <p>SiCepat sebagai layanan pengiriman terbaik juga bisa kamu lihat daftar harga jasanya melalui Komship.id. Beberapa layanan pengiriman yang bisa kamu manfaatkan dari jasa ekspedisi ini adalah sebagai berikut:</p>
                  <ul style="list-style: inherit">
                    <li><b>Regular</b>, layanan pengiriman barang dengan tarif normal dan estimasi waktu pengiriman sekitar 2 sampai dengan 3 hari kerja tergantung jarak kota.</li>
                    <li><b>BEST (Besok Sampai Tujuan)</b>, pengiriman barang paling cepat karena keesokan harinya dapat dipastikan barang sampai tempat tujuan.</li>
                    <li><b>Cargo (Kirim Banyak Lebih Murah)</b>, pengiriman barang dalam jumlah besar dengan batas minimal 5 Kg, namun harganya tergolong lebih terjangkau sampai 30%.</li>
                    <li><b>Cash On Delivery (COD)</b>, pengiriman barang dengan sistem pembayaran saat barang diterima dan estimasi waktu 8 jam (jarak maksimal).</li>
                    <li><b>SiCepat GO</b>, layanan pengiriman paket sampai ke luar negeri dengan maksimal berat barang hingga 70 kg.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header">
                <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-9" style="overflow-anchor: none"><div class="item-header">Cek Ongkir ID Express</div></button>
              </div>
              <div id="accordion-9" class="accordion-collapse collapse" style="display: none">
                <div class="accordion-body">
                  <p>ID Express memiliki setidaknya tiga layanan populer yang paling banyak diminati oleh masyarakat Indonesia. Ketiga layanan populer tersebut adalah:</p>
                  <ul style="list-style: inherit">
                    <li>
                      <b>ID Express Reguler</b>, layanan standar dengan estimasi waktu pengiriman standar pula, yakni mulai dari 3 sampai dengan 5 hari kerja. Harga ongkos kirim paling terjangkau dan bisa mengirim barang ke seluruh
                      Indonesia.
                    </li>
                    <li>
                      <b>ID Express Same Day</b>, layanan pengiriman barang dengan estimasi waktu paling singkat yakni sampai pada di hari yang sama ketika proses pengiriman barang, maksimal 24 jam. Layanan hanya tersedia di Jabodetabek
                      saja.
                    </li>
                    <li><b>ID Express IDLite</b>, layanan pengiriman reguler namun dikhususkan untuk barang-barang berukuran kecil atau dengan berat kurang dari 500 gram.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="FAQ-button"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="faq-button" style="width: 190px; background-color: transparent; overflow-anchor: none">Lihat FAQ lainnya</button></div>
        </div>
      </div> -->
      <section class="faq" id="faq">
    <div class="container">
      <div class="header">
        <h2 class="header-title">FAQ</h2>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="item-header">Apa itu Cek Ongkir?</div>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
              <p>Cek ongkir merupakan salah satu fitur yang untuk mengecek besaran biaya pengiriman di jasa ekspedisi populer di Indonesia, yakni JNE, SiCepat, dan ID Express. Dengan fitur ini, kamu bisa mengetahui biaya yang perlu dibayarkan ketika hendak mengirimkan barang.
              </p>
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div class="item-header">Bagaimana cara cek Ongkos kirim paket?</div>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
              <p>Untuk mengetahui biaya ongkir pengiriman paket, kamu bisa menggunakan situs pengecekan ongkos kirim terbaik yaitu komship.id. Halaman pengecekan sangat mudah digunakan.</p>
                <ol>
                  <li>Pertama, silahkan buka aplikasi browser yang sering kamu gunakan dan akan lebih baik jika menggunakan “Google Chrome”.</li>
                  <li>Jika halaman pencarian sudah terbuka dengan ditandai adanya “Kolom Pencarian”, maka silahkan masukkan alamat website “Komship.id” atau klik di sini.</li>
                  <li>Tunggu sampai halaman terbuka dengan sempurna dengan tanda adanya “Form Pengecekan Ongkos Kirim”.</li>
                  <li>Selanjutnya, silahkan isi kolom “Alamat Asal” dengan kota tempat kamu melakukan pengiriman barang Pada kolom “Alamat Tujuan”, isi dengan kota tujuan pengiriman.</li>
                  <li>Sedangkan di kolom “Berat”, silahkan isi dengan taksiran berat barang yang akan kamu kirim dalam bentuk “Kg”.</li>
                  <li>Pastikan kembali bahwa data-data yang kamu masukkan dalam form pengecekan ongkos kirim sudah benar.</li>
                  <li>Apabila sudah benar, silahkan klik tombol “Cek Ongkir” dan tunggu proses loading sampai selesai.</li>
                  <li>Selanjutnya, kamu tinggal melengkapi profil akun Komship kamu dengan data-data yang valid.</li>
                  <li>Daftar ongkos kirim akan muncul beserta dengan detail estimasi, ekspedisi, serta jenis pengiriman.</li>
                  <li>Selesai</li>
                </ol>
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <div class="item-header">Apakah ada biaya retur di Komship? Jika ada, berapa biayanya?</div>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
              <p>Biaya retur (Pengembelian COD) gratis se-Indonesia. Biaya yang di gratiskan mencakup ongkir pengembalian paket, pelanggan cukup membayar ongkir pengiriman di awal saja.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <div class="item-header">Apakah ada diskon ongkir di Komship?</div>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
             <p>Tentu saja ada, berikut diskon ongkir yang bisa kamu dapatkan dengan menggunakan Komship
              <ul>
                <li>JNE Reg 25%.</li>
                <li>Si Cepat Reg 30%, Cargo mulai dari 2.500/kg + diskon 5% ( min. 10kg )</li>
                <li>ID Express Reg 25% ( &gt;½ kg ),  ½ kg bayar ½-nya + diskon 15%</li>
               </ul>
             </p>
             <div>Contoh simulasi :</div>
             <div>Ongkir untuk ekspedisi JNE Reg yang dibayarkan oleh customer sebesar 20.000, 25% dari 20.000 adalah 5.000. Maka, kamu dapat diskon ongkir sebesar 5.000 rupiah.
             </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <div class="item-header">Apakah ada biaya adminstrasi bulanan?</div>
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
                <p>Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya administrasi bulanan</p>
            </div>
          </div>
        </div>
        
        <div id="faq-button" style="" class="collapse show">
          <div class="accordion-item">
            <div class="accordion-header">
              <button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-6" style="overflow-anchor: none;">
                <div class="item-header">
                Apakah Komship akan me-nonaktifkan akun jika beberapa bulan tidak terpakai?
                </div>
              </button>
            </div>
            <div id="accordion-6" class="accordion-collapse collapse" style="display:none">
              <div class="accordion-body">
                <p>Betul. Akun akan dinonaktifkan jika dalam waktu 30 hari tidak aktif.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item"><div class="accordion-header"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-7" style="overflow-anchor: none;"><div class="item-header">
                Apakah Komship bisa di gunakan bagi yang berjualan offline?
              </div></button></div> <div id="accordion-7" class="accordion-collapse collapse" style="display:none"><div class="accordion-body"><p>
                Sangat Bisa. Selagi masih dalam ruang lingkup pengiriman paket orderan.
              </p></div></div></div> <div class="accordion-item"><div class="accordion-header"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-8" style="overflow-anchor: none;"><div class="item-header">
                Bisnis model apa sajakah yang cocok menggunakan Komship?
              </div></button></div> <div id="accordion-8" class="accordion-collapse collapse" style="display:none"><div class="accordion-body"><p>
                Komship sangat cocok untuk kamu yang memiliki model bisnis seperti distributor, dropshipper, reseller, atau produsen.
              </p></div></div></div> <div class="accordion-item"><div class="accordion-header"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-9" style="overflow-anchor: none;"><div class="item-header">
                Jika sudah bekerja sama dengan ekspedisi apakah bisa menggunakan Komship?
              </div></button></div> <div id="accordion-9" class="accordion-collapse collapse" style="display:none"><div class="accordion-body"><p>
                Sangat Bisa. Yang terpenting kamu tidak mengirimkan paket yang sama antara dengan Komship dan Ekspedisi.
              </p></div></div></div> <div class="accordion-item"><div class="accordion-header"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-10" style="overflow-anchor: none;"><div class="item-header">
                Berapa biaya penanganan COD di Komship?
              </div></button></div> <div id="accordion-10" class="accordion-collapse collapse" style="display:none"><div class="accordion-body"><p>Biaya penanganan COD di Komship sebesar 2.8% dari total harga+ongkir.</p> <div>Contoh Simulasi:</div> <div>Total harga+ongkir yang dibayarkan oleh customer sebesar 250.000 rupiah, 2.8% dari 250.000 adalah 7.000 rupiah. Maka, biaya penanganan COD yang harus dibayarkan oleh customer sebesar 7.000 rupiah.</div></div></div></div> <div class="accordion-item"><div class="accordion-header"><button class="accordion-button collapsed" aria-expanded="false" aria-controls="accordion-11" style="overflow-anchor: none;"><div class="item-header">
                Dana COD akan cair maksimal berapa hari setelah barang diterima pembeli?
              </div></button></div> <div id="accordion-11" class="accordion-collapse collapse" style="display:none"><div class="accordion-body"><p>
                Dana COD dapat langsung dicairkan setelah pesanan selesai.
              </p></div></div></div></div>
        <div class="FAQ-button">
          <button class="accordion-button not-collapsed" type="button" data-bs-toggle="collapse" style="width: 190px; background-color: rgb(249, 249, 249); overflow-anchor: none;" aria-expanded="false" aria-controls="faq-button" data-bs-target="#faq-button">Lihat FAQ lainnya</button>
        </div>
      </div>
    </div>
    
  </section>
    </section>
  </div>
</template>

<style scoped>
.banner .title {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  position: absolute;
  margin-top: 100px;
  left: 35%;
}
.image {
  width: 90%;
  margin-top: -40px;
}
.form {
  padding: 20px;
  border: none;
  border-radius: 16px;
  position: relative;
  margin-top: -130px;
  min-height: 120px;
  justify-content: center;
}
.form-address input {
  height: 40px;
}
.vs__selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
  position: relative;
}
.custom-checkbox {
  display: flex;
  height: 14px;
  align-items: center;
  background-color: #ffece9;
  border-radius: 8px;
}

.faq {
  margin-top: 50px;
}
span.header-title {
  font-size: 32px;
  font-weight: 700;
}
.faq .accordion-button {
  border-radius: 8px;
  color: #fbbc05;
  box-shadow: unset;
  margin-bottom: 20px;
}
.faq .item-header {
  width: 90%;
  font-family: "Poppins";
  font-weight: 700;
}
.faq .accordion-body {
  padding-top: 0;
  font-size: 14px;
  line-height: 21px;
  margin-right: 18%;
  font-weight: 400;
  font-family: "Poppins";
  width: 90%;
  margin-top: 30px;
}
.accordion-item p {
  font-size: 14px;
  color: #000;
}
</style>
