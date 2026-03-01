import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    CartesianGrid as RechartsCartesianGrid,
    Line as RechartsLine,
    LineChart as RechartsLineChart,
    ResponsiveContainer as RechartsResponsiveContainer,
    Tooltip as RechartsTooltip,
    XAxis as RechartsXAxis,
    YAxis as RechartsYAxis,
} from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
  { name: 'Janeiro', revenue: 400 },
  { name: 'Fevereiro', revenue: 300 },
  { name: 'Marco', revenue: 200 },
  { name: 'Abril', revenue: 278 },
  { name: 'Maio', revenue: 189 },
  { name: 'Junho', revenue: 239 },
]

export const RevenueChart = () => {
  return (
    <Card className="col-span-full lg:col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita dos últimos 6 meses
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Análise da receita mensal para os últimos 6 meses
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {/* Aqui você pode adicionar um gráfico usando uma biblioteca como Chart.js ou Recharts */}
        <RechartsResponsiveContainer width="100%" height={240}>
          <RechartsLineChart data={data} style={{ fontSize: 12 }}>
            <RechartsCartesianGrid
              vertical={false}
              className="stroke-muted"
              strokeDasharray="3 3"
            />
            <RechartsXAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dataKey="name"
              width={88}
              dy={16}
            />
            <RechartsYAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80} // Reduzi um pouco para ganhar área de gráfico
              tickFormatter={
                (value: number) =>
                  value
                    .toLocaleString('pt-Br', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                    .replace(',00', '') // Remove os centavos para economizar espaço no mobile
              }
            />
            <RechartsTooltip />
            {/*      <RechartsLegend /> */}
            <RechartsLine
              type="monotone"
              dataKey="revenue"
              stroke={colors.violet[600]}
              activeDot={{ r: 8 }}
            />
          </RechartsLineChart>
        </RechartsResponsiveContainer>
      </CardContent>
    </Card>
  )
}
