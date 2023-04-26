import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function BlurImage({ src, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      alt={alt}
      src={src}
      fill
      className={cn(
        'duration-700 ease-in-out group-hover:opacity-75 object-cover object-center',
        isLoading
          ? 'scale-100 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0',
      )}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  )
}
