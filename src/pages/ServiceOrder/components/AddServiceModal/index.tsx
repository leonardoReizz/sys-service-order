import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, SubTotal, TableProducts } from './style'
import {IService} from "../../../../context/ServiceContext";

interface ServiceModalProps {
  onOpenChangeAddServiceModal: (open: boolean) => void;
  services: IService[];
  selectedServices: any[];
  selectService: (service: IService) => void;
}
export function AddServiceModal({onOpenChangeAddServiceModal, services, selectService, selectedServices}: ServiceModalProps) {
  return (
    <>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <TableProducts>
            <thead>
            <tr>
              <th>Serviço</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Adicionar/Remover</th>
            </tr>
            </thead>
            <tbody>
            {
              services.map((service) => {
                return (
                  <tr className={selectedServices.filter((selected: any) => selected.id === service.id).length ? 'selected' : ''}>
                    <td>{service.name}</td>
                    <td>R${service.price}</td>
                    <td>{service.type}</td>
                    <td><button onClick={() => selectService(service)}>{
                      selectedServices.filter((selected: any) => selected.id === service.id).length ?  '- Remover': '+ Adicionar'
                    }</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </TableProducts>
          <SubTotal>
            SubTotal: R$ {selectedServices.reduce((acc, item) => {return acc + Number(item.price)}, 0)}
          </SubTotal>
        </Content>
      </Dialog.Portal>
    </>
  )
}