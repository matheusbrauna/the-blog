import { CircleNotch } from '@phosphor-icons/react'

export function LoadingPage() {
  return (
    <div className="absolute top-0 left-0 grid w-screen h-screen place-items-center">
      <CircleNotch size={40} className="animate-spin" />
    </div>
  )
}
