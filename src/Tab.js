import React from "react";
import data from "./data.json";
import MaterialTable from "material-table";

const Tab = () => {
  const dataTable = data.data;

  //   style
  const tableStyle = {
    boxShadow: "0px 1px 0px #e6e6e6",
    marginTop: "20px",
    marginRight: "20px",
    width: "90vw",
  };

  var arr = [];
  dataTable &&
    dataTable.map((res, i) => {
      arr.push(Object.keys(res));
    });

  // column
  let col = arr[0].map((res) => {
    return {
      title: res.toUpperCase(),
      field: res,
    };
  });
  col.push({ title: "TOTAL", field: "total" });

  // rows
  let dat =
    dataTable &&
    dataTable.map((res) => {
      return {
        id: res.id,
        name: res.name,
        s1: res.s1,
        s2: res.s2,
        total: parseInt(res.s1) + parseInt(res.s2),
      };
    });

  return (
    <MaterialTable
      style={tableStyle}
      title=""
      columns={col}
      data={dat}
      options={{
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 30, 50, 75, 100],
        toolbar: false,
        actionsColumnIndex: -1,
        search: false,
        headerStyle: {
          color: "#20065f",
          fontFamily: "Nunito",
          fontSize: "14px",
          fontWeight: 600,
        },
        rowStyle: {
          color: "#393939",
          fontFamily: "Nunito",
          fontSize: "14px",
          fontWeight: 400,
        },
      }}
    />
  );
};

export default Tab;
