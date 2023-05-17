import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Revisions - Reformatting Academic Manuscripts',
  description: 'Upload your academic manuscripts and choose your desired journal. We will reformat your papers to the appropriate journal style.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
