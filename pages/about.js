import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/about.module.css'

export default function About({ about }) {
    const { experiencia, imagen } = about.attributes;
    return (
        <>
            <Layout
                title="About"
                description="Acerca de Boris Moreno"
            >
                <main className="contenedor">
                    <h2 className="heading">
                        Boris Moreno
                    </h2>
                    <div className={styles.contenido}>
                        <Image src={imagen.data.attributes.url} alt="nosotros" width={500} height={700} />
                        <div>
                            <p>{experiencia}</p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/api/about?populate=imagen`);
    const { data: about } = await respuesta.json();
    return {
        props: {
            about
        }
    }
}