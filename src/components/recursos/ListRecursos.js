import React, { useState, useEffect } from "react";
import moment from "moment";
const ListRecursos = (props) => {
  const [recursos, setRecursos] = useState(props.recursos);

  useEffect(() => {
    setRecursos(props.recursos);
  }, [props.recursos]);
  const editRecurso = (recurso) => {
    props.selectRecurso(recurso);
  };
  const list = recursos.map((recurso) => {
    return (
      <tr className="border-solid border-2 border-dark-500" key={recurso.id}>
        <td>{recurso.titulo}</td>
        <td>{recurso.claves}</td>
        <td>{recurso.descripcion}</td>
        <td>{recurso.fuente}</td>
        <td>{recurso.tipo_recurso}</td>
        <td>{moment(recurso.cobertura.fecha_inicial).format('DD/MM/yyyy')}</td>
        <td>{moment(recurso.cobertura.fecha_final).format('DD/MM/yyyy')}</td>
        <td>{recurso.cobertura.latitud}</td>
        <td>{recurso.cobertura.longitud}</td>
        <td>{recurso.cobertura.departamento}</td>
        <td>{recurso.cobertura.ciudad}</td>
        <td>
          <button
            onClick={() => props.selectRecurso(recurso)}
            className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Edit</span>
          </button>
          <button
            onClick={() => props.deleteRecurso(recurso.id)}
            className="bg-grey-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Delete</span>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className=" flex items-center justify-center">
      <div className="overflow-x-scroll w-11/12 mt-10  mr-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <br />
        <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
          Listado Recursos
        </h1>
        <br />
        <table className="overflow-x-scroll table-fixed">
          <thead>
            <tr>
              <th className="w-auto ">Titulo</th>
              <th className=" w-auto">Claves</th>
              <th className="w-auto">Descripción</th>
              <th className="w-auto">Fuente</th>
              <th className="w-auto">Tipo Recurso</th>
              <th className="w-auto">Fecha Inicial</th>
              <th className="w-auto">Fecha Final</th>
              <th className="w-auto">longitud</th>
              <th className="w-auto">Latitud</th>
              <th className="w-auto">Departamento</th>
              <th className="w-auto">Ciudad</th>
              <th className="w-auto">Acciones</th>
            </tr>
          </thead>
          <tbody className = "">{list}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ListRecursos;
