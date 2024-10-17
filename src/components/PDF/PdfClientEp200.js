import React from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';



const PdfClientEp200= () => {
  
  const GetPdf = () => {
    const dd = {
      pageSize: 'A4',
     
      content: [
        {
               text: 'CUSTOMER ACCEPTANCE FORM – INDIVIDUAL DIRECTOR / BENEFICIAL OWNER / SECRETARY / SHAREHOLDER\n ',
               style: 'textSize',
               alignment:'center',
               bold:true,
               fontSize:10
             },
             {
               text: 'PART 1 – INFORMATION ABOUT CUSTOMER AND POLITICALLY EXPOSED PERSONS (PEP)\n ',
               style: 'textSize',
               alignment:'center',
               bold:true,
               fontSize:10
             },
             '\n\n',
             
             {
              text: `Section A – Information of customer -PLEASE ENCLOSED YOUR NRIC COPY OR PASSPORT\n\n`  ,
              style: 'textSize',
              bold:true,
              fontSize:10
            }, 
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
                      text: `Individual customers information `,
                      alignment: 'center',
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
                widths: [100, 120, 100,163],
                headerRows: 3,
                // keepWithHeaderRows: 1,
                body: [
                 
                  [{text: `Full name (including any alias) `,fontSize:9 },{text:``,fontSize:8},{text:`NRIC/FIN/Passport number: `,fontSize:9},{text:``,fontSize:8}],
                  [{text:`Residential address`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Date of birth`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Nationality	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Contact number	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Email Address	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Position`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  
                
                
                ]
              }
            },
            
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
                      text: `Proposed / Business entity's information `,
                      alignment: 'center',
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
                widths: [100, 120, 100,163],
                headerRows: 3,
                // keepWithHeaderRows: 1,
                body: [
                 
                  [{text: `Name of entity`,fontSize:9 },{text:``,fontSize:8},{text:`Incorporation/registration number`,fontSize:9},{text:``,fontSize:8}],
                  [{text:`Place of business`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Registered office address Place of registration/ incorporation`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Date of registration/ incorporation		`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Contact number	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Email Address	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`PDescription of business Activity`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  
                
                
                ]
              }
            },
              
           
            {
               text: ' Any further details:  \n\n\n',
               style: 'textSize',
               fontSize:10
             },   
           
         {
               text: 'Section B – Information on Customers Beneficial Owner(s)\n\n',
               style: 'textSize',
               fontSize:10,
               bold:true
             },   
             '\n\n',
            
             
           {
               text: 'Are you the beneficial owner of the company?\n\n',
               style: 'textSize',
               fontSize:10
             },'\n\n',
             {columns:[
              {
                 text:`Yes ☐`,color:'black',fontSize: 10, bold:true, alignment: 'left', margin:[-1,0,0,0] 
              },
             
         {text:`No ☐`,color:'black',fontSize: 10, margin:[-50,0,0,0],bold:true },
         {text:` N/A ☐`,color:'black',fontSize: 10, margin:[-50,0,0,0],bold:true },
            ],
          },  '\n\n\n',
          {columns:[
            {
               text:`If No Kindly state who is the beneficial owner `,color:'black',fontSize: 10, alignment: 'left', margin:[-1,0,0,0] 
            },
           
            {
              canvas: [{ type: 'line', x1: 255, y1: 0, x2: 0, y2: 0, lineWidth: 1 }],
              border: [false, false, false, true],
              margin:[0,0,0,0],
              style: 'tableBody',
            },
          ],
        }, '\n\n\n',
             
             
             
           {
               text: 'Note: If any changes in the beneficial ownership in future, please inform us in writing within 30 days.\n',
               style: 'textSize',
               fontSize:10,
               bold:true
             },'\n\n\n',
             
           {
               text: 'I declare that the information provided in this form is true and correct. I am aware that I may be subject to prosecution and criminal sanctions under written law if I am found to have made any false statement which I know to be false or which I do not believe to be true, or if I have intentionally suppressed any material fact.\n\n',
               style: 'textSize',
               fontSize:10
             },'\n\n\n',

            
     
           {
               text: 'Section C – Information of politically exposed persons, their immediate family members and close associates\n\n',
               style: 'textSize',
               bold:true,
               fontSize:10
             },
             {
              style: 'tableExample',
              color: '#444',
              table: {
                widths: ['*','*'],
                headerRows: 2,
                // keepWithHeaderRows: 1,
                body: [
                 
                  [{text: `Are you a politically exposed person, that is, a person who is or has been entrusted with any prominent public function in Singapore, a country or territory outside Singapore, or by an international organisation at present?
                  Yes ☐	No ☐					
                  Are you a politically exposed person that is, a person who has been entrusted with any prominent public function in Singapore, a country or territory outside Singapore, or by an international organisation who has stepped down from his prominent public function?
                  Yes ☐	No ☐					
                  Are you an immediate family member or a close associate of a politically exposed person or a politically exposed person who
                  has stepped down?						
                  Yes ☐	No ☐					
                  `,fontSize:10,colSpan:2},{}],
                  [{text: `Note 1: If any of the above answer is yes, please proceed to fill in the PEP form in Sec C-1`,fontSize:10,bold:true,colSpan:2 },{}]
                  
                
                
                ]
              }
            },'\n\n',
            {
               text: 'Section C-1 – Information about politically exposed persons, their immediate family members and close associates\n\n',
               style: 'textSize',
               fontSize:10,
               bold:true
             },   
              {
              style: 'tableExample',
              color: '#444',
              table: {
                widths: [100, 120, 100,163],
                headerRows: 3,
                // keepWithHeaderRows: 1,
                body: [
                
                  [{text:`Name of politically exposed person and background/ purpose of any transaction that that registered filing agent is required to carry out`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Describe nature of prominent public function that the person is or has been entrusted with (for example, as a domestic politically exposed person, a foreign politically exposed person, or a politically exposed person of an international organisation).`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Period of time in which the person is/ was a politically exposed person`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of wealth`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of funds in the proposed business relationship`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Name of person who is an immediate family member of a politically exposed person and background/ purpose of any transaction that that registered filing agent is required to carry out`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Describe nature of the person's relationship with the politically exposed person`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of wealth	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of funds  in the proposed business relationship`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Name of person who is a close associate of a politically exposed person and background/ purpose of any transaction that that registered filing agent is required to carry out`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Describe nature of the person's relationship with the politically exposed person`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of wealth	`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Provide information on the person's source of funds in the proposed business relationship`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Please attach all relevant supporting documents on screening and searches performed for politically exposed persons, their immediate family members and close associates:                                                                    - Google searches                                                                                  - Google searches`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                
                  
                
                
                ]
              }
            },'\n\n\n\n',
          
             
              {
               text: 'Section D – Customers Declaration \n\n',
               style: 'textSize',
               bold:true,
               fontSize:10
             }, 
             '\n',
           {
               text: 'I declare that the information provided in this form (section - A, B, C and C-1) is true and correct. I am aware that I may be subject to prosecution and criminal sanctions if I am found to have made any false statement which I know to be false or which I do not believe to be true, or if I have intentionally suppressed any material fact. \n\n',
               style: 'textSize',
               fontSize:10,
              
             },
             '\n',
           
             {
              style: 'tableExample',
              color: '#444',
              table: {
                widths: [100, 120, 100,163],
                headerRows: 3,
                // keepWithHeaderRows: 1,
                body: [
                
                  [{text:`Name of customer :`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`NRIC/FIN/Passport number `,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Name of company :`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Registration number :`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Date :`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                  [{text:`Signature :`,fontSize:9, style: 'tableHeader', colSpan: 2, alignment: 'left'}, {}, {text: ``,fontSize:8, style: 'tableHeader', colSpan: 2, alignment: 'left'},{}],
                
                ]
              }
            },'\n',
       
                
 
 
           
   
            
 ],
      margin:[0,50,50,50],
      styles: {
        logo:{
            margin:[-20,20,0,0],
        },
        address:{
          margin:[-10,20,0,0],
        },
        invoice:{
           margin:[0,30,0,10],
           alignment:'right',
        },
        invoiceAdd:{
           alignment:'right',
        },
        textSize: {
           fontSize: 10
        },
        notesTitle: {
       bold: true,
       margin: [0, 50, 0, 3],
     },
       tableHead:{
           border: [false, true, false, true],
           fillColor: '#eaf2f5',
           margin: [0, 5, 0, 5],
           fontSize: 12,
           bold:'true',
     },
       tableBody:{
         border: [false, false, false, true],
           margin: [0, 5, 0, 5],
           alignment: 'left',
           fontSize:10
       }
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <>
      <Button type="submit" className="shadow-none" color="primary" onClick={GetPdf}>
        EP 200
      </Button>
    </>
  );
};

export default PdfClientEp200;
