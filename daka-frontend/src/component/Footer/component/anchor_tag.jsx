
const Footer_Anchor_Tag = ({ text = null , tags = null }) => {
  return <a href={tags} className="text-sm text-white cursor-pointer hover:underline hover:text-gray-300" >{ text }</a>
}

export default Footer_Anchor_Tag
