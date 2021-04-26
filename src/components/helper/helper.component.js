function getCurrentDate () {
    var curr = new Date();
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
