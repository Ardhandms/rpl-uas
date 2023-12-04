import React from "react";

function AboutUs() {
  return (
    <section className="text-center my-8" id="aboutus">
      <div className="text-center py-8">
        <h3 className="uppercase text-grey-500 font-semibold leading-4">
          Tentang
        </h3>
        <h2 className="text-blue-700 font-bold text-4xl italic mr-2">Kami</h2>
      </div>

      <div className="max-w-2xl mx-auto mt-4 text-gray-500">
        <p>Sepatu anda kotor tapi malas nyuci? Mr, CleanSZ solusinya!!</p>
        <p>
          Mengubah sepatu kotor anda menjadi bintang bersinar! Lihatlah
          keajaiban luar biasa sebelum dan sesudah dari layanan pembersihan
          sepatu Mr. CleanSZ. Ucapkan selamat tinggal pada kotoran dan sambutlah
          sepatu berkilau yang mencuri perhatian!
        </p>
      </div>

      <div className="text-center mt-32 mb-24">
        <h3 className="uppercase text-grey-500 font-semibold leading-4">
          Jangan Malu-Malu
        </h3>
        <h2 className="text-blue-700 font-bold text-4xl italic mr-2">
          Hubungi Sekarang
        </h2>

        <a>
          <button
            type="button"
            className="relative w-full max-w-3xl px-10 py-4 text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full mb-8 mt-4 ml-[25px]"
          >
            <img
              src="/whatsapp.png"
              alt="logo wa"
              style={{
                width: "70px",
                height: "auto",
                position: "absolute",
                left: "15%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <span className="text-7xl font-bold block">WhatsApp</span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default AboutUs;
