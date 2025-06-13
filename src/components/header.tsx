import Link from "next/link"
import { Button } from "./ui/button"

export const Header=()=>{
    return(
        <header className="sticky top-0 z-40 w-full border-b bg-white">
<div className="container flex h-16 items-center justify-between">
  <div className="flex items-center gap-2">
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharan.jpg-hKTanjviD0CyhVpdsG7yLLQhlGVtOT.jpeg"
      alt="Bharan Ventures Logo"
      width={180}
      height={40}
      className="h-10 w-auto"
    />
  </div>
  <nav className="hidden md:flex gap-6">
    <Link
      href="#how-we-work"
      className="text-sm font-medium text-gray-700 hover:text-sky-700"
    >
      How We Work
    </Link>
    <Link
      href="#portfolio"
      className="text-sm font-medium text-gray-700 hover:text-sky-700"
    >
      Portfolio
    </Link>
    <Link
      href="#services"
      className="text-sm font-medium text-gray-700 hover:text-sky-700"
    >
      Services
    </Link>
    <Link
      href="#join-us"
      className="text-sm font-medium text-gray-700 hover:text-sky-700"
    >
      Join Us
    </Link>
    <Link
      href="#contact"
      className="text-sm font-medium text-gray-700 hover:text-sky-700"
    >
      Contact
    </Link>
  </nav>
  <div className="flex items-center gap-4">
    <Button
      variant="outline"
      className="hidden md:flex border-sky-700 text-sky-700 hover:bg-sky-50"
    >
      Join Our Network
    </Button>
    <Button className="bg-sky-700 hover:bg-sky-800">
      Start Your Venture
    </Button>
  </div>
</div>
</header>
    )
}