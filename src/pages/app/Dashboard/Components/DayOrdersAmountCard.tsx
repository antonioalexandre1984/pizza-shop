import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export const DayOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Relação de pedidos do dia
        </CardTitle>
        <DollarSign className="h-4 w-4 text-emerald-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">35</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-rose-500 dark:text-rose-400">-4% </span>
          {''}
          em relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
