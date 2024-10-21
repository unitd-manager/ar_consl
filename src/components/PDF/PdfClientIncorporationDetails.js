import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';
import api from '../../constants/api';



const PdfClientIncorporationDetails = () => {
  const { id } = useParams();
  
  
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companycontactDetails, setCompanyContactDetails] = useState();
  const [companyDetails, setCompanyDetails] = useState();
  const [companyshareDetails, setCompanyshareDetails] = useState({});
 
 
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
        setCompanyDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };


  
  const getShareholderPdf = () => {
    api.post('/clients/getShareholdernamePdf', { company_id: id })
      .then((res) => {
        setCompanyshareDetails(res.data.data[0] || {});
      });
  };

  const getCompanyContactData = () => {
    api
      .post('/clients/getContactByCompanyId', { company_id: id })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };

  React.useEffect(() => {
    getDirectors();
    getShareholderPdf();
    getCompanyAddressData();
    getCompanyContactData();
  }, [id]);

  const GetPdf = () => {
    const dd = {
      pageSize: 'A4',
      
      content: [
       
        {
            text: `INCORPORATION  `,
            style: 'textSize',
            fontSize: 12,
            bold: true,
            alignment:'center',
          },'\n\n',
          {
            text: `Proposed Name : `,
            style: 'textSize',
            fontSize: 11,
            margin:[100,0,0,0],
            bold: true,
          },
          
          {canvas: [ { type: 'line', x1: 84, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},
          {
            text: ` ${
              companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
            }`,
            style: 'textSize',
            fontSize: 11,
            color:'blue',
            margin:[200,-12,0,0],
            bold: false,
          },
          '\n\n',
          {
          text: `Directors : `,
          style: 'textSize',
          fontSize: 11,
          bold: true,
          margin:[100,0,0,0],
          },
          {canvas: [ { type: 'line', x1: 50, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},
          {
            text: `Name            :${
              companyDetails.first_name ? companyDetails.first_name : ''
            }
            ${
              companyDetails.id_card_type ? companyDetails.id_card_type : ''
            }IC No         :${
              companyDetails.id_card_no ? companyDetails.id_card_no : ''
            }
            Mobile          :${
              companyDetails.mobile ? companyDetails.mobile : ''
            }
            Email            :${
              companyDetails.email ? companyDetails.email : ''
            }`,
            style: 'textSize',
            fontSize: 11,
            bold: false,
            margin:[100,0,0,0],
            },
          '\n',
        {
            text: `Shareholders :     `,
            style: 'textSize',
            fontSize: 11,
            bold:true,
            margin:[100,0,0,0],
          },
          {canvas: [ { type: 'line', x1:70, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},
          {
            text: `Name: ${
              companyshareDetails.first_name ? companyshareDetails.first_name : ''
            }
            ${
              companyshareDetails.id_card_type ? companyshareDetails.id_card_type : ''
            }IC No : ${
              companyshareDetails.id_card_no ? companyshareDetails.id_card_no : ''
            }`,
            style: 'textSize',
            fontSize: 11,
            bold: false,
            margin:[100,0,0,0],
            },
         
          '\n\n',
          {
            text: `Paid up capital        :$${companyaddressDetails.paidup_capital?companyaddressDetails.paidup_capital:''}   `,
            style: 'textSize',
            fontSize: 11,
            bold:true,
            color:'blue',
            margin:[100,0,0,0],
          },
          {canvas: [ { type: 'line', x1: 79, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},     
                   '\n\n',
          {
            text: `Registered address :      `,
            style: 'textSize',
            fontSize: 11,
            bold:true,
            margin:[100,0,0,0],
          },
          {canvas: [ { type: 'line', x1: 100, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},'\n',
          {text:`${
            companyaddressDetails.address_flat
              ? companyaddressDetails.address_flat
              : ''
          }
                       ${
            companyaddressDetails.address_street
              ? companyaddressDetails.address_street
              : ''
          }${
            companyaddressDetails.address_town
              ? companyaddressDetails.address_town
              : ''
          }
          ${
              companyaddressDetails.address_country
                ? companyaddressDetails.address_country
                : ''
            }- ${
              companyaddressDetails.address_po_code
                ? companyaddressDetails.address_po_code
                : ''
            }`,margin:[100,0,20,0],  fontSize: 11,style: 'textSize',alignment: 'Left'},
          
         
          '\n',
        {
          text: `Principal activity : ${
            companyaddressDetails.change_date ? companyaddressDetails.change_date : ''
          }`,
          style: 'textSize',
          fontSize: 11,
          bold: true,
          margin:[100,0,0,0],
        },
        {canvas: [ { type: 'line', x1:86, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},'\n',
        {text:`PRIMARY               :${companyaddressDetails.activity_1 ? companyaddressDetails.activity_1:''}\n
        SECONDARY        :${companyaddressDetails.activity_2 ? companyaddressDetails.activity_2:''}`,
        margin:[100,0,0,0],  style: 'textSize'},
          
        
         
          '\n\n',
        {
            text: `Secretary fees : $ ${
                companyaddressDetails.change_date ? companyaddressDetails.change_date : ''
              }\n`,
              style: 'textSize',
              fontSize: 11,
              bold: true,
              margin:[100,0,0,0],
            }, {text:`${companyaddressDetails.date?companyaddressDetails.date:''}`,margin:[-80,0,-20,0],  style: 'textSize',alignment: 'center'},
            {canvas: [ { type: 'line', x1: 76, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},
            '\n\n',
            {
                text: `Incorporation fees : $ ${
                    companyaddressDetails.change_date ? companyaddressDetails.change_date : ''
                  }\n`,
                  style: 'textSize',
                  fontSize: 11,
                  bold: true,
                  margin:[100,0,0,0],
                },
                {text:`${companycontactDetails.date?companycontactDetails.date:''}`,margin:[-80,0,-20,0],  style: 'textSize',alignment: 'center'},
                {canvas: [ { type: 'line', x1: 90, y1: 0, x2: 0, y2: 0, lineWidth:0}],margin:[100,0,0,0],},
                '\n\n',
        

       
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
      <Button type="submit" className="shadow-none"
                color="primary" onClick={GetPdf}>
        Incorporation 
      </Button>
    </>
  );
};

export default PdfClientIncorporationDetails;