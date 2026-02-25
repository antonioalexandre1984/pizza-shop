import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export const OrderTableFilters = () => {
  return (
    <form className="flex flex-col gap-2 md:flex-row md:items-center">
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        type="text"
        placeholder="ID do pedido"
        className="h-8 w-auto md:w-[320px]"
      />
      <Input
        type="text"
        placeholder="Pesquisar por nome, email ou telefone"
        className="h-8 w-full md:w-[320px]"
      />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-auto md:w-[320px]">
          <SelectValue placeholder="Status do pedido" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="approved">Aprovado</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="canceled">Em Preparo</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-2 gap-2 md:flex md:w-auto md:items-center">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 w-full md:w-auto"
        >
          <X className="mr-2 size-4" />
          Limpar
        </Button>

        <Button
          type="submit"
          variant="default"
          size="sm"
          className="h-8 w-full font-semibold md:w-auto"
        >
          <Search className="mr-2 size-4" />
          Filtrar
        </Button>
      </div>
    </form>
  )
}
