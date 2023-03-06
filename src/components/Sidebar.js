import Link from "./Link";

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/button' },
        { label: 'Modal', path: '/modal' },
    ]
    const renderedLinks = links.map((link) => {
        return <Link activeClassName='font-bold border-l-4 border-blue-500 pl-2' className='mb-3' key={link.label} to={link.path}>{link.label}</Link>
    })
    return <div className="sticky top-0 overflow-scroll flex flex-col items-start">
        {renderedLinks}
    </div>
}
export default Sidebar;