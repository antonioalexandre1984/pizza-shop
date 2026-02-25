import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'

export const OrderTableRows = () => {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="size-3" />
        </Button>
      </TableCell>
      <TableCell className="max-w-20 truncate font-mono text-xs font-medium md:max-w-none">
        15654546846
      </TableCell>
      <TableCell className="text-muted-foreground hidden text-sm md:table-cell">
        há 2 horas
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="text-xs font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="text-xs font-medium">John Doe</TableCell>
      <TableCell className="text-xs font-medium">R$ 149,99</TableCell>
      <TableCell>
        <Button variant="outline" size="xs" className="md:w-full">
          <ArrowRight className="size-3 md:mr-2" />
          <span className="hidden md:inline">Aprovar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs" className="md:w-full">
          <X className="size-3 md:mr-2" />
          <span className="hidden md:inline">Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
