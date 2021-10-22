import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import Spinner from '../Spinner/Spinner'

const ResultMessage = ({ result, user }) => {
  /*--------------------Spinner--------------------*/
  if (result === undefined || user.id === undefined) {
    return <Spinner />;
  }
  /*get user id*/
  const orderId = user.id[0];

  /*---Error message---*/
  const Error = () => {
    return (
      <>
        <Typography variant="h6" color="initial">
          <IconButton IconButton>
            <ErrorOutline fontSize="large" color="secondary" size="large" />
          </IconButton>
          No se pudo procesar el pago.
        </Typography>
      </>
    );
  };

  /*---Success message---*/
  const Success = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          Compra realizada con éxito 🤝
        </Typography>
        <Typography variant="subtitle1" style={{'margin-left':'3px'}}>
          Tu id de compra es: <strong>#{orderId.slice(0, 20)}</strong>. Te
          hemos enviado un email con el número de seguimiento y los detalles de la
          compra.
        </Typography>
      </>
    );
  };

  return <>{result ? <Success /> : <Error />} </>;
};

export default ResultMessage;