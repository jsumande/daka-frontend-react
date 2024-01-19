const CardDisplayRow = ({ children }) => {
  return (
    <div className="w-full flex flex-row justify-evenly gap-4">
      { children }
    </div>
  )
}

export default CardDisplayRow
 