import React, {useState} from 'react';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom"; //redireccionar a otra pagina

const NuevoAutor = () => {
    const[nombre,setNombre] = useState("");
    const[imagen,setImagen] = useState("");
    const[libros,setLibros] = useState(false);
    const[articulos,setArticulos] = useState(false);
    const[novelagrafica,setNovelagrafica] = useState(false);
    const[cuentos,setCuentos] = useState(false);

    const[errors,setErrors] = useState({});
    const history = useHistory();

    const guardarAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/autores",{
            nombre,
            imagen,
            libros,
            articulos,
            novelagrafica,
            cuentos
    })
        .then(res => {
            console.log(res);
            history.push("/");
        })
        .catch(err => {
            setErrors(err.response.data.errors); //guardando los errores 
        });
    }


    return(
        <div>
            <h1>Nuevo autor</h1>
            <Link to="/" className="btn btn-primary">Home</Link>
            <form onSubmit={guardarAutor}>
                <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" onChange={ (e)=> setNombre(e.target.value) } value={nombre}></input>
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="imagen">URL Imagen:</label>
                    <input type="text" id="imagen" name="imagen" className="form-control" value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="libros" id="libros"  checked={libros} onChange={(e) => setLibros(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="libros"> Autor de libros</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="articulos" id="articulos" checked={articulos} onChange={(e) => setArticulos(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="articulos">Autor de articulos</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="novelagrafica" id="novelagrafica"  checked={novelagrafica} onChange={(e) => setNovelagrafica(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="novelagrafica">Autor de novela grafica</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="cuentos" name="cuentos" checked={cuentos} onChange={(e) => setCuentos(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="cuentos">Autor de Cuentos</label>
                </div>

                <input type="submit" className="btn btn-success" value="Guardar" />
                <Link to="/" className="btn btn-info">Cancel</Link>

            </form>
        </div>
    )
}

export default NuevoAutor;