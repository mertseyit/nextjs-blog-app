import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/auth/AuthProvider'
import { UserProvider } from '@/components/context/UserContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <div className='flex flex-col justify-between h-full w-full'>
              <Navbar />
              {children}
              {/* <Footer /> */}
            </div>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
