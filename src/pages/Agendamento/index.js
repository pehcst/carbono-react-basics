import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

function Agendamento() {
  const [agendamentos, sAgendamentos] = useState([]);

  useEffect(() => {
    api.get("/agendamentos").then((response) => {
      sAgendamentos(response.data);
    });
  }, []);

  async function deletarAgendamento(id) {
    try {
      await api.delete(`agendamentos/${id}`);
      alert("Agendamento cancelado com sucesso");

      sAgendamentos(
        agendamentos.filter((agendamento) => agendamento.id !== id)
      );
    } catch (err) {
      alert("erro ao cancelar, tente novamente");
    }
  }

  return (
    <div className="agendamento-container">
      <header>
        <img src={logoImg} alt="Unimed Volta Redonda" />
      </header>
      <div className="info-section">
        <h1>Agendamentos realizados</h1>
        <Link className="button" to="/agendar">
          Realizar um agendamento
        </Link>
      </div>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            <strong>Paciente</strong>
            <p>{agendamento.paciente}</p>
            <strong>Exame</strong>
            <p>{agendamento.exame}</p>
            <strong>Data do agendamento</strong>
            <p>{agendamento.data}</p>
            <button
              onClick={() => deletarAgendamento(agendamento.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#ddd" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agendamento;
