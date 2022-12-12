import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import styles from '../styles/layout.module.css'

export default function Layout({ children, title = '', description = '' }) {
    return (
        <>
            <Head>
                <title>{`Boris Moreno - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />
            <div className={styles.contenido}>
                {children}
            </div>
            <Footer />
        </>
    )
}
