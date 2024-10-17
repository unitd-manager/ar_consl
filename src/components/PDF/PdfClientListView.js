import React, { useState } from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import moment from 'moment';
import api from '../../constants/api';



const PdfClientListView = ({companyId}) => {
  PdfClientListView.propTypes = {
    companyId:PropTypes.any
  }
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
 
  

    // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientsById', { company_id: companyId })
      .then((res) => {
        setCompanyAddressDetails(res.data.data[0]);
        console.log(res.data.data);
      })
     
  };

  

  React.useEffect(() => {
    getCompanyAddressData();
   
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
                  text: `CLIENT DETAILS`,
                  alignment: 'center',
                  style: 'tableHead',
                },
              ],
            ],
          },
        },
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
              return 'grey';
            },
          },
          table: {
            headerRows: 1,
            widths: ['101%',],
 
            body: [
              [
                {
                  text: `Company Details `,
                 margin:[-6,0,0,0],
                  bold:true,
                   fontSize: 10,
                  color:'white'
                },
              ],
            ],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [50, 70, 200,163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
            
              [{text:`Company Name`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.company_name ? companyaddressDetails.company_name : ''}`,fontSize:10,bold:true,margin:[5,0,0,0],color:'blue', style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Reg No. `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.reg_no ? companyaddressDetails.reg_no : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Incorporation Date `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${(companyaddressDetails.date_of_incorporation)? moment(companyaddressDetails.date_of_incorporation).format('DD-MM-YYYY'):''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Access Code`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.access_code ? companyaddressDetails.access_code : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Corp Pass`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.corp_pass ? companyaddressDetails.corp_pass : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              
            
            ]
          }
        },'\n\n\n',
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
              return 'grey';
            },
          },
          table: {
            headerRows: 1,
            widths: ['101%',],
 
            body: [
              [
                {
                  text: `Address Details                  `,
                  margin:[-6,0,0,0],
                  bold:true,
                   fontSize: 10,
                  color:'white'
                },
              ],
            ],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [50, 70, 200,163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
            
              [{text:`Address 1 `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.address_flat ? companyaddressDetails.address_flat : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Address 2 `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.address_street ? companyaddressDetails.address_street : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Address 3 `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.address_state ? companyaddressDetails.address_state : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Country `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.address_country ? companyaddressDetails.address_country : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Postal Code `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.address_po_code ? companyaddressDetails.address_po_code : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              
            
            ]
          }
        },'\n\n\n',
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
              return 'grey';
            },
          },
          table: {
            headerRows: 1,
            widths: ['101%',],
 
            body: [
              [
                {
                  text: `Principal Activities `,
                  margin:[-6,0,0,0],
                  bold:true,
                   fontSize: 10,
                  color:'white'
                },
              ],
            ],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [50, 70, 200,163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
            
              [{text:`Share Capital Currency`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.capital_currency ? companyaddressDetails.capital_currency : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Share Type `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.share_type ? companyaddressDetails.share_type : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Paidup Capital `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.paidup_capital ? companyaddressDetails.paidup_capital : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Activity 1 `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.activity_1 ? companyaddressDetails.activity_1 : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Description 1`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.activity_description_1 ? companyaddressDetails.activity_description_1 : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Activity 2 `,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.activity_2 ? companyaddressDetails.activity_2 : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
              [{text:`Description 2`,fontSize:10, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: `${companyaddressDetails.activity_description_2 ? companyaddressDetails.activity_description_2 : ''}`,fontSize:10,bold:true,margin:[5,0,0,0], style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
             
            
            ]
          }
        },'\n',
       
       

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

export default PdfClientListView;
