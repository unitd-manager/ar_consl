import React from 'react';
import PropTypes from 'prop-types';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';
//import { useParams } from 'react-router-dom';
import Converter from 'number-to-words';
import moment from 'moment';
import api from '../../constants/api';
import message from '../Message';


// ... (imports remain the same)

const PdfCreateInvoice = ({ invoiceId }) => {
  PdfCreateInvoice.propTypes = {
    invoiceId: PropTypes.any,
  };

  const [cancelInvoice, setCancelInvoice] = React.useState([]);
  const [createInvoice, setCreateInvoice] = React.useState(null);
  const [Total, setTotal] = React.useState(0);

  const getInvoiceById = () => {
  api
    .post('/invoice/getInvoiceByInvoiceId', { invoice_id: invoiceId })
    .then((res) => {
      setCreateInvoice(res.data.data);
      console.log('Invoice Data:', res.data.data); // Moved inside .then
    })
    .catch(() => {
      message('Invoice Data Not Found', 'info');
    });
};


  const getInvoiceItemById = () => {
    api.post('/invoice/getProjectInvoicePdf', { invoice_id: invoiceId })
      .then((res) => {
        setCancelInvoice(res.data.data);
        const grandTotal = res.data.data.reduce((sum, elem) => sum + elem.total_cost, 0);

        setTotal(grandTotal);
      })
      .catch(() => message('Invoice Data Not Found', 'info'));
  };

  React.useEffect(() => {
    getInvoiceItemById();
    getInvoiceById();
  }, []);

  const GetPdf = () => {
    const productItems = [
      [
        { text: 'Item', style: 'tableHead' },
        { text: 'Description', style: 'tableHead' },
        { text: 'Qty', style: 'tableHead' },
        { text: 'Rate', style: 'tableHead' },
        { text: 'Amount', style: 'tableHead' },
      ],
    ];

    cancelInvoice.forEach((element) => {
      productItems.push([
        { text: `${element.item_title || ''}`, style: 'tableBody1' },
        { text: `${element.description || ''}`, style: 'tableBody1' },
        { text: `${element.qty || 1}`, style: 'tableBody1' },
        { text: `${element.unit_price?.toFixed(2) || '0.00'}`, style: 'tableBody1' },
        { text: `${element.total_cost?.toFixed(2) || '0.00'}`, style: 'tableBody2', fillColor: '#f5f5f5' },
      ]);
    });

    const dd = {
      pageSize: 'A4',
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['100%'],
            body: [[{ text: `TAX INVOICE`, alignment: 'center', style: 'tableHead' }]],
          },
          layout: 'noBorders',
        },
        '\n',
        {
  columns: [
   {
  table: {
    widths: ['*'],
    body: [
      [
        {
          stack: [
            { text: 'Bill To:', style: 'textSize', bold: true, margin: [0, 0, 0, 5] },
            { text: `${createInvoice.company_name || ''}`, style: 'textSize' },
            { text: `${createInvoice.address_flat || ''}`, style: 'textSize' },
            { text: `${createInvoice.address_street || ''}`, style: 'textSize' },
            { text: `${createInvoice.address_country || ''}`, style: 'textSize' },
            { text: `${createInvoice.address_po_code || ''}`, style: 'textSize' },
          ],
        },
      ],
    ],
  },
  layout: {
    hLineWidth: () => 1,
    vLineWidth: () => 1,
    hLineColor: () => '#000',
    vLineColor: () => '#000',
  },
  width: '50%',
},

    {
      table: {
        widths: ['auto', 'auto'],
        body: [
          [
            { text: 'Date', style: 'tableHead', alignment: 'center' },
            {
              text: createInvoice.invoice_date
                ? moment(createInvoice.invoice_date).format('DD/MM/YYYY')
                : '',
              style: 'tableBody1',
              alignment: 'center',
            },
          ],
          [
            { text: 'Invoice #', style: 'tableHead', alignment: 'center' },
            {
              text: createInvoice.invoice_code || '',
              style: 'tableBody1',
              alignment: 'center',
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => '#000',
        vLineColor: () => '#000',
      },
      width: '50%',
    },
  ],
},

        '\n',
        {
          layout: {
            
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => '#000',
            vLineColor: () => '#000',
            paddingLeft: () => 10,
            paddingRight: () => 10,
            paddingTop: () => 2,
            paddingBottom: () => 2,
            fillColor: () => '#fff',
          },
          table: {
            headerRows: 1,
            widths: [70, '*', 50, 70, 80],
            body: productItems,
          },
        },
        {
        table: {
          widths: ['*', 92],
          body: [
            [
              {
                text: 'Total',
                style: 'tableBody2',
                alignment: 'right',
              },
              {
                text: `$${Total.toFixed(2)}`,
                style: 'tableBody2',
              },
            ],
            [
              {
                text: 'Payments/Credits',
                style: 'tableBody2',
                alignment: 'right',
              },
              {
                text: '$0.00',
                style: 'tableBody2',
              },
            ],
            [
              {
                text: 'Balance Due',
                style: 'tableBody2',
                alignment: 'right',
                bold: true,
              },
              {
                text: `$${Total.toFixed(2)}`,
                style: 'tableBody2',
                bold: true,
              },
            ],
          ],
        },
        layout: {
          hLineColor: () => '#000',
          vLineColor: () => '#000',
        },
        alignment: 'right',
      },
        '\n\n',
        {
        text: `TOTAL: ${Converter.toWords(Total).toUpperCase()} DOLLARS ONLY`,
        alignment: 'center',
        bold: true,
        margin: [0, 0, 0, 10],
      },
        '\n\n',
        {
        text:
          'UNITED OVERSEAS BANK\n' +
          'ACCT NAME: CUBOSALE ENGINEERING PTE LTD\n' +
          'ACCT NO.:- 3923023427\n' +
          'Paynow By UEN : 201222688M\n',
        style: 'textSize',
        bold: true,
      },
      ],
      margin: [0, 50, 50, 50],
      styles: {
        textSize: { fontSize: 10 },
        tableHead: {
          border: [false, true, false, true],
          fillColor: '#eaf2f5',
          margin: [0, 5, 0, 5],
          fontSize: 10,
          alignment: 'center',
          bold: true,
        },
        tableBody1: {
          margin: [0, 5, 0, 5],
          alignment: 'center',
          fontSize: 10,
        },
        tableBody2: {
          margin: [0, 5, 35, 5],
          alignment: 'right',
          fontSize: 10,
        },
        bold: {
          bold: true,
          fontSize: 10,
        },
      },
      defaultStyle: {
        columnGap: 20,
      },
    };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <Button type="button" className="btn btn-dark mr-2" onClick={GetPdf}>
      Print Invoice
    </Button>
  );
};

export default PdfCreateInvoice;
