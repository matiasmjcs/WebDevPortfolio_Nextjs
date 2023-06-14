import Nav from '@/components/nav/nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matías Mejías Frontend Developer',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="imgcubo.png" />
      </head>
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
