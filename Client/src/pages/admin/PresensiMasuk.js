import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  faBars,
  faCheck,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ImageComponents from "../../components/ImageComponents";

const PresensiMasuk = ({
  dataPresensi,
  handleShowAdd,
  handleOnClickLocation,
  handleshowApprove,
  handleShowDelete,
}) => {
  return (
    <div className="container-fluid" id="presensi_masuk">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex justify-content-between bg-white">
          <div className="header tulisan">
            <div className="header">
              Presensi Masuk Hari Ini
              <span className="blue-tag ms-2">MSIB Batch 5</span>
            </div>
            <div className="sub-header">SEAMEO QITEP In Language</div>
          </div>

          <form className="d-flex align-items-center form-inline mr-0 mw-100 navbar-search">
            <button
              className="check me-2 "
              type="button"
              onClick={handleShowAdd}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 7.5H18V6.5C18 6.23478 17.8946 5.98043 17.7071 5.79289C17.5196 5.60536 17.2652 5.5 17 5.5C16.7348 5.5 16.4804 5.60536 16.2929 5.79289C16.1054 5.98043 16 6.23478 16 6.5V7.5H15C14.7348 7.5 14.4804 7.60536 14.2929 7.79289C14.1054 7.98043 14 8.23478 14 8.5C14 8.76522 14.1054 9.01957 14.2929 9.20711C14.4804 9.39464 14.7348 9.5 15 9.5H16V10.5C16 10.7652 16.1054 11.0196 16.2929 11.2071C16.4804 11.3946 16.7348 11.5 17 11.5C17.2652 11.5 17.5196 11.3946 17.7071 11.2071C17.8946 11.0196 18 10.7652 18 10.5V9.5H19C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5C20 8.23478 19.8946 7.98043 19.7071 7.79289C19.5196 7.60536 19.2652 7.5 19 7.5ZM11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5Z"
                  fill="#1C711B"
                />
              </svg>
            </button>
            <div className="input-group">
              <input
                type="text"
                className="form-control border border-secondary small"
                placeholder="Cari..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Card Body */}
        <div className="card-body ">
          <DataTable
            value={dataPresensi}
            paginator
            rows={6}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ textAlign: "center", minWidth: "50rem" }}
            className="customDataTable"
            paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
          >
            <Column
              field="id_msib"
              header="ID MSIB"
              style={{ width: "8%" }}
              alignHeader={"center"}
            ></Column>
            <Column
              field="username"
              header="Nama"
              style={{ width: "20%" }}
              alignHeader={"center"}
            ></Column>
            <Column
              field="shift"
              header="Shift"
              style={{ width: "6%" }}
              alignHeader={"center"}
            ></Column>

            <Column
              field="divisi"
              header="Divisi"
              style={{ width: "10%" }}
              alignHeader={"center"}
            ></Column>
            <Column
              field="createdAt"
              header="Jam Masuk"
              style={{ width: "10%" }}
              alignHeader={"center"}
              body={(rowData) => {
                const createdAtDate = new Date(rowData.createdAt);
                return <span>{createdAtDate.toLocaleTimeString()}</span>;
              }}
            ></Column>
            <Column
              field="createdAt"
              header="Status"
              style={{ width: "10%" }}
              alignHeader={"center"}
              body={(rowData) => {
                const createdAtDate = new Date(rowData.createdAt);
                const targetTimeMorningStart = new Date();
                const targetTimeMorningEnd = new Date();
                const targetTimeAfternoonStart = new Date();
                const targetTimeAfternoonEnd = new Date();

                targetTimeMorningStart.setHours(7, 0, 0, 0);
                targetTimeMorningEnd.setHours(8, 0, 0, 0);
                targetTimeAfternoonStart.setHours(12, 0, 0, 0);
                targetTimeAfternoonEnd.setHours(13, 0, 0, 0);

                // Hitung selisih waktu dalam milidetik
                const timeDifferenceOnMorningStart =
                  createdAtDate - targetTimeMorningStart;
                const timeDifferenceOnMorningEnd =
                  createdAtDate - targetTimeMorningEnd;
                const timeDifferenceOnAfternoonStart =
                  createdAtDate - targetTimeAfternoonStart;
                const timeDifferenceOnAfternoonEnd =
                  createdAtDate - targetTimeAfternoonEnd;

                // Tentukan kondisi berdasarkan selisih waktu
                let status;
                if (
                  timeDifferenceOnMorningStart >= 0 &&
                  timeDifferenceOnMorningEnd <= 0
                ) {
                  status = "Tepat Waktu ";
                } else if (
                  timeDifferenceOnAfternoonStart >= 0 &&
                  timeDifferenceOnAfternoonEnd <= 0
                ) {
                  status = "Tepat Waktu ";
                } else {
                  status = "Terlambat";
                }

                const textColor = status.includes("Tepat Waktu")
                  ? "#1c711b"
                  : "#EF4040";
                const bgColor = status.includes("Tepat Waktu")
                  ? "#d0ffcf"
                  : "#FF8080";

                return (
                  <span
                    style={{
                      color: textColor,
                      backgroundColor: bgColor,
                      borderRadius: 10,
                      padding: 7,
                    }}
                  >
                    {status}
                  </span>
                );
              }}
            ></Column>
            <Column
              field="latitude"
              header="Lokasi"
              style={{ width: "10%" }}
              alignHeader={"center"}
              body={(rowData) => (
                <span onClick={handleOnClickLocation}>
                  {rowData.latitude},{rowData.longitude}
                </span>
              )}
            ></Column>
            <Column
              field="image"
              header="Foto"
              style={{ width: "10%" }}
              alignHeader={"center"}
              body={(rowData) => (
                <ImageComponents key={rowData._id} singleData={rowData} />
              )}
            ></Column>
            <Column
              field="aksi"
              header="Aksi"
              style={{ width: "16%" }}
              alignHeader={"center"}
              body={(rowData) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="check me-2 "
                    type="button"
                    onClick={() => handleshowApprove(rowData._id)}
                  >
                    <FontAwesomeIcon icon={faCheck} size="lg" />
                  </button>
                  <button
                    className="decline "
                    type="button"
                    onClick={() => handleShowDelete(rowData._id)}
                  >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                </div>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default PresensiMasuk;
