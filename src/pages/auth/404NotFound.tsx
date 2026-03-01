import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Image404 from '../../../public/19199300.jpg'

export const NotFound = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden p-4 text-center">
      {/* Imagem de Fundo: Mais clara e opaca */}
      <div className="absolute inset-0 -z-10 select-none">
        <img
          src={Image404}
          alt="404 Background"
          className="h-full w-full object-cover opacity-50 brightness-150 transition-all duration-500"
        />
        {/* Overlay para suavizar ainda mais o fundo */}
        <div className="bg-background/60 absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Conteúdo */}
      <div className="z-10 mb-2 space-y-2">
        {/* H1 com sombra destacada */}
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] md:text-5xl lg:text-6xl dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          Página não encontrada
        </h1>
        <p className="text-muted-foreground mx-auto max-w-100 text-base font-medium md:text-lg">
          Parece que você tentou acessar uma rota que não existe ou foi movida.
        </p>
      </div>

      {/* Botão com efeito de expansão no Hover */}
      <Button
        asChild
        variant="default"
        className="z-10 mt-4 bg-sky-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-sky-600 active:scale-95"
      >
        <Link to="/">Voltar para o Dashboard</Link>
      </Button>
    </div>
  )
}
