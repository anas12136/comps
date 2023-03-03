import className from 'classnames'
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
   const classes = className(rest.className,' flex items-center px-3 py-1.5 border ',{
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-gray-500 bg-gray-500 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full ' : rounded,
    'bg-white' : outline,
    'text-blue-600': outline && primary,
    'text-green-600': outline && success,
    'text-gray-900': outline && secondary,
    'text-red-600': outline && danger,
    'text-yellow-600': outline && warning,

   })
    return <button {...rest} className={classes}>{children}</button>
}
Button.propTypes= {
    checkVariationValue: ({primary, secondary, success, warning, danger})=>{
const count = 
Number(!!primary)+
Number(!!secondary)+
Number(!!success)+
Number(!!warning)+
Number(!!danger);

if (count > 1){
    return new Error ("only one of primary, secondary, success, warning and danger can be true ");
}

    }
}
export default Button;