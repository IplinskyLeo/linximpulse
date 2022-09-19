import './index.css';

export function Form(){
    return (
        <div>
            <form className='firstForm'>
                <label htmlFor="nome">Seu nome:</label>
                <input type="text" name="" id="" required/>

                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email"  required/>

                <label htmlFor="cpf">CPF:</label>
                <input type="text" name="" id="" required/>
                
            <div className='radio'>
                <div className='radio1'>
                    <input type="radio" name="" id="" />
                    <label htmlFor="masculino">Masculino</label>
                </div>

                <div className='radio2'>
                    <input type="radio" name="" id="" />
                    <label htmlFor="feminino">Feminino</label>
                </div>
            </div>
                <input type="submit" className='formSubmit'/>
            </form>
        </div>
    );
};