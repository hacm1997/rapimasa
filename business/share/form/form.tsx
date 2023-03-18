import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";


export default function Form(props: any) {
    const {t, lang} = useTranslation("form");

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>{t("form.title")} <span>{t("form.titleSpan")}</span></h2>
                    </div>
                    <div className={styles.general_form}>
                        <form>
                            <select name="dpto" required>
                                <option value="">Departamento</option>
                            </select>
                            <select name="city" required>
                                <option value="">Ciudad</option>
                            </select>
                            <input name="address" type="text" placeholder="Dirección" required/>
                            <input name="name" type="text" placeholder="Nombre y apellido" required/>
                            <input name="phone" type="number" placeholder="Cel/Tel*" required/>
                            <input name="useremail" type="email" placeholder="E-mail " required/>
                            <button type="submit" className={styles.button}>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}