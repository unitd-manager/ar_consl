import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import api from '../../constants/api';


const PdfClientSecretaryResignation = ({letterId}) => {
  PdfClientSecretaryResignation.propTypes = {
    letterId: PropTypes.any
  }
 
   const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
  
  // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientsByIds', { contact_id: letterId })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };

  const getCompanyContactData = () => {
    api
      .post('/clients/getContactLinkedByContactId', { contact_id: letterId })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };

  React.useEffect(() => {
    getCompanyAddressData();
    getCompanyContactData();
  }, []);

  const GetPdf = () => {
    const dd = {
      content: [  
        {
          layout: {
            defaultBorder: false,
            hLineWidth: () => {
              return 1;
            },
            vLineWidth: () => {
              return 1;
            },
            hLineColor: (i) => {
              if (i === 1 || i === 0) {
                return '#bfdde8';
              }
              return '#eaeaea';
            },
            vLineColor: () => {
              return '#eaeaea';
            },
            hLineStyle: () => {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function () { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: () => {
              return 10;
            },
            paddingRight: () => {
              return 10;
            },
            paddingTop: () => {
              return 2;
            },
            paddingBottom: () => {
              return 2;
            },
            fillColor: () => {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['101%',],

            body: [
              [
                {
                  text: `Resign Letter`,
                  alignment: 'center',
                  style: 'tableHead',
                },
              ],
            ],
          },
        },
        '\n', 
        {
          text: `Date:  ${
            companycontactDetails.resign_date ? companycontactDetails.resign_date : ''
          }\n`,
          style: 'textSize',
          fontSize: 10.5,
          bold: true,
        },
        '\n\n',  
        {
          text: `Director Address :  
          \n${
            companycontactDetails.first_name
              ? companycontactDetails.first_name
              : ''
          }\n IC NO: ${
            companycontactDetails.id_card_no
              ? companycontactDetails.id_card_no
              : ''
          }
           ${
            companycontactDetails.address_flat
              ? companycontactDetails.address_flat
              : ''
          }, ${
            companycontactDetails.address_street
              ? companycontactDetails.address_street
              : ''
          } \n ${
            companycontactDetails.address_country
              ? companycontactDetails.address_country
              : ''
          }    ${
            companycontactDetails.address_po_code
              ? companycontactDetails.address_po_code
              : ''
          }, \n\n`,
          style: 'textSize',
          fontSize: 11,
          bold:true,
        },
        '\n\n',
        {
          text: `The Directors:  
         \n ${
            companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
          } \n Reg No:${
            companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''
          }
          ${companyaddressDetails.address_flat ? companyaddressDetails.address_flat : ''}, ${companyaddressDetails.address_street ? companyaddressDetails.address_street : ''},\n ${companyaddressDetails.address_country ? companyaddressDetails.address_country : ''},\n ${companyaddressDetails.address_po_code ? companyaddressDetails.address_po_code : ''}\n`,
          style: 'textSize',
          fontSize: 10.5,
          bold: true,
        },
        '\n\n',
        {
            text: `Dear Sirs \n`,
            style: 'textSize',
            fontSize: 10.5,
            bold: true,
          },
          '\n',
        {
          text: `I, ${
            companycontactDetails.first_name ? companycontactDetails.first_name : ''}, of IC No: ${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''}, hereby tender my resignation as a secretary of the Company with immediate effect.  \n`,
          style: 'textSize',
          fontSize: 10.5,
        },
        '\n\n\n',

        {
          text: 'Yours faithfully ',
          style: 'textSize',
          fontSize: 11,
          bold: true,
        },
        '\n\n',

        {
          canvas: [{ type: 'line', x1: 125, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
          margin: [0, 25, 0, 0],
        },'\n',

        {
          text: `${
            companycontactDetails.first_name ? companycontactDetails.first_name : ''
          }\n IC No:${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''} `,
          style: 'textSize',
          fontSize: 11,
          color:'blue',
          margin: [0, -10, 0, 0],
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
    <span onClick={GetPdf}><u>Secretary Resignation</u></span>
   </>
  );
};

export default PdfClientSecretaryResignation;
