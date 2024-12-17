import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import MatrixRain from '@/components/matrix-rain'
import Navbar from '@/components/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Davi Brito Portfolio - Matrix Edition',
  description: 'A Matrix-themed portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-matrix-black text-matrix-light min-h-screen">
        <ThemeProvider>
          <MatrixRain />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
