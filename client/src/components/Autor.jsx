import React,{useState,useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import axios from "axios";

const Autor = () => {

    const{id} = useParams(); //obtener el id de la url
    const[autor,setAutor] = useState({});

    useEffect(() => { 
        axios.get("http://localhost:8000/api/autores/"+id) 
            .then(res => {
                console.log(res.data);
                setAutor(res.data);
            })
            .catch(err => console.log(err));
    },[id])


    return(
        <div className="card">
            <h1>Nombre: {autor.nombre}</h1>
            <h4>Url de la imagen: {autor.imagen}</h4>
            <h4>Created at: {autor.createdAt}</h4>
            <img className="img-fluid" src={autor.imagen}/>

            <Link to="/" className="btn btn-primary">Regresar a home</Link>

        </div>
    )
}

export default Autor;