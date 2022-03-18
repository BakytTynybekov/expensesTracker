import {
  Box,
  Card,
  CardHeader,
  Divider,
  CardContent,
  List,
} from "@mui/material";
import Balance from "./balance";
import Form from "./form";
import Lists from "./list";
function Tracker() {
  return (
    <Box>
      <Card sx={{ width: "70%", padding: "30px" }}>
        <h3>Expense Tracker</h3>
        <CardHeader />
        <Divider></Divider>
        <CardContent>
          <Balance />
          <Lists />
          <Form />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Tracker;
