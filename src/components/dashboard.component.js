import '../styles/app.css';

import Piechart from './piechart.component';
import BargraphClickable from './bargraph.component';
import EnhancedTable from './table.component'
import FilterBox from './filter.component';
import Legend from './legend.component'

export default function Dashboard() {
  return (
    <div style={{display: "inline", position:"relative"}}>
      <div className="grid-container-triple">
        <div className="grid-item-triple"> 
          <Piechart />
        </div>
        <div className="grid-item-triple">
            <BargraphClickable />
        </div>
        <div className="grid-item-triple">
            <Legend />
        </div>
      </div>
      <div className="grid-container">
          <div className="grid-item">
            <EnhancedTable />
          </div>
          <div className="grid-item">
            <FilterBox />
          </div>
        </div>
      </div>
  );
}