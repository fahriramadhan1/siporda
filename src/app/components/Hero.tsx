// hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#fefbf7] py-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Text section */}
      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-4"
        >
          SIPORDA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          Sistem Informasi Pembudayaan Olahraga <br /> {/* Tambahkan ini */}
          dan Data Organisasi & Tenaga Keolahragaan
        </motion.p>
        <div className="flex gap-4">
          <motion.a
            href="/daftar-individu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-5 py-3 rounded-md font-medium shadow hover:bg-green-600"
          >
            Daftar sebagai Individu
          </motion.a>
          <motion.a
            href="/daftar-organisasi"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-800"
          >
            Daftar sebagai Organisasi
          </motion.a>
        </div>
      </div>

      {/* Image section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <Image
          src="/acuan.png"
          alt="Ilustrasi SIPORDA"
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  )
}