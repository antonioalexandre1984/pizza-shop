import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pizza } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpForm = z.object({
  email: z.string().email('Email inválido').min(1, 'Informe seu email'),
  restaurantName: z.string().min(1, 'Informe o nome do seu estabelecimento'),
  manageName: z.string().min(1, 'Informe o nome do responsável'),
  phone: z.string().min(1, 'Informe o telefone de contato'),
})

type SignUpFormData = z.infer<typeof signUpForm>

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpForm),
  })

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpFormData) {
    try {
      console.log(data)
      // throw new Error('Simulated error') // Simulate an error for demonstration
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true)
        }, 2000),
      )
      toast.success(
        'Restaurante cadastrado com sucesso! Em breve você receberá um email com instruções para acessar o painel do parceiro.',
        {
          action: {
            label: 'Login',
            onClick: () => navigate('/sign-in'),
          },
        },
      )
    } catch {
      toast.error(
        'Erro ao finalizar cadastro. Por favor, verifique as informações e tente novamente.',
      )
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button
          variant="ghost"
          asChild
          className="absolute top-4 right-4 md:top-8 md:right-8"
        >
          <Link to="/sign-in" className="">
            Fazer Login
          </Link>
        </Button>
        <div className="flex w-87.5 flex-col justify-center gap-6">
          <div className="flex flex-col gap-8 text-center">
            <h1 className="gap-2 text-2xl font-semibold tracking-tight">
              Criar Conta de Parceiro na <br />{' '}
              <span className="m-2">
                <Pizza className="inline" color="red" />
              </span>
              pizza.shop!
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e acompanhe suas vendas pelo painel do parceiro.
              O processo é simples e gratuito.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            {/* Campo de email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Qual seu email?"
                {...register('email')}
              />
            </div>
            {/* Campo de nome do estabelecimento */}
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Digite o nome do seu estabelecimento"
                {...register('restaurantName')}
              />
            </div>
            {/* Campo de nome do responsável */}
            <div className="space-y-2">
              <Label htmlFor="manageName">
                Responsável pelo Estabelecimento
              </Label>
              <Input
                id="manageName"
                type="text"
                placeholder="Digite o nome do responsável"
                {...register('manageName')}
              />
            </div>
            {/* Campo de telefone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone de Contato</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                {...register('phone')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Finalizar Cadastro
            </Button>

            {/* <p className="text-muted-foreground text-sm">
              Em breve você receberá um email com instruções para acessar o
              painel do parceiro.
            </p> */}
            <p className="text-muted-foreground text-sm">
              Ao finalizar o cadastro, você concorda com nossos{' '}
              <Link to="/termos-de-uso" className="">
                <a href="" className="underline">
                  Termos de Uso
                </a>
              </Link>{' '}
              e{' '}
              <Link to="/politicas-de-privacidade" className="">
                <a href="" className="underline">
                  Politica de Privacidade
                </a>
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
