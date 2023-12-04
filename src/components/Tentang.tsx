import React from "react";

function Tentang() {
  return (
    <section>
      <h1 className="font-semibold leading-[100px] tracking-tigh text-center py-2">
        Tugas ini dibuat untuk memenuhi Ulangan Akhir Semester Mata Kuliah
        Rekayasa Perangkat Lunak
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-[5px]">
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/dhan.jpg" />
          <h4 className="font-semibold text-xl my-2">Ardhan Dimas Nuryadin</h4>
          <p className="text-grey-500 text-sm">227006025</p>
          <a href="https://instagram.com/ardhandms_?igshid=OGQ5ZDc2ODk2ZA==">
            <button className="mt-4 bg-blue-700 text-white rounded-full px-8 py-2">
              Lihat Instagram
            </button>
          </a>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/profileakbar.jpg" />
          <h4 className="font-semibold text-xl my-2">Akbar Saepul Rizal</h4>
          <p className="text-grey-500 text-sm">227006028</p>
          <a href="https://instagram.com/akbar0404_?igshid=OGQ5ZDc2ODk2ZA==">
            <button className="mt-4 bg-blue-700 text-white rounded-full px-8 py-2">
              Lihat Testi
            </button>
          </a>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all">
          <img src="/profilerahmat.jpg" />
          <h4 className="font-semibold text-xl my-2">Rahmat Mahardika</h4>
          <p className="text-grey-500 text-sm">227006029</p>
          <a href="https://instagram.com/leonidasz__?igshid=OGQ5ZDc2ODk2ZA==">
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
