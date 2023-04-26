import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function BlurImage({ src, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={alt}
        src={src}
        fill
        className={cn(
          'duration-700 ease-in-out group-hover:opacity-75 object-cover object-center',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </div>
  )
}
