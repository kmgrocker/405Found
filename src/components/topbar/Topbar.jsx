import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar" style={{  background:'#fafafa'}}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" style={{color:'teal'}}>Guardian</span>
        </div>
        <div className="topRight">
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmNZo9wLt4zSz-u9vt4wP2HxNE9_5z5j2YKyOWuMrKyMnfqo9Wagr422Mq6_7c_dfAig&usqp=CAU" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
