import styles from './styles.module.css'
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import navbar from '../../../../data/navbar'

export default function SubMenu(props: any) {


    const ruta = props.ruta


    const router = useRouter();
    const url = router.asPath.split("/")[1]

    const data = navbar[0];


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const menu = document.getElementById('menu')

            if (menu) {
                if (window.scrollY > 120) {
                    menu.classList.add(styles.fixed)
                } else {
                    menu.classList.remove(styles.fixed)
                }
            }
        })

    }, [])


    return (
        <>
            <div id="menu" className={styles.subMenu}>

                {url == "recetas" ?
                    <div className={styles.general}>

                        {// @ts-ignore
                            data.recetas?.item.map((item: any, index: any) => {
                                return (
                                    <div key={index} className={styles.item}>
                                        <Link href={`/${url}` + item.url}>
                                            <a>{item.name}</a>
                                        </Link>
                                    </div>
                                )
                            })}
                    </div>
                    : url == "masa-para-pizza" ?
                        <div className={styles.general}>

                            {// @ts-ignore
                                data.pizza?.item?.map((item: any, index: any) => {
                                    return (
                                        <div key={index} className={styles.item}>
                                            <Link href={`/${url}` + item.url}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </div>
                                    )
                                })}
                            <div>
                                <Link href={data.pizza.catalogo.url}>
                                    <a>{data.pizza.catalogo.name}</a>
                                </Link>
                            </div>
                        </div>
                        :
                        <div className={styles.general}>

                            {// @ts-ignore
                                data.general?.item?.map((item: any, index: any) => {
                                    return (
                                        <div key={index} className={styles.item}>
                                            <Link href={`/${url}` + item.url}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </div>
                                    )
                                })}
                            <div>
                                <Link href={data.general.catalogo.url}>
                                    <a>{data.general.catalogo.name}</a>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}