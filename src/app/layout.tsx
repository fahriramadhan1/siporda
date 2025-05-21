// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIPORDA',
  description: 'Sistem Informasi Pembudayaan Olahraga dan Data Organisasi & Tenaga Keolahragaan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headerHeight = '64px'; // Sesuaikan dengan tinggi header Anda
  const footerHeight = '40px'; // Sesuaikan dengan tinggi footer Anda

  return (
    <html lang="id">
      {/* Hapus min-h-screen dari body, biarkan flex-col saja */}
      <body className={`${inter.className} bg-[#fefbf7] text-gray-800 flex flex-col`}>
        <Header />
        {/* main akan mengisi sisa ruang yang tersedia */}
        <main 
          className="flex-grow bg-[#fefbf7] w-full"
          // Atur tinggi main agar pas di layar tanpa scroll
          style={{ minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})` }}
        >
          {children}
        </main>
        <footer className="text-sm py-4 text-gray-600 bg-[#fefbf7] text-center">
          &copy; {new Date().getFullYear()} SIPORDA
        </footer>
      </body>
    </html>
  )
}