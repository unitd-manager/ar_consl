import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Icon from 'react-feather';
import api from '../../constants/api';



  const PdfClientTransfer = ({transferIncreaseId}) => {
    PdfClientTransfer.propTypes = {
      transferIncreaseId: PropTypes.any
    }
  const [companycontactDetails, setCompanyContactDetails] = useState();

 const getCompanyContactData = () => {
    api
      .post('/clients/getPdfShareTransfer', { company_share_transfer_id:transferIncreaseId })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };

  React.useEffect(() => {
    getCompanyContactData();
  }, []);

  const GetPdf = () => {
    const dd = {
     
      content: [
       
        {
          text: `SHARE TRANSFER FORM`,
          fontSize: 12,
          bold: false,
          alignment: 'center',
        },'\n\n',
      
        {
          text: `I,  ${companycontactDetails.name ? companycontactDetails.name : ''}  , bearer of IC No:  ${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''} , (the “transferor”),being the registered shareholder for the consideration stated here do hereby transfer to   ${companycontactDetails.to_name ? companycontactDetails.to_name : ''}  bearer of IC No:  ${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''}  (the “transferee”), the shares as specified here standing in my name in the Register of Members of  " ${companycontactDetails.company_name ? companycontactDetails.company_name : ''}".   subject to the conditions on which I held the same at the date of signing here of.`,
          style: 'textSize',
          alignment: 'left',
          fontSize: 10,
        },'\n\n',
        {
          text: `I, the transferee, do hereby agree to accept the said shares on the same conditions`,
          fontSize: 10,
          alignment: 'left',
        },'\n',
        {
          text: `Full description of shares :  ${
            companycontactDetails.description_of_shares
              ? companycontactDetails.description_of_shares
              : ''
          } `,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
        {
          text: `Number of shares              :  ${
            companycontactDetails.no_of_shares
              ? companycontactDetails.no_of_shares
              : ''
          }/-`,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
        {
          text: `Consideration                     : S$${
            companycontactDetails.consideration
              ? companycontactDetails.consideration
              : ''
          }/- `,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n\n\n',
        {
          text: `Dated this    :${(companycontactDetails.transfer_date)? moment(companycontactDetails.transfer_date).format('DD-MM-YYYY'):''}`,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
      
        {
          text: `Signed, sealed and delivered by the above named.`,
          margin: [0, 0, 0, 0],
          fontSize: 10,
          alignment: 'left',
        },
        '\n',
        {
          text: `In the presence of`,
          margin: [0, 0, 0, 0],
          fontSize: 10,
          alignment: 'left',
        },
        '\n\n',
        
        {
            text: `Witness:\n\n Name \n\n Passport/NRIC No:\n\n Occupation:\n\n Address: `,
            style: 'textSize',
            fontSize: 10,
            
          },
        
          
          { stack: [
            {
              canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
              margin: [350, 0, 0, 0],
            },
            {
              text: `Transferor `,
              style: 'textSize',
              bold: true,
              margin: [350, 0, 0, 0],
              fontSize: 10,
              
            },
            {
              text: ` ${
                companycontactDetails.name
                  ? companycontactDetails.name
                  : ''
              } `,
              style: 'textSize',
              bold: true,
              margin: [350, 0, 0, 0],
              fontSize: 10,
              
            },
             ]
             },'\n\n\n',
        {
          text: `Witness:\n\nName \n\n Passport/NRIC No:\n\n Occupation:\n\n Address:  `,
          style: 'textSize',
          fontSize: 10,
          
        },
      
       { stack: [
      {
        canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
        margin: [350, 0, 0, 0],
      },
      {
        text: `Transferee `,
        style: 'textSize',
        bold: true,
        margin: [350, 0, 0, 0],
        fontSize: 10,
        
      },
      {
        text: ` ${
          companycontactDetails.to_name
            ? companycontactDetails.to_name
            : ''
        } `,
        style: 'textSize',
        bold: true,
        margin: [350, 0, 0, 0],
        fontSize: 10,
        
      },
       ]
       },'\n\n\n\n\n\n\n',
      {
        text: `Note: The witness must be an adult. The witness must affix above his signature and state his name,
        occupation and address. A husband must not witness the signature of his wife and vice versa.`,
        style: 'textSize',
        fontSize: 10,
        
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

export default PdfClientTransfer;
