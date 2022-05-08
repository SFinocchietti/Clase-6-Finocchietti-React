import productosIniciales from "./productos.json"

const ItemDetail = ({producto}) => {
  return (
    <>
    <article className="card">
    <div>
      <h2>Para mas detalles</h2>
    <img src="http://via.placeholder.com/200x200" alt="card"/>
    </div>
    <div>
      <button>
      <p className="card__precio">
    $ {productosIniciales.precio}
    </p>
      </button>
        </div>
    </article>
    </>
  )
}

export default ItemDetail
