
function getCurrentDate () {
    var curr = new Date();
    curr.setDate(curr.getDate());
    return curr.toISOString().substr(0,10);
}

export const dateNow = getCurrentDate();
