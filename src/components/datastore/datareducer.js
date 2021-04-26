let initialState = {
  data : [{ id: 1, name:'NIP_INFLOW_NOT_REPORTED', value: 1 },
          { id: 2, name:'NIP_INFLOW_REPORTED', value: 1 },
          { id: 3, name:'CASH_DEPOSIT_NOT_REPORTED', value: 1 },
          { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 1 },
          { id: 5, name:'LOAN_NOT_REPORTED', value: 1 },
          { id: 6, name:'LOAN_REPORTED', value: 1 },
          { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 1},
          { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 1}
        ], 
  totalValue : 8,
  colors : ['#0088FE', '#9EC1CF','#9EE09E','#00C49F', '#B19CD9', '#FFBB28','#FF8042','#FF6663']
};

function recalculateTotal (data) {
    let newTotalVal = 0;
    data.forEach((item, idx)=> newTotalVal+=item.value);
    return newTotalVal;
}
 
function spliceColorData (idx, colors) {
    for ( let i=0; i< colors.length - 1; i++) {
        if (colors[i] == initialState.colors[idx]) {
            colors.splice(i,1);
            break;
        } 
    }
    return colors;
}

function spliceArrayData (idx, newData) {
    for ( let i=0; i<= newData.length - 1; i++) {
        if (newData[i].id == idx + 1) {
            newData.splice(i,1);
            break;
        } 
    }
    
    console.log("Result of removing data: ",newData);
    return newData;
}

function addArrayData (idx, newData, newColors) {
    let newColorData = new Set();
    let newSetData = new Set();
    let hasBeenAdded = false;
    for ( let i=0; i<= newData.length - 1; i++) {
        if (newData[i].id <= idx && !hasBeenAdded) {
            newSetData.add(newData[i]);
            newColorData.add(newColors[i])
        } else {
            newSetData.add(initialState.data[idx]);
            newSetData.add(newData[i])
            newColorData.add(initialState.colors[idx]);
            newColorData.add(newColors[i])
            hasBeenAdded = true;
        }
    }
    if (!hasBeenAdded) {
        newSetData.add(initialState.data[idx]);
        newColorData.add(initialState.colors[idx]);
    }
    newData = Array.from(newSetData);
    newColors = Array.from(newColorData);
    console.log("Result of adding data: ",newData, newColors);

    return {
        newData : newData,
        newColors : newColors
    }
}

export function reducer(state=initialState, action) {
  console.log("Action received ", action.type, state);
  let currentData = state.data;
  let newData = [...currentData];
  let currentColors = state.colors;
  let newColors = [...currentColors];
  let newTotal = 0;
    switch (action.type) {

        case "UPDATE_DASHBOARD_DATA" : {
            newTotal = recalculateTotal(action.data.data)
            initialState = {
                data: action.data.data,
                totalValue : newTotal,
                colors : initialState.colors,
                dateFrom : action.data.dateFrom,
                dateTo : action.data.dateTo
            }
            return initialState;  
        }
      case "TOGGLE_CASH_DEPOSIT_NOT_REPORTED_TRUE": {
            const result = addArrayData (2, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            } 
        }
      case "TOGGLE_CASH_DEPOSIT_NOT_REPORTED_FALSE": {
            spliceArrayData(2, newData);
            spliceColorData (2, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }  
      }
      case "TOGGLE_CASH_DEPOSIT_REPORTED_TRUE": {
            const result = addArrayData (3, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_CASH_DEPOSIT_REPORTED_FALSE": {
            newData = spliceArrayData(3, newData);
            newColors = spliceColorData (3, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }
        case "TOGGLE_CASH_WITHDRAWAL_NOT_REPORTED_TRUE": {
            const result = addArrayData (6, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_CASH_WITHDRAWAL_NOT_REPORTED_FALSE": {
            newData = spliceArrayData(6, newData);
            newColors = spliceColorData (6, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }
        case "TOGGLE_CASH_WITHDRAWAL_REPORTED_TRUE": {
            const result = addArrayData (7, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_CASH_WITHDRAWAL_REPORTED_FALSE": {
            newData = spliceArrayData(7, newData);
            newColors = spliceColorData (7, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }
        case "TOGGLE_LOAN_NOT_REPORTED_TRUE": {
            const result = addArrayData (4, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_LOAN_NOT_REPORTED_FALSE": {
            newData = spliceArrayData(4, newData);
            newColors = spliceColorData (4, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }  
        case "TOGGLE_LOAN_REPORTED_TRUE": {
            const result = addArrayData (5, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_LOAN_REPORTED_FALSE": {
            newData = spliceArrayData(5, newData);
            newColors = spliceColorData (5, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }
        case "TOGGLE_NIP_INFLOW_NOT_REPORTED_TRUE": {
            const result = addArrayData (0, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_NIP_INFLOW_NOT_REPORTED_FALSE": {
            newData = spliceArrayData(0, newData);
            newColors = spliceColorData (0, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }
        case "TOGGLE_NIP_INFLOW_REPORTED_TRUE": {
            const result = addArrayData (1, newData, newColors);
            newTotal = recalculateTotal(result.newData)
            return {
                data : result.newData,    
                totalValue : newTotal,
                colors: result.newColors
            }
        }
        case "TOGGLE_NIP_INFLOW_REPORTED_FALSE": {
            newData = spliceArrayData(1, newData);
            newColors = spliceColorData (1, newColors)
            newTotal = recalculateTotal(newData)
            return {
                data : newData,
                totalValue : newTotal,
                colors : newColors
            }   
        }                   
      default :
        return state;
    }
}
