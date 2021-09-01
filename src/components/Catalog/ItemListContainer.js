import './Table.css'


const Table = () => {

    return (

        <table className="tablaInfo">
            <tbody>
                <tr>
                    <th>
                        Marca
                    </th>
                    <th>
                        Modelo
                    </th>
                    <th>
                        Precio
                    </th>
                </tr>

                <tr>
                    <td>
                        Procesador AMD
                    </td>
                    <td>
                        Ryzen 5 3600
                    </td>
                    <td>
                        $31.000
                    </td>
                </tr>

                <tr>
                    <td>
                        MotherBoard ASUS
                    </td>
                    <td>
                        B450M II Plus 
                    </td>
                    <td>
                        $10.500
                    </td>
                </tr>

                <tr>
                    <td>
                        Placa de Video Gigabyte
                    </td>
                    <td>
                        RTX 3060 Ti
                    </td>
                    <td>
                        $205.000
                    </td>
                </tr>
                </tbody>
        </table>
    )
}

export default Table