import React, { useEffect, useState } from "react";
import axios from "axios";
import { Document } from "react-pdf";

const PdfView = () => {
  const [pdfData, setPdfData] = useState(null);

  const getPdfFile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v1/work_permit/dokumen/657eb616defa1dcbf934117a",
        { responseType: "arraybuffer" }
      );
      if (response.status === 200) {
        setPdfData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPdfFile();
  }, []);

  return <Document file={pdfData} />;
};

export default PdfView;
