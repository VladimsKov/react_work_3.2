import { generate } from 'shortid';
const shortid = require('shortid');

export default function Listing({items}) {
    const itemsIdx = items.map(item => { 
        return ({
            id: shortid(generate),
            value: item 
        }) 
    })
    
    return (
        <div className="item-list">
        {
            itemsIdx.map((el) => {
                console.log(el.value);
                
                return (
                    <div className="item" key={el.id}>
                    <div className="item-image">
                    <a href={el.value.url}>
                    <img src={el.value.MainImage ? el.value.MainImage.url_570xN : ""}/>
                    </a>
                    <div className="item-details">
                    <p className="item-title">{el.value.title && el.value.title.length>50 ? 
                        el.value.title.slice(0, 50) + "_" : el.value.title || ""}
                        </p>
                        <p className="item-price">
                        {
                            el.value.currency_code && el.value.currency_code === "USD" ?
                            "\u0024" + el.value.price : 
                            el.value.currency_code && el.value.currency_code === "EUR" ?
                            "\u20ac" + el.value.price :
                            el.value.price ? el.value.price + " " + "GBP" : ""  
                        }
                        </p>
                        {
                            el.value.quantity <= 10 ? <p className="item-quantity level-low">{el.value.quantity}</p> :
                            el.value.quantity <= 20 ? <p className="item-quantity level-medium">{el.value.quantity}</p> :
                            <p className="item-quantity level-high">{el.value.quantity}</p>
                        }
                        </div>                        
                        </div>                        
                        </div>
                        )  
                    })
                }
                </div>
                )
            }
            
            Listing.defaultProps = {
                items: []
            }