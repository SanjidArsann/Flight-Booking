import React, { useState } from "react";
import "./Booking.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../Redux/Action";
import Book from "./Book";
// Option Values
const locationOptions = ["Dhaka", "Sylhet", "Sajek", "Saint-maritn"];
const guestOptions = [1, 2, 3, 4];
const classOptions = ["Business", "Economy"];

const BookingForm = () => {
  //initial from state

  const [bookingValues, setBookingValues] = useState({
    from: locationOptions[0] || "",
    to: locationOptions[1] || "",
    date: "",
    guests: guestOptions[0] || 1,
    ticketclassName: classOptions[0] || "",
  });

  const bookings = useSelector((state) => state.bookings);

  const dispatch = useDispatch();

  //Reset values
  const resetForm = () => {
    setBookingValues({
      from: locationOptions[0] || "",
      to: locationOptions[1] || "",
      date: "",
      guests: guestOptions[0] || 1,
      ticketclassName: classOptions[0] || "",
    });
  };

  //Handle input change

  const handleInputChange = (e) => {
    setBookingValues({ ...bookingValues, [e.target.name]: e.target.value });
  };

  //Handle Submit Form

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(bookingValues));
    resetForm();
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="logo">
            <img
              src="./img/favicon.png"
              alt="logo"
              className="logo  w-6 h-10"
            />
          </div>
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            {/* <!-- From --> */}
            <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    value={bookingValues.from}
                    onChange={handleInputChange}
                    id="lws-from"
                    required
                  >
                    {locationOptions.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    onChange={handleInputChange}
                    value={bookingValues.to}
                    id="lws-to"
                    required
                  >
                    {locationOptions.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  value={bookingValues.date}
                  onChange={handleInputChange}
                  id="lws-date"
                  required
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    value={bookingValues.guests}
                    onChange={handleInputChange}
                    id="lws-guests"
                    required
                  >
                    {guestOptions.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* <!-- className --> */}
              <div className="des-from !border-r-0">
                <p>className</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketclassName"
                    onChange={handleInputChange}
                    value={bookingValues.ticketclassName}
                    id="lws-ticketclassName"
                    required
                  >
                    {classOptions.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <button
                className="addCity disabled:pointer-events-none"
                type="submit"
                id="lws-addCity"
                // disabled={bookings.length > 2 ? true:false}
                
              >
                {/* {
                  bookings.length >3 ? alert('Last one! you cannot book more then 3'):''
                } */}
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/*<----Booking list---->*/}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">className</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {/* <!-- Row 1 --> */}
              {bookings &&
                bookings?.map((book) => {
                  return <Book 
                  key={book.id}
                  book={book}
                  />;
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
