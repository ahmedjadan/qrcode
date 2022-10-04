import React from 'react';
import QRCode from 'qrcode';
import { useState } from 'react';
import Image from 'next/future/image';
export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#374151',
          light: '#fff',
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <div>
      <div className=" w-full ">
        <div className="my-4 space-y-4">
            <div className="flex space-x-4">

          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border px-2 py-2 rounded w-full flex-1"
          />
          <button onClick={GenerateQRCode} className="bg-rose-700 p-3 rounded  text-gray-50 text-lg">Generate</button>
            </div>
          {qr && (
            <div className="flex items-center justify-center w-full flex-col">
              <Image src={qr} alt="" width="500" height="500" />
              <a href={qr} download="qrcode.png" className="bg-gray-600 p-3 rounded w-full text-center text-lg text-gray-50">
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
