import './index.css';
// import '../../api/api.js';




export function Items(props) {
    return (
        
        <div className='mainContainer'>

            <div className='imageContainer'>
                <img src={props.image}></img>
            </div>

                    <div className='infoContainer'>
                        <p>{props.name}</p>
                        <p>{props.description}</p>
                        <p>{props.oldPrice}</p>

                        <strong>{props.specialOffer}</strong>
                        
                        <p>{props.installments}</p>
                    </div>  

                <button className='buttonProduct'>Comprar</button>
                
        </div>
        
    )

}