// components/Header.tsx
'use client'

export default function Header() {
  return (
    <header className="shadow-sm bg-[#fefbf7]">
      {/* Tinggi header mungkin perlu diatur secara eksplisit jika ingin calc() bekerja sempurna */}
      {/* Misalnya, h-16 atau h-[64px] jika memang tingginya tetap segitu */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo SIPORDA" className="h-10 w-auto object-contain" />
          <span className="font-bold text-xl text-blue-800">SIPORDA</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="/direktori" className="hover:text-orange-500 transition">Direktori Organisasi</a>
          <a href="/tenaga" className="hover:text-orange-500 transition">Tenaga Olahraga</a>
          <a href="/kalender" className="hover:text-orange-500 transition">Kalender Kegiatan</a>
          <a href="/sertifikasi" className="hover:text-orange-500 transition">Sertifikasi Online</a>
          <a href="/laporan" className="hover:text-orange-500 transition">Laporan Evaluasi</a>
        </nav>
        <a
          href="/login"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
        >
          Login
        </a>
      </div>
    </header>
  )
}