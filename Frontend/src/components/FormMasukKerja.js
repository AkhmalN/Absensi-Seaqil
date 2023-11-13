import { Col, Form, Row } from "react-bootstrap";
import "../App.css";

function FormMasukKerja() {
  return (
    <div classname="FormMasukKerja"> 
      <Form>
        <Row classname="mb-3">
          <Col>
            <Form.Label>Waktu Absen Masuk</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>ID Kegiatan</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Waktu Absen Selesai</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>ID Kegiatan</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormMasukKerja;
