import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Footer() {
    const {t, lang} = useTranslation("footer");
    const contact = t("contact.phone", {}, {returnObjects: true});
    const time = t("schedule", {}, {returnObjects: true});
    const social = t("social", {}, {returnObjects: true});


    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <div className={styles.logo}>
                            <img src="/images/logo/logo-blancorapimasa.png" alt=""/>
                        </div>
                        <h2>{t("about.title")}</h2>
                        <p>{t("about.content")}</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2>{t("contact.title")}</h2>
                        <div className={styles.infoUbi}>
                            <div className={styles.itenUbi}>
                                <i className='bx bx-map'></i>
                                <div className={styles.info}>
                                    <p>
                                        {t("contact.direction")}
                                    </p>
                                </div>
                            </div>


                            <div className={styles.itenUbi}>
                                <i className='bx bx-time-five'></i>
                                <div className={styles.info}>
                                    {
                                        // @ts-ignore
                                        time.item?.map((item: any, index: any) => {
                                            return (
                                                <p key={index}>{item.title} <br/> {item.content}</p>
                                            )
                                        })}
                                </div>
                            </div>
                            <div className={styles.itenUbi}>
                                {
                                    // @ts-ignore
                                    contact.item?.map((item: any, index: any) => {
                                        return (
                                            <Link href={item.link} key={index}>
                                                <a> <i className={item.icon}></i></a>
                                            </Link>
                                        )
                                    })}
                            </div>

                        </div>
                    </div>

                    <div className={styles.content_3}>
                        <h2>{t("social.title")}</h2>
                        <div className={styles.social}>
                            {
                                // @ts-ignore
                                social.item?.map((item: any, index: any) => {
                                    return (
                                        <Link href={item.link} key={index}>
                                            <a><i className={item.icon}></i></a>
                                        </Link>
                                    )
                                })}
                        </div>
                        <br/>
                        <div className={styles.infoLegal}>
                            <h2>Legales</h2>
                            <p>Terminos y condiciones.</p>
                            <p>NIT. 1226852962</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}