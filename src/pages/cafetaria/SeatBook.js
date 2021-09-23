import React, { Component } from "react";

import SeatPicker from "react-seat-picker";

import './SeatBook.css'


class SeatBook extends Component {
  state = {
    loading: false
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  // addSeatCallbackContinousCase = (
  //   { row, number, id },
  //   addCb,
  //   params,
  //   removeCb
  // ) => {
  //   this.setState(
  //     {
  //       loading: true
  //     },
  //     async () => {
  //       if (removeCb) {
  //         await new Promise(resolve => setTimeout(resolve, 750));
  //         console.log(
  //           `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
  //         );
  //         removeCb(params.row, params.number);
  //       }
  //       await new Promise(resolve => setTimeout(resolve, 750));
  //       console.log(`Added seat ${number}, row ${row}, id ${id}`);
  //       const newTooltip = `tooltip for id-${id} added by callback`;
  //       addCb(row, number, id, newTooltip);
  //       this.setState({ loading: false });
  //     }
  //   );
  // };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you"},
        { id: 2, number: 2, tooltip: "Available" },
        null,
        {
          id: 3,
          number: "3",
          isReserved: true,
          orientation: "east",
          tooltip: "Reserved by Roger"
        },
        { id: 4, number: "4", orientation: "west",isReserved:true ,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 5, number: 5,tooltip:'available' },
        { id: 6, number: 6,isReserved:false,tooltip:'available'  },
        null
      ],
      [
        {
          id: 7,
          number: 1,
          isReserved: true,
          tooltip: "this seat can not be booked because of social distancing norm"
        },
        { id: 8, number: 2, isReserved: true, tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 9, number: "3", isReserved: true, tooltip: "this seat can not be booked because of social distancing norm", orientation: "east"},
        { id: 10, number: "4", orientation: "west" },
        null,
        { id: 11, number: 5,isReserved: true, tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 12, number: 6,tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null
      ],
      [
        { id: 13, number: 1,tooltip:'available',isReserved:false },
        { id: 14, number: 2,isReserved:false,tooltip:'available' },
        null,
        { id: 15, number: 3, isReserved: false, orientation: "east",tooltip:'available' },
        { id: 16, number: "4", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 17, number: 5,isReserved:false,tooltip:'available'},
        { id: 18, number: 6,isReserved:false,tooltip:'available' },null
      ],
      [
        { id: 19, number: 1, 
          tooltip: "this seat can not be booked because of social distancing norm",isReserved: true, },
        { id: 20, number: 2,tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null,
        { id: 21, number: 3, orientation: "east",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true},
        { id: 22, number: "4", orientation: "west",isReserved:true,tooltip:'booked by Dileep'},
        null,
        { id: 23, number: 5,isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 24, number: 6,tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },null
      ],
      [
        { id: 25, number: 1, isReserved: false,tooltip:'available' },
        { id: 26, number: 2, orientation: "east",isReserved:false,tooltip:'available' },
        null,
        { id: 27, number: "3", isReserved: false,tooltip:'available' },
        { id: 28, number: "4", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        null,
        { id: 29, number: 5, tooltip: "Available" },
        { id: 30, number: 6, isReserved: false,tooltip: "available" },null
      ]
    ];
    const { loading } = this.state;
    return (
      <div className='seatWrapper'>
        <h1 style={{textAlign:'center',color:'teal'}}>Cafeteria Seat Arrangement</h1>
        <div style={{ marginTop: "20px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>

        {/* <h1>Seat Picker Continuous Case</h1> */}
        {/* <div style={{ marginTop: "100px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div> */}
      </div>
    );
  }
}

export default SeatBook;


