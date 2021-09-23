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
        const newTooltip = `tooltip for id-${id} added by Jane`;
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
        { id: 1, number: 'A1', isSelected: false, tooltip: "Reserved by you"},
        { id: 2, number: 'A2', tooltip: "Available" },
        null,
        {
          id: 3,
          number: "B1",
          isReserved: true,
          orientation: "east",
          tooltip: "Reserved by Roger"
        },
        { id: 4, number: "B2", orientation: "west",isReserved:true ,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 5, number: "C1",tooltip:'available' },
        { id: 6, number: "C2",isReserved:false,tooltip:'available'  },
        null
      ],
      [
        {
          id: 7,
          number: "A3",
          isReserved: true,
          tooltip: "this seat can not be booked because of social distancing norm"
        },
        { id: 8, number: "A4", isReserved: true, tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 9, number: "B3", isReserved: true, tooltip: "this seat can not be booked because of social distancing norm", orientation: "east"},
        { id: 10, number: "B4", orientation: "west" },
        null,
        { id: 11, number: "C3",isReserved: true, tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 12, number: "C4",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null
      ],
      [
        { id: 13, number: "A5",tooltip:'available',isReserved:false },
        { id: 14, number: "A6",isReserved:false,tooltip:'available' },
        null,
        { id: 15, number: "B5", isReserved: false, orientation: "east",tooltip:'available' },
        { id: 16, number: "B6", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 17, number: "C5",isReserved:false,tooltip:'available'},
        { id: 18, number: "C6",isReserved:false,tooltip:'available' },null
      ],
      [
        { id: 19, number: "A7", 
          tooltip: "this seat can not be booked because of social distancing norm",isReserved: true, },
        { id: 20, number: "A8",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null,
        { id: 21, number: "B7", orientation: "east",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true},
        { id: 22, number: "B8", orientation: "west",isReserved:true,tooltip:'booked by Dileep'},
        null,
        { id: 23, number: "C7",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 24, number: "C8",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },null
      ],
      [
        { id: 25, number: "A9", isReserved: false,tooltip:'available' },
        { id: 26, number: "A10", orientation: "east",isReserved:false,tooltip:'available' },
        null,
        { id: 27, number: "B9", isReserved: false,tooltip:'available' },
        { id: 28, number: "B10", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        null,
        { id: 29, number: "C9", tooltip: "Available" },
        { id: 30, number: "C10", isReserved: false,tooltip: "available" },null
      ]
    ];
    
    const rows1 = [
      [
        { id: 1, number: 'D1', isSelected: false, tooltip: "Reserved by you"},
        { id: 2, number: 'D2', tooltip: "Available" },
        null,
        {
          id: 3,
          number: "E1",
          isReserved: true,
          orientation: "east",
          tooltip: "Reserved by Roger"
        },
        { id: 4, number: "E2", orientation: "west",isReserved:true ,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 5, number: "F1",tooltip:'available' },
        { id: 6, number: "F2",isReserved:false,tooltip:'available'  },
        null
      ],
      [
        {
          id: 7,
          number: "D3",
          isReserved: true,
          tooltip: "this seat can not be booked because of social distancing norm"
        },
        { id: 8, number: "D4", isReserved: true, tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 9, number: "E3", isReserved: true, tooltip: "this seat can not be booked because of social distancing norm", orientation: "east"},
        { id: 10, number: "E4", orientation: "west" },
        null,
        { id: 11, number: "F3",isReserved: true, tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 12, number: "F4",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null
      ],
      [
        { id: 13, number: "D5",tooltip:'available',isReserved:false },
        { id: 14, number: "D6",isReserved:false,tooltip:'available' },
        null,
        { id: 15, number: "E5", isReserved: false, orientation: "east",tooltip:'available' },
        { id: 16, number: "E6", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm"},
        null,
        { id: 17, number: "F5",isReserved:false,tooltip:'available'},
        { id: 18, number: "F6",isReserved:false,tooltip:'available' },null
      ],
      [
        { id: 19, number: "D7", 
          tooltip: "this seat can not be booked because of social distancing norm",isReserved: true, },
        { id: 20, number: "D8",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },
        null,
        { id: 21, number: "E7", orientation: "east",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true},
        { id: 22, number: "E8", orientation: "west",isReserved:true,tooltip:'booked by Dileep'},
        null,
        { id: 23, number: "F7",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        { id: 24, number: "F8",tooltip: "this seat can not be booked because of social distancing norm",isReserved:true },null
      ],
      [
        { id: 25, number: "D9", isReserved: false,tooltip:'available' },
        { id: 26, number: "D10", orientation: "east",isReserved:false,tooltip:'available' },
        null,
        { id: 27, number: "E9", isReserved: false,tooltip:'available' },
        { id: 28, number: "E10", orientation: "west",isReserved:true,tooltip: "this seat can not be booked because of social distancing norm" },
        null,
        { id: 29, number: "F9", tooltip: "Available" },
        { id: 30, number: "F10", isReserved: false,tooltip: "available" },null
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
            maxReservableSeats={1}
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
            rows={rows1}
            maxReservableSeats={1}
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


