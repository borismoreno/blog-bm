import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/contacto.module.css'

export default function Contacto() {
    return (
        <Layout
            title="Contacto"
            description="Contacto Boris Moreno"
        >
            <main className="contenedor">
                <h1 className="heading">Contacto</h1>
                <div className={styles.icono}>
                    <a target="_blank" href="https://github.com/borismoreno/" rel="noopener noreferrer">
                        <Image src='/img/githubicon.png' width={40} height={40} alt="Icono github" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/bmorenog/" rel="noopener noreferrer">
                        <Image src='/img/linkedinicon.png' width={40} height={40} alt="Icono github" />
                    </a>
                    <a target="_blank" href="https://twitter.com/morenoboris84" rel="noopener noreferrer">
                        <Image src='/img/twittericon.png' width={40} height={40} alt="Icono github" />
                    </a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=593992703156" rel="noopener noreferrer">
                        <Image src='/img/whatsappicon.png' width={40} height={40} alt="Icono github" />
                    </a>
                </div>
            </main>
        </Layout>
    )
}
