// app/page.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    // Section ini akan mengisi tinggi main (karena main sudah diset tingginya)
    // Hapus flex-grow h-full dari section karena main sudah mengontrol tinggi
    <section className="bg-[#fefbf7] flex flex-col md:flex-row justify-between max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-20 gap-8 md:gap-14">
      
      {/* KIRI: Teks */}
      {/* flex-grow agar kolom teks meregang vertikal. */}
      {/* items-start agar konten teks mulai dari atas (default flex-col) */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col flex-grow items-start"> 
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Ukuran teks yang lebih besar untuk desktop, bisa disesuaikan
          className="text-6xl md:text-8xl font-bold text-blue-900 mb-8 leading-tight" // text-8xl untuk sangat besar
        >
          SIPORDA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          // Ukuran teks yang lebih besar untuk desktop
          className="text-2xl md:text-4xl text-gray-700 mb-12 leading-relaxed" // text-4xl untuk sangat besar
        >
          Sistem Informasi Pembudayaan Olahraga <br />
          dan Data Organisasi & Tenaga Keolahragaan
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
          <motion.a
            href="/daftar-individu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-4 text-lg rounded-xl font-medium hover:bg-green-600 transition"
          >
            Daftar sebagai Individu
          </motion.a>
          <motion.a
            href="/daftar-organisasi"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-800 text-white px-6 py-4 text-lg rounded-xl font-medium hover:bg-blue-900 transition"
          >
            Daftar sebagai Organisasi
          </motion.a>
        </div>

        {/* mt-auto akan mendorong div ikon ke bagian bawah kolom teks jika ada ruang sisa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
          <a href="/direktori" className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <img src="/icons/direktori.svg" className="h-12" alt="Direktori Icon" />
            <span className="text-xl font-semibold text-gray-800">Lihat Direktori</span>
          </a>
          <a href="/kalender" className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <img src="/icons/calendar.svg" className="h-12" alt="Kalender Icon" />
            <span className="text-xl font-semibold text-gray-800">Kalender Kegiatan</span>
          </a>
        </div>
      </div>

      {/* KANAN: Gambar */}
      {/* flex-grow untuk meregangkan kolom gambar secara vertikal. */}
      {/* items-center akan memusatkan gambar di kolom yang meregang. */}
      {/* min-h-[400px] atau min-h-[500px] bisa ditambahkan untuk gambar jika perlu tinggi minimum */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center items-center flex-grow" // Hapus h-full karena flex-grow sudah menangani
      >
        <Image
          src="/body.png"
          alt="Ilustrasi SIPORDA"
          // Tingkatkan width dan height untuk ukuran desktop yang optimal
          width={800} // Coba lebih besar
          height={600} // Coba lebih besar
          // Jika ingin gambar benar-benar mengisi, coba object-cover atau object-fill, tapi bisa distorsi.
          // Pertahankan object-contain jika rasio aspek harus terjaga.
          // Tambahkan flex-grow pada Image itu sendiri agar meregang jika parent flex.
          className="w-full h-auto object-contain flex-grow" // Tambah flex-grow di sini
          priority
        />
      </motion.div>
    </section>
  )
}