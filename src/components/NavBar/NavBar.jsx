import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return (
        <nav class="navbar bg-body-tertiary">
            <h3>Ecommers</h3>
            <div>
                <button class="btn btn-outline-success">consolas</button>
                <button class="btn btn-outline-success">notebooks</button>
                <button class="btn btn-outline-success">parlantes</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar