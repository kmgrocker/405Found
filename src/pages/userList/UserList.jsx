import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
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
  const [data, setData] = useState(userRows);
console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          
          <div className="userListUser">
            <img className="userListImg" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
            {params.row.username}
            
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Token",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
