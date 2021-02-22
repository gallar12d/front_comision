import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import moment from "moment";
const ListRecursos = (props) => {
  const [recursos, setRecursos] = useState(props.recursos);
  

  useEffect(() => {
    setRecursos(props.recursos);
  }, [props.recursos]);
  const editRecurso = (recurso) => {
    props.selectRecurso(recurso);
  };
  let i = 1;
  let clase = "";
  const list = recursos.map((recurso) => {
    if (i % 2 == 0) {
      clase = "bg-gray-100";
    } else {
      clase = "";
    }
    i++;
    let claves;

    return (
      <tr key ={recurso.id} className={"border-b hover:bg-orange-100 " + clase}>
        <td className="p-3 px-5">{recurso.titulo}</td>
        <td className="p-3 px-5">
          {
            JSON.parse(recurso.claves).map((v)=>{
              return v.text
            }).join(',')}
        </td>
        <td data-tip data-for={'id'+recurso.id} className="p-3 px-5">{recurso.descripcion.substring(0, 15) + '...'}
        
        <ReactTooltip place="right" className="w-8/12"  id={'id'+recurso.id}>
            <span>{recurso.descripcion}</span>
          </ReactTooltip>
        </td>
        
        <td className="p-3 px-5">{recurso.fuente}</td>
        <td className="p-3 px-5">{recurso.tipo_recurso}</td>
        <td className="p-3 px-5">
          {moment(recurso.cobertura.fecha_inicial).format("DD/MM/yyyy")}
        </td>
        <td className="p-3 px-5">
          {moment(recurso.cobertura.fecha_final).format("DD/MM/yyyy")}
        </td>
        <td className="p-3 px-5">{recurso.cobertura.latitud}</td>
        <td className="p-3 px-5">{recurso.cobertura.longitud}</td>
        <td className="p-3 px-5">{      
        
        props.departamentos[recurso.cobertura.departamento].departamento
        
        
        }</td>
        <td className="p-3 px-5">{
          props.departamentos[recurso.cobertura.departamento].ciudades[recurso.cobertura.ciudad]

        }</td>
        <td className="p-3 px-5 flex justify-end">
          <button
            onClick={() => props.selectRecurso(recurso)}
            type="button"
            className="mr-3 text-sm bg-yellow-400 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Editar
          </button>
          <button
            onClick={() => {
              if (window.confirm("Seguro desea eliminar este registro?"))
                props.deleteRecurso(recurso.id);
            }}
            type="button"
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-gray-200 shadow-md rounded my-6">
        <br />
        <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
          Listado Recursos
        </h1>
        <br />
        <table className="table-auto overflow-auto md:overflow-scroll text-md bg-white shadow-md rounded mb-4">
          <tbody className="">
            <tr className="border-b">
              <th className="text-left p-3 px-5 ">Titulo</th>
              <th className=" text-left p-3 px-5">Claves</th>
              <th className="text-left p-3 px-5">Descripción</th>
              <th className="text-left p-3 px-5">Fuente</th>
              <th className="text-left p-3 px-5">Tipo Recurso</th>
              <th className="text-left p-3 px-5">Fecha Inicial</th>
              <th className="text-left p-3 px-5">Fecha Final</th>
              <th className="text-left p-3 px-5">longitud</th>
              <th className="text-left p-3 px-5">Latitud</th>
              <th className="text-left p-3 px-5">Departamento</th>
              <th className="text-left p-3 px-5">Ciudad</th>
              <th className="text-left p-3 px-5">Acciones</th>
            </tr>
            {list && list}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListRecursos;
