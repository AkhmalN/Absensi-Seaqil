import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Button from "react-bootstrap/Button";

function FormTelatKerja() {
    return (
      <div classname="Container my-4">
        <Row>
          <Col>
          
          </Col>
          <Col className="blur-bg"> 
            <div className="app-container">  
              <div className="header-data1">
               <div className="Teks1">Presensi Hari Ini Sudah Selesai</div>
               <div className="Teks2">Mohon maaf kamu telat hari ini</div>
               <div className="Teks2">Selamat bekerja dan tetap semangat</div>
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
                  <Form.Control className="kolomFirst" placeholder="First name" />
                </Col>
                <Col sm={{ offset: 2 }}>
                  <Form.Label className="custom-text">ID Kegiatan</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              
              <div className="button-keluar">
              <Row>
                <Col sm={{offset:3}}>
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
  
  export default FormTelatKerja;
  