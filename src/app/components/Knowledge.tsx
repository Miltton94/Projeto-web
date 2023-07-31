import Image from 'next/image'

const Knowledge = () => {
  return (
    <section className="mb-12 grid grid-cols-1 py-14 md:grid-cols-2">
      <div>
        <Image
          src="/estudo.jpg"
          width={700}
          height={800}
          alt="Estudos"
          className="mb-10 rounded object-cover"
        />
      </div>

      <div className="flex flex-col justify-start md:px-8">
        <h2 className="mb-2 text-3xl font-bold">Educação</h2>

        <ul className="space-y-2">
          <li className="text-xl leading-tight">
            Análise e Desenvolvimento de Sistemas
          </li>
          <li className="text-xl leading-tight">Administração</li>
        </ul>
      </div>
    </section>
  )
}

export default Knowledge
