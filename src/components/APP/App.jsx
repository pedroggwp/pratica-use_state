import styles from './App.module.css'
import { useState } from 'react'
import FormularioProduto from '../FormularioProduto/FormularioProduto'
import ListaEstoque from '../ListaEstoque/ListaEstoque'

export default function App({ }) {

    const [products, setProducts] = useState([])
    const [valorCaixa, setValorCaixa] = useState(1000)

    const addProduct = (name, amountStock, purchaseValue, saleValue) => {

        const produt = {
            id: Date.now(),
            name,
            amountStock,
            purchaseValue,
            saleValue
        }

        setValorCaixa(valorCaixa + purchaseValue)

        setProducts([...products, produt])
    }

    const buyProduct = (id, newAmount) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, amountStock: newAmount } : product
        ))
    }


    return (
        <div className={styles.aplicativo}>
        
            <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
            <p className={styles.titulo}>Caixa: R${valorCaixa}</p>


            <FormularioProduto 
                addProduct={addProduct}
            />


            <ListaEstoque
                products={products}
                buyProduct={buyProduct}
                // saleProduct={saleProduct}
            />


        </div>

    )

    

}