import { useEffect, useState, useCallback } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Pagination,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import { FcCheckmark, FcHighPriority } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { LoadTableList, LoadMemberList } from "../../../../domain/usecases";

const Search = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="5" className="justify-content-md-center">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Procurar Aluno"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Procurar</Button>
        </Form>
      </Col>
    </Row>
  );
};

const PaginationMember = () => {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item active>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

type TableMemberProps = {
  data: LoadTableList.TableModel[];
};

const TableMember = ({ data }: TableMemberProps) => {
  let navigation = useNavigate();
  const listItems = data.map((item) => (
    <tr key={item.memberId}>
      <td>{item.memberId}</td>
      <td>
        <Button variant="link" onClick={() => navigation("memberEdit")}>
          {item.firstName} {item.lastName}
        </Button>
      </td>
      <td>{new Date(item.birthDate).toLocaleDateString("pt-br")}</td>
      <td>{new Date(item.registrationDate).toLocaleDateString("pt-br")}</td>
      <td>{new Date(item.registrationDueDate).toLocaleDateString("pt-br")}</td>
      <td>{item.subscriptionType}</td>
      <td>{item.subscriptionPeriod}</td>
      <td>
        {item.paymentStatus === "paid" ? (
          <FcCheckmark size={24} />
        ) : (
          <FcHighPriority color="red" size={24} />
        )}
      </td>
    </tr>
  ));

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Data de Inicio</th>
            <th>Vencimento</th>
            <th>Tipo de Modalidade</th>
            <th>Período de Assinatura</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </Table>
      <PaginationMember />
    </Container>
  );
};

type Props = {
  loadMemberList: LoadMemberList;
};

const MembersPage = ({ loadMemberList }: Props) => {
  const [data, setData] = useState<LoadTableList.TableModel[]>([]);

  const doRequest = useCallback(async () => {
    const response = await loadMemberList.get();
    setData(response.results);
    //TODO implement pagination 
  }, []);

  useEffect(() => {
    doRequest();
  }, [doRequest]);

  return (
    <Container style={{ marginTop: 34 }}>
      <Stack gap={5}>
        <Search />
        <TableMember data={data} />
      </Stack>
    </Container>
  );
};

export default MembersPage;
