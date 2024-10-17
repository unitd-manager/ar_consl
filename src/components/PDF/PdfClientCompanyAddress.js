import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import api from '../../constants/api';

const PdfClientCompanyAddress = ({ id ,companyId}) => {
  PdfClientCompanyAddress.propTypes = {
    id: PropTypes.any,
    companyId:PropTypes.any
  };

  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [directorNameDetails, setDirectorNameDetails] = useState();

  // Gettind data from Company address
  const getCompanyAddressData = () => {
    api.post('/clients/getCompanyAddressPdf', { company_address_change_id: id }).then((res) => {
      setCompanyAddressDetails(res.data.data[0]);
    });
  };
  const getDirector = () => {
    api.post('/clients/getDirectorContactPdf', { company_id: companyId }).then((res) => {
      setDirectorNameDetails(res.data.data);
    });
  };

  React.useEffect(() => {
    getCompanyAddressData();
    getDirector();
  }, [id]);

  const GetPdf = () => {
    const productItems = [
      [
        {
          text: 'Name:',
          style: 'tableHead',
        },
        {
          text: '',
          style: 'tableHead',
        },
        {
          text: 'Signature',
          style: 'tableHead',
        },
      ],
    ];
    directorNameDetails.forEach((element) => {
      productItems.push([
        {
          text: `${element.first_name ? element.first_name : ''}   (Director)`,
          style: 'tableBody',
          border: [false, false, false, true],
        },

        {
          text: `IC NO:${element.id_card_no ? element.id_card_no : ''}`,
          style: 'tableBody',
          border: [false, false, false, true],
        },

        {
          canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
          border: [false, false, false, true],
          margin: [0, 15, 0, 0],
          style: 'tableBody',
        },
      ]);
    });
    const dd = {
      content: [
        {
          text: `${companyaddressDetails.company_name ? companyaddressDetails.company_name : ''}`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 14,
        },
        {
          text: ` (Incorporated in the Republic of Singapore)`,
          fontSize: 11,
          bold: false,
          alignment: 'center',
        },
        {
          text: `(Reg No:${companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''})`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 11,
        },
        '\n',
        {
          canvas: [{ type: 'line', x1: 500, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
        {
          text: `DIRECTOR ́S RESOLUTION DATED    ${
            companyaddressDetails.change_date ? companyaddressDetails.change_date : ''
          }   PASSED PURSUANT\n `,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 10.5,
        },
        {
          text: ` TO THE COMPANY ́S ARTICLE OF ASSOCIATION  `,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 10.5,
        },
        '\n',
        {
          canvas: [{ type: 'line', x1: 500, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n\n',
        {
          text: 'CHANGE OF COMPANY REGISTERED ADDRESS\n ',
          style: 'textSize',
          bold: true,

          fontSize: 11,
        },
        '\n',

        {
          text: `Resolved that the change of company registered address as old address   ${
            companyaddressDetails.previous_address_flat
              ? companyaddressDetails.previous_address_flat
              : ''
          } , ${
            companyaddressDetails.previous_address_country
              ? companyaddressDetails.previous_address_country
              : ''
          } - ${
            companyaddressDetails.previous_address_po_code
              ? companyaddressDetails.previous_address_po_code
              : ''
          }  to new address${
            companyaddressDetails.current_address_flat
              ? companyaddressDetails.current_address_flat
              : ''
          } , ${
            companyaddressDetails.current_address_country
              ? companyaddressDetails.current_address_country
              : ''
          } - ${
            companyaddressDetails.current_address_po_code
              ? companyaddressDetails.current_address_po_code
              : ''
          } is hereby accepted with immediate effect.\n\n`,
          style: 'textSize',
          fontSize: 11,
        },
        '\n',
        {
          text: `PASSED THIS ON : ${
            companyaddressDetails.change_date ? companyaddressDetails.change_date : ''
          }\n\n`,
          style: 'textSize',
          fontSize: 10.5,
          bold: true,
        },
        '\n',
        {
          text: `AT   ${
            companyaddressDetails.current_address_flat
              ? companyaddressDetails.current_address_flat
              : ''
          } , ${
            companyaddressDetails.current_address_country
              ? companyaddressDetails.current_address_country
              : ''
          } - ${
            companyaddressDetails.current_address_po_code
              ? companyaddressDetails.current_address_po_code
              : ''
          }\n\n`,
          style: 'textSize',
          fontSize: 10,
        },
        '\n',

        {
          text: 'DIRECTORS ',
          style: 'textSize',
          fontSize: 11,
          bold: true,
        },'\n',
       
        {
          style: 'tableExample',
          table: {
            body: [productItems],
          },
        },
      ],
      margin: [0, 50, 50, 50],
      styles: {
        logo: {
          margin: [-20, 20, 0, 0],
        },
        address: {
          margin: [-10, 20, 0, 0],
        },
        invoice: {
          margin: [0, 30, 0, 10],
          alignment: 'right',
        },
        invoiceAdd: {
          alignment: 'right',
        },
        textSize: {
          fontSize: 10,
        },
        notesTitle: {
          bold: true,
          margin: [0, 50, 0, 3],
        },
        tableHead: {
          border: [false, true, false, true],
          fillColor: '#eaf2f5',
          margin: [0, 5, 0, 5],
          fontSize: 10,
          bold: 'true',
        },
        tableBody: {
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          alignment: 'left',
          fontSize: 10,
        },
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <>
      <span onClick={GetPdf}>
        <Icon.Printer />
      </span>
    </>
  );
};

export default PdfClientCompanyAddress;
