import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {
    return (
        <nav>
            <h3>Ecommers</h3>
            <div>
                <button>consolas</button>
                <button>notebooks</button>
                <button>parlantes</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar