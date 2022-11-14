import useAxiosDeFi from "../hooks/useAxiosDeFi"
import Protocol from "./Protocol";

const TotalValueLocked = () => {
  const { response } = useAxiosDeFi('/protocols');

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">TVL </h1>
      {response && response.map(protocol => <Protocol key={protocol.id} protocol={protocol} />)}
    </section>
  )
}

export default TotalValueLocked