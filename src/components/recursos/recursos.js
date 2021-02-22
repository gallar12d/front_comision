import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ListRecursos from "./ListRecursos";
import FormRecurso from "./formRecurso";
import FormUpdateRecurso from "./formUpdateRecurso";
import { Modal, Button } from "react-bootstrap";

const Recursos = () => {
  const url = global.config.API_URL;
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  let history = useHistory();
  const [recursos, setRecursos] = useState([]);
  const [recurso, setRecurso] = useState();
  const [typeForm, setTypeForm] = useState("create");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loadData = async () => {
    const response = await fetch(url + "recursos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token_user"),
      },
    });
    const data = await response.json();
    setRecursos(data);
  };

  useEffect(async () => {
    loadData();
    getDepartaments();
  }, []);

  const getDepartaments = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    );
    setDepartamentos(await response.json());
  };

  const createRecurso = async (recurso) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": localStorage.getItem("token_user"),
      },
      body: JSON.stringify(recurso),
    };
    const response = await fetch(url + "recursos", requestOptions);
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors);
      return false;
    }
    loadData();
  };

  const selectRecurso = (recurso) => {
    setRecurso(recurso);
    setTypeForm("edit");
  };

  const UpdateRecurso = async (recurso) => {
    let id = recurso.id;

    delete recurso.id;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": localStorage.getItem("token_user"),
      },
      body: JSON.stringify(recurso),
    };
    const response = await fetch(url + "recursos/" + id, requestOptions);
    const data = await response.json();
    if (data.errors) {
      console.log(data.error);
      return false;
    }
    setTypeForm("create");

    loadData();
  };

  const deleteRecurso = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": localStorage.getItem("token_user"),
      },
    };
    const response = await fetch(url + "recursos/" + id, requestOptions);
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors);
      return false;
    }
    loadData();
  };

  return (
    <div className="">
      <div className=" col-span-1  mt-10 ml-3">
        {typeForm == "create" ? (
          <FormRecurso createRecurso={createRecurso} />
        ) : (
          <FormUpdateRecurso
            departamentos={departamentos}
            UpdateRecurso={UpdateRecurso}
            recurso={recurso}
          />
        )}
      </div>
      <div className="col-span-2 ">
        {recursos && (
          <ListRecursos
            departamentos={departamentos}
            deleteRecurso={deleteRecurso}
            selectRecurso={selectRecurso}
            recursos={recursos}
          />
        )}{" "}
      </div>
    </div>
  );
};
export default Recursos;
