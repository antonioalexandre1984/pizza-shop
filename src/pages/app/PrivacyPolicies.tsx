import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
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
            Política de Privacidade <br /> Pizza Shop
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
                <h2 className="text-lg font-semibold">1. Introdução</h2>
                <p>
                  Esta Política de Privacidade descreve como o DeliveryFácil
                  coleta, utiliza, armazena e protege as informações pessoais
                  dos usuários que utilizam nossa plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">2. Dados Coletados</h2>
                <p>Podemos coletar as seguintes informações:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Nome completo</li>
                  <li>Endereço de entrega</li>
                  <li>E-mail</li>
                  <li>Telefone</li>
                  <li>Dados de pagamento</li>
                  <li>Histórico de pedidos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  3. Finalidade do Uso dos Dados
                </h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Processar pedidos</li>
                  <li>Realizar entregas</li>
                  <li>Enviar notificações sobre pedidos</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  4. Compartilhamento de Dados
                </h2>
                <p>
                  Poderemos compartilhar dados com restaurantes parceiros e
                  prestadores de serviço estritamente para viabilizar a entrega
                  dos pedidos e o funcionamento da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  5. Armazenamento e Segurança
                </h2>
                <p>
                  Adotamos medidas técnicas e organizacionais adequadas para
                  proteger os dados contra acesso não autorizado, perda,
                  alteração ou divulgação indevida.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  6. Direitos do Usuário
                </h2>
                <p>O usuário poderá, a qualquer momento:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Solicitar acesso aos seus dados</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimentos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">7. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar a navegação, personalizar
                  conteúdos e analisar o uso da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">
                  8. Alterações nesta Política
                </h2>
                <p>
                  Esta Política de Privacidade poderá ser atualizada a qualquer
                  momento. Recomendamos que o usuário revise periodicamente esta
                  página.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">9. Contato</h2>
                <p>
                  Para dúvidas relacionadas à privacidade ou proteção de dados,
                  entre em contato pelo e-mail: privacidade@deliveryfacil.com
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
