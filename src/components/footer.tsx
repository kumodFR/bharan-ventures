import Link from "next/link"

export const Footer=()=>{
    return(
        <>
          {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharan.jpg-hKTanjviD0CyhVpdsG7yLLQhlGVtOT.jpeg"
                alt="Bharan Ventures Logo"
                width={150}
                height={35}
                className="h-8 w-auto brightness-200 contrast-200 mb-4"
              />
              <p className="text-sm">
                Building the next generation of startups with founders who dare
                to dream big.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#how-we-work" className="text-sm hover:text-white">
                  How We Work
                </Link>
                <Link href="#portfolio" className="text-sm hover:text-white">
                  Portfolio
                </Link>
                <Link href="#services" className="text-sm hover:text-white">
                  Services
                </Link>
                <Link href="#join-us" className="text-sm hover:text-white">
                  Join Us
                </Link>
                <Link href="#contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/bharanventures"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm">
                © {new Date().getFullYear()} Bharan Ventures. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}