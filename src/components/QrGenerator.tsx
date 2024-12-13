import React from "react";
import logo from "../assets/logo-qr-generator.svg";
import { QRCode } from "react-qrcode";



interface QrGeneratorProps {
    onBackMain: () => void,
    qrUrl: string
}

export const QrGenerator: React.FC<QrGeneratorProps> = ({ onBackMain, qrUrl }): JSX.Element => {
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
            <button>Download</button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};
