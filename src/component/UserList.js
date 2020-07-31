import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import './index.css'
import { GetUseName } from '../Actions/GetUseName';



    
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  function UserList({onChangeUser,data}) {

      const dispatch =useDispatch();
      const userData =(data)=>dispatch(GetUseName(data))
      const handleChange= (data)=>{
          onChangeUser(data)
          userData(data)
      }

      const classes = useStyles();
  
    return (
     <div className="userlist">
         <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Avator</StyledTableCell>
              <StyledTableCell align="right">FirstName</StyledTableCell>
              <StyledTableCell align="right">LastName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id} onClick={()=>handleChange(row)}>
                <StyledTableCell component="th" scope="row">
                  <img className="avator" src={row.avatar} alt="avator" width="35px" height="50px"/>
                </StyledTableCell>
                <StyledTableCell align="right" >{row.first_name}</StyledTableCell>
                <StyledTableCell align="right">{row.last_name}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </div>
        
    )
}
UserList.propTypes = {
  onChangeUser:PropTypes.func,
  data:PropTypes.array
};


export default UserList
