import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Ban } from 'lucide-react'

export const MonthCanceledOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold md:text-base">
          Pedidos cancelados do mês
        </CardTitle>
        <Ban className="h-4 w-4 text-emerald-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-xl font-bold tracking-tight md:text-2xl">12</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-rose-500 dark:text-rose-400">-8% </span>
          {''}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
