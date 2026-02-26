import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

export interface PaginatonProps {
  pageIndex: number
  totalCount: number
  perPage: number
  /*   onPageChange: (page: number) => void */
}

export const Pagination = ({
  pageIndex,
  totalCount,
  perPage,
  /*  onPageChange, */
}: PaginatonProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row">
      <span className="text-muted-foreground text-sm">
        Total de {totalCount} de Itens(s)
      </span>

      <div className="flex flex-col items-center gap-4 sm:flex-row lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            {' '}
            <ChevronsLeft className="size-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronLeft className="size-4" />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronRight className="size-4" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronsRight className="size-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
