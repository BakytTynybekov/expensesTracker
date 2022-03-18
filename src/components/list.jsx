import { Box } from "@mui/material";
import { TrackerContext } from "../context/GeneralContext";
import { useContext } from "react";
import "./list.scss";

function Lists() {
  const { expenses } = useContext(TrackerContext);
  console.log(expenses.length);
  return (
    <Box>
      <h3>History</h3>
      {expenses.length > 0 ? (
        expenses.map((item) => {
          let classes = "expenses-list";
          if (+Object.values(item) < 0) {
            classes += " negExp";
          }
          return (
            <div className={classes}>
              <p>{Object.keys(item)}</p>
              <p>${Object.values(item)}</p>
            </div>
          );
        })
      ) : (
        <p className="empty">Empty...</p>
      )}
    </Box>
  );
}

export default Lists;
