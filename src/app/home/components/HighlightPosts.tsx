'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { HighlightPost } from './HightlightPost'

export function HighlightsPosts() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div
        ref={sliderRef}
        className="hover:-translate-y-1 transition-transform cursor-pointer col-span-2 keen-slider shadow-postShadow bg-[url('../assets/post-banner.png')] bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg"
      >
        <HighlightPost
          loaded={loaded}
          currentSlide={currentSlide}
          instanceRef={instanceRef}
        />
        <HighlightPost
          loaded={loaded}
          currentSlide={currentSlide}
          instanceRef={instanceRef}
        />
      </div>
    </>
  )
}
