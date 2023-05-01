import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="col">
            <div className="card">
                <img src={img} alt={name} className='ItemImg' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Stock: {stock}</p>
                    <span className="badge text-bg-success priceBadge">${price}</span>
                    
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
                </div>
            </div>
        </div>

    )
}

export default Item