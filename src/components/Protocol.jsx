import { Link } from "react-router-dom"
import { currencyFormat } from "../utils"
import { percentageFormat } from "../utils"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Protocol = ({protocol}) => {
    
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
            <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={protocol.logo} alt={protocol.name} />
                    <p>{protocol.name}</p>
                    <span className="text-xs">({protocol.symbol})</span>
            </div>
        </div>
    )
  }
  
  export default Protocol