import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import moment from 'moment'
import api from '../../constants/api';


const PdfClientForm45B = ({form45BId}) => {
  PdfClientForm45B.propTypes = {
    form45BId: PropTypes.any,
    
  }
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
 
  

    // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientsByIds', { contact_id: form45BId })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };

  const getCompanyContactData = () => {
    api
      .post('/clients/getContactLinkedByContactId', { contact_id: form45BId })
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
          text: `THE COMPANIES ACT`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: `  (CHAPTER 50) `,
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: `SECTION 173(4a)`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },'\n\n',
        {
            text: `CONSENT TO ACT AS SECRETARY`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 12,
          },'\n',
          {
            text: `Form 45B`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 18,
          },'\n\n',
        
        {
          text: `Name of Company:     ${
            companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
          }   `,
          style: 'textSize',
          bold: true,
          fontSize: 11,
          
        },'\n',
       
        {
          text: `Company No: ${
            companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''
          } `,
          style: 'textSize',
          bold: true,
          fontSize: 11,
          
        },
        '\n\n',
        
        {
          text: `1.        I, the undermentioned person, hereby consent to act as a secretary of the above name company with effect from ${(companycontactDetails.date_of_appointment)? moment(companycontactDetails.date_of_appointment).format('DD-MM-YYYY'):''}`,
          style: 'textSize',
          bold: false,
          margin:[60,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text:`2.        I am a qualified person under section 171(1AA) of the Companies Act by virtue of my 0being â€”`,
            style: 'textSize',
            bold: false,
            margin:[60,0,0,0],
            fontSize: 11,
          },'\n',
          {
            text: `* (i)   a secretary of a company for at least 3 of the 5 years immediately preceding the abovementioned date of my appointment as secretary of the abovenamed/ company. `,
            style: 'textSize',
            bold: false,
            margin:[60,0,0,0],
            fontSize: 11,
          },'\n',
         {
            text: `* (ii)   a qualified person under the Legal Profession Act (Cap. 161).    `,
          style: 'textSize',
          margin:[60,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text: `* (iii)   an accountant registered with the Institute of Certified Public Accountants of Singapore.   `,
          style: 'textSize',
          fontSize: 11,
          margin:[60,0,0,0],
          bold: false,
        }, '\n',
        
        {
            text: `* (iv) a member of the Singapore Association of the Institute of Chartered Secretaries and Administrators.   `,
          style: 'textSize',
          margin:[60,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text: `* (v)  a member of the Association of International Accountants (Singapore Branch)  `,
            style: 'textSize',
            margin:[60,0,0,0],
            fontSize: 11,
          },
          '\n',
          {
            text: `* (vi) a member of The Institute of Company Accountants, Singapore.  `,
            style: 'textSize',
            fontSize: 11,
            margin:[60,0,0,0]
          },
          '\n',
                   
          {
            text: `Name      ${
              companycontactDetails.first_name
                ? companycontactDetails.first_name
                : ''
            }`,
            style: 'textSize',
            fontSize: 11,

          },'\n',
          {
            text: `Address:   
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
            },`,
            style: 'textSize',
            fontSize: 11,
         
          },'\n',
          {
           text:`NRIC/Passport No: ${
              companycontactDetails.id_card_no
                ? companycontactDetails.id_card_no
                : ''
            } `,
            style: 'textSize',
            fontSize: 11,
           
          },'\n',
          {
            text: `CONTACT NO :${
              companycontactDetails.phone_direct
                ? companycontactDetails.phone_direct
                : ''
            }`,
            style: 'textSize',
            fontSize: 11
            
          },'\n',
          {
            text: `   Email ID:   ${
              companycontactDetails.email
                ? companycontactDetails.email
                : ''
            }`,
            style: 'textSize',
            fontSize: 11,
            
          },'\n',
         
         
          {
            text: `Nationality   :    ${
              companycontactDetails.nationality
                ? companycontactDetails.nationality
                : ''
            }`,
            style: 'textSize',
            fontSize: 11,
           
          },'\n',
          

        {
          canvas: [{ type: 'line', x1: 205, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
          margin: [250, 25, 0, 0],
        },

        {
          text: `Signature `,
          style: 'textSize',
          fontSize: 11,
          margin: [0, -10, 0, 0],
        },
        '\n\n',
        {
          text: `Date This ${(companycontactDetails.date_of_appointment)? moment(companycontactDetails.date_of_appointment).format('DD-MM-YYYY'):''} `,
          style: 'textSize',
          fontSize: 11,
          margin: [0, -10, 0, 0],
        },'\n\n',
        
        {
          text: `# to be completed by secretaries of public companies only or by secretaries of private companies appointed under
          section 171(1AB) of the Act.
          . Delete where inapplicable". `,
          style: 'textSize',
          fontSize: 8,
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
    <span onClick={GetPdf}><u>Form 45B</u></span>
   </>
    
  );
};

export default PdfClientForm45B;
