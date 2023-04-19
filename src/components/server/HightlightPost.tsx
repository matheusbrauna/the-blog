import { ArrowLeft, ArrowRight, Star } from '@phosphor-icons/react'
import { Avatar } from '../client/Avatar'
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider'
import { MutableRefObject } from 'react'

interface HighlightPostProps {
  loaded: boolean
  currentSlide: number
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
}

export function HighlightPost({
  loaded,
  currentSlide,
  instanceRef,
}: HighlightPostProps) {
  return (
    <article className="p-10 keen-slider__slide">
      <div className="flex flex-col h-full gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <Avatar
              authorName="Matheus Braúna"
              profileImageURL="https://github.com/matheusbrauna.png"
            />
            <span className="font-bold tracking-wide">Carreira</span>
          </div>
          <span className="flex items-center h-6 gap-1 px-2 font-semibold bg-white text-zinc-950 rounded-2xl">
            <Star weight="fill" className="text-xs" />
            Em destaque
          </span>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <h2 className="text-4xl max-w-[80%] tracking-wider font-bold">
            Boas práticas para devs em início de carreira
          </h2>
          <div className="flex justify-between">
            <div>
              <span>há 21 dias</span>
              <span className="px-2">•</span>
              <span>3 min de leitura</span>
            </div>
            <div className="flex gap-4">
              {loaded && instanceRef.current && (
                <>
                  <button disabled={currentSlide === 0} className="group">
                    <ArrowLeft
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      className="text-2xl text-gray-100 group-disabled:text-gray-400"
                    />
                  </button>

                  <button
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                    className="group"
                  >
                    <ArrowRight
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      className="text-2xl text-gray-100 group-disabled:text-gray-400"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
