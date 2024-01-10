

const FeatureAnchorTagContainer = ({ AnchorTitle }) => {
  return (
    <div className='flex flex-col items-start gap-1 px-6 py-2 mb-4 cursor-pointer hover:bg-lime-200'>

        <h1 className='text-[#012939] font-bold text-sm'>{AnchorTitle}</h1>
        <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

    </div>
  )
}

export default FeatureAnchorTagContainer
