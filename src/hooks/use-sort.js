import { useState } from 'react'

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    

    const [sortBy, setSortBy] = useState(null)
    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortBy(label)
            setSortOrder('asc')
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(label)
        }
        //only sort data if sortOrder && sortBy are not null
        //make a copy of the data prop
        //find the correct sortValue function and use it for sorting

       

    }
    let sortedData = data;

    if (sortBy && sortOrder) {
        const { sortValue } = config.find(header => header.label === sortBy);
        // eslint-disable-next-line no-unused-vars
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1
            if (typeof valueA === 'string') {
                return (valueA.localeCompare(valueB)) * reverseOrder
            } else {

                return (valueA - valueB) * reverseOrder
            }

        })
    }
    return {
        sortBy,
        sortOrder,
        sortedData,
        handleClick,
    }
}
export default useSort;