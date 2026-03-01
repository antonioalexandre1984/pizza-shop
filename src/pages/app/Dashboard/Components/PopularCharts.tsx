import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart as PieChartIcon } from 'lucide-react'; // Renomeado o ícone
import {
    Cell,
    Pie,
    PieChart, // Importado corretamente do recharts
    ResponsiveContainer,
    Tooltip,
} from 'recharts'
import colors from 'tailwindcss/colors'; // Opcional: para usar cores do tailwind

const data = [
  { product: 'Pepperoni', amount: 78 },
  { product: 'Mussarela', amount: 56 },
  { product: 'Calabresa', amount: 28 },
  { product: 'Frango', amount: 87 },
  { product: 'Portuguesa', amount: 45 },
  { product: 'Marguerita', amount: 37 },
  { product: 'Bacon', amount: 93 },
]

// Paleta de cores para as fatias
const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export const PopularCharts = () => {
  return (
    <Card className="col-span-full lg:col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <PieChartIcon className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Pie
                data={data}
                dataKey="amount"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={60}
                strokeWidth={8}
                labelLine={false} // Remove as linhas conectoras para um visual mais limpo
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  // Aumentei o raio para a label ficar um pouco mais afastada da borda externa
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-[10px] md:text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {data[index].product.length > 12
                        ? `${data[index].product.substring(0, 10)}...`
                        : data[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="stroke-background transition-opacity hover:opacity-80"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
