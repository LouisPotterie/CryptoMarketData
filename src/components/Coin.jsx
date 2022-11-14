import { Link } from "react-router-dom"
import { currencyFormat } from "../utils"
import { percentageFormat } from "../utils"
import { TrendingDown } from "../icons/icons"
import { TrendingUp } from "../icons/icons"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Coin = ({coin}) => {
    
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <span className="w-full text-center">{currencyFormat(coin.current_price)}</span>
                <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {percentageFormat(coin.price_change_percentage_24h)}
                </span>
                <div className="hidden sm:block">
                    <p className="font-semibold">Market Cap</p>
                    <span>{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    )
  }
  
  export default Coin