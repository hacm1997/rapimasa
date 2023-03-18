import styles from './styles.module.css'

interface Props {
    title: string;
}


const Banner: React.FC<Props> = ({title}) => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1>{title}</h1>
                </div>
            </section>
        </>
    )
}

export default Banner