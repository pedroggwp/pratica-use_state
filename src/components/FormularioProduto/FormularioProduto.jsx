import styles from "./FormularioProduto.module.css";
import { useState, useRef } from "react";

export default function FormularioProduto({ addProduct }) {
    const [produto, setProduto] = useState('')

    const [produtoName, setProdutoName] = useState('')
    const [productAmountStock, setProductAmountStockRef] = useState(0)
    const [productPurchaseValue, setProductPurchaseValue] = useState(0)
    const [productSaleValue, setProductSaleValue] = useState(0)

    const productNameRef = useRef()
    const productAmountStockRef = useRef()
    const productPurchaseValueRef = useRef()
    const productSaleValueRed = useRef()

    return (
        <div>
            <form>
                    <p>
                        <label for="size_1">Nome do produto</label>
                        <br />
                        <input 
                            type="text" 
                            name="size" 
                            id="size_1" 
                            ref={productNameRef} 
                            onChange={(e) => setProdutoName(e.target.value)} 
                        />
                    </p>

                    <p>
                        <label for="size_2">Quantidade em estoque</label>
                        <br />
                        <input 
                            type="number" 
                            name="size" 
                            id="size_2" 
                            ref={productAmountStockRef} 
                            onChange={(e) => setProductAmountStockRef(e.target.value)} 
                        />
                    </p>


                    <p>
                        <label for="size_3">Valor de Compra</label>
                        <br />
                        <input 
                            type="number" 
                            name="size" 
                            id="size_3" 
                            ref={productPurchaseValueRef}
                            onChange={(e) => setProductPurchaseValue(e.target.value)} 
                         />
                    </p>

                    <p>
                        <label for="size_3">Valor de Venda</label>
                        <br />
                        <input 
                            type="number" 
                            name="size" 
                            id="size_3" 
                            ref={productSaleValueRed}
                            onChange={(e) => setProductSaleValue(e.target.value)} 
                        />
                    </p>

                <button
                type="submit"
                className={styles.botao}
                onClick={(e) => {
                    e.preventDefault()
                    const productName = productNameRef.current.value;
                    const productAmountInStock = productAmountStockRef.current.value;
                    const productPurchaseValue = productPurchaseValueRef.current.value;
                    const productSalveValue = productSaleValueRed.current.value;


                    if (productName.trim() !== '' && productAmountInStock.trim() !== 0 && productPurchaseValue.trim() != 0 && productSalveValue !== 0) {

                        addProduct(productName, productAmountInStock, productPurchaseValue, productSalveValue)
    
                    }
                }}
                 >
                    Adicionar Produto
                </button>

            </form>
        </div>
    )
}