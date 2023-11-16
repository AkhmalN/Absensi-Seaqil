import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Button from "react-bootstrap/Button";

const formmasukkerjaStyle = {
  backgroundColor: '#fff', // Set latar belakang menjadi putih
  color: '#000', // Set warna teks menjadi hitam atau sesuai kebutuhan
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
function formmasukkerja() {
  return (
    <div classname="container">
      <Row>
        <Col>
          <h1>Testing</h1>
        </Col>
        <Col>
          <Form className="">
            <Row classname="my-5">
              <Col>
                <Form.Label className="custom-text">
                  Waktu Absen Masuk
                </Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col sm={{ offset: 7 }}>
                <Form.Label className="custom-text">ID Kegiatan</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>

            <Row className="my-5">
              <Col>
                <Form.Label className="custom-text">
                  Waktu Absen Selesai
                </Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col sm={{ offset: 7 }}>
                <Form.Label className="custom-text">ID Kegiatan</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>

            <Row className="my-5">
              <Col sm={{ offset: 10 }}>
                <Button type="submit">Absen Keluar</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default formmasukkerja;
