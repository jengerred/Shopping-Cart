import React from 'react';

function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="row-2">
            <div className="col-3">
<img className="small" src={product.image} alt={product.name}></img>
<h3>{product.name}</h3>
<div>${product.price}</div>
<br></br>
<div>
    <button onClick={()=>onAdd(product)}>Add To Cart</button>
</div>
</div>
<br></br><hr></hr><br></br>
                <div className="col-3">
                <img className="small" src={product.image} alt={product.name}></img>
                <h3>{product.name}</h3>
                <div>${product.price}</div>
                <br></br>
                <div>
                    <button onClick={()=>onAdd(product)}>Add To Cart</button>
                </div>
                        </div>
                        </div>
    )
}
export default Product;