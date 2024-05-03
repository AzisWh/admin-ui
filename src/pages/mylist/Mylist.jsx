import React from "react";
import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/Chart/Chart";
import MyDatatable from "../../components/mydatatable/MyDatatable";

const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="datatable">
          <MyDatatable title="All Data" />
        </div>
      </div>
    </div>
  );
};

export default Mylist;
