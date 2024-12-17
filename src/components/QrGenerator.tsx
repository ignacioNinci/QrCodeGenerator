import React from "react";
import logo from "../assets/logo-qr-generator.svg";
import { QRCode } from "react-qrcode";



interface QrGeneratorProps {
    onBackMain: () => void,
    qrUrl: string
}

export const QrGenerator: React.FC<QrGeneratorProps> = ({ onBackMain, qrUrl }): JSX.Element => {


  const downloadQRCode = (): void => {
    const svg = document.querySelector(".qrCode") as SVGSVGElement;
  
    if (!svg) {
      console.error("No se encontró ningún elemento <svg> en el DOM.");
      return;
    }
  
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);
  
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  
    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "qrcode.svg";
  
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(url);
  };

  

  


  return (
    <>
      <div className="container">
        <div className="logo-container-output">
          <img src={logo} alt="Logo" onClick={onBackMain}/>
        </div>
        <div className="output-container">
          <div className="circle-container">
            <div className="circle">
                <div className="qrCode-container">
                    <QRCode
                        className="qrCode"
                        value={qrUrl}
                        size={256}
                    />
                </div>
            </div>
          </div>
          <div className="buttons-container">
            <div onClick={downloadQRCode}>
              <i className="fa-solid fa-download"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


