import { ServiceOrderModalContainer } from "./style";
import * as Dialog from '@radix-ui/react-dialog'
interface ServiceOrderModalProps {
  closeServiceOrderModal: () => void;
}

export function ServiceOrderModal({closeServiceOrderModal}: ServiceOrderModalProps) {
  return (
    <ServiceOrderModalContainer></ServiceOrderModalContainer>
  )
}