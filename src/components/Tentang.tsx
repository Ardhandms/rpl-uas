import React from "react";

function Tentang() {
  return (
    <section>
      <h1>
        Tugas ini dibuat untuk memenuhi Ulangan Akhir Semester Mata Kuliah
        Rekayasa Perangkat Lunak
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-[50px]">
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/testimoni/70s.jpg" />
          <h4 className="font-semibold text-xl my-2">
            Converse Chuck Taylor 70s
          </h4>
          <p className="text-grey-500 text-sm">Deep Cleaning</p>
          <a href="https://www.instagram.com/p/CyGa-9rS5do/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <button className="mt-4 bg-blue-700 text-white rounded-full px-8 py-2">
              Lihat Testi
            </button>
          </a>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/testimoni/compasvelo.jpg" />
          <h4 className="font-semibold text-xl my-2">Compass Velocity</h4>
          <p className="text-grey-500 text-sm">Deep Cleaning</p>
          <a href="https://www.instagram.com/p/CygeLUASB7S/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <button className="mt-4 bg-blue-700 text-white rounded-full px-8 py-2">
              Lihat Testi
            </button>
          </a>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/testimoni/converseplow.jpg" />
          <h4 className="font-semibold text-xl my-2">
            Converse Chuck Taylor Low
          </h4>
          <p className="text-grey-500 text-sm">Fast Cleaning</p>
          <a href="https://www.instagram.com/p/CxQoMcOyegH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <button className="mt-4 bg-blue-700 text-white rounded-full px-8 py-2">
              Lihat Testi
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tentang;
