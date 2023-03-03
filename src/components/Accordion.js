import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const handleOnClick = () => {
            setExpandedIndex((currentExpandedIndex) => {
                if (currentExpandedIndex === index) {
                    return -1;
                }
                else {
                    return index
                }
            })

        }
        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        return (
            <div key={item.id}>
                <div className='border-b flex p-3 bg-gray-100 items-center cursor-pointer justify-between' onClick={handleOnClick}>
                    {item.label}{icon}
                </div>
                {isExpanded && <div className='border-b p-5 '>{item.content}</div>}
            </div>
        )
    })
    return (
        <div>
            {renderedItems}
        </div>
    )
}
export default Accordion;