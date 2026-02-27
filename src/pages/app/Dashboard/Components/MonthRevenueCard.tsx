import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export const MonthRevenueCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold md:text-base">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-emerald-500" />
      </CardHeader>

      <CardContent className="space-y-1">
        {/* Removido o CardContent duplicado que estava aqui */}
        <span className="text-xl font-bold tracking-tight md:text-2xl">
          R$ 1.000,00
        </span>

        <p className="text-muted-foreground text-xs">
          <span className="font-medium text-emerald-500 dark:text-emerald-400">
            +12%
          </span>{' '}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
