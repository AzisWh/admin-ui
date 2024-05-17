import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Single;
