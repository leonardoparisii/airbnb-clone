import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface CarouselArrowProps {
    dir: String,
    onClick: () => void,
}

const CarouselArrow = ({ dir, onClick }: CarouselArrowProps) => {
  return (
    <div className={`z-50 bg-gradient-to-r from-transparent from-15% via-white via-85% to-transparent to-90% relative p-3 pt-5 hidden xl:hidden md:flex items-center justify-center transition-all`}>
    <button onClick={onClick} className='relative  flex items-center justify-center p-[2px] border border-neutral-500 rounded-[50%] hover:shadow-xl shadow-black hover:scale-105 transition-all'>
        {dir === 'right' ? (
            <HiChevronRight size={22} className='hover:scale-105'/>
        ) : (
            <HiChevronLeft size={22} className='hover:scale-105'/>
        )}
    </button>
</div>
  )
}

export default CarouselArrow