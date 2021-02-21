import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUpdateRecurso = (props) => {
  const [recurso, setRecurso] = useState(props.recurso);

  useEffect(() => {
    setValue("titulo", props.recurso.titulo, { shouldValidate: true });
    setValue("claves", props.recurso.claves, { shouldValidate: true });
    setValue("tipo_recurso", props.recurso.tipo_recurso, {
      shouldValidate: true,
    });
    setValue("descripcion", props.recurso.descripcion, {
      shouldValidate: true,
    });
    setValue("fuente", props.recurso.fuente, { shouldValidate: true });
    setValue("fecha_inicial", props.recurso.cobertura.fecha_inicial, {
      shouldValidate: true,
    });
    setValue("fecha_final", props.recurso.cobertura.fecha_final, {
      shouldValidate: true,
    });
    setValue("latitud", props.recurso.cobertura.latitud, {
      shouldValidate: true,
    });
    setValue("longitud", props.recurso.cobertura.longitud, {
      shouldValidate: true,
    });
    setValue("departamento", props.recurso.cobertura.departamento, {
      shouldValidate: true,
    });
    setValue("ciudad", props.recurso.cobertura.ciudad, {
      shouldValidate: true,
    });

    setRecurso(props.recurso);
  }, [props.recurso]);
  const { register, errors, handleSubmit, setValue } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    props.UpdateRecurso(data);
    e.target.reset();
  };
  return (
    <div>
      <div className=" flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          className=" w-11/12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input
            type="hidden"
            ref={register()}
            value={FormUpdateRecurso.id}
            name="id"
          />
          <br />
          <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
            Actualizar recurso
          </h1>
          <br />
          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="titulo"
            >
              Título
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "Titulo es requerido",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="titulo"
              id="titulo"
              type="text"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.titulo && errors.titulo.message}
            </span>
          </div>
          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="claves"
            >
              Claves
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "Las claves son requeridas",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="claves"
              id="claves"
              type="text"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.claves && errors.claves.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "La descripción es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="descripcion"
              id="descripcion"
              type="text"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.descripcion && errors.descripcion.message}
            </span>
          </div>
          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuente"
            >
              Fuente
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "La Fuente es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fuente"
              id="fuente"
              type="text"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.fuente && errors.fuente.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fuente"
            >
              Fuente
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "La Fuente es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fuente"
              id="fuente"
              type="text"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.fuente && errors.fuente.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tipo_recurso"
            >
              Tipo de recurso
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={register({
                required: {
                  value: true,
                  message: "tipo de recurso es requerido",
                },
              })}
              name="tipo_recurso"
            >
              <option value="Testimonio">Testimonio</option>
              <option value="Informe">Informe</option>
              <option value="Caso">Caso</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fecha_inicial"
            >
              Fecha inicial
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "La fecha inicial es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fecha_inicial"
              id="fecha_inicial"
              type="date"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.fecha_inicial && errors.fecha_inicial.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fecha_final"
            >
              Fecha final
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "La fecha final es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fecha_final"
              id="fecha_final"
              type="date"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.fecha_final && errors.fecha_final.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="latitud"
            >
              Latitud
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "Latitud es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="latitud"
              id="latitud"
              type="date"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.latitud && errors.latitud.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="longitud"
            >
              Longitud
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "longitud es requerida",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="longitud"
              id="longitud"
              type="date"
              placeholder=""
            />
            <span className="text-red-500 text-small d-block mb-2">
              {errors.longitud && errors.longitud.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="departamento"
            >
              Departamento
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={register({
                required: {
                  value: true,
                  message: "Departamento es requerido",
                },
              })}
              name="departamento"
            ></select>
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="municipio"
            >
              Municipio
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={register({
                required: {
                  value: true,
                  message: "Municipio es requerido",
                },
              })}
              name="municipio"
            ></select>
          </div>

          
          <div className="flex items-center justify-between">
            <button
              id="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <i className="fab fa-whatsapp"></i> Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormUpdateRecurso;
