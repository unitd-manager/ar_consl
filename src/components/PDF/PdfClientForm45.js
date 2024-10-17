import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PropTypes from 'prop-types';
import moment from 'moment'
import api from '../../constants/api';



const PdfClientForm45 = ({form45Id}) => {
  PdfClientForm45.propTypes = {
    form45Id: PropTypes.any,
    
  }
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
 
  

    // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientsByIds', { contact_id: form45Id })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };

  const getCompanyContactData = () => {
    api
      .post('/clients/getContactLinkedByContactId', { contact_id: form45Id })
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
          text: `SECTION 173(2)(a)`,
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },'\n\n',
        {
            text: `CONSENT TO ACT AS DIRECTOR`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 12,
          },{
            text: `AND STATEMENT OF NON`,
            style: 'textSize',
            bold: true,
          alignment: 'center',
          fontSize: 12,
          },{
            text: ` DISQUALIFICATION TO ACT`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 12,
          },
          {
            text: ` AS DIRECTOR`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 12,
          },'\n',
          {
            text: `Form 45`,
            style: 'textSize',
            bold: true,
            alignment: 'center',
            fontSize: 18,
          },'\n',
        
        {
          text: `Name of Company:  ${
            companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
          }   `,
          style: 'textSize',
          bold: true,
          fontSize: 12,
          
        },'\n',
       
        {
          text: `Company No    : ${
            companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''
          } `,
          style: 'textSize',
          bold: true,
          fontSize: 12,
          
        },
        '\n\n',
        
        {
          text: `I, the undermentioned person, hereby consent to act as a director of the above named company with effect from${(companycontactDetails.date_of_appointment)? moment(companycontactDetails.date_of_appointment).format('DD-MM-YYYY'):''} and that I am not disqualified from acting as a director in that:`,
          style: 'textSize',
          bold: false,
          margin:[50,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text: `(a)    I am not less than 21 years of age and that I am of full capacity..`,
            style: 'textSize',
            bold: false,
            margin:[50,0,0,0],
            fontSize: 11,
          },'\n',
          {
            text: `(b)    Within a period of 3 years preceding the date of this statement I have not had any disqualification order made by the High Court of Singapore against me under section 149A (1) of the Companies Act (The Act).  `,
            style: 'textSize',
            bold: false,
            margin:[50,0,0,0],
            fontSize: 11,
          },'\n',
         {
            text: `(c)    Within a period of 5 years preceding the date of this statement I have not had any disqualification order made by the High Court of Singapore against me under section 149(1) or 154(2) of the Act.`,
          style: 'textSize',
          margin:[50,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text: `(d)    That within a period of 5 years preceding the date of this statement I have not been convicted whether within or without Singapore, of any offence ----    `,
          style: 'textSize',
          fontSize: 11,
          margin:[50,0,0,0],
          bold: false,
        }, '\n',
        
        {
            text: `(1)    in connection with the promotion, formation or management of a corporation;                         :   `,
          style: 'textSize',
          margin:[60,0,0,0],
          fontSize: 11,
        },
        '\n',
        {
            text: `(2)    involving fraud or dishonesty punishable on conviction with imprisonment for 3 months or more; or   `,
            style: 'textSize',
            margin:[40,0,0,0],
            fontSize: 11,
          },
          '\n',
          {
            text: `(3)    under section 157 (failure to act honestly and diligently as a director or  making improper use of company information for gain) or under section 339  (failure to keep proper company accounts books) of the Act.    `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[40,0,0,0]
          },
          '\n',
          {
            text: `(e)    That within a period of 5 years preceding the date of this statement I have not been convicted, in Singapore or elsewhere, of any offence involving
            fraud or dishonesty punishable on conviction with imprisonment for 3
            months or more.   `,
            style: 'textSize',
            fontSize: 11,
            margin:[40,0,0,0]
          },
          '\n',
          {
            text: `(f) That ----            :   
             `,
            style: 'textSize',
            fontSize: 11,
            margin:[50,0,0,0]
          },
          '\n',
          {
            text: `(a)   I have not been convicted of 3 or more offences under the Companies  Act in relation to the requirements on the filing of returns, accounts or other documents with the Registrar of Companies and have not had 3 or more orders of the High Court of Singapore made against me under section 13 or 399 of the Act in relation to such requirements; and     `,
            style: 'textSize',
            fontSize: 11,
            
          },
          '\n',
{ 
            text: `(b)   the last of any such conviction did not take place or the last of any such
            order was not made during the period of 5 years preceding the date of this
            statement.
            `,
            style: 'textSize',
            fontSize: 11,
            margin:[50,0,0,0]
          },'\n',
          
          {
            text: `(c)    I am not an undischarged bankrupt under S148(1) of the Act.   `,
            style: 'textSize',
            fontSize: 11,
            margin:[60,0,0,0]
          },'\n',
          {
            text: `(g) By virtue of the foregoing I am not disqualified from acting as a director of
            the abovenamed company.    `,
            style: 'textSize',
            fontSize: 11,
            margin:[40,0,0,0]
          },'\n',
          {
            text: `(f) That ----    `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[40,0,0,0]
          },'\n',
          {
            text: `*(a) I have read and understood the above statements; or     `,
            style: 'textSize',
            fontSize: 11,
            margin:[70,0,0,0]
          },'\n',
          {
            text: `the above statements were interpreted to me in  ...............   by   ............ `,
            style: 'textSize',
            fontSize:11,
            margin:[70,0,0,0]
          },'\n',
          {
            text: `NRIC NO : .....................
            before I executed this form and I confirm that the statements are true. I am
            also aware that I can be prosecuted in Court if I wilfully give any information
            on this form which is false     `,
            style: 'textSize',
            fontSize: 11,
            margin:[40,0,0,0]
          },'\n',
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
        },'\n\n\n',
        {
          text: `* Delete where inapplicable`,
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
    <span onClick={GetPdf}><u>Form 45</u></span>
   </>
  );
};

export default PdfClientForm45;
