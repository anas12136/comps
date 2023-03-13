import {Fragment} from 'react'

function Table({data, config, keyFn}){
    const renderedHeaders = config.map((header)=>{
        if(header.header){
            return <Fragment key={header.label}>{header.header()}</Fragment>
        }
        return <th  key={header.label}>{header.label}</th>
        
        
    })
    const renderedFruits = data.map((rowData)=>{
        const renderedCells = config.map((column)=>{
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        })
        return <tr className="border-b" key={keyFn(rowData.name)}>
            
            {renderedCells}
        </tr>
    })
return (
    <table className="table-auto border-spacing-2">
        <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>

    {renderedFruits}
        </tbody>
        
        </table>
    
)
}
export default Table;