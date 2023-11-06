import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    // const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div class="card text-bg-light mb-3" onClick={handleClick}>
            <img src={img} class="card-img-top" style={{ width: 100}}/>
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <h2 class="card-text" >${price}</h2>
                {/* <button onClick={() => navigate('/item')}>Ver detalle</button> */}
                <Link class="btn btn-primary" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item