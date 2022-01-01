import React, { useEffect, useState } from "react";
import { getList } from "../../Services/List";
const Noti1 = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
      let mounted = true;
      getList().then((items) => {
        if (mounted) {
          setList(items);
        }
      });
      return () => (mounted = false);
    }, []);
  return (
    <div className="wrapper">
      <h1>Notice!!</h1>
      <ul>
        {list.map((item) => (
          <li key={item.item} className="alertLi">{item.item} Is Assinged a new car</li>
        ))}
      </ul>
    </div>
  );
};

export default Noti1;
