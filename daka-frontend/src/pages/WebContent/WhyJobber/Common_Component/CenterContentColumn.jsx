
const CenterContentColumn = ({ children , classContent }) => {
    return <div className={`flex flex-col ${classContent} items-center`}>
         { children }
    </div>
 }

export default CenterContentColumn
