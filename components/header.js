import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href='/'>
                    <Image src='/img/BorisMoreno.svg' width={300} height={40} alt="imagen logotipo" />
                </Link>

                <nav className={styles.navegacion}>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className={router.pathname === '/about' ? styles.active : ''}>
                            Acerca
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className={router.pathname.indexOf('/blog') > -1 ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>
                    <Link href='/contacto'>
                        <a className={router.pathname === '/contacto' ? styles.active : ''}>
                            Contacto
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
