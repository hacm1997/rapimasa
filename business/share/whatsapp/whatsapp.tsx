import styles from './styles.module.css';

export default function Whatsapp() {
    return (
        <>
            <div className={styles.whatsapp}>
                <a href="https://wa.me/573156540000" target="_blank" rel="noreferrer">
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
        </>
    )
}