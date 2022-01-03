import React, { useEffect, useState } from "react";
import { getList } from "../../Services/List";
import { useTranslation } from "react-i18next";
const Noti1 = () => {
    const [list, setList] = useState([]);
  const {t} = useTranslation()
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
      <h1>{t("Notice")}</h1>
      <ul>
        {list.map((item) => (
          <li key={item.item} className="alertLi">
            {item.item} {t("assignMsg")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noti1;
