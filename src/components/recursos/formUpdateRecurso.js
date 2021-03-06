import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { WithContext as ReactTags } from "react-tag-input";
import moment from "moment";


const FormUpdateRecurso = (props) => {
  const [recurso, setRecurso] = useState(props.recurso);
  const [tags, setTags] = useState();
  const [departamentos, setDepartamentos] = useState(props.departamentos);
  const [ciudades, setCiudades] = useState([]);
  useEffect( async () => {
    setTags(JSON.parse(props.recurso.claves));
    setValue("titulo", props.recurso.titulo, { shouldValidate: true });
    setValue("claves", props.recurso.claves, { shouldValidate: true });
    setValue("tipo_recurso", props.recurso.tipo_recurso, {
      shouldValidate: true,
    });
    setValue("descripcion", props.recurso.descripcion, {
      shouldValidate: true,
    });
    setValue("fuente", props.recurso.fuente, { shouldValidate: true });
    setValue("fecha_inicial", moment(props.recurso.cobertura.fecha_inicial).format('YYYY-MM-DD'), {
      shouldValidate: true,
    });
    setValue("fecha_final", moment(props.recurso.cobertura.fecha_final).format('YYYY-MM-DD'), {
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

    selectDepto(props.recurso.cobertura.departamento)

   
    

    setRecurso(props.recurso);
  }, [props.recurso]);
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    console.log(tag);

    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const { register, errors, handleSubmit, setValue } = useForm();
  const selectDepto = async (id) => {
    let results = await departamentos.filter(function (d) {
      return d.id == id;
    });
    console.log(results)
    setCiudades(results[0].ciudades)

    setValue("ciudad", props.recurso.cobertura.ciudad, {
      shouldValidate: true,
    }); 
  
  };
  const onSubmit = (data, e) => {
    data.claves = JSON.stringify(tags);
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
          <br />
          <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
            Crear recurso
          </h1>
          <br />
          <h3 className="block text-gray-700 font-bold mb-2 text-md text-left">
            Información Inicial
          </h3>
          <input
            type="hidden"
            ref={register()}
            value={recurso.id}
            name="id"
          />
          <hr className="" />
          <div className="grid grid-cols-2 gap-4">
            <div className=" mb-4 mt-6 col-span-1 ">
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
            <div className=" mb-4 mt-6 ">
              <label
                className="text-left block text-gray-700 text-sm font-bold mb-2"
                htmlFor="claves"
              >
                Claves
              </label>

              <div>
                <ReactTags
                  ref={register({
                    required: {
                      value: true,
                      message: "Titulo es requerido",
                    },
                  })}
                  tags={tags}
                  handleDelete={handleDelete}
                  handleAddition={(algo) => handleAddition(algo)}
                  handleDrag={handleDrag}
                  delimiters={delimiters}
                  placeholder="Ingrese sus claves (presione enter para agregar cada una)"
                  name="claves"
                  inputFieldPosition="top"
                  classNames={{
                    tags: "tagsClass",
                    tagInput: "",
                    tagInputField:
                      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    selected: "selectedClass",
                    tag:
                      "mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1",
                    remove: "pl-2 font-bold",
                    suggestions: "suggestionsClass",
                    activeSuggestion: "activeSuggestionClass",
                  }}
                />
              </div>
              <span className="text-red-500 text-small d-block mb-2">
                {errors.claves && errors.claves.message}
              </span>
            </div>

            <div className="mb-4 col-span-2 ">
              <label
                className="text-left block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Descripción
              </label>
              <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={register({
                required: {
                  value: true,
                  message: "La descripción es requerida",
                },
              })}
              name="descripcion" id="" cols="30" rows="10"></textarea>
              
              <span className="text-red-500 text-small d-block mb-2 ">
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

            <div className="mb-8">
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

            <h3 className="col-span-2  block text-gray-700 font-bold mb-2 text-md text-left">
              Cobertura
            </h3>
            <hr className="col-span-2 " />

            <div className="mb-4 mt-4">
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

            <div className="mb-4 mt-4">
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
                type="text"
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
                type="text"
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
                onChange={(e) => selectDepto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={register({
                  required: {
                    value: true,
                    message: "Departamento es requerido",
                  },
                })}
                name="departamento"
              >
                {departamentos.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.departamento}
                  </option>
                ))}
              </select>
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
                name="ciudad"
              >
                {ciudades &&
                  ciudades.map((k, v) => (
                    <option key={v} value={v}>
                      {k}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              id="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <i className="fab fa-whatsapp"></i> Modificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormUpdateRecurso;
