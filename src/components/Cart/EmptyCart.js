import { Link } from "react-router-dom";
import './Cart.css'
import { Typography, Button } from "@material-ui/core";

const EmptyCart = () => { 

    return (
      <div className="emptyCart">
        <Typography variant="subtitle1" style={{'font-size':'22px', 'display':'inline-flex', 'margin-top':'2%'}}>No hay productos en el carrito</Typography> 

        <Link to="/productos" className="link" style={{'margin-left':'12px'}}>
          <Button type="button" variant="contained" color="primary" style={{'margin-top':'-0.2%'}}>Comprar Productos</Button>
        </Link>
      </div>
    )
};

export default EmptyCart