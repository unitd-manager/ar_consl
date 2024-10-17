import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import api from '../../constants/api';


  const PdfClientIncrease = ({shareIncreaseId}) => {
    PdfClientIncrease.propTypes = {
      shareIncreaseId: PropTypes.any
    }
  const [directorrnameDetails, setDirectorNameDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
  

  const getCompanyContactData = () => {
    api
      .post('/clients/getPdfShareIncrease', { company_share_increase_id:shareIncreaseId })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };
  const getDirector = () => {
    api
      .post('/clients/getContactDirectorIncrease', { company_share_increase_id: shareIncreaseId })
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
    directorrnameDetails.forEach((element) => {
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
          text: `Registered Office: ${companycontactDetails.address_flat ? companycontactDetails.address_flat : ''}, ${companycontactDetails.address_street ? companycontactDetails.address_street : ''}, ${companycontactDetails.address_country ? companycontactDetails.address_country : ''}, ${companycontactDetails.address_po_code ? companycontactDetails.address_po_code : ''}`,
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
          text: `RESOLVED:-`,
          style: 'textSize',
          bold: true,
          alignment: 'left',
          fontSize: 12,
        },'\n\n',
        {
          text: `That the Company be authorised to invest for ${
            companycontactDetails.no_of_shares_increased
              ? companycontactDetails.no_of_shares_increased
              : ''
          }/- Ordinary Shares in the share capital of ${companycontactDetails.company_name ? companycontactDetails.company_name : ''}.for a consideration of $${
            companycontactDetails.consideration_amount
              ? companycontactDetails.consideration_amount
              : ''
          }/-, directo ${
            companycontactDetails.first_name
              ? companycontactDetails.first_name
              : ''
          }-${companycontactDetails.directors_ordinary_shares ? companycontactDetails.directors_ordinary_shares : ''}/-\n `,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
        {
          text: `The Company representative ${companycontactDetails.first_name ? companycontactDetails.first_name :''} IC NO: ${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''}is hereby authorized by the company to execute the share increase procedure for and on behalf of the company.`,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
      
        {
          text: `PASSED THIS ON`,
          margin: [20, 0, 0, 0],
          fontSize: 10,
        },
        '\n',
        {
          text: `${companycontactDetails.address_flat ? companycontactDetails.address_flat : ''}, ${companycontactDetails.address_street ? companycontactDetails.address_street : ''}, ${companycontactDetails.address_country ? companycontactDetails.address_country : ''}, ${companycontactDetails.address_po_code ? companycontactDetails.address_po_code : ''}`,
          style: 'textSize',
          bold: true,
          alignment: 'left',
          fontSize: 12,
        },
        '\n',

        {
          text: `Date:${companycontactDetails.date ? companycontactDetails.date : ''}`,
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

export default PdfClientIncrease;
