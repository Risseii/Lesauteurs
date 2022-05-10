import React, {useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";
import axios from "axios";

const ActualizarAutor = () => {

    const {id} = useParams(); //se obtiene del url del front-end
    const [nombre,setNombre] = useState("");
    const [imagen,setImagen] = useState("");
    const [libros,setLibros] = useState(false);
    const [articulos,setArticulos] = useState(false);
    const [novelagrafica,setNovelagrafica] = useState(false);
    const [cuentos,setCuentos] = useState(false);
    const [errors,setErrors] = useState({});
    const history = useHistory(); //para cambiar de url

    //obtener los autores a traves del id y consultando al localhost los atributos
    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/"+id) 
        .then(res => {
            console.log(res.data);
            setNombre(res.data.nombre);
            setImagen(res.data.imagen);
            setLibros(res.data.libros);
            setArticulos(res.data.articulos);
            setNovelagrafica(res.data.novelagrafica);
            setCuentos(res.data.cuentos);
        })
        .catch(err => history.push("/error"));
    },[id,history]); //para evitar el warning

    //se envia como body(el form) el nombre y demas
    const actualizarAutor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/autores/"+ id,{
            nombre,
            imagen,
            libros,
            articulos,
            novelagrafica,
            cuentos
        })
            .then(res => history.push("/")) //regresame a la pagina de inicio
            .catch(err => setErrors(err.response.data.errors));
    }

    return(
        <div>
            <h1>Editar autor</h1>
            <form onSubmit={actualizarAutor}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" onChange={ (e)=> setNombre(e.target.value) } value={nombre}></input>
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="imagen">URL Imagen:</label>
                            <input type="text" id="imagen" name="imagen" className="form-control" value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                        </div>

                        <div className="col-6">
                            <img src={imagen} className="img-fluid" />
                        </div>

                    </div>

                </div>

                <div className="form-check">
                    <input type="checkbox" name="libros" id="libros" className="form-check-input" checked={libros} onChange={(e) => setLibros(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="libros">Autor de libros</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" name="articulos" id="articulos" className="form-check-input" checked={articulos} onChange={(e) => setArticulos(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="articulos">Autor de articulos</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" name="novelagrafica" id="novelagrafica" className="form-check-input" checked={novelagrafica} onChange={(e) => setNovelagrafica(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="novelagrafica">Autor de novela grafica</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" name="cuentos" id="cuentos" className="form-check-input" checked={cuentos} onChange={(e) => setCuentos(e.target.checked)}></input>
                    <label className="form-check-label" htmlFor="cuentos">Autor de cuentos</label>
                </div>

            <input type="submit" className="btn btn-success" value="Guardar" />

            </form>

        </div>
    )

}

export default ActualizarAutor;