import { getNameInitials } from '@/utils/getNameInitials'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

interface AvatarProps {
  authorName: string
  profileImageURL: string
}

export function Avatar({ authorName, profileImageURL }: AvatarProps) {
  const initials = getNameInitials(authorName)

  return (
    <AvatarPrimitive.Root className="flex items-center justify-center overflow-hidden align-middle bg-transparent border-2 rounded-full w-9 h-9 border-zinc-100">
      <AvatarPrimitive.Image
        src={profileImageURL}
        className="object-cover object-center w-full h-full"
        alt={`${authorName}'s picture`}
      />
      <AvatarPrimitive.Fallback className="flex items-center justify-center w-full h-full text-sm font-semibold leading-4 bg-zinc-100 text-rose-500">
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
