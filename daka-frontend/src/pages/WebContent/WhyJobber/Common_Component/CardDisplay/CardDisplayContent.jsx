import SubHeader from "../../../../../component/Typography/Sub-Header"

const CardDisplayContent = ({ children , Title = null , Image = null }) => {
  return (
    <div className="flex flex-col justify-start gap-3">

        <img src={Image} style={{ maxHeight : '235px' , maxWidth : '411px' , width : '100%' , height : '100%' }} />
        <SubHeader text={Title} />

        { children }

    </div>
  )
}

export default CardDisplayContent
