import { Table } from "react-bootstrap";
import "./Tabela.css"
function Get() {
  const alunos = [
    { matricula: 1234567, nome: "Rafael", turma: "3 ano b", nota: 10 },
    { matricula: 1111, nome: "Rafaaaa", turma: "2 ano A", nota: 8 },
    { matricula: 2222, nome: "Maria", turma: "1 ano A", nota: 9 },
  ];


  console.log(alunos);
  return (
    <div className="Tabela">
      <Table striped bordered hover>
        <thead>
          <th>Matricula</th>
          <th>Nome</th>
          <th>Turma</th>
          <th>Nota</th>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr>
              <td> {aluno.matricula} </td>
              <td>{aluno.nome}</td>
              <td>{aluno.turma}</td>
              <td>{aluno.nota}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Get;
