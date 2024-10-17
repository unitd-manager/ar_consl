import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';
import api from '../../constants/api';

const PdfProjectIncorporationDetails = () => {
  const { id } = useParams();

  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [shareholdernameDetails, setShareholderNameDetails] = useState([]);
  const [directornameDetails, setDirectorNameDetails] = useState();

  const getShareHolder = () => {
    api.post('/project/getShareholdernamePdf', { project_id: id }).then((res) => {
      setDirectorNameDetails(res.data.data);
    });
  };

  const getCompanyData = () => {
    api.post('/project/getClientsById', { project_id: id }).then((res) => {
      setCompanyAddressDetails(res.data.data[0]);
      console.log(res.data.data);
    });
  };
  const getShareholdernotDirectorsPdf = () => {
    api.post('/project/getShareholdernotDirectorsPdf', { project_id: id }).then((res) => {
      setShareholderNameDetails(res.data.data);
    });
  };

  React.useEffect(() => {
    getShareHolder();
    getShareholdernotDirectorsPdf();
    getCompanyData();
  }, [id]);

  const GetPdf = () => {
    const productItemss = [
      [
        {
          text: 'SN.NO',
          style: 'tableHead',
        },
        {
          text: 'Directors',
          style: 'tableHead',
        },
      ],
    ];
    directornameDetails.forEach((element, index) => {
      console.log(element);
      productItemss.push([
        {
          text: `${index + 1}`,
          border: [false, false, false, true],
          style: 'tableBody',
        },
        {
          text: `${element.first_name ? element.first_name : ''}`,
          border: [false, false, false, true],
          style: 'tableBody',
        },
      ]);
    });

    const productItems1 = [
      [
        {
          text: 'SN.No',
          style: 'tableHead',
        },
        {
          text: 'Shareholders',
          style: 'tableHead',
        },
        {
          text: 'Shareholding',
          style: 'tableHead',
        },
        {
          text: 'Signature',
          style: 'tableHead',
        },
      ],
    ];
    shareholdernameDetails.forEach((element, index) => {
      console.log(element);
      productItems1.push([
        {
          text: `${index + 1}`,
          border: [false, false, false, true],
          style: 'tableBody',
        },
        {
          text: `${element.first_name ? element.first_name : ''}`,
          border: [false, false, false, true],
          style: 'tableBody',
        },
        {
          text: `${element.issued_share_capital ? element.issued_share_capital : ''}`,
          border: [false, false, false, true],
          alignment: 'right',
          style: 'tableBody',
          margin: [0, 5, 50, 0],
        },
        {
          text: ``,
          border: [false, false, false, true],
          style: 'tableBody',
        },
      ]);
    });

    const productItem1 = [
      [
        {
          text: 'Contact Person',
          style: 'tableHead',
        },
        {
          text: 'Contact Number',
          style: 'tableHead',
        },
        {
          text: 'Email',
          style: 'tableHead',
        },
      ],
    ];
    directornameDetails.forEach((element) => {
      productItem1.push([
        {
          text: `${element.first_name ? element.first_name : ''}  (ShareHolder)`,
          style: 'tableBody1',
          border: [false, false, false, true],
        },

        {
          text: `${element.mobile ? element.mobile : ''}`,
          style: 'tableBody',
          border: [false, false, false, true],
        },
        {
          text: `${element.email ? element.email : ''}`,
          style: 'tableBody',
          border: [false, false, false, true],
        },
      ]);
    });
    const dd = {
      pageSize: 'A4',

      content: [
        {
          text: `INCORPORATION  `,
          style: 'textSize',
          fontSize: 12,
          bold: true,
          alignment: 'center',
        },
        '\n\n',
        {
          text: `Incorporation Details : `,
          style: 'textSize',
          fontSize: 12,
          margin: [0, 0, 0, 0],
          bold: true,
        },
        {
          canvas: [{ type: 'line', x1: 118, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
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
            widths: ['101%'],

            body: [[]],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [90, 30, 160, 163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: `Company Name :  `,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {
                  text: `${
                    companyaddressDetails.company_name ? companyaddressDetails.company_name : ''
                  }`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
              ],
              [
                {
                  text: `Registered Address: \n`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {
                  text: `${
                    companyaddressDetails.address_flat ? companyaddressDetails.address_flat : ''
                  }\n${
                    companyaddressDetails.address_street ? companyaddressDetails.address_street : ''
                  } ${
                    companyaddressDetails.address_town ? companyaddressDetails.address_town : ''
                  }\n${
                    companyaddressDetails.address_country
                      ? companyaddressDetails.address_country
                      : ''
                  } ${
                    companyaddressDetails.address_po_code
                      ? companyaddressDetails.address_po_code
                      : ''
                  }`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  rowspan: 1,
                  alignment: 'left',
                },
                {},
              ],
              [
                {
                  text: `Principal Activities:  (1)
                         Principal Activities:  (2)`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {
                  text: `${
                    companyaddressDetails.activity_1 ? companyaddressDetails.activity_1 : ''
                  }\n${companyaddressDetails.activity_2 ? companyaddressDetails.activity_2 : ''}`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
              ],
              [
                {
                  text: `PaidUp Capital:`,
                  style: 'tableHeader',
                  fontSize: 11,
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {
                  text: `${
                    companyaddressDetails.paidup_capital ? companyaddressDetails.paidup_capital : ''
                  }`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
              ],
            ],
          },
        },
        '\n\n',
        {
          text: `Paid-up capital is the liabilities of the company.
                Minimum is $1 per shareholder.`,
          style: 'textSize',
          fontSize: 11,

          margin: [0, 0, 0, 0],
          bold: true,
        },
        '\n',
        {
          text: `Each company is allowed to register with 2 main principal activities with Accounting and Corporate
                Regulatory Authority (ACRA)`,
          style: 'textSize',
          fontSize: 11,

          margin: [0, 0, 0, 0],
          bold: true,
        },
        '\n',
        {
          text: `Directors Details :`,
          style: 'textSize',
          fontSize: 11,

          margin: [0, 0, 0, 0],
          bold: true,
        },
        {
          canvas: [{ type: 'line', x1: 83, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
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
            widths: ['20%', '15%'],

            body: productItemss,
          },
        },

        '\n\n',
        {
          text: `Shareholders (personal details required if not directors)`,
          style: 'textSize',
          fontSize: 10,

          margin: [0, 0, 0, 0],
          bold: true,
        },
        {
          canvas: [{ type: 'line', x1: 247, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [0, 0, 0, 0],
        },
        '\n',
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
            widths: ['25%', '25%', '25%', '20%'],

            body: productItems1,
          },
        },
        '\n\n\n',
        {
          style: 'tableExample',
          table: {
            body: [productItem1],
          },
        },

        // {
        //   text: `Contact Person   : ${
        //     shareholderDetails.first_name ? shareholderDetails.first_name : ''
        //   }`,
        //   style: 'textSize',
        //   fontSize: 11,

        //   margin: [0, -12, 0, 0],
        //   bold: false,
        // },
        // {
        //   canvas: [{ type: 'line', x1: 104, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
        //   margin: [90, 0, 0, 0],
        // },
        // {
        //   text: `Contact Number : ${shareholderDetails.mobile ? shareholderDetails.mobile : ''}
        //     `,
        //   style: 'textSize',
        //   fontSize: 11,
        //   margin: [0, 5, 0, 0],
        //   bold: false,
        // },
        // {
        //   canvas: [{ type: 'line', x1: 104, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
        //   margin: [90, -12, 0, 0],
        // },
        // {
        //   text: `Email   : ${shareholderDetails.email ? shareholderDetails.email : ''}`,
        //   style: 'textSize',
        //   fontSize: 11,
        //   margin: [0, 5, 0, 0],
        //   bold: false,
        // },
        // {
        //   canvas: [{ type: 'line', x1: 155, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
        //   margin: [40, 0, 0, 0],
        // },

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
        tableBody1: {
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          color: 'blue',
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
        Incorporation
      </Button>
    </>
  );
};

export default PdfProjectIncorporationDetails;
