import { Col, Form, Row, Button } from "react-bootstrap";
import "../App.css";

function FormMasukKerja() {
  return (
    <div classname="Container my-4">
      <Row>
        <Col>
          <h1>Testing</h1>
        </Col>
        <Col className="blur-bg">
          <div className="app-container">
            <div className="header-data">
              <div className="Teks1">Presensi Hari Ini Sudah Selesai</div>
              <div className="Teks2">Presensi Hari Ini Sudah Selesai</div>
            </div>

            <Form className="container my-4">
              <Row>
                <Col>
                  <Form.Label className="custom-text">
                    Waktu Absen Masuk
                  </Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col sm={{ offset: 2 }}>
                  <Form.Label className="custom-text">ID Kegiatan</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>

              <Row className="my-5">
                <Col>
                  <Form.Label className="custom-text">
                    Waktu Absen Selesai
                  </Form.Label>
                  <Form.Control
                    className="kolomFirst"
                    placeholder="First name"
                  />
                </Col>
                <Col sm={{ offset: 2 }}>
                  <Form.Label className="custom-text">ID Kegiatan</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>

              <div className="button-keluar">
                <Row>
                  <Col sm={{ offset: 3 }}>
                    <Button type="submit">Absen Keluar</Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FormMasukKerja;
