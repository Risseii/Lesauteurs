import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const TodosAutores = () => {

    const[autores,setAutores] = useState([]); //guardar los autores a traves del request

    //me regresa todos los autores con sus campos
    useEffect(() => {
        axios.get("http://localhost:8000/api/autores") //ruta de get all
            .then(res => {setAutores(res.data)})
            .catch(err => console.log(err));
    },[])

    const borrarAutor = idAutor => {
        axios.delete("http://localhost:8000/api/autores/" + idAutor)
            .then(res => {
                //Actualizar lista con FILTER, no saldrá la que se elimina
                let nuevaLista = autores.filter(autor => autor._id !== idAutor);
                setAutores(nuevaLista);

            })
    }

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to="/nuevo" className="btn btn-success">Nuevo Autor</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Image</th>
                        <th>Libros</th>
                        <th>Articulos</th>
                        <th>Novela gráfica</th>
                        <th>Cuentos</th>
                        <th>Actions available</th>
                    </tr>
                </thead>

                <tbody>
                {
                        autores.map((autor,index)=> (
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td><img className="img-fluid" src={autor.imagen}/></td>
                                <td>
                                    {autor.libros ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    {autor.articulos ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    {autor.novelagrafica ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    {autor.cuentos ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    <Link className="btn btn-warning" to={`/autor/editar/${autor._id}`}>Editar</Link>
                                    <Link className="btn btn-primary" to={`/autor/${autor._id}`}>Ver detalle</Link>
                                    <button className="btn btn-danger" onClick={() => borrarAutor(autor._id)}>Eliminar</button>
                                </td>

                            </tr>
                        ))
                }

                </tbody>
            </table>
        </div>
    )
}

export default TodosAutores;