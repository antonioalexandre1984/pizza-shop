import { Separator } from '@/components/ui/separator'
import { Home, Pizza, Utensils } from 'lucide-react'
import { AccountMenu } from '../AccountMenu'
import { NavLink } from '../NavLink'
import { ThemeToggle } from '../Themes/ThemeToggle'

export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-5 w-5" size={28} />
        <span className="font-semibold">pizza.shop</span>
        <Separator orientation="vertical" className="mx-4 h-6" />
        <nav className="flex items-center gap-8 space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" size={18} />
            Início
          </NavLink>
          <NavLink to="/orders">
            <Utensils className="h-4 w-4" size={18} />
            Pedidos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
