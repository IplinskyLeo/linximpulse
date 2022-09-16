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
                
            <div>
                <input type="radio" name="" id="" />
                <label htmlFor="masculino">Masculino</label>

                <input type="radio" name="" id="" />
                <label htmlFor="feminino">Feminino</label>
            </div>
                <input type="submit" />
            </form>
        </div>
    );
};