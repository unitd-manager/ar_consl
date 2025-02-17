import React, { useState, useEffect } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import api from '../../constants/api';

const PdfResolution = () => {
  const { id } = useParams();
  const [company, setCompanyData] = useState({});
  const [transfers, setShareTransfers] = useState([]);

  const getCompanyData = () => {
    api.post('/clients/getResolution', { company_id: id })
      .then((res) => {
        setCompanyData(res.data.data[0]);
        setShareTransfers(res.data.data);  // Set all share transfers
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCompanyData();
  }, [id]);

  const generatePDF = () => {
    const dd = {
      content: [
        {
          text: 'Director Meeting',
          style: 'header',
          alignment: 'center',
          fontSize: 18,
          margin: [0, 20, 0, 10],
        },
        {
          text: company.company_name || 'Company Name',
          style: 'subheader',
          alignment: 'center',
          fontSize: 14,
          margin: [0, 5, 0, 5],
        },
        {
          text: `Unique Entity No. ${company.reg_no || 'N/A'}`,
          style: 'subheader',
          alignment: 'center',
          fontSize: 12,
          margin: [0, 5, 0, 5],
        },
        {
          text: `(Incorporated in the Republic of ${company.address_country || 'Unknown'})`,
          style: 'subheader',
          alignment: 'center',
          fontSize: 10,
          margin: [0, 5, 0, 10],
        },
        {
          text: `Registered Office: ${company.address_flat || ''}, ${company.address_street || ''}, ${company.address_country || ''} - ${company.address_po_code || ''}`,
          style: 'address',
          alignment: 'center',
          fontSize: 10,
          margin: [0, 5, 0, 20],
        },
        {
          text: `I, ${company.first_name || 'Name'}, the undersigned, being the Sole Director of ${company.company_name || 'Company'}, pursuant to Article No. 90A of the Company’s Article of Association, hereby state that the following ordinary resolutions are deemed to have been duly passed at the FIRST DIRECTOR’S MEETING of the Company on ${company.date_of_incorporation || 'Incorporation Date'}.`,
          style: 'bodyText',
          alignment: 'justify',
          fontSize: 10,
          margin: [0, 10, 0, 10],
        },
        {
          text: 'The Notice of Incorporation from the Accounting and Corporate Regulatory Authority (ACRA) confirming that the Company is incorporated under the Companies Act.',
          style: 'bodyText',
          alignment: 'justify',
          fontSize: 10,
          margin: [0, 5, 0, 15],
        },
        {
          text: 'SOLE DIRECTOR',
          style: 'sectionHeader',
          alignment: 'center',
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        {
          text: `RESOLVED that ${company.first_name || 'Name'} be and is hereby appointed as the Sole Director of the Company.`,
          style: 'bodyText',
          alignment: 'justify',
          fontSize: 10,
          margin: [0, 5, 0, 15],
        },
        {
          text: 'REGISTERED OFFICE',
          style: 'sectionHeader',
          alignment: 'center',
          fontSize: 12,
          bold: true,
          margin: [0, 20, 0, 5],
        },
        {
          text: `RESOLVED that the registered office of the Company be situated at ${company.address_flat || ''}, ${company.address_street || ''}, ${company.address_country || ''} - ${company.address_po_code || ''}.`,
          style: 'bodyText',
          alignment: 'justify',
          fontSize: 10,
          margin: [0, 5, 0, 15],
        },
        {
          text: 'ALLOTMENT OF SUBSCRIBERS’ SHARES AND ISSUANCE OF SHARE CERTIFICATES',
          style: 'sectionHeader',
          alignment: 'center',
          fontSize: 12,
          bold: true,
          margin: [0, 20, 0, 5],
        },
        {
          text: `RESOLVED that the subscriber to the Memorandum of Association of the Company be registered as shareholders.`,
          style: 'bodyText',
          alignment: 'justify',
          fontSize: 10,
          margin: [0, 5, 0, 15],
        },
        {
          table: {
            widths: ['*', '*', '*'],
            headerRows: 1,
            body: [
              [
                { text: 'Shareholder', style: 'tableHead' },
                { text: 'Shareholding', style: 'tableHead' },
                { text: 'Signature', style: 'tableHead' }
              ],
              ...transfers.map((transfer) => [
                { text: transfer.first_name || 'Name', style: 'tableBody' },
                { text: transfer.no_of_shares || 'N/A', style: 'tableBody' },
                { text:  transfer.first_name , style: 'tableBody' }
              ])
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          text: 'Dated:',
          style: 'bodyText',
          alignment: 'center',
          fontSize: 10,
          bold: true,
          margin: [0, 20, 0, 5],
        },
        {
          text: 'Confirmed As A Correct Record',
          style: 'bodyText',
          alignment: 'center',
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        {
          text: `${company.first_name || 'Name'} (Sole Director)`,
          style: 'bodyText',
          alignment: 'center',
          fontSize: 10,
          bold: true,
          margin: [0, 5, 0, 0],
        },
        {
          text: `${company.address_flat || ''}, ${company.address_street || ''}, ${company.address_country || ''} ${company.address_po_code || ''}`,
          style: 'footer',
          alignment: 'center',
          fontSize: 8,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'Page 1',
          style: 'footer',
          alignment: 'center',
          fontSize: 8,
        }
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 20, 0, 10] },
        subheader: { fontSize: 14, bold: true },
        sectionHeader: { fontSize: 12, bold: true, margin: [0, 20, 0, 5], color: '#3b3b3b' },
        bodyText: { fontSize: 10, lineHeight: 1.5, margin: [0, 5, 0, 5] },
        address: { fontSize: 10, italics: true },
        footer: { fontSize: 8, margin: [0, 20, 0, 10] },
        tableHead: { border: [false, true, false, true], fillColor: '#eaf2f5', margin: [0, 5, 0, 5], fontSize: 10, bold: true, color: '#000' },
        tableBody: { margin: [0, 5, 0, 5], fontSize: 10 }
      }
    };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <Button color="primary" onClick={() => generatePDF(company, transfers)}>
      Generate Activity PDF
    </Button>
  );
};

export default PdfResolution;
