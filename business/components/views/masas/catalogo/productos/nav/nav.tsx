import styles from './styles.module.css'
import Link from "next/link";
export default function Nav() {
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    <div className={styles.item}>
                        <Link href="/catalogo/para-freir">
                            <a className={styles.active} >Para freir</a>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/catalogo/para-hornear">
                            <a >Para hornear</a>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link  href="/catalogo/para-hojaldre">
                            <a>Para hojaldre</a>
                        </Link>
                    </div>
                    <div className={styles.item}>
                       <Link href="/catalogo/para-pizza">
                           <a >Para pizza</a>
                       </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}