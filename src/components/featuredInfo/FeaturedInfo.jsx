import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
    <div className="featured">

        <div className="featuredItem">
        <span className="featuredTitle">Total Number of Employees</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5000</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span> */}
        </div>
       
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Vaccinated (First Dose)</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1500</span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Completely Vaccinated </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1800</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span> */}
        </div>
       
      </div>
    
      <div className="featuredItem">
        <span className="featuredTitle">Oxygen concentrators</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">300</span>
          
          {/* <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span> */}
        </div>
      
      </div>
    </div>
  );
}
