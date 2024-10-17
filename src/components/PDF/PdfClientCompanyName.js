import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import api from '../../constants/api';



const PdfClientCompanyName = ({id,companyId}) => {
  PdfClientCompanyName.propTypes = {
    id: PropTypes.any,
    companyId:PropTypes.any,
  }
   const [companynameDetails, setCompanyNameDetails] = useState();
   const [directorNameDetails, setDirectorNameDetails] = useState();
  //const [companycontactDetails, setCompanyContactDetails] = useState();

 // Gettind data from Company Name
 const getCompanyNameData = () => {
  api
    .post('/clients/getCompanyNamePdf', { company_name_change_id: id })
    .then((res) => {
      setCompanyNameDetails(res.data.data[0]);
      console.log(res.data.data);
    })
    
};
const getDirector = () => {
  api
    .post('/clients/getDirectorContactPdf', { company_id: companyId })
    .then((res) => {
      setDirectorNameDetails(res.data.data);
    })
   
};
  React.useEffect(() => {
    getCompanyNameData();
    getDirector();
    //getCompanyContactData();
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
          text: `${companynameDetails.previous_company_name ? companynameDetails.previous_company_name : ''}`,
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
          text: `(Reg No:${
            companynameDetails.reg_no ? companynameDetails.reg_no : ''
          })`,
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
          text: `Minutes of the Extraordinary General Meeting of  ${
            companynameDetails.previous_company_name ? companynameDetails.previous_company_name : ''
          } held at   ${
            companynameDetails.meeting_address_flat ? companynameDetails.meeting_address_flat : ''
          }, ${
            companynameDetails.meeting_address_country
              ? companynameDetails.meeting_address_country
              : ''
          } - ${
            companynameDetails.meeting_address_po_code
              ? companynameDetails.meeting_address_po_code
              : ''
          }  at  ${companynameDetails.meeting_time ? companynameDetails.meeting_time : ''}\n `,
          style: 'textSize',
          bold: false,
          fontSize: 10.5,
        },
        '\n',
        {
          text: ` Present: As attendance listed below  `,
          style: 'textSize',
          bold: false,
          margin: [20, 0, 0, 0],
          fontSize: 10.5,
        },
       
        '\n\n',
        {
          text: `All members being present and notice of meeting was waived by agreement of all present pursuant to Section 177 (3) (b) of the Companies Act, Cap 50., representative ${
            companynameDetails.first_name ? companynameDetails.first_name : ''
          },  was appointed Chairman of the meeting and the following matter was dealt with :-\n `,
          style: 'textSize',
          bold: false,
          fontSize: 10,
        },
        '\n',
        {
          text: `1)    The Special Resolution below was passed: `,
          fontSize: 10,
        },
        '\n\n',
        {
          text: `CHANGE OF COMPANY'S NAME`,
          margin: [20, 0, 0, 0],
          fontSize: 10,
        },
        '\n\n',
        {
          text: `RESOLVED that subject to the approval of the Registrar of Companies, the name of the Company be
          changed to "${
            companynameDetails.current_company_name ? companynameDetails.current_company_name : ''
          }" and that the name "${
            companynameDetails.previous_company_name ? companynameDetails.previous_company_name : ''
          }." be substituted for "${
            companynameDetails.current_company_name ? companynameDetails.current_company_name : ''
          }" wherever the latter name appear in the Company's Memorandum and Articles of Association.\n\n`,
          style: 'textSize',
          margin: [20, 0, 0, 0],
          fontSize: 10,
        },
        '\n',

        '\n',

        {
          text: 'MEMBER',
          style: 'textSize',
          fontSize: 11,
          bold: true,
          margin: [0, 0, 0,0],
        },
        '\n',
       
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

export default PdfClientCompanyName;
