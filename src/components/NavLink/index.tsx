import { Link, useLocation, type LinkProps } from 'react-router-dom'

export type NavLinkProps = LinkProps

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="data-[current=true]:text-foreground text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-colors"
      {...props}
    />
  )
}
