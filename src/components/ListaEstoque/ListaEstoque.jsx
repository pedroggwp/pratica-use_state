import ItemEstoque from "../ItemEstoque/ItemEstoque"
import styles from './ListaEstoque.module.css'

export default function ListaEstoque({ products, buyProduct, saleProduct }) {

    return (
        <div className={styles.listaEstoque}>

            <h2 className={styles.listaEstoque}>Estoque Atual</h2>
            {
                products.map(product => (
                    <ItemEstoque
                        id={product.id}
                        product={product}
                        buyProduct={buyProduct}
                        saleProduct={saleProduct}
                    />
                ))
            }

        </div>
    )
}