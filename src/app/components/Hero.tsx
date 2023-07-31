import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="grid grid-cols-1 py-14 md:grid-cols-2">
      <div className="flex items-center justify-center md:order-2">
        <Image
          src="/profile.png"
          alt="Profile"
          width={400}
          height={800}
          className="rounded object-cover"
        />
      </div>

      <div className="flex max-w-lg flex-col items-start justify-center md:order-1 md:px-3">
        <strong className="mb-2 mt-10 text-4xl">Olá, eu sou Milton</strong>

        <p className="text-base leading-tight">
          Bem-vindo ao meu recanto digital. Sou desenvolvedor front-end, gestor
          de tráfego jr e Assistente de Mídias Sociais.
        </p>

        <a href="https://api.whatsapp.com/send?phone=5543996379257">
          <Button size={'lg'} className="mt-6 w-full text-lg font-semibold">
            Entre em contato
          </Button>
        </a>
      </div>
    </section>
  )
}

export default Hero
