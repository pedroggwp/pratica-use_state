import { useState } from "react";
import styles from "./ItemEstoque.module.css";

export default function ItemEstoque({ id, product }) {

    const [produtoAmount, setProductoAmount] = useState(product.amountStock)

    return (
        <>
            <div className={styles.produtoItem}>
                <p>{product.name}</p>
                <p>{produtoAmount}</p>
                <p>R${product.saleValue}</p>

                <button onClick={() => {
                    setProductoAmount(produtoAmount + 1)
                    }}>+</button>

                <button onClick={() => {
                    setProductoAmount(produtoAmount - 1)
                    }}>-</button>
            </div>

        </>
    )
}