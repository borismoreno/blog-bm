import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout
        title='Inicio'
        description="Boris Moreno desarrollador de software"
      >
        <main className="contenedor">
          <h1 className="heading">Inicio</h1>
          <p>Hola, mi nombre es Boris Moreno</p>
          <p>Soy desarrollador de software especializado en construir construir software de calidad</p>
        </main>

      </Layout>
    </>
  )
}
