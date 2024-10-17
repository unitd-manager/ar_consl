import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import moment from 'moment';
import api from '../../constants/api';


const PdfCientSecretaryAppoint = ({directorResignId,companyId}) => {
  PdfCientSecretaryAppoint.propTypes = {
    directorResignId: PropTypes.any,
    companyId:PropTypes.any
  }
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
  const [directorNameDetails, setDirectorNameDetails] = useState();
  

    // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientsByIds', { contact_id: directorResignId })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };

  const getCompanyContactData = () => {
    api
      .post('/clients/getContactLinkedByContactId', { contact_id: directorResignId })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };

  const getDirector = () => {
    api
      .post('/clients/getSecertaryContactPdf', { company_id: companyId })
      .then((res) => {
        setDirectorNameDetails(res.data.data);
      })
    
  };

  React.useEffect(() => {
    getCompanyAddressData();
    getCompanyContactData();
    getDirector();
  }, []);

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
          text: `${element.first_name?element.first_name:''}   (Director)`,
          style: 'tableBody',
          border: [false, false, false, true],
        },
        
            {
              text: `IC NO:${element.id_card_no?element.id_card_no:''}`,
              style: 'tableBody',
              border: [false, false, false, true],
            },
          

            {
              text: '',
              style: 'tableBody',
              border: [false, false, false, true],
            },
       
      ]);
    });

    const dd = {
      
      content: [
        {
          text: `${
            companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
          }`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          color:'blue',
          fontSize: 13,
          margin: [0, 5, 0, 0],
        },
        {
          text: ` (Incorporated in the Republic of Singapore)`,
          fontSize: 10,
          bold: false,
          alignment: 'center',
          margin: [0, 5, 0, 0],
        },
        {
          text: `(Reg No:${
            companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''
          })`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          color:'blue',
          fontSize: 10,
          margin: [0, 5, 0, 0],
        },
        {
          canvas: [{ type: 'line', x1: 84, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [216, 0, 0, 0],
        },
        '\n',
        {
          canvas: [{ type: 'line', x1: 500, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
        {
          text: `SECRETARY RESOLUTION DATED ${(companycontactDetails.secretary_appoint_date)? moment(companycontactDetails.secretary_appoint_date).format('DD-MM-YYYY'):''}    PASSED PURSUANT\n `,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 10.5,
          margin: [0, -5, 0, 0],
        },
        {
          text: ` TO THE COMPANY ́S ARTICLE OF ASSOCIATION  `,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          margin: [0, -5, 0, 0],
          fontSize: 10.5,
        },
        '\n',
        {
          canvas: [{ type: 'line', x1: 500, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, -5, 0, 0],
        },
        '\n',
        {
          text: 'APPOINTMENT OF SECRETARY ',
          style: 'textSize',
          bold: true,

          fontSize: 11,
        },
        '\n',

        {
          text: `Resolved that the Appointment of  ${
            companycontactDetails.first_name
              ? companycontactDetails.first_name
              : ''
          } of  No:  ${
            companycontactDetails.id_card_no
              ? companycontactDetails.id_card_no
              : ''
          } as a Secretary of the Company is hereby accepted with immediate effect.\n\n`,
          style: 'textSize',
          fontSize: 11,
        },
        
        
        '\n',
        {
          text: `PASSED THIS ON : ${(companycontactDetails.secretary_appoint_date)? moment(companycontactDetails.secretary_appoint_date).format('DD-MM-YYYY'):''} \n\n`,
          style: 'textSize',
          fontSize: 10.5,
          bold: true,
        },
        '\n',
        {
          text: `AT   ${
            companyaddressDetails.address_flat
              ? companyaddressDetails.address_flat
              : ''
          } , ${
            companyaddressDetails.address_country
              ? companyaddressDetails.address_country
              : ''
          } - ${
            companyaddressDetails.address_po_code
              ? companyaddressDetails.address_po_code
              : ''
          }\n\n`,
          style: 'textSize',
          fontSize: 11,
          bold:true,
          margin: [0, -10, 0, 0],
        },
        '\n',

        {
          text: 'DIRECTORS ',
          style: 'textSize',
          fontSize: 11,
          bold: true,
        },
        '\n',

        {
          canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [350,45, 0, 0],
        },

        {
          text: `  ${
            companycontactDetails.first_name ? companycontactDetails.first_name : ''
          }`,
          style: 'textSize',
          color:'blue',
          fontSize: 11,
          margin: [0, -10, 0, 0],
        },
        {
          text: `   ${
            companycontactDetails.id_card_type ? companycontactDetails.id_card_type : ''
          } No:   ${
            companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''
          }`,
          style: 'textSize',
          fontSize: 11,
          margin: [0, 3, 0, 0],
        },
       
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            widths: ['33%', '33%', '33%'],
            body: productItems,
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
     <span onClick={GetPdf}><u>secretary Appoint</u></span>
    </>
  );
};

export default PdfCientSecretaryAppoint;
