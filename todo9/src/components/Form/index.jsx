import './index.css';

export function Form(){
    return (
        <div>
            <form>
                <label htmlFor="nome">Seu nome:</label>
                <input type="text" name="" id="" />

                <label htmlFor="email">E-mail:</label>
                <input type="text" name="" id="" />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" name="" id="" />
                
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
                <input type="submit" className='submit'/>
            </form>
        </div>
    );
};