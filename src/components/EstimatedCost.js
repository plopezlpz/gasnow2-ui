import { Chip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { getEstimatedPriceFmt, TX_TYPES } from "../utils/price";
import TextIcon from "./TextIcon";

function EstimatedCost(props) {
  const { gweiPrice, ethPrice } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Label
            </TableCell>
            <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Interactions
            </TableCell>
            <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Gas Used
            </TableCell>
            <TableCell align="right">Fast</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TX_TYPES.map((txType) => (
            <TableRow key={txType.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <TextIcon src={txType.iconSrc}>
                  <Typography>{txType.name}</Typography>
                </TextIcon>
              </TableCell>
              <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
                {txType.type ? <Chip label={txType.type} /> : <></>}
              </TableCell>
              <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Typography variant="body2">{txType.interaction}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Typography variant="body2">{txType.gasUsed}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ fontWeight: "bold" }}>{getEstimatedPriceFmt(gweiPrice, ethPrice, txType)}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EstimatedCost;
