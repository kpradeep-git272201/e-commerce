import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import * as moment from 'moment';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).addVirtualFileSystem(pdfFonts);


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    standalone: false
})
export class TestComponent {
  receiptData: any;

  constructor(private service: CommonDataService) {

  }

  ngOnInit() {
    this.receiptData = this.service.getReceiptData();
  }

  downloadFeeReceipt() {
    let feeBody=[];
  
    feeBody.push([
      { text: 'Name', bold: true, margin: [0, 3, 0, 3] , fontSize: 12},
      { text: 'Amount', alignment: 'right', margin: [0, 3, 0, 3], fontSize: 12 },
      { text: 'Fine', bold: true, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 12 },
      { text: 'Total', bold: true, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 12}
    ]);
    for(let item of this.receiptData.fees){
      const feeRow=[];
      feeRow.push(
        { text: item.name, bold: true, margin: [0, 3, 0, 3], fontSize: 10},
        { text: item.amount, alignment: 'right', margin: [0, 3, 0, 3] , fontSize: 10},
        { text: item.fine, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 10 },
        { text: item.amount + item.fine, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 10 }
      )
      feeBody.push(feeRow);
    }
    feeBody.push([
      { text: 'Total', bold: true, margin: [0, 3, 0, 3] , fontSize: 10},
      { text: `₹${this.receiptData.total.amount}`, bold: true, alignment: 'right', margin: [0, 3, 0, 3] , fontSize: 10},
      { text: `₹${this.receiptData.total.fine}`, bold: true, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 10 },
      { text: `₹${this.receiptData.total.grandTotal}`, bold: true, alignment: 'right', margin: [0, 3, 0, 3], fontSize: 10 }
    ]);

    feeBody.push([
      {text: [{text: 'Total in words: '}, {text: 'Rupees Nineteen Thousand Nine Hundred Ninety Five', bold:true}], alignment: 'center', margin: [0, 3, 0, 3], colSpan:4, fontSize: 10},
      {text: ''},
      {text: '',margin: [0, 3, 0, 3]}, 
      {text: '', margin: [0, 3, 0, 3]}
    ]);

    let documentDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [40, 60, 40, 60],

      footer: {
        columns: [
          { text: moment().format("DD-MMM-YYYY"), alignment: 'right', fontSie: 10, margin: [40, 0, 40, 0] }
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
                { svg: '<svg width="50" height="50"><rect width="50" height="50" fill="black"/><text x="25" y="30" font-size="10" fill="white" font-family="Arial" text-anchor="middle">LOGO</text></svg>', alignment: 'center', rowSpan: 5 },
                { text: this.receiptData.school.name.toUpperCase(), style: 'tableHeader', alignment: 'center' },
                { svg: '<svg width="50" height="50"><rect width="50" height="50" fill="black"/><text x="25" y="30" font-size="10" fill="white" font-family="Arial" text-anchor="middle">LOGO</text></svg>', alignment: 'center', rowSpan: 5 }
              ],
              [
                { text: '', alignment: 'center' },
                { text: this.receiptData.school.affiliated, alignment: 'center', italics: true, fontSize: 10 },
                { text: '', }
              ],
              [
                { text: '', alignment: 'center' },
                { text: this.receiptData.school.applicationNo, alignment: 'center', bold: true },
                { text: '', }
              ],
              [
                { text: '', alignment: 'center' },
                { text: this.receiptData.school.address, alignment: 'center' },
                { text: '', }
              ],
              [
                { text: '', alignment: 'center' },
                { text:  `TEL : ${this.receiptData.school.contact}`, alignment: 'center' },
                { text: '', }
              ],
              [
                { text: '',alignment: 'center' },
                { text: `FEE RECEIPT - ${this.receiptData.session}`, alignment: 'center', fontSize: 15, margin: [20, 20, 20, 0] },
                { text: '' }
              ]
            ]
          },
          layout: 'noBorders'  // Optional styling
        },
        {
          canvas: [
            { type: 'line', x1: 0, y1: 0, x2: 519, y2: 0, lineWidth: 2, lineColor: 'black' }
          ],
          margin: [0, 0, 0, 0] // Adjust spacing
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [300, 200],
            body: [
              [
                { text: [{text: 'Name : ', bold: true}, {text: this.receiptData.student.name}], margin: [0, 3, 0, 3] },
                { text: [{text: 'Mode : ', bold: true}, {text: this.receiptData.receipt.mode }], margin: [0, 3, 0, 3] }
              ],
              [
                { text: [{text: 'Father Name : ', bold: true}, {text: this.receiptData.student.fatherName}], margin: [0, 3, 0, 3] },
                { text: [{text: 'Bank : ', bold: true}, {text: 'Bank'}], margin: [0, 3, 0, 3] }
              ],
              [
                { text: [{text: 'Class : ', bold: true}, {text: this.receiptData.student.class}], margin: [0, 3, 0, 3] },
                { text: [{text: 'Txn# : ', bold: true}, {text: this.receiptData.receipt.transactionId}], margin: [0, 3, 0, 3] }
              ],
              [
                { text: [{text: 'Admn. No. : ', bold: true}, {text: this.receiptData.student.admissionNo}], margin: [0, 3, 0, 3] },
                { text: {}, margin: [0, 3, 0, 3] }
              ],
              [
                { text: [{text: 'Receipt No.  : ', bold: true}, {text: this.receiptData.receipt.receiptNo}], margin: [0, 3, 0, 3] },
                { text: [{text: 'Date : ', bold: true}, {text: this.receiptData.receipt.date}], margin: [0, 3, 0, 3] }
              ]
            ]
          },
          layout: 'noBorders'
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [207, 95, 95, 95],
            headerRows: 2,
            body: feeBody
          }
        },
        [{ text: 'This is a computer-generated receipt. Hence, it does not require a signature or seal.', italics: true, alignment: 'center', margin: [0, 20, 0, 5], fontSize: 10 }]
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
