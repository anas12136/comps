import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {

    const { config, data } = props;

    const { sortBy, sortOrder,  sortedData, handleClick } = useSort(data, config)


    const updatedConfig = config.map((header) => {
        if (!header.sortValue) {
            return header;
        }
        return {

            ...header,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(header.label)}>
                <div className="flex items-center">
                    {getIcons(header.label, sortBy, sortOrder)}
                    {header.label}
                </div>
            </th>

        }
    })
    
    
    return <div>
        <Table {...props} config={updatedConfig} data={sortedData} />

    </div>

}
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp /> <GoArrowSmallDown />
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp /> <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown />
    }

}
export default SortableTable;