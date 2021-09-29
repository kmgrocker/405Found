import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
Business,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/usermap" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Density Tracker
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employee Data
              </li>
          </Link>
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
           
            <Link to="/CafeteriaSeatBook" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Cafeteria Seat Booking
              </li>
            </Link>
            
            <Link to="/FaceMaskDetector" className="link">
             <li className="sidebarListItem">
              <img className="maskIcon" src="https://thumbs.dreamstime.com/b/corona-virus-covid-color-icons-vector-icon-design-very-nice-modern-unique-you-can-easily-use-face-mask-man-heart-187659776.jpg"/>
              Face Mask Detector
            </li> 
            </Link>
            
              <Link to="/WorkSpaceSeatBook" className="link">
              <li className="sidebarListItem">
                <Business className="sidebarIcon" />
                WorkSpace Seat Booking
              </li>
              
            </Link>
            
            
            {/* <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
              </div>
    </div>
  );
}
