import { ImSpinner11 } from 'react-icons/im'
import { SpinnerContainer } from './styles'

export function Loading() {
  return (
    <SpinnerContainer>
      <ImSpinner11 size={48} />
    </SpinnerContainer>
  )
}
