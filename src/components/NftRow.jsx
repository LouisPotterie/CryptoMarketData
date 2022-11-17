import useAxiosNFT from "../hooks/useAxiosNft";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StableGraph from "./StableGraph";
import '../style/NftRow.css';

const NftRow = ({nft}) => {

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row"><img className="logo" src={nft.collectionImageURL} alt={nft.collectionName}/> {nft.collectionName} </TableCell>
            <TableCell align="right">{nft.quote.salesVolume}</TableCell>
            <TableCell align="right">{nft.buyerCount}</TableCell>
            <TableCell align="right">{nft.sellerCount} </TableCell>
            <TableCell align="right">{nft.salesVolumeChangePercentage} %</TableCell>
            <TableCell align="right">{nft.transactionCount} </TableCell>
    </TableRow>
  )
}

export default NftRow