import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-5 w-5" size={28} />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-muted-foreground text-sm">
            Insira suas credenciais para acessar o painel do parceiro.
          </p>
        </div>
        <footer className="text-sm">
          Painel do Parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center p-10">
        <Outlet />
      </div>
    </div>
  )
}
