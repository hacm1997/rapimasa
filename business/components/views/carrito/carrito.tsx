import styles from './styles.module.css'
import Card from "./card/card";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../content/contexts/ShoppingCartContext";

export default function Carrito() {
    const {cart, setCart} = useContext(CartContext);

    // console.log("carito => ",cart)

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h1>Carrito</h1>
                    </div>

                    <div className={styles.cardProductos}>
                        {cart.map((items:any, index:any) => (
                            <Card key={index} data={items}/>
                        ))

                        }

                    </div>
                </div>
            </section>
        </>
    )
}
