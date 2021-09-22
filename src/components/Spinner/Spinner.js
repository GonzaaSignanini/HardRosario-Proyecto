import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div align='center'>
            <Loader
                type="TailSpin"
                color="lightgreen"
                height={150}
                width={150}
                timeout={3000}
            />
        </div>
    )
}

export default Spinner