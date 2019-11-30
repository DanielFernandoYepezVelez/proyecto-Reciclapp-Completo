import React, { PureComponent } from 'react';
import { Datatable } from "@o2xp/react-datatable";
import Header from '../common/components/Header';

let options = {
    keyColumn: 'id',
    data: {
        columns: [
            {
                id: "id",
                label: "id",
                colSize: "50px"
            },
            {
                id: "Nombre",
                label: "Nombre",
                colSize: "100px"
            },
            {
                id: "Cant",
                label: "Cant",
                colSize: "50px"
            },
            {
                id: "Direccion",
                label: "Direccion",
                colSize: "50px"
            },
        ],
        rows: [
            {
                id: "50cf",
                Cant: 28,
                Nombre: "Kerr Mayo",
                Direccion: "129 8ºD"
            },
            {
                id: "209",
                Cant: 34,
                Nombre: "Freda Bowman",
                Direccion: "30 14ºH"
            },
            {
                id: "2dd81ef",
                Cant: 14,
                Nombre: "Becky Lawrence",
                Direccion: "275 20ºA"
            }
        ],
    }
}


export class index extends PureComponent {
    render() {
        return (
            <div>
                
                <Header />

                <div className="container mt-5">
                    <Datatable options={options} />
                </div>

            </div>
        )
    }
}

export default index;