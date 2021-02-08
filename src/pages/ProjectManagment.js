import React, { Fragment } from "react";

import Title from "../components/Title";
import Intro from "../components/Intro";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import PrimaryLine from "../components/Line";

import { FaRegCheckCircle, FaStar } from "react-icons/fa";

export const ProjectManagment = () => {
  return (
    <Fragment>
      <Title title="Proyecto" />
      <Intro intro="Consulta la organización, documentación e investigación que realizamos para poder construir Comeet Cat." />
      <Subtitle subtitle="Administración de proyecto en Notion:" />
      <Button
        value="Administración del Proyecto - Notion"
        url="https://www.notion.so/comeetcat/"
      />
      <PrimaryLine />
      <Subtitle subtitle="Roadmap" />
      <ul>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Revisión de requerimientos
        </li>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Llenado de Brief
        </li>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Diseño de Wireframes
        </li>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Diseño de Marca
        </li>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Creación del Sistema de Diseño
        </li>
        <li>
          <FaRegCheckCircle color="#8A77BB" /> Codificar solución
        </li>
      </ul>
      <PrimaryLine />

      <Subtitle subtitle="Hitos" />
      <ul>
        <li>
          <FaStar color="#8A77BB" /> Investigación
        </li>
        <li>
          <FaStar color="#8A77BB" /> Diseño de Proyecto
        </li>
        <li>
          <FaStar color="#8A77BB" /> Componentes Visuales
        </li>
        <li>
          <FaStar color="#8A77BB" /> Sistema de Diseño
        </li>
        <li>
          <FaStar color="#8A77BB" /> Integración de la API
        </li>
        <li>
          <FaStar color="#8A77BB" /> Generador de Certificado
        </li>
      </ul>
    </Fragment>
  );
};
