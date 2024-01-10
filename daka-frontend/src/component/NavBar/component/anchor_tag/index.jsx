

const AnchorTag = ({ text, handleMouseEnter = null , handleMouseLeave = null }) => {
    return <h1 
    onMouseEnter={ handleMouseEnter }
    onMouseLeave={ handleMouseLeave } className='text-[#012939] font-medium pr-5 
    cursor-pointer text-sm hover:underline decoration-[#c1ff72]
    transition delay-3000 duration-3000 ease-in-out
    decoration-2 underline-offset-8'>{text}</h1>
}

export default AnchorTag
