import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <>

    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col hustify-center gap-8">
            <h1 className="h1-bold">Connect Collaborate Coordinate</h1>
            <p className="text-base md:text-lg">Welcome to Hackify, the ultimate platform for hackathon enthusiasts and aspiring innovators. Join us on a journey of creativity, collaboration, and innovation as we empower individuals and teams to turn their ideas into reality.</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">
              Explore Now
            </Link>
          </Button>
        </div>

        <Image 
        src="/assets/images/hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />

      </div>
      
    </section> 
    </>

  )
}