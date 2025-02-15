import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import * as moment from 'moment';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).addVirtualFileSystem(pdfFonts);


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  receiptData: any;

  constructor(private service: CommonDataService) {

  }

  ngOnInit() {
    this.receiptData = this.service.getReceiptData();
  }

  downloadFeeReceipt() {
    let documentDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [40, 60, 40, 60],

      footer: {
        columns: [
          { text: 'Right part', alignment: 'right', margin: [40, 0, 40, 0] }
        ]
      },

      content: [
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [100, 300, 100],
            headerRows: 5,  // Ensures all header rows repeat on each page
            body: [
              [
                { text: 'Logo Here', style: 'tableHeader', alignment: 'center', rowSpan: 5 },
                { text: 'receiptData.school.name.toUpperCase()', style: 'tableHeader', alignment: 'center' },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'center', rowSpan: 5 }
              ],
              [
                { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                { text: 'receiptData.school.affiliated', alignment: 'center', italics: true, fontSize: 10 },
                { text: 'Header 3', }
              ],
              [
                { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                { text: 'receiptData.school.applicationNo', alignment: 'center', bold: true },
                { text: 'Header 3', }
              ],
              [
                { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                { text: 'receiptData.school.contact', alignment: 'center' },
                { text: 'Header 3', }
              ],
              [
                { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                { text: 'FEE RECEIPT - receiptData.session', alignment: 'center', fontSize: 15, margin: [20, 20, 20, 0] },
                { text: 'Header 3', }
              ]
            ]
          },
          layout: 'noBorders'  // Optional styling
        },
        {
          canvas: [
            { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: 'black' }
          ],
          margin: [0, 0, 0, 20] // Adjust spacing
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [300, 200],
            body: [
              [
                { text: 'receiptData.school.name.toUpperCase()', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', margin: [0, 5, 0, 5] }
              ],
              [
                { text: 'receiptData.school.name.toUpperCase()', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', margin: [0, 5, 0, 5] }
              ],
              [
                { text: 'receiptData.school.name.toUpperCase()', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader' }
              ],
              [
                { text: 'receiptData.school.name.toUpperCase()', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', margin: [0, 5, 0, 5] }
              ],
              [
                { text: 'receiptData.school.name.toUpperCase()', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', margin: [0, 5, 0, 5] }
              ]
            ]
          }
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [207, 95, 95, 95],
            headerRows: 2,
            body: [
              [
                { text: 'Logo Here', style: 'tableHeader' },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'tttt', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] }
              ],
              [
                { text: 'Logo Here', style: 'tableHeader' },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'tttt', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] }
              ], [
                { text: 'Logo Here', style: 'tableHeader' },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'tttt', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] },
                { text: 'Logo Here', style: 'tableHeader', alignment: 'right', margin: [0, 5, 0, 5] }
              ],

              [
                { text: 'Total in words: Rupees Nineteen Thousand Nine Hundred Ninety Five', colSpan: 4, style: 'tableHeader', alignment: 'center', margin: [0, 5, 0, 5] },
                { text: '', margin: [0, 5, 0, 5] },
                { text: '', margin: [0, 5, 0, 5] },
                { text: '', margin: [0, 5, 0, 5] }
              ]
            ]
          }
        },
        [{ text: 'This is a computer-generated receipt. Hence, it does not require a signature or seal.', italics: true, alignment: 'center', margin: [0, 20, 0, 5] }]
      ],

      styles: {
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },

      defaultStyle: {}
    };

    pdfMake.createPdf(documentDefinition).download('fee_receipt.pdf');
  }


}
