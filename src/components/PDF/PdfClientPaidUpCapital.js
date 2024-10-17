import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';
import api from '../../constants/api';



  const PdfClientPaidUpCapital = () => {
    const { id } = useParams();
    
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const[directorNameDetails, setDirectorNameDetails]=useState();
  

 
  // Gettind data from Contacy
 
  const getCompanyData = () => {
    api
      .post('/clients/getClientsById', { company_id:id })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };
  const getShareHolder = () => {
    api
      .post('/clients/getShareholdernamePdf', { company_id: id })
      .then((res) => {
        setDirectorNameDetails(res.data.data);
      })
    
  };


  React.useEffect(() => {
    getCompanyData();
    getShareHolder();
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
    directorNameDetails.forEach((element) => {
      productItems.push([
        {
          text: `${element.first_name?element.first_name:''}   (ShareHolder)`,
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
    const productItemss = [
      [
        
        {
          text: 'Name',
          style: 'tableHead',
        },
  
        {
          text: 'Amount',
          style: 'tableHead',
        },
       
      ],
    ];
    directorNameDetails.forEach((element) => {
      console.log(element);
      productItemss.push(
        [
          
          
          {
            text: `${element.first_name? element.first_name:''}`,
            border: [false, false, false, true],
            style: 'tableBody',
          },
          {
            text: `${element.issued_share_capital? element.issued_share_capital:''}`,
            border: [false, false, false, true],
            style: 'tableBody',
          },
         
        ]);
      });
    
    const dd = {
     
      content: [
        '\n\n\n',
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
                  text: `CAPITAL`,
                  alignment: 'center',
                  style: 'tableHead',
                },
              ],
            ],
          },
        },
        '\n',
        {
          text: `Date:  `,
          style: 'textSize',
          bold: false,
          margin: [10, 0, 0, 0],
          fontSize: 10.5,
        },
        '\n',
        {
          text: ` To:                   Whom it Concerns`,
          fontSize: 10.5,
          margin: [10, 0, 0, 0],
          bold: false,
          
        },'\n',
        {
          text: `Re:                    CONFIRMATION OF PAID-UP CAPITAL IN:-`,
          style: 'textSize',
          bold: false,
          margin: [10, 0, 0, 0],
          fontSize: 10,
        },
        {
          canvas: [{ type: 'line', x1: 185, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
          margin: [72, 0, 0, 0],
        },
        '\n\n',
       { columns:[
          {
            text: `Company  :  `,
            style: 'textSize',
            bold: false,
            margin: [10, 0, 0, 0],
            fontSize: 10.5,
          },
      {stack:[ {
          text: ` ${
            companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
          }\n`,
          style: 'textSize',
          bold: false,
          color:'blue',
          margin: [-190, 0, 0, 0],
          fontSize: 10.5,
        },
        {
          canvas: [{ type: 'line', x1: 350, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [-190, 0, 0, 0],
        },
      ]
    }
      ]
    },
    '\n\n',
    { columns:[
      {
        text: `Reg. No.   :  `,
        style: 'textSize',
        bold: false,
        margin: [10, 0, 0, 0],
        fontSize: 10.5,
      },
  {stack:[ {
      text: ` ${
        companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''
      }\n`,
      style: 'textSize',
      bold: false,
      color:'blue',
      margin: [-190, 0, 0, 0],
      fontSize: 10.5,
    },
    {
      canvas: [{ type: 'line', x1: 350, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
      margin: [-190, 0, 0, 0],
    },
  ]
}
  ]
},
    '\n\n',
    {
      text: `We, the undersigned do hereby understand, agree, and confirm that the Paid-Up Capital in
      cash from the respective person(s) listed below is true and correct:-`,
      style: 'textSize',
      bold: false,
      margin: [10, 0, 0, 0],
      fontSize: 10.5,
    },'\n\n',
   
        
        {
          layout: {
            defaultBorder: false,
            hLineWidth: ()=> {
              return 1;
            },
            vLineWidth: ()=> {
              return 1;
            },
            hLineColor: (i)=> {
              if (i === 1 || i === 0) {
                return '#bfdde8';
              }
              return '#eaeaea';
            },
            vLineColor: ()=> {
              return '#eaeaea';
            },
            hLineStyle: ()=> {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function () { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: ()=> {
              return 10;
            },
            paddingRight: ()=> {
              return 10;
            },
            paddingTop: ()=> {
              return 2;
            },
            paddingBottom: ()=> {
              return 2;
            },
            fillColor: ()=> {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['50%', '51%',],
            
        body: productItemss,
          },
        },
        '\n\n',
        
        {
          text: `We also fully understand and aware that the shareholdersâ€™ liability and obligation to pay up the said amount as stated above become effective immediately upon lodging the resolution with ACRA. 
              We shall further ensure that the said amounts be deposited into the Companyâ€™s account as soon as possible.`,
          style: 'textSize',
          bold: false,
          margin: [10, 0, 0, 0],
          fontSize: 10.5,
        },'\n\n',
  
      
       
        
       
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
          heights: Array(productItems.length).fill(30),
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
    <Button type="submit" className="shadow-none" color="primary" onClick={GetPdf}>
        PaidUpCapital
      </Button>
    </>
  );
};

export default PdfClientPaidUpCapital;