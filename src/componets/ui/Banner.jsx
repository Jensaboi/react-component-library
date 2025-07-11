import checkCircle from '../assets/check-circle.svg'
import exclamationTriangle from "../assets/exclamation-triangle.svg"
import infoCircle from "../assets/info-circle.svg"
import xCircle from "../assets/x-circle.svg"

export default function Banner({ size = '896px', children, variant = 'neutral', title}){

let icon;
if(variant === 'success'){
    icon = checkCircle;
}else if(variant === 'warning'){
    icon = exclamationTriangle;
}else if(variant === 'error'){
    icon = xCircle
}else{
    icon = infoCircle;
}

if(!title && variant === 'success'){
    title = 'Congratulations'
}
if(!title && variant === 'warning'){
    title = 'Attention'
}
if(!title && variant === 'error'){
    title = 'There is a problem with your application'
}
if(!title && variant === 'neutral'){
    title = 'Update availbe'
}

    return(
        <div className={variant} style={{width: size, maxWidth: '896px', display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '16px', borderRadius: '6px', gap: '10px'}}>
            <img style={{alignSelf: 'start'}} src={icon}/>
            <div className={variant}>
                <h3>{title}</h3>
                {children && <p>{children}</p>}
            </div>
        </div>
    )
}
