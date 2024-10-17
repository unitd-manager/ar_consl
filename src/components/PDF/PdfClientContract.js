import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pdfMake from 'pdfmake';
import { Button } from 'reactstrap';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import api from '../../constants/api';




const PdfClientContract = () => {
  const { id } = useParams();


  
  const [companycontactDetails, setCompanyContactDetails] = useState();


  // Gettind data from Company address
  const getCompanyAddressData = () => {
    api
      .post('/clients/getClientSecretaryAppointPdf', { company_id: id })
      .then((res) => {
        setCompanyContactDetails(res.data.data[0]);
        console.log(res.data.data);
      })
      
  };

 
  React.useEffect(() => {
    getCompanyAddressData();
    
  }, [id]);

  const GetPdf = () => {
    const dd = {
      
      content: [
        {
          text: `FORM OF NOTICE MENTIONED IN SECTION 386AG(2(a) OF COMPANIES ACT`,
          style: 'textSize',
          bold: true,
          color:'brown',
          alignment: 'Left',
          margin:[50,0,0,0],
          fontSize: 12,
        },'\n\n',
        {
          text: ` Date of notice: `,
          fontSize: 10,
          bold: false,
          alignment: 'Left',
          margin:[50,0,0,0],
        },'\n',
        {
          text: `Dear,`,
          style: 'textSize',
          bold: false,
          alignment: 'left',
          margin:[50,0,0,0],
          fontSize: 10,
        },
        
        {
          text: `We know or have reasonable grounds to believe that you are a registrable controller of  ${
            companycontactDetails.company_name ? companycontactDetails.company_name : ''
          }   `,
          style: 'textSize',
          bold: false,
          fontSize: 10,
          margin:[80,10,0,0]
        },'\n',
       
        {
          text: ` *       This notice is sent under section 386AG(2)(a) of the Companies Act (Cap. 50) and requires you to provide the following information within 30 days after the date of this notice. Please send your reply to 216G Syed Alwi Road #01-01 Singapore (207799). Failure to provide the information required by this notice may be an offence.  `,
          
          fontSize: 10,
          margin:[80,0,0,0]
        },
        '\n',
        
        {
          text: `1.  Are you a registrable controller of `,
          style: 'textSize',
          bold: false,
          margin:[80,0,0,0],
          fontSize: 10,
        },
        {
          text: `${
            companycontactDetails.company_name ? companycontactDetails.company_name : ''
          }?`,
          style: 'textSize',
          bold: true,
          color:'blue',
          margin:[250,-12,0,0],
          fontSize: 10,
        },
        {
          text: ` Your reply: Yes / No*`,
          style: 'textSize',
          bold: false,
          margin:[80,15,0,0],
          fontSize: 10,
        },
        '\n',
        {
            text: `       *       Delete as appropriate. If your reply is yes and you are an individual, please provide the particulars in sub-paragraph(a). If your reply is yes and you are a legal entity, please provide the particulars in sub-paragraph (b). `,
            style: 'textSize',
            bold: false,
            margin:[50,-5,0,0],
            fontSize: 10,
          },'\n',
          {
            text: `(a)         If your reply is yes and you are an individual, please provide the following particulars:  `,
            style: 'textSize',
            bold: false,
            margin:[50,0,0,0],
            fontSize: 10,
          },'\n',
       {
          text: `(i)your full name                                         :     ${
            companycontactDetails.first_name
              ? companycontactDetails.first_name
              : ''
          } `,
          style: 'textSize',
          margin:[100,-5,0,0],
          fontSize: 9.5,
        },
        '\n',
        {
          text: `(ii)your aliases, if any	                             :    ${
            companycontactDetails.change_date ? companycontactDetails.change_date : ''
          }\n`,
          style: 'textSize',
          fontSize: 9.5,
          margin:[100,-5,0,0],
          bold: false,
        }, '\n',
        
        {
          text: `(iii)your residential address                      :     ${
            companycontactDetails.address_flat
              ? companycontactDetails.address_flat
              : ''
          } ${
            companycontactDetails.address_street
              ? companycontactDetails.address_street
              : ''
          } ${
            companycontactDetails.address_country
              ? companycontactDetails.address_country
              : ''
          }- ${
            companycontactDetails.address_po_code
              ? companycontactDetails.address_po_code
              : ''
          }`,
          style: 'textSize',
          margin:[100,-5,0,0],
          fontSize: 9.5,
        },
        '\n',
        {
            text: `(iv)your nationality                                      :     `,
            style: 'textSize',
            margin:[100,-5,0,0],
            fontSize: 9.5,
          },
          '\n',
          {
            text: `(v)your identity card number or 
                     passport number                                        :     ${
              companycontactDetails.id_card_no
                ? companycontactDetails.id_card_no
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },
          '\n',
          {
            text: `(vi)your date of birth                                   :    ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },
          '\n',
          {
            text: `(vii)the date on which you became an individual		
         			controller of ${
                companycontactDetails.company_name
                  ? companycontactDetails.company_name
                  : ''
              }.              :     `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },
          '\n',
          {
            text: `(b)	     If your reply is yes and you are a legal entity, please provide the following particulars:     ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[50,0,0,0]
            
          },
          '\n',
{
            text: `(i)your name : …………………………………………………………………………     ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          
          {
            text: `(ii)your unique entity number issued by the Registrar, if any : ………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(iii)the address of your registered office : ……………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(iv)your legal form : …………………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(v)the jurisdiction where, and statute under which, you are formed or incorporated: ………………………………………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(vi)the name of the corporate entity register of the jurisdiction in which you are formed or incorporated, if applicable: …………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(vii)the identification number or registration number on the corporate entity register of the jurisdiction where you are formed or incorporated, if applicable:………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `(viii)the date on which you became a corporate controller of ${
              companycontactDetails.company_name
                ? companycontactDetails.company_name
                : ''
            } :……………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `2.        Do you know or have reasonable grounds to believe that any other person is a registrable controller of ${
              companycontactDetails.company_name
                ? companycontactDetails.company_name
                : ''
            }. or is likely to have that knowledge?      `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,0,0,0]
          },'\n',
          {
            text: `Your reply: Yes / No*`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `*	        Delete as appropriate. If your reply is yes and the person is an individual, please provide the particulars in sub-paragraph (a). If your reply is yes and the person is a legal entity, please provide the particulars in sub-paragraph (b).`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[50,-5,0,0],
            
          },'\n',
          {
            text: `(a)          If your reply is yes and the person is an individual, please provide the following 	particulars to the best of your knowledge:       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[50,0,0,0],
            
          },'\n',
          {
            text: `(i) the person's full name: ……………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(ii)the person's aliases, if any: …………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(iii)the person's residential address: …………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(iv)the person's nationality: …………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(v)the person's identity card number or passport number : ……………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(vi)the person's date of birth : …………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(vii)the date on which the person became an individual controller of ${
              companycontactDetails.company_name
                ? companycontactDetails.company_name
                : ''
            }: ………………………………………………………      `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(b)	      If your reply is yes and the person is a legal entity, please provide the following particulars to the best of your knowledge:       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }\n`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[50,0,0,0],
            
          },'\n',
          {
            text: `(i)the person's name: …………………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(ii)the person's unique entity number issued by the Registrar, if any: …..……………      ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(iii)the address of the person's registered office: ……………………………………      ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(iv)the person's legal form: ……………………………………………………………      ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(v)the jurisdiction where, and the statute under which, the person is formed or incorporated: ……………………………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(vi)the name of the corporate entity register of the jurisdiction in which the person is formed or incorporated, if applicable: …………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(vii)the identification number or registration number on the corporate entity register of the jurisdiction where the person is formed or incorporated, if applicable: ..……….       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `(viii)the date on which the person became a corporate controller of ${
              companycontactDetails.company_name
                ? companycontactDetails.company_name
                : ''
            } : ………………………………………………………       ${
              companycontactDetails.current_address_flat
                ? companycontactDetails.current_address_flat
                : ''
            }`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0],
          },'\n',
          {
            text: `In this notice —       
            
            “controller”, “corporate controller”, “individual controller” and “legal entity” have the	meanings given to them in section 386AB of the Companies Act;
            
            “identity card” has the meaning given to it in section 2(1) of the National Registration	Act (Cap. 201);
            
            “registrable” has the meaning given to it in section 386AC of the Companies Act.`,
            style: 'textSize',
            fontSize: 9.5,
            margin:[100,-5,0,0]
          },'\n',
          {
            text: `Yours Sincerely,       `,
            style: 'textSize',
            fontSize: 9.5,
            margin:[50,0,0,0]
          },'\n\n',
          

        {
          text: `${
            companycontactDetails.first_name ? companycontactDetails.first_name : ''
          }\n (${companycontactDetails.id_card_no ? companycontactDetails.id_card_no : ''} )
          Secretary*`,
          style: 'textSize',
          fontSize: 9.5,
          margin: [50, -10, 0, 0],
        },'\n',
        {
          text: `*	  Delete as appropriate      `,
          style: 'textSize',
          fontSize: 9.5,
          margin:[50,0,0,0]
        },'\n\n',
      { columns:[ {
          text: `${
            companycontactDetails.company_name ? companycontactDetails.company_name : ''
          }\n `,
          style: 'textSize',
          fontSize: 9.5,
          margin: [50, -10, 0, 0],
        },'\n',
        {
          canvas: [{ type: 'line', x1: 105, y1: 0, x2: 0, y2: 0, lineWidth: 0 }],
          margin: [-70, 25, 0, 0],
        },
       ]
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
  <Button type="submit" className="shadow-none"
                color="primary" onClick={GetPdf}>
        Contract
      </Button>
   </>
  );
};

export default PdfClientContract;
