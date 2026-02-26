import { Pagination } from '@/components/Interfaces/Pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableFilters } from './OrderTableFilters'
import { OrderTableRows } from './OrderTableRows'

export const Orders = () => {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4 p-4 md:p-0">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Pedidos
        </h1>
        <div className="space-y-2.5">
          <OrderTableFilters />
          {/* Form responsivo: stack no mobile, row no desktop */}

          {/* Container com scroll horizontal para a tabela */}
          <div className="overflow-x-auto rounded-md border">
            <Table className="min-w-[600px] md:min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[48px]"></TableHead>
                  <TableHead className="w-[100px] md:w-[140px]">ID</TableHead>
                  <TableHead className="hidden w-[140px] md:table-cell">
                    Realizado há
                  </TableHead>
                  <TableHead className="w-[110px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[110px]">Total</TableHead>
                  <TableHead className="w-[50px] md:w-[120px]"></TableHead>
                  <TableHead className="w-[50px] md:w-[120px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <OrderTableRows key={i} />
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="py-2">
            <Pagination
              pageIndex={0}
              totalCount={150}
              perPage={10}
              /*   onPageChange={function (page: number): void {
              throw new Error('Function not implemented.')
            }} */
            />
          </div>
        </div>
      </div>
    </>
  )
}
