import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
    console.log(data)
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
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
