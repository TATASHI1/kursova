import "./style.css"
import {useEffect, useState} from "react";


function ProductsList(props) {

    const [productsList, setProductsList] = useState([
        {id:1, name:"Кебаб", price:98, imgUrl:"img/кебаб.png"},
        {id:2, name:"Тапака", price:120, imgUrl:"img/тапака.png"},
        {id:3, name:"Соус", price:23, imgUrl:"img/соус.png"},
        {id:4, name:"Шашлик", price:250, imgUrl:"img/шашлик.png"},
        ]);

    const [binList, setBinList] = useState(setOrNull());
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('orderList', JSON.stringify(binList))
        getTotal();
    }, [update]);

    async function getTotal() {
        let total = 0;
        await binList.forEach(order => {
            total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
        })
        setTotal(total)
    }
    function setOrNull() {
        if (localStorage.getItem('orderList') === null){
            let order = [];
            productsList.forEach(product => {
                order.push({id: product.id, count:0})
            })
            return order
        }
        else {
            return JSON.parse(localStorage.getItem('orderList'));
        }
    }

    const addItemToOrder = (id) =>(e) => {
        e.preventDefault()
        console.log(binList)
        binList.forEach(item => {
                if(item.id == id){
                    item.count++;
                    console.log("++");
                    setUpdate(update+1);
                }
            }
        )
    }
    const removeItemFromOrder = (id) =>(e) => {
        e.preventDefault()
        binList.forEach(item => {
                if(item.id == id){
                    if(item.count > 0){
                        item.count--;
                        console.log("--");
                        setUpdate(update+1);
                    }
                }
            }
        )
    }

    if(props.variant == "main"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="menu__card" key={product.id}>
                            <img src={product.imgUrl} alt="" />
                            <div className="menu__info">
                                <p onClick={() => console.log(binList[index])}>{product.name}</p>
                                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                <div className="menu__price">
                                    <p>{product.price}грн</p><a href="" onClick={addItemToOrder(product.id)}><img src="../img/plus.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
    else if(props.variant == "bin"){
        return(

            <>
                {
                    productsList.map((product, index) =>(
                        <div className="forms__product" key={product.id}>
                            <img src={product.imgUrl} alt=""/>
                            <div className="products__aboutbread">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="products__count">
                                <a href="" onClick={removeItemFromOrder(product.id)}>-</a>
                                <p>{binList[index].count}</p>
                                <a href="" onClick={addItemToOrder(product.id)}>+</a>
                            </div>
                        </div>
                    ))
                }
                <div className="forms__total">
                    <p>Total: {total}грн</p>
                </div>
            </>
        )
    }
}
export default ProductsList