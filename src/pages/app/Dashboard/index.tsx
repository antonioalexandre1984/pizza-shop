import { Helmet } from 'react-helmet-async'
import { DayOrdersAmountCard } from './Components/DayOrdersAmountCard'
import { MonthOrdersAmountCard } from './Components/MonthOrdersAmountCard'
import { MonthRevenueCard } from './Components/MonthRevenueCard'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao painel de controle da sua pizzaria! Aqui você pode
          gerenciar seus pedidos, acompanhar as estatísticas de vendas e muito
          mais.
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Visão Geral</h2>
          <p className="text-muted-foreground">
            Aqui você pode ver um resumo dos seus pedidos recentes, status de
            entrega e outras informações importantes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
