import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

export default async function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] w-full flex justify-center items-center flex-col space-y-16">
        <div>
          <Image
            alt=""
            width={100}
            height={100}
            className="animate-ping"
            src={
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY29uc3RydWN0aW9uIj48cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMjAiIGhlaWdodD0iOCIgcng9IjEiLz48cGF0aCBkPSJNMTcgMTR2NyIvPjxwYXRoIGQ9Ik03IDE0djciLz48cGF0aCBkPSJNMTcgM3YzIi8+PHBhdGggZD0iTTcgM3YzIi8+PHBhdGggZD0iTTEwIDE0IDIuMyA2LjMiLz48cGF0aCBkPSJtMTQgNiA3LjcgNy43Ii8+PHBhdGggZD0ibTggNiA4IDgiLz48L3N2Zz4='
            }
          />
        </div>
        <div className="flex justify-center items-center flex-col space-y-4">
          <h1
            className="text-lg md:text2xl
          "
          >
            Coming Soon...
          </h1>
          <div>
            <Link href={'/'} className="underline">
              Click here to go to home page
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
