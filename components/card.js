function Card({ album }) {
  const { picture, title } = album
  return (
    <div>
      {title}
      <img src={picture} alt="" />
    </div>
  )
}

export default Card
