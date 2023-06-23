import './globals.css'
import { Inter } from 'next/font/google'
import {title} from '@/config/const'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${title.appTitle}`,
  description: 'This is a simple todo app where you can add your task and also edit and delete ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
