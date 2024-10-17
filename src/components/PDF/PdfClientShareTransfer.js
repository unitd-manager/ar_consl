import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Icon from 'react-feather';
import api from '../../constants/api';





  const PdfClientShareTransfer = ({transferId}) => {
    PdfClientShareTransfer.propTypes = {
      transferId: PropTypes.any
    }
   const [directorrnameDetails, setDirectorNameDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
  

  const getCompanyContactData = () => {
    api
      .post('/clients/getPdfShareTransfer', { company_share_transfer_id:transferId })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };
  const getDirector = () => {
    api
      .post('/clients/getContactDirector', { company_share_transfer_id: transferId })
      .then((res) => {
        setDirectorNameDetails(res.data.data);
      })
      
  };

  React.useEffect(() => {
    getCompanyContactData();
    getDirector();
  }, []);

  const GetPdf = () => {
    const productItems = [
      [
        {
          text: 'Name',
          style: 'tableHead',
        },
        {
          text: 'Signature',
          style: 'tableHead',
        },
       
      ],

    ];
    directorrnameDetails.forEach((element) => {
      productItems.push([
        {
          text: `${element.first_name?element.first_name:''}`,
          style: 'tableBody',
          border: [false, false, false, true],
        },
        {
          canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
          border: [false, false, false, true],
          margin:[0,15,0,0],
          style: 'tableBody',
        },
       
       
      ]);
    });

    const dd = {
     
      content: [
        {
          text: `${companycontactDetails.company_name ? companycontactDetails.company_name : ''}`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: ` (Incorporated in the Republic of Singapore)`,
          fontSize: 10,
          bold: false,
          alignment: 'center',
        },
        {
          text: `Reg No :${companycontactDetails.reg_no ? companycontactDetails.reg_no : ''}`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 10.5,
        },
        '\n',
        {
          text: `Registered Office:${companycontactDetails.address_flat ? companycontactDetails.address_flat : ''},${companycontactDetails.address_street ? companycontactDetails.address_street : ''},${companycontactDetails.address_country ? companycontactDetails.address_country : ''},${companycontactDetails.address_po_code ? companycontactDetails.address_po_code : ''}`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 10.5,
        },
        
        {
          canvas: [{ type: 'line', x1: 515, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
        {
          text: `BOARD RESOLUTIONS`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: `(Pursuant to Section 100 of the Articles of Association)`,
          style: 'textSize',
          alignment: 'center',
          fontSize: 10,
        },'\n',
        {
          text: `TRANSFER OF SHARES`,
          style: 'textSize',
          bold: true,
          alignment: 'left',
          fontSize: 12,
        },'\n',
        {
          text: `RESOLVED:-`,
          style: 'textSize',
          bold: true,
          alignment: 'left',
          fontSize: 12,
        },'\n',
        {
          text: `a) "That the transfer of the following ordinary shares in the capital of the Company and is hereby approved."`,
          style: 'textSize',
          alignment: 'left',
          fontSize: 10,
        },'\n',
        {
          columns: [
            {
              stack: [
                { text: `Transferor`, style: ['textSize'] ,
                bold: true,
                alignment: 'left',
                fontSize: 12,},
                '\n',
                {
                  text: `${companycontactDetails.name? companycontactDetails.name : ''} \n  IC No:${companycontactDetails.c_card ? companycontactDetails.c_card : ''} \n ${companycontactDetails.c_flat ? companycontactDetails.c_flat : ''}\n${companycontactDetails.c_street ? companycontactDetails.c_street : ''}\n${companycontactDetails.c_town ? companycontactDetails.c_town : ''}\n${companycontactDetails.c_country ? companycontactDetails.c_country : ''}-${companycontactDetails.c_code ? companycontactDetails.c_code : ''}`,
                  style: ['textSize'],alignment: 'left',
                },
              ],
            },
            {
              stack: [
                { text: `No. of Shares`, style: ['textSize'] ,
                bold: true,
                alignment: 'left',
                fontSize: 12,},
                '\n',
                {
                  text: `${companycontactDetails.no_of_shares? companycontactDetails.no_of_shares : ''}/- `,
                  style: ['textSize'],alignment: 'left',
                },
              ],
            },
            {
              stack: [
                { text: `Transferee`, style: ['textSize'] ,
                bold: true,
                alignment: 'left',
                fontSize: 12,},
                '\n',
                 {
                  text: `${companycontactDetails.to_name? companycontactDetails.to_name : ''} \n IC No:${companycontactDetails.ct_card ? companycontactDetails.ct_card : ''} \n ${companycontactDetails.ct_flat ? companycontactDetails.ct_flat : ''}\n${companycontactDetails.ct_street ? companycontactDetails.ct_street : ''}\n${companycontactDetails.ct_town ? companycontactDetails.ct_town : ''}\n${companycontactDetails.ct_country ? companycontactDetails.ct_country : ''}-${companycontactDetails.ct_code ? companycontactDetails.ct_code : ''}`,
                  style: ['textSize'],alignment: 'left'
                },
              ],
            },
          ],
        },
        '\n',
        {
          text: `b) "That the issue of new share certificates to the transferees and the cancellation of the old share certificates in
          respect of the above transfer be authorised and that the Common Seal of the Company be affixed thereto in
          accordance with the Company´s Articles of Association."`,
          style: 'textSize',
          alignment: 'left',
          fontSize: 10,
        },'\n',
        {
          text: `The Company Director  ${companycontactDetails.director_authorizing_id ? companycontactDetails.director_authorizing_id :''} IC NO: ${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''}hereby authorized by the company to execute the share
          transfers.`,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',

        {
          text: `Dated:${(companycontactDetails.transfer_date)? moment(companycontactDetails.transfer_date).format('DD-MM-YYYY'):''}`,
          style: 'textSize',
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0,0],
        },
        '\n\n\n\n',
        
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
     <span onClick={GetPdf}><Icon.Printer/></span>
    </>
  );
};

export default PdfClientShareTransfer;
