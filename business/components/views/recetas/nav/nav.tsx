import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Nav() {
    const {t, lang} = useTranslation('navbar');
    const menu_iten = t("sub", {}, {returnObjects: true});

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    {// @ts-ignore
                        menu_iten.recetas.item?.map((item: any, index: any) => {
                            return (
                                <div key={index} className={styles.item}>
                                    <Link href={item.url}>
                                        <a >{item.name}</a>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </nav>
        </>
    )
}