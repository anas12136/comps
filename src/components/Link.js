import classNames from 'classnames';
import useNavigationContext from '../hooks/use-navigion';
function Link({ to, children, className, activeClassName }) {

    const {navigate, currentPath} = useNavigationContext()
    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName)
    const handleClick = (event) => {
        if(event.meta.key || event.ctrl.key){
            return;
        }
        event.preventDefault();
        navigate(to)
    }
    return <a  className={classes} href={to} onClick={handleClick} >{children}</a>
}
export default Link 