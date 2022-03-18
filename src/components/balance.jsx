import { Box, Grid } from "@mui/material";
import { useState, useContext } from "react";
import { TrackerContext } from "../context/GeneralContext";
import "./balance.scss";

function Balance() {
  const { expenses } = useContext(TrackerContext);
  console.log(expenses);

  const expenseAmount = expenses.map((expense) => {
    return Object.values(expense);
  });
  expenseAmount.flat();
  const negativeAmount = expenseAmount.filter((x) => +x < 0);

  const positiveAmout = expenseAmount.filter((x) => +x > 0);
  console.log(negativeAmount);
  let expensesValue = 0;
  let negValue = 0;
  let posValue = 0;
  if (expenseAmount.length > 0) {
    expensesValue = expenseAmount.reduce((a, b) => +a + +b);
    negValue =
      negativeAmount.length > 0 ? negativeAmount.reduce((a, b) => +a + +b) : 0;
    posValue =
      positiveAmout.length > 0 ? positiveAmout.reduce((a, b) => +a + +b) : 0;
  }

  console.log(expensesValue);

  return (
    <Box sx={{ borderBottom: "1px solid black" }}>
      <div>
        <p>Your Balance</p>
        <h2>${expensesValue}</h2>
        <hr />
      </div>
      <Grid container className="incomeBox" spacing={2}>
        <Grid item xs={6} sx={{ borderRight: "1px solid black" }}>
          Income
          <h2>${posValue}</h2>
        </Grid>
        <Grid item xs={6}>
          Expenses
          <h2>${negValue * -1} </h2>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Balance;
