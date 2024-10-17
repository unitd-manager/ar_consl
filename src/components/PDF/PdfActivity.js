import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import api from '../../constants/api';



const PdfActivity = () => {
  const { id } = useParams();

  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companyDetails, setCompanyDetails] = useState();
  
  

    // Gettind data from Company address
    const getCompanyAddressData = () => {
      api
        .post('/clients/getClientsById', { company_id: id })
        .then((res) => {
          setCompanyAddressDetails(res.data.data[0]);
          console.log(res.data.data);
        })
        
    };
  
    const getDirectors = () => {
      api
        .post('/clients/getDirectorContactPdf', { company_id: id })
        .then((res) => {
          setCompanyDetails(res.data.data);
          console.log(res.data.data);
        })
        
    };

  

  React.useEffect(() => {
    getCompanyAddressData();
    getDirectors();
   // getCompanyContactData();
  }, [id]);

  const GetPdf = () => {
    const productItems = [
      [
        {
          text: 'Name',
          style: 'tableHead',
        },
        {
          text: 'NRIC/ PPT/FIN : IC:',
          style: 'tableHead',
        },
        {
          text: 'Signature',
          style: 'tableHead',
        },
       
       
      ],

    ];
    companyDetails.forEach((element) => {
      productItems.push([
        {
          text: `${element.first_name?element.first_name:''}   (Director)`,
          style: 'tableBody1',
          border: [false, false, false, true],
        },
        
            {
              text: `NO:${element.id_card_no?element.id_card_no:''}`,
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
          color:'blue',
          alignment: 'center',
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
          color:'blue',
          alignment: 'center',
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
          text: `DIRECTOR'S RESOLUTION DATED    ${
            companyDetails.appoint_date ? companyDetails.appoint_date : ''
          }   PASSED PURSUANT  \n `,
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
          text: 'CHANGES OF PRINCIPLE ACTIVITIES ',
          style: 'textSize',
          bold: true,

          fontSize: 10.5,
        },
        '\n',
        {
            text: 'Resolved that subject to the principle activities: ',
            style: 'textSize',
            bold: false,
  
            fontSize: 10.5,
          },'\n\n',
          {
            text: 'PRIMARY PRINCIPLE ACTIVITY: ',
            style: 'textSize',
            bold: true,
  
            fontSize: 10.5,
          },
          '\n',
          {
              text: 'INSTALLATION OF INDUSTRIAL MACHINERY AND EQUIPMENT, MECHANICAL ENGINEERING WORKS(28300) Change to ELECTRICAL WORKS(43210). ',
              style: 'textSize',
              bold: false,
    
              fontSize: 10,
            },'\n\n',

        {
          text: `PASSED THIS ON : ${
            companyDetails.appoint_date ? companyDetails.appoint_date : ''
          }\n\n`,
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
          fontSize: 12,
          bold:true,
          color:'blue',
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
        tableBody1: {
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          color:'blue',
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
     <Button type="submit" className="shadow-none"
                color="primary" onClick={GetPdf}>
       Activity
      </Button>
    </>
  );
};

export default PdfActivity;
