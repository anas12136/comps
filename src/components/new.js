import { useState } from 'react'

const images = [
    {id: 'a', name: 'Leaf', src: 'https://picsum.photos/seed/abd/200/300' },
    {id: 'b', name: 'House', src: 'https://picsum.photos/seed/gqk/200/300' },
    {id: 'c', name: 'Tree', src: 'https://picsum.photos/seed/ias/200/300' },
];
const handleClick = (images)=>{
    setSelectedName(images.name)
}
const [selectedName, setSelectedName] = useState('')
function App1() {
    return <div>
    <img images={images} onClick={handleClick} />
    {selectedName}
    </div>
}

export default App1;
