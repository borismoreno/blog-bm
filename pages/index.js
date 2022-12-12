import Layout from "../components/layout"
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Layout
        title='Inicio'
        description="Boris Moreno desarrollador de software"
      >
        <main className="contenedor">
          <div className={styles.contenido}>
            <span className={styles.texto}>Hola, mi nombre es</span>
            <span className={styles.nombre}>Boris Moreno</span>
            <span className={styles.texto}>Soy desarrollador de software especializado en construir software de calidad.</span>
          </div>
        </main>

      </Layout>
    </>
  )
}
