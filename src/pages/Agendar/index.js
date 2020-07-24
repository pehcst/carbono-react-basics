import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
export default function Agendar() {
  const [paciente, sPaciente] = useState("");
  const [exame, sExame] = useState("");
  const [data, sData] = useState("");

  async function agendarPaciente(e) {
    e.preventDefault();

    const dados = { paciente, exame, data };
    try {
      await api.post("/agendamentos", dados);
      alert("cadastro realizado com sucesso");
    } catch (err) {
      alert("erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="insert-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Unimed Volta Redonda"></img>
          <h1>Agendar um exame</h1>
          <p>
            Agende seu exame na Unimed Volta Redonda, fique atento com o
            horário!
          </p>
          <Link className="return-link" to="/">
            <FiArrowLeft size={16} color="#008B5A" />
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={agendarPaciente}>
          <input
            placeholder="Nome do paciente"
            value={paciente}
            onChange={(e) => sPaciente(e.target.value)}
          />
          <input
            placeholder="Nome do exame"
            value={exame}
            onChange={(e) => sExame(e.target.value)}
          />
          <input
            type="date"
            value={data}
            onChange={(e) => sData(e.target.value)}
          />
          <button className="button" type="submit">
            Agendar paciente
          </button>
        </form>
      </div>
    </div>
  );
}
