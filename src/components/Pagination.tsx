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
  onPageChange: (page: number) => void
}

export const Pagination = ({
  pageIndex,
  totalCount,
  perPage,
  /*  onPageChange, */
}: PaginatonProps) => {
  const pages = Math.ceil(totalCount / perPage)

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-muted-foreground text-sm">
        Total de {totalCount} de Itens(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronsLeft />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronLeft />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronRight />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {' '}
            <ChevronsRight />
            <span className="sr-only">Página Anterior</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
