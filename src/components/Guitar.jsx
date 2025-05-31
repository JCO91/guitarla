export default function Guitar ({guitar, addCard}) { //utilizamos un desctruction al prop y llamamos a guitar directamente

    const {id,name, image, description, price} = guitar; //utilizamos oro destruction de guitar para extraer sus valores.
    
    

    return(
      <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" /> 
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
              <p>{description}</p>
              <p className="fw-black text-primary fs-3">{price}</p>
              <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addCard(guitar)} //Pasamos la funcion addcard para anadir los componentes al carrito. Generamos el callback para que no se active automaticamente
              >Agregar al Carritos</button>
            </div>
          </div>
      </>
    )
}