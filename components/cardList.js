import data from "@/data/albums.json"
import Card from "@/components/card"

const CardList = () => {
  return (
    <div>
      {data.map((album, key) => (
        <Card album={album} key={key} />
      ))}
    </div>
  )
}

export default CardList
