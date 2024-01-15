

const AnchorTag = ({ text, handleMouseEnter = null , handleMouseLeave = null , target_link = null }) => {
    return <a href={target_link}
    onMouseEnter={ handleMouseEnter }
    onMouseLeave={ handleMouseLeave } className='text-[#012939] font-medium pr-5 
    cursor-pointer text-sm hover:underline decoration-[#c1ff72]
    transition delay-3000 duration-3000 ease-in-out
    decoration-2 underline-offset-8'>{text}</a>
}

export default AnchorTag
