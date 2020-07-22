import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
export default function Agendar() {
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
        <form>
          <input placeholder="Nome do paciente" />
          <input placeholder="Nome do exame" />
          <input type="date" />
          <button className="button" type="submit">
            Agendar paciente
          </button>
        </form>
      </div>
    </div>
  );
}
