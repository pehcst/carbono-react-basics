const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
console.log("It's ON!");

const agendamentos = [];

app.get("/agendamentos", (request, response) => {
  // const { paciente, data } = request.body;
  // console.log(paciente);
  // console.log(data);

  return response.json(agendamentos);
});

app.post("/agendamentos", (request, response) => {
  const { paciente, exame, data } = request.body;

  const agendamento = { id: uuid(), paciente, exame, data };
  agendamentos.push(agendamento);

  return response.json(agendamento);
});

app.delete("/agendamentos/:id", (request, response) => {
  const { id } = request.params;

  const agendamentoIndex = agendamentos.findIndex(
    (agendamento) => agendamento.id === id
  );

  if (agendamentoIndex < 0) {
    return response.status(400).json({
      error: "Agendamento não encontrado!",
    });
  }
  agendamentos.splice(agendamentoIndex, 1);
  return response.status(204).send();
});

app.listen(3333);
