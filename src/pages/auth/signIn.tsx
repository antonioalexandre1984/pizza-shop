import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email('Email inválido').min(1, 'Informe seu email'),
})

type SignInFormData = z.infer<typeof signInForm>

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInForm),
  })

  async function handleSignIn(data: SignInFormData) {
    try {
      console.log(data)
      // throw new Error('Simulated error') // Simulate an error for demonstration
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true)
        }, 2000),
      )
      toast.success(
        'Enviamos um link de acesso para seu email. Verifique sua caixa de entrada.',
      )
    } catch {
      toast.error(
        'Credenciais inválidas. Por favor, verifique seu email e tente novamente.',
      )
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button
          variant="ghost"
          asChild
          className="absolute top-4 right-4 md:top-8 md:right-8"
        >
          <Link to="/sign-up" className="">
            Novo estabelecimento
          </Link>
        </Button>
        <div className="flex w-87.5 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu email"
                {...register('email')}
              />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
