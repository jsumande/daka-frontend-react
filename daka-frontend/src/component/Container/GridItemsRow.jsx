

const GriditemsRow = ({ children }) => {
    return (
      <div className="grid grid-cols-3 gap-4 w-[1024px] max-[1110px]:w-11/12">
        {children}
      </div>
    )
  }
  
  export default GriditemsRow
  