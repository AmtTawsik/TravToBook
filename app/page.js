import Hero from '@/components/hero/Hero'
import PopulerLocations from '@/components/populer-locations/PopulerLocations'
import BestHotels from '@/components/best-hotels/BestHotels'

export default function Home() {
  return (
    <>
      <Hero/>
      <PopulerLocations/>
      <Hero/>
      <BestHotels/>
    </>
  );
}
