import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link,useParams} from "react-router-dom";
import "./user.css";
import {React,useState,useEffect} from 'react';
// import { userRows } from "../../dummyData";

import { QRCode } from 'react-qr-svg';
const userRows = [
    {
      id: 1,
      username: "Sakshi sharma",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Sakshi@gmail.com",
      status: "active",
      transaction: "500",
      address:'Meerut,India',
      phone:'5643567890',
    },
    {
      id: 2,
      username: "Dileep Kumar",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Dileep@gmail.com",
      status: "active",
      transaction: "200",
      address:'NewCity,UK',
      phone:'7653567890',
    },
    {
      id: 3,
      username: "Sudhir Chauhan",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Sudhir@gmail.com",
      status: "active",
      transaction: "320",
      address:'NewCity,UK',
      phone:'7500567890',
    },
    {
      id: 4,
      username: "Omkar verma",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Omkar@gmail.com",
      status: "active",
      transaction: "786",
      address:'Goa,India',
      phone:'1234567890',
    },
    {
      id: 5,
      username: "Chad Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "380",
      address:'Hapur,India',
      phone:'7861567890',
    },
    {
      id: 6,
      username: "Chip Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "470",
      address:'Chennai,India',
      phone:'9714567890',
    },
    {
      id: 7,
      username: "Saun Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Saun@gmail.com",
      status: "active",
      transaction: "560",
      address:'Gurgaon,India',
      phone:'12345454890',
    },
    {
      id: 8,
      username: "Emily Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Emily@gmail.com",
      status: "active",
      transaction: "350",
      address:'NewCity,UK',
      phone:'1234567890',
    },
    {
      id: 9,
      username: "Gilbert Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Gilbert@gmail.com",
      status: "active",
      transaction: "430",
      address:'Delhi,India',
      phone:'1234567890',
    },
    {
      id: 10,
      username: "zayn Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "zayn@gmail.com",
      status: "active",
      transaction: "456",
      address:'NewCity,UK',
      phone:'1234567890',
    },
  ];
const styles = {

  qrcode: {
    textAlign: 'center',
    position: 'relative',
       border: '10px solid transparent',
  },
 
};




export default function User() {
const [showData, setShowData]=useState({"username":null, "email":null, "address":null,"phone":null});
  const {userId} = useParams()
  console.log('***',userId);
  const findByuserById = (id)=>{
let user = userRows.filter(user=>user.id==id);
return user;

}
   useEffect(()=>{
     console.log('userid',userId);
     const data=findByuserById(userId)
     console.log('data',data);
     setShowData({"username":data[0].username, "email":data[0].email,"address":data[0].address,"phone":data[0].phone})
     
     
   },[])
     console.log('showData',showData.username);
  return (
    
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{showData.username}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{showData.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{showData.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{showData.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{showData.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
             
                <label>Username</label>
                <input
                  type="text"
                  placeholder={`${showData.username}`}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={`${showData.username}`}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={`${showData.email}`}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={`${showData.phone}`}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={`${showData.address}`}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
               </div>
            
       <button className="userUpdateButton">Update</button>
          <QRCode
            level="Q"
            style={{ width: 156, height:156 }}
            value={JSON.stringify({
              EmployeeId: 928328,
              Name: `${showData.username}`,
             
            })}
          />
       
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
