import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function getCurrentDate () {
    var curr = new Date();
    curr.setDate(curr.getDate());   
    return curr.toLocaleDateString("en-GB").substr(0,10);
}

export function getFormattedDate (date) {
    var curr = new Date(date);
    curr.setDate(curr.getDate());   
    return curr.toLocaleDateString("en-GB").substr(0,10);
}

function getCurrentISODate () {
    var curr = new Date();
    curr.setDate(curr.getDate());   
    return curr.toISOString().substr(0,10);
}

export const dateNow = getCurrentDate();

export const dateNowISO = getCurrentISODate();


export const COLORS = ['#0088FE', '#9EC1CF','#9EE09E','#00C49F', '#B19CD9', '#FFBB28','#FF8042','#FF6663'];

export const COLOR_MAP = new Map([
    ["NIP_INFLOW_NOT_REPORTED", "#0088FE"],
    ["NIP_INFLOW_REPORTED","#9EC1CF"],
    ["CASH_DEPOSIT_NOT_REPORTED","#9EE09E"],
    ["CASH_DEPOSIT_REPORTED","#00C49F"],
    ["LOAN_NOT_REPORTED","#B19CD9"],
    ["LOAN_REPORTED","#FFBB28"],
    ["CASH_WITHDRAWAL_NOT_REPORTED","#FF8042"],
    ["CASH_WITHDRAWAL_REPORTED","#FF6663"]
]);

export function exportToPDF() {

    const input = document.getElementById('app');
    const timeStamp = new Date().getTime();
    html2canvas(input)
    .then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({  
        orientation: "landscape",
        unit: "in",
        format: [14, 8.5]
      });
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save(timeStamp+"_dashboard_download.pdf");  
  });
}