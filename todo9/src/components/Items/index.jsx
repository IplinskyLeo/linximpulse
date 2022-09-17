import './index.css';
// import '../../api/api.js';




export function Items(props) {
    return (
        
        <div className='container'>

            <div className='imagem'>
                <img src={props.image}></img>
            </div>

                    <div className='description'>
                        <p>{props.name}</p>
                        <p>{props.description}</p>
                        <p>{props.oldPrice}</p>

                        <strong>{props.specialOffer}</strong>
                        
                        <p>{props.installments}</p>
                    </div>  

                <button>Comprar</button>
                
        </div>
        
    )

}