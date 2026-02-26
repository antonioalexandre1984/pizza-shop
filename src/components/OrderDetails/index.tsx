import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>124564674878451</DialogTitle>
          <DialogDescription>Detalhes do Pedido</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="text-xs font-medium">Pendente</span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex items-center justify-end">
                  <span className="text-xs font-medium">John Doe</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Contato</TableCell>
                <TableCell className="flex items-center justify-end">
                  <span className="text-xs font-medium">(11) 98765-4321</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex items-center justify-end">
                  <span className="text-xs font-medium">
                    john.doe@example.com
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <span className="text-xs font-medium">2 horas</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Pizza Margherita</TableCell>
                <TableCell className="flex items-center justify-center">
                  2
                </TableCell>
                <TableCell className="text-right-2">R$ 49,99</TableCell>
                <TableCell className="text-right-2">R$ 99,98</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Pizza Margherita</TableCell>
                <TableCell className="flex items-center justify-center">
                  2
                </TableCell>
                <TableCell className="text-right-2">R$ 49,99</TableCell>
                <TableCell className="text-right-2">R$ 99,98</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Pizza Margherita</TableCell>
                <TableCell className="flex items-center justify-center">
                  2
                </TableCell>
                <TableCell className="text-right-2">R$ 49,99</TableCell>
                <TableCell className="text-right-2">R$ 99,98</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="text-right-2 font-bold">
                  Total
                </TableCell>
                <TableCell className="text-right-2 font-medium">
                  R$ 149,99
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </DialogContent>
  )
}
