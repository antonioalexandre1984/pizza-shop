import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <div className="bg-muted/40 flex min-h-screen justify-center px-4 py-10">
      <Button
        variant="default"
        asChild
        className="absolute top-4 right-4 md:top-8 md:right-8"
      >
        <Link to="/sign-in" className="">
          Voltar para Login
        </Link>
      </Button>
      <Card className="w-full max-w-4xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Termos de Uso – Pizza Shop
          </CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Última atualização: 22 de fevereiro de 2026
          </p>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <ScrollArea className="h-150 pr-4">
            <div className="space-y-6 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold">
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao acessar ou utilizar a plataforma DeliveryFácil, o usuário
                  declara ter lido, compreendido e aceito integralmente os
                  presentes Termos de Uso. Caso não concorde com quaisquer
                  condições aqui estabelecidas, recomenda-se que não utilize
                  nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">2. Sobre a Plataforma</h2>
                <p>
                  O DeliveryFácil é uma plataforma digital que conecta usuários
                  a restaurantes parceiros, permitindo a realização de pedidos
                  online para entrega ou retirada.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  3. Cadastro do Usuário
                </h2>
                <p>
                  Para utilizar determinadas funcionalidades, o usuário deverá
                  realizar cadastro, fornecendo informações verdadeiras,
                  completas e atualizadas. O usuário é responsável pela
                  confidencialidade de seus dados de acesso.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  4. Pedidos e Pagamentos
                </h2>
                <p>
                  Os pedidos realizados por meio da plataforma estão sujeitos à
                  disponibilidade do restaurante parceiro. O pagamento poderá
                  ser efetuado via cartão de crédito, débito, PIX ou outros
                  métodos disponibilizados na aplicação.
                </p>
                <p>
                  O DeliveryFácil atua como intermediador, não sendo responsável
                  pela preparação, qualidade ou tempo de entrega dos produtos.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  5. Cancelamentos e Reembolsos
                </h2>
                <p>
                  Cancelamentos poderão ser realizados conforme as políticas do
                  restaurante parceiro. Reembolsos, quando aplicáveis, serão
                  processados conforme o meio de pagamento utilizado.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">6. Responsabilidades</h2>
                <p>
                  O usuário compromete-se a utilizar a plataforma de forma
                  lícita, não praticando atos que possam prejudicar o
                  funcionamento do sistema ou terceiros.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  7. Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo da plataforma, incluindo marcas, logotipos,
                  layout e funcionalidades, são de propriedade exclusiva do
                  DeliveryFácil, sendo proibida sua reprodução sem autorização.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  8. Alterações nos Termos
                </h2>
                <p>
                  Reservamo-nos o direito de modificar estes Termos de Uso a
                  qualquer momento. As alterações entrarão em vigor após sua
                  publicação na plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">9. Contato</h2>
                <p>
                  Em caso de dúvidas sobre estes Termos de Uso, entre em contato
                  pelo e-mail: suporte@deliveryfacil.com
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
