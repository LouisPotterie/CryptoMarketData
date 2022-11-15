import useAxiosNft from "../hooks/useAxiosNft"
import Coin from '../components/Coin';
import useAxiosNFT from "../hooks/useAxiosNft";

const NftCollections = () => {
  const { response} = useAxiosNFT('coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false');
  console.log(response);
  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">NFT Collections</h1>
    </section>
  )
}

export default NftCollections