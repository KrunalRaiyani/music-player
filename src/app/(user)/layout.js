import { Inter } from 'next/font/google'
import Link from 'next/link'
import '../globals.css'
import logo from '@/../../public/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <div className="bg-[#093545] text-white">
        <nav className="navbar sticky top-0 z-10 bg-gray-700 p-3 px-8 bg-opacity-25 backdrop-blur border-slate-900/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold font-[cursive]" >
                <img src={logo?.src} alt="logo" className='h-11' />
                <p className='first-letter:text-red-500 text-2xl mb-1'>Music</p>
              </Link>
              <div className='flex items-center gap-3'>
                <Link href="/" className="text-white">
                  Home
                </Link>
                <Link href="/playlist" className="text-white">
                  Playlist
                </Link>
                <Link href="/favorites" className="text-white">
                  Favourite 
                </Link>
                <Link href="/create-playlist" className="text-white">
                  Create
                </Link>
              </div>
            </div>

            {/* <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add
            </button> */}
          </div>
        </nav>
        {children}
      </div>
  )
}
