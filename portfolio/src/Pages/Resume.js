// import React from 'react';
// import Resumes from '../assets/avantika___resume.pdf';
// const Resume = () => {
//   return (
//     <div>
//       <h2>My Resume</h2>
//       <embed src={Resumes} type="application/pdf" width="100%" height="800px" />
//     </div>
//   );
// }

// export default Resume;

// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// // import Particle from "../Particle";
// import pdf from '../assets/avantika___resume.pdf';
// // import pdf from "../../Assets/../Assets/Aman_Gupta_Photo_resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Resume  () {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         {/* <Particle /> */}
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Resume
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Resume
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Resume;


// import React from 'react';
// import { FaFilePdf } from 'react-icons/fa';
// import Resumes from '../assets/avantika___resume.pdf';

// const Resume = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="flex items-center justify-center bg-gray-800">
//           <FaFilePdf className="text-white text-6xl" />
//         </div>
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold text-gray-800">My Resume</h2>
//           <div className="mt-4">
//             <a
//               href={Resumes}
//               download="avantika_resume.pdf"
//               className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg mr-4"
//             >
//               Download PDF
//             </a>
//             <div className="mt-4">
//               <embed src={Resumes} type="application/pdf" width="100%" height="800px" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resume;


import React from 'react';
import Resumes from '../assets/avantika_cv.pdf';
import { FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Resume</h2>
          <div className="resume-container">
            <embed src={Resumes} type="application/pdf" width="100%" height="800px" />
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href={Resumes}
              download="avantika_resume.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
