import { useState, useContext } from "react";
import { TrackerContext } from "../context/GeneralContext";
import { Box, Grid, FormControl, Button, TextField } from "@mui/material";
import "./form.scss";

function Form() {
  const { setExpenses, expenses } = useContext(TrackerContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const onSubmit = () => {
    setExpenses((prev) => [...prev, { [text]: amount }]);
    setText("");
    setAmount("");
    console.log(expenses);
  };

  return (
    <Box>
      <h4>Add New Transaction</h4>
      <hr />
      <Grid container spacing={2} alignItems="end">
        <Grid item xs={6}>
          <FormControl>
            <label>Text</label>
            <TextField
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <label>
              Amount <br />
              <span>(*negative for expenses, positive for income*)</span>
            </label>
            <TextField
              value={amount}
              placeholder="Amount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={() => onSubmit()}>Add Expense</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
