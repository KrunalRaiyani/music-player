import notfound from "@/../../public/radio.svg"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center flex flex-col">
        <img src={notfound?.src} alt="404" className="h-64 mb-12" />
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for could not be found.</p>
        <Link href="/" className="text-blue-500 hover:text-green-500">
          Go back to the home page
        </Link>
      </div>
    </div>
  )
}
