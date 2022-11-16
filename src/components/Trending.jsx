import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

const Trending = () => {
    const { response} = useAxios('search/trending');

  return (
  <div className="spacetop20">
    <h1 className='txt-2xl spacebot20'>Trending</h1>
    {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item}/>)}
  </div>
  
  )
}

export default Trending;