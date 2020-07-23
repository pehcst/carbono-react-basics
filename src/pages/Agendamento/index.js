import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

function Agendamento() {
  return (
    <div className="agendamento-container">
      <header>
        <img src={logoImg} alt="Unimed Volta Redonda" />
        <span>Agendamento de exames</span>
        <Link className="button" to="/agendar">
          Realizar um agendamento
        </Link>
      </header>
      <h1>Agendamentos realizados</h1>
      <ul>
        <li>
          <strong>Exame</strong>
          <p>Hemoglobina completo</p>
          <strong>Paciente</strong>
          <p>João Carlos Teixeira</p>
          <strong>Data do agendamento</strong>
          <p>01/01/2019</p>
          <button type="button">
            <FiTrash2 size={20} color="#ddd" />
          </button>
        </li>
        <li>
          <strong>Exame</strong>
          <p>Hemoglobina completo</p>
          <strong>Paciente</strong>
          <p>João Carlos Teixeira</p>
          <strong>Data do agendamento</strong>
          <p>01/01/2019</p>
          <button type="button">
            <FiTrash2 size={20} color="#ddd" />
          </button>
        </li>
        <li>
          <strong>Exame</strong>
          <p>Hemoglobina completo</p>
          <strong>Paciente</strong>
          <p>João Carlos Teixeira</p>
          <strong>Data do agendamento</strong>
          <p>01/01/2019</p>
          <button type="button">
            <FiTrash2 size={20} color="#ddd" />
          </button>
        </li>
        <li>
          <strong>Exame</strong>
          <p>Hemoglobina completo</p>
          <strong>Paciente</strong>
          <p>João Carlos Teixeira</p>
          <strong>Data do agendamento</strong>
          <p>01/01/2019</p>
          <button type="button">
            <FiTrash2 size={20} color="#ddd" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Agendamento;
