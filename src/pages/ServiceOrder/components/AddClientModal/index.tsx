import { Overlay, Content, TableClients } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import {IClient} from "../../../../context/ClientsContext";

interface AddClientModalProps {
  selectedClients: any;
  selectClient: (client: any) => void;
  onOpenChangeAddClientModal: (open: boolean) => void;
  clients: IClient[];
}

export function AddClientModal({clients, selectedClients, selectClient}: AddClientModalProps) {
  return (
    <>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <TableClients>
            <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Adicionar/Remover</th>
            </tr>
            </thead>
            <tbody>
            {
              clients.map((client) => {
                return (
                  <tr className={selectedClients.filter((selected: any) => selected.id === client.id).length ? 'selected' : ''}>
                    <td>{client.fullName}</td>
                    <td>{client.email}</td>
                    <td>{client.phoneOne}</td>
                    <td><button onClick={() => selectClient(client)}>{
                      selectedClients.filter((selected: any) => selected.id === client.id).length ?  '- Remover': '+ Adicionar'
                    }</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </TableClients>
        </Content>
      </Dialog.Portal>
    </>
  )
}