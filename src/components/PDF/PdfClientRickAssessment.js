import React from 'react';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';

const PdfClientEp200 = () => {
  const GetPdf = () => {
    const dd = {
      pageSize: 'A4',

      content: [
          
        {
          text: 'RISK ASSESSMENT FORM\n ',
          style: 'textSize',
          bold: true,
          alignment: 'center',
          fontSize: 15,
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

            body: [
              [
                
                {
                  text: `Section A – Nature of Services Required by Customer `,
                  alignment: 'center',
                  fontSize: 11,
                  color: 'white',
                },
              ],
            ],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [99, 120, 100, 164],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                
                {
                  text: `Services`,
                  fontSize: 11.5,
                  style: 'tableHeader',
                  listType: 'circle',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                {
                  text: `Select Where applicable`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'center',
                },
                { text: `Details`, fontSize: 10, style: 'tableHeader', alignment: 'center' },
              ],

              [
                
                {
                  text: `1) Forming of corporations or other legal persons `,
                  fontSize: 11,
                  colSpan: 2,
                },
                { text: ``, fontSize: 8 },
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    
                    width:40,
                    margin:[30,-2,0,-15],
                 
                  },
                { text: ``, fontSize: 8 },
              ],
              [
                {
                  text: `2) Acting, or arranging for another person to act as a director or secretary of a corporation`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                fontSize: 11,
                style: 'tableHeader',
                colSpan:1,
                alignment: 'center',
                width:40,
                margin:[30,-2,0,-15],
             
              },
                {},
              ],
              [
                {
                  text: `3) Acting, or arranging for another person to act as a partner of a partnership`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  alignment: 'center',
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `4) Acting, or arranging for another person to act in a position similar to the above in relation to other legal persons	`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  alignment: 'center',
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `5) Acting, or arranging for another person to act as a shareholder on behalf of any corporation other than one whose securities are listed on a securities exchange under section 2(1) or recognised securities exchange under section 283(1) of the Securities and Futures Act	`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  alignment: 'center',
                  width:40,
                  margin:[30,20,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `6) Providing a registered office, business address or correspondence or administrative address or other related services	`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  alignment: 'center',
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `7) Providing other services (e.g. Annual Return filing, etc.)`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  alignment: 'center',
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `Additional Questions`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `1) Which country is the customer's business mostly based in?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
              ],
              [
                {
                  text: `2) What is the type of business activity for the customer's business?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                {image:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan:1,
                  
                  width:40,
                  margin:[30,-2,0,-15],
               
                },
                {},
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
            // vLineStyle: function () { return {dash: { length: 11.5, space: 4 }}; },
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

            body: [
              [
                {
                  text: `Section B - Risk Assessment of Customer `,
                  alignment: 'left',
                  fontSize: 10,
                  color: 'white',
                },
              ],
            ],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [100, 120, 100, 163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: `Question`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                {
                  text: `Yes`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'center',
                },
                { text: `No`, fontSize: 11, style: 'tableHeade', alignment: 'center' },
              ],

              [
                {
                  text: `1) Is this an existing customer? `,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,0],
                 
                  },
                 { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,0],
                 
                  },
              ],
              [
                {
                  text: `2) Acting, or arranging for another person to act as a director or secretary of a corporation`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,0],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,0],
                   
                    },
              ],
            ],
          },
        },
        '\n\n\n\n\n\n\n\n\n',
        {
          text: `If “No” has been selected for the 2 questions above, the we adopt a risk-sensitive approach and consider whether to perform enhanced CDD measures before establishing a business relationship with the customer.\n`,
          style: 'textSize',
          fontSize: 11,
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
            widths: [100, 120, 100, 163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: `Question`,
                  fontSize: 10.5,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                {
                  text: `Yes`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'center',
                },
                { text: `No`, fontSize: 10, style: 'tableHeader', alignment: 'center' },
              ],

              [
                {
                  text: `1) Is the customer a legal person or an entity that that can hold assets in its own name? `,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[30,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[30,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `2) Does the customer use nominee director(s) or shareholder(s)?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `3) Does the ownership structure of the customer appear unusual or excessively complex given the nature of its business?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `4) Is the customer's business cash-intensive?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `5) Does the customer frequently make unaccounted cash transactions to similar recipient(s)?	`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `6) Does the proposed directors/partners/shareholders have prior criminal convictions involving fraud or dishonesty?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `7) Is any of the customer, beneficial owner or its agent a politically exposed person?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `8) Are the customer's company accounts updated?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `9) Does the customer's shareholders and/or directors frequently change, and the changes are unaccounted for?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `10) Is there any problem obtaining evidence of identification from the customer for both the customer and beneficiary owner(s); and/or is the documentation found to be unsatisfactory?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `11) Is the customer a charitable or non-profit organisation that is not registered in Singapore (charities.gov.sg/charity/index.do)?`,
                  fontSize: 11,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
            ],
          },
        },
        '\n',
        {
          text: `
             If “Yes” has been selected for a majority of the 10.5 questions above, the we adopt a risk-sensitive approach and consider whether to perform enhanced CDD measures before establishing a business relationship with the customer.\n`,
          style: 'textSize',
          fontSize: 10,
        },
        '\n',

        {
          text: `B2 Country/Territory Risk Factors`,
          style: 'textSize',
          fontSize: 10,
        },
        '\n',
        {
          text: `Consider the following factors (if applicable): Customer's nationality, Place of formation/incorporation, Residential address, Permanent address, Place of operation, Place where business is established; etc.\n`,
          style: 'textSize',
          fontSize: 10,
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
            widths: [100, 120, 100, 163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: `Question`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                {
                  text: `Yes`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'center',
                },
                { text: `No`, fontSize: 10, style: 'tableHeader', alignment: 'center' },
              ],

              [
                {
                  text: `1) Is the customer connected to or transacting with a country or a territory that is identified as not having adequate anti-money laundering or counter financing terrorism measures? `,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
              ],
              [
                {
                  text: `2) Is the customer connected to or transacting with a country or a territory that is identified to having significant levels of corruption or other criminal activity?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `3) Is the customer connected to or transacting with a country or a territory that is sanctioned by a regulatory body, such as the United Nations (UN)?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `4) Is the customer connected to or transacting with a country or a territory that is identified to be funding or supporting terrorist activities or that have designated terrorist organisations operating within their territories?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
            ],
          },
        },
        '\n',

        {
          text: `
             If “Yes” has been selected for the questions above, we adopt a risk-sensitive approach and consider whether to perform enhanced CDD measures before establishing a business relationship with the customer.\n`,
          style: 'textSize',
          fontSize: 10,
        },
        '\n',

        {
          text: `B3 Services/ Transactions Risk Factors`,
          style: 'textSize',
          fontSize: 10,
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
            widths: ['101%'],

            body: [[]],
          },
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [100, 120, 100, 163],
            headerRows: 3,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: `Question`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                {
                  text: `Yes`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 1,
                  alignment: 'center',
                },
                { text: `No`, fontSize: 10, style: 'tableHeader', alignment: 'center' },
              ],

              [
                {
                  text: `1) Has the customer given any instruction to perform a transaction (which may include cash) anonymously? `,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `2) Has the customer transferred any funds without the provision of underlying services or transactions?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `3) Are there unusual patterns of transactions that have no apparent economic purpose or cash payments that are large in amount, in which disbursement would have been normally made by other modes of payment (such as cheque, bank drafts etc.)?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `4) Are there unaccounted payments received from unknown or unassociated third parties for services and/or transactions provided by the customer?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `5) Is there instruction from the customer to incorporate shell companies with nominee shareholder(s) and/or director(s)?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `6) Does the customer purchase companies or business entities that have no obvious commercial purpose?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,-2,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,-2,0,-15],
                   
                    },
              ],
              [
                {
                  text: `7) Are there business relationships that were established, or transactions performed without any physical meeting?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,0,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,0,0,-15],
                   
                    },
              ],
              [
                {  
          
        
        
                  text: `8) Is there any divergence in the type, volume or frequency of services and/or transactions expected in the course of the business relationship with the customer?`,
                  fontSize: 10,
                  style: 'tableHeader',
                  colSpan: 2,
                  alignment: 'left',
                },
                {},
                { 
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                    fontSize: 11,
                    style: 'tableHeader',
                    colSpan:1,
                    alignment:'center',
                    width:40,
                    margin:[25,0,0,-15],
                 
                  },
                  { 
                    image:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX////g4OACVBJKAAAAfElEQVR4nO3PMQEAIAzAMPBvGg07gB6JgnYtAAAAAAAAAAAAAAAAAAAAAAAAAJ7aU7+Dxxw67HPosM+hwz6HDvscOuxz6LDPocM+hw77HDrsc+iwz6HDPocO+xw67HPosM+hwz6HDgEAAAAAAAAAAAAAAAAAAAAAAAC47AB37wliAOIiCgAAAABJRU5ErkJggg==',
                      fontSize: 11,
                      style: 'tableHeader',
                      colSpan:1,
                      alignment:'center',
                      width:40,
                      margin:[25,0,0,-15],
                   
                    },
              ],
            ],
          },
        },
        '\n\n',
        { text: `If “Yes” has been selected for a majority of the 8 questions above, the we adopt a risk-sensitive approach and consider whether to perform enhanced CDD measures before
        establishing a business relationship with the customer.`, fontSize: 10, style: 'tableHeader',  alignment: 'left' },
        { text: `Customer Risk Rating`, fontSize: 10, style: 'tableHeader', bold: 'true', alignment: 'left' },
        {
        layout: {
          hLineColor: (i) => {
            if (i === 0 || i === 14) {
              return 'black';
            }
            return 'gray';
          },
          vLineColor: (i) => {
            if (i === 0 || i === 7) {
              return 'black';
            }
            return 'gray';
          },
          // hLineColor: (i) => {
          //   if (i === 0 || i === 14) {
          //     return 'black';
          //   }
          //   return 'gray';
          // },
          // vLineColor: function (i) {
          //   return (i === 0 || i === 1) ? 'black' : 'gray';
          // },
         
          // hLineColor: function (i) {
          //   return (i === 0 || i === 1) ? 'black' : 'gray';
          // }
        },
          style: 'tableExample',
          table: {
                      heights: [13, 13, 13,13,13,13,13,13,13,13,13,13,13,10],
                      widths: [130, 30, 110, 35,70,30,45],
            headerRows: 1,
            body: [
              [{text: 'Low', style: 'tableHeader1'},{ text: '', style: 'tableHeader1' }, {text: 'Medium', style: 'tableHeader1'}, {text: '', style: 'tableHeader1'},{text: 'High', style: 'tableHeader1'},{text: '', style: 'tableHeader1'},{text: '', style: 'tableHeader1'},],
              ['', '', '', '', '','',''],
              ['', '', '', '', '','',''],
              [{text: 'Remarks:', style: 'tableHeader1'},{text: '', style: 'tableHeader1', colSpan: 5, alignment: 'center'}, '', '', '','',''],
              ['', '', '', '', '','',''],
              ['', '', '', '', '','',''],
                [{text: 'Recommendation For Acceptance of Customer11', style: 'tableHeader1', colSpan: 3, alignment: 'Left'}, '', '', '', '','',''],
                ['', '', '', '', '','',''],
                [{text:'Recommended',style: 'tableHeader1'}, '', {text:'Not Recommended',style: 'tableHeader1'}, '', '','',''],
                ['', '', '', '', '','',''],
                [{text: 'Name of Recommending Officer:', style: 'tableHeader1', colSpan: 2, alignment: 'Left'}, '', {
                  fillColor: '#dddddd',
                  text: '',colSpan: 4,
                  style: 'tableHeader1',
                }, '', '','',''],
                [{text:'Date:',style: 'tableHeader1'}, '', {
                  fillColor: '#dddddd',
                  text: '',colSpan: 4,
                  style: 'tableHeader1',
                }, '', '','',''],
                [{text:'Signature',style: 'tableHeader1'}, '', {
                  fillColor: '#dddddd',
                  text: '',colSpan: 4,
                  style: 'tableHeader1',
                }, '', '','',''],
                ['', '', '', '', '','',''],
            ]
          },
        },
        '\n',
        { text: `Approval for Acceptance of Customer`, fontSize: 11, style: 'tableHeader',  alignment: 'left', bold:'true' },
        '\n',
        {
          layout: {
            hLineColor: (i) => {
              if (i === 0 || i === 14) {
                return 'black';
              }
              return 'gray';
            },
            vLineColor: (i) => {
              if (i === 0 || i === 7) {
                return 'black';
              }
              return 'gray';
            },
            // hLineColor: (i) => {
            //   if (i === 0 || i === 14) {
            //     return 'black';
            //   }
            //   return 'gray';
            // },
            // vLineColor: function (i) {
            //   return (i === 0 || i === 1) ? 'black' : 'gray';
            // },
           
            // hLineColor: function (i) {
            //   return (i === 0 || i === 1) ? 'black' : 'gray';
            // }
          },
            style: 'tableExample',
            table: {
                        heights: [13, 13, 13,13,13,13,13,13,13,13,13,13,13,10],
                        widths: [130, 30, 110, 35,70,30,45],
              headerRows: 1,
              body: [
                
                  [{text:'Approved',style: 'tableHeader1',bold:false}, '', {text:'Not Approved',style: 'tableHeader1'}, '', '','',''],
                  ['', '', '', '', '','',''],
                  [{text: 'Name of Recommending Officer:', style: 'tableHeader1', colSpan: 2, alignment: 'Left'}, '', {
                    fillColor: '#dddddd',
                    text: '',colSpan: 4,
                    style: 'tableHeader1',
                  }, '', '','',''],
                  [{text:'Date:',style: 'tableHeader1'}, '', {
                    fillColor: '#dddddd',
                    text: '',colSpan: 4,
                    style: 'tableHeader1',
                  }, '', '','',''],
                  [{text:'Signature',style: 'tableHeader1'}, '', {
                    fillColor: '#dddddd',
                    text: '',colSpan: 4,
                    style: 'tableHeader1',
                  }, '', '','',''],
                  ['', '', '', '', '','',''],
              ]
            },
          },
          '\n',
          { text: `Please note that separation of duties is a good practice with regard to having separate persons conducting
          risk assessments of clients and approving the acceptance of the clients`, fontSize: 9, style: 'tableHeader',  alignment: 'left', bold:'true' },
          '\n',
          // layout: {
          //   hLineWidth: function (i, node) {
          //     return (i === 0 || i === node.table.body.length) ? 2 : 1;
          //   },
          //   vLineWidth: function (i, node) {
          //     return (i === 0 || i === node.table.widths.length) ? 2 : 1;
          //   },
          //   hLineColor: function (i, node) {
          //     return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
          //   },
          //   vLineColor: function (i, node) {
          //     return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
          //   },
            // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            // paddingLeft: function(i, node) { return 4; },
            // paddingRight: function(i, node) { return 4; },
            // paddingTop: function(i, node) { return 2; },
            // paddingBottom: function(i, node) { return 2; },
            // fillColor: function (rowIndex, node, columnIndex) { return null; }
          // }
        
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
        tableHeader1: {
          border: [false, true, false, true],
          
          margin: [0, 5, 0, 5],
          fontSize: 10,
          bold: 'false',
        },
        tableBody: {
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          alignment: 'left',
          fontSize: 10,
        },
        circle: {
          cx: '50',
          cy: '55',
          r: '45',
          fill: 'none',
          stroke: '#F0CE01',
          strokeWidth: '4',
          height: '110',
          width: '500',
        },
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <>
      <Button type="submit" className="btn btn-dark mr-2" onClick={GetPdf}>
        Rick Assessment
      </Button>
    </>
  );
};

export default PdfClientEp200;
