import React, { useEffect, useState } from "react";
import { getList, setItem } from "../Services/List";
import CarT from "./route-pages/CarT";
function ADriver() {
    const [itemInput, setItemInput] = useState("");
    const [list, setList] = useState([]);
     const [show, setShow] = useState(true);

    useEffect(() => {
      let mounted = true;
      getList().then((items) => {
        if (mounted) {
          setList(items);
        }
      });
      return () => (mounted = false);
    }, []);
     const handleSubmit = (e) => {
       e.preventDefault();
       setItem(itemInput);
       alert("SUCCESFUL")
        setShow(!show)
     };
  return (
    <>
      {show ? (
        <div className="formm shadow-lg">
          <form onSubmit={handleSubmit} className="formm">
            <label className="labell">Select Driver</label>
            <select
              className="inputt"
              placeholder="Car Model"
              type="text"
              name="aDriver"
              onChange={(event) => setItemInput(event.target.value)}
              value={itemInput}
            >
              <option value="Emmanuel">Emmanuel</option>
              <option value="Jacob">Jacob</option>
              <option value="Maduka">Maduka</option>
              <option value="Zaazu">ZAZUU</option>
            </select>
            <button className="btnnn" type="submit" value="Submit">
              Assign Driver
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ADriver;
