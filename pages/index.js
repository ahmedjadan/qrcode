import Head from 'next/head';
import Image from 'next/future/image';
import QRCodeGenerator from '../components/QRCode';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h2 className="text-xl font-bold text-gray-700 text-center my-4">QR Code Generator</h2>
      <QRCodeGenerator />
    </div>
  );
}
