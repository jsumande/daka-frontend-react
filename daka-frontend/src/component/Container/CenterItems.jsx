
const CenterItems = ({ children , biggerScreen = false }) => {
  return (
    <div className={`flex flex-col ${ biggerScreen ? 'w-9/12' : 'w-[1024px]' }  max-[1110px]:w-11/12`}>
      {children}
    </div>
  )
}

export default CenterItems
