import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FcCalendar } from "react-icons/fc";
import avatarPlaceholder from "../../assets/image/avatar_placeholder.png";
import { ControllerMemberRegister } from "../../../controllers";

type Props = {
  controller: ControllerMemberRegister;
};

const MembersRegisterPage = ({ controller }: Props) => {
  return (
    <Container fluid="md">
      <Stack className="p-4">
        <Row>
          <Col md={3}>
            <Image fluid src={avatarPlaceholder} alt="avatar user" />

            <Form.Group controlId="formFile" className="my-3">
              <Form.Control type="file" accept=".png,.jpg,.jpeg" />
            </Form.Group>

            <Form.Group as={Col} controlId="birthDate" className="my-3">
              <Form.Label>
                Data de Nascimento<span className="req"> *</span>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">
                  <FcCalendar size={20} />
                </InputGroup.Text>
                <Col>
                  <DatePicker
                    id="birthdate"
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    selected={controller.params.birthDate}
                    onChange={(value) => controller.setBirthDate(value)}
                  />
                </Col>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>
                    Primeiro Nome<span className="req"> *</span>
                  </Form.Label>
                  <Form.Control
                    maxLength={100}
                    onChange={controller.onChangeParams}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>
                    Último Nome<span className="req"> *</span>
                  </Form.Label>
                  <Form.Control
                    maxLength={100}
                    onChange={controller.onChangeParams}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="mobileNumber">
                  <Form.Label>
                    Celular<span className="req"> *</span>
                  </Form.Label>
                  <Form.Control
                    value={controller.params.mobileNumber.value}
                    onChange={controller.onChangePhone}
                    placeholder="(__)_____-____"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" maxLength={100} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="address">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    onChange={controller.onChangeParams}
                    maxLength={300}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="medicalHistory">
                  <Form.Label>Histórico Médico</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    onChange={controller.onChangeParams}
                    maxLength={300}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="subscriptionType">
                  <Form.Label>
                    Tipo de Modalidade<span className="req"> *</span>
                  </Form.Label>
                  <Form.Select onChange={controller.onChangeParams}>
                    <option value="gym">Musculação</option>
                    <option value="crossFit">Cross Fit</option>
                    <option value="gymAndCrossFit">
                      Musculação + Cross Fit
                    </option>
                    <option value="pt">Personal Training</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="subscriptionPeriod">
                  <Form.Label>
                    Período de Assinatura<span className="req"> *</span>
                  </Form.Label>
                  <Form.Select onChange={controller.onChangeParams}>
                    <option value="1">1 Mês</option>
                    <option value="2">2 Meses</option>
                    <option value="3">3 Meses</option>
                    <option value="4">4 Mês</option>
                    <option value="5">5 Meses</option>
                    <option value="6">6 Meses</option>
                    <option value="7">7 Mês</option>
                    <option value="8">8 Meses</option>
                    <option value="9">9 Meses</option>
                    <option value="10">10 Mês</option>
                    <option value="11">11 Meses</option>
                    <option value="12">12 Meses</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="amount">
                  <Form.Label>
                    Valor<span className="req"> *</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>R$</InputGroup.Text>
                    <Form.Control
                      maxLength={30}
                      type="text"
                      value={controller.params.amount}
                      placeholder="R$ 0,00"
                      onChange={controller.onChangeAmount}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="paymentStatus">
                  <Form.Label>
                    Status Pagamento<span className="req"> *</span>
                  </Form.Label>
                  <Form.Select onChange={controller.onChangeParams}>
                    <option value="paid">Pago</option>
                    <option value="pending">Pendente</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="registrationDate">
                  <Form.Label>
                    Data de Registro<span className="req"> *</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FcCalendar size={20} />
                    </InputGroup.Text>
                    <Col>
                      <DatePicker
                        id="registerDate"
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                        selected={controller.params.registrationDate}
                        onChange={(value) =>
                          controller.setRegistrationDate(value)
                        }
                      />
                    </Col>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="dayPeriod">
                  <Form.Label>
                    Período<span className="req"> *</span>
                  </Form.Label>
                  <Form.Select onChange={controller.onChangeParams}>
                    <option value="morning">Manhã</option>
                    <option value="evening">Tarde</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Button
                className="float-end mt-3 px-5 py-2"
                variant="primary"
                type="button"
                onClick={async (e) => {
                 await controller.submit()
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default MembersRegisterPage;
