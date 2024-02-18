import React, { useEffect, useState } from "react";
import BackgroundLong from "../components/Layouts/BackgroundLong";
import NavBar from "../components/Fragments/NavBar/Index";
import ButtonHref from "../components/Elements/ButtonHref";
import { Link } from "react-router-dom";
import CardStatic from "../components/Fragments/CardStatic";
import Footer from "../components/Fragments/Footer";

const slides = [
  {
    image: "/assets/img/test.JPG",
    name: "Rigent Tio Salma",
    label: "Mahasiswa Universitas Amikom Yogyakarta",
    deskripsi: `Perempuan, seperti setiap individu lainnya, memiliki hak yang mendasar dan tak terbantahkan untuk menjalani hidup tanpa ketakutan dan tanpa menjadi korban kekerasan atau pelecehan. Kesetaraan gender bukan hanya sekadar
        panggilan untuk pemberian hak, tetapi merupakan komitmen kolektif untuk menciptakan lingkungan di mana perempuan dapat hidup dan berkembang tanpa rasa takut atau perlakuan tidak adil.`,
  },
  {
    image: "/assets/img/test.JPG",
    name: "Ferdi Pratama",
    label: "Mahasiswa Universitas Amikom Yogyakarta",
    deskripsi: `Di dalam lingkungan yang mempromosikan kesetaraan gender, laki-laki juga dapat menikmati manfaatnya. Masyarakat yang menerapkan prinsip kesetaraan gender cenderung lebih damai, produktif, dan inovatif karena menghargai kontribusi dari seluruh anggotanya tanpa memandang jenis kelamin. Hal ini menciptakan lingkungan kerja yang lebih beragam, di mana ide-ide baru dapat berkembang dan solusi yang lebih efektif dapat ditemukan.`,
  },
  {
    image: "/assets/img/test.JPG",
    name: "Akbar Setiawan",
    label: "Mahasiswa Universitas Amikom Yogyakarta",
    deskripsi: `Dengan menciptakan ruang yang memungkinkan perempuan untuk tumbuh dan berkembang sesuai potensi mereka, kita secara bertahap melangkah menuju masyarakat yang lebih inklusif dan berkeadilan, di mana setiap individu memiliki hak yang sama untuk mencapai impian dan ambisi mereka tanpa hambatan yang tidak perlu. Kita melihat hasil yang lebih baik, baik dalam ekonomi, pendidikan, maupun kesehatan, ketika perempuan memiliki kesempatan yang setara dan diperlakukan dengan adil.`,
  },
];

const BerandaPage = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 10000);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <BackgroundLong>
      <NavBar />

      <div className="container mx-auto">
        <div className="grid grid-cols-12 max-w-[1700px] items-center py-[22px] lg:py-[72px]">
          <div className="lg:col-span-6 col-span-12">
            <div className="w-full lg:max-w-[497px]">
              <h1 className="font-bold text-5xl lg:text-[64px] leading-tight">
                Jadilah <span className="text-primary">Bagian</span> dari Gerakan <span className="text-primary">Perubahan</span>
              </h1>
              <p className="mt-[43px]">Suarakan kesetaraan gender. Bersama kita bentuk masa depan di mana setiap perempuan memiliki suara yang didengar</p>
            </div>
            <div className="mt-[43px] flex flex-col gap-4 lg:flex-row text-center">
              <ButtonHref>Baca Artikel</ButtonHref>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://youtu.be/24v7oNI70II?si=kRBslKq3JGsmIZ1g"}
                className="flex gap-2 py-4 px-8 rounded-full font-bold bg-white border items-center justify-center hover:bg-[#fff4fd] transition-colors"
              >
                <img src="/assets/icon/play.svg" alt="" /> Tonton Video
              </Link>
            </div>
          </div>
          <div className="col-span-6 lg:flex hidden justify-end">
            <img src="/assets/img/hero.png" alt="hero" className="hover:scale-105 duration-150" />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl text-center pt-20 pb-16 inline-block">
            Fitur <span className="text-primary">Gendr</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row text-center justify-evenly gap-5 pb-20">
          <CardStatic image="/assets/icon/icon-chat.svg" title="Konsultasi Online">
            {" "}
            Interaksi secara langsung dengan konselor atau ahli kesetaraan gender melalui chat real-time
          </CardStatic>
          <CardStatic image="/assets/icon/artikel-icon.svg" title="Buat Artikel">
            {" "}
            Ekspresikan pemikiran, pengalaman, dan wawasan kamu tentang isu-isu kesetaraan gender melalui tulisan
          </CardStatic>
          <CardStatic image="/assets/icon/forum-icon.svg" title="Forum Diskusi">
            {" "}
            Ruang yang aman dan mendukung untuk membahas isu-isu seputar kesetaraan gender
          </CardStatic>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center bg-white bg-opacity-20 filter backdrop-blur-[140px] rounded-2xl shadow-card px-[20px] lg:px-14 py-20">
          <div>
            <img src="/assets/img/buku.png" alt="Buku" />
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex justify-center w-full lg:max-w-[555px]">
              <h2 className="lg:text-5xl text-4xl font-bold text-center lg:text-left leading-tight">
                Mau buat artikel juga? Buruan daftar <span className="text-primary">Gendr</span>
              </h2>
            </div>
            <div className="mx-auto mt-9">
              <ButtonHref>Daftar Sekarang</ButtonHref>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-light  mt-16">
        <div className="container mx-auto h-screen py-9 relative">
          <div className="flex justify-center items-center h-full">
            <img src="/assets/img/live-chat.png" alt="Chat" className=" h-full" />
          </div>
          <h2 className="text-left text-white font-bold text-4xl lg:text-[48px] max-w-[606px] absolute top-1/2 -translate-y-1/2">Konsultasi Pribadi untuk Pertanyaan Kamu</h2>
        </div>
      </div>

      <div className="container mx-auto min-h-screen mt-[84px] mb-[150px] ">
        <div className="flex justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl text-center pt-20 pb-16 inline-block">
            Sudut Pandang <span className="text-primary">Mereka</span>
          </h2>
        </div>

        <div className="relative ">
          <div className="lg:py-[105px] lg:px-16 px-12 py-[80px]  bg-white rounded-[83px] shadow-card flex relative overflow-hidden max-w-full">
            <div className="flex overflow-hidden">
              {slides.map((slide, index) => (
                <div key={index} className="flex lg:flex-row flex-col gap-8 min-w-full overflow-hidden justify-center items-center" style={{ transform: `translateX(-${curr * 100}%)`, transition: "transform 0.5s ease" }}>
                  <img src={slide.image} alt="" className="min-w-[212px] h-[212px] object-cover top-0 rounded-3xl" />
                  <div className="flex flex-col justify-between h-full">
                    <p className="font-medium text-base">{slide.deskripsi}</p>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-base">{slide.name}</h2>
                      <h3 className="font-normal text-sm">{slide.label}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 ">
            <button onClick={prev} className="px-3 py-2 bg-primary rounded-full flex items-center justify-center hover:bg-[#ac1f86] -ml-4">
              <img src="/assets/icon/slide-left.svg" alt="" />
            </button>
            <button onClick={next} className="px-3 py-2 bg-primary rounded-full flex items-center justify-center hover:bg-[#ac1f86] -mr-4">
              <img src="/assets/icon/slide-right.svg" alt="" />
            </button>
          </div>
          <div className="absolute right-1/2 translate-x-1/2 -bottom-8">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div key={i} className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-primary" : "bg-gray-300"}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BackgroundLong>
  );
};

export default BerandaPage;
