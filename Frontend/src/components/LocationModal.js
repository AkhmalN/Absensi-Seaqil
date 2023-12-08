import React from "react";
import { Modal } from "react-bootstrap";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Row, Col, Button } from "react-bootstrap";

const LocationModal = ({ showLocation, handleCloseLocation }) => {
  return (
    <Modal show={showLocation} onHide={handleCloseLocation} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          <Row>
            <Col className="mx-2">
              <span className="fs-6">Lat :</span>
            </Col>
            <Col className="mx-2">
              <span className="fs-6">Lng : </span>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px", width: "400px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}></Marker>
        </MapContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseLocation}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LocationModal;
