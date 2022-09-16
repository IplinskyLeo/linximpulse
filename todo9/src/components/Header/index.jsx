import './index.css';

export function Header(){
    return(
        <header className='header'>
            <p>Uma seleção de produtos</p>
            <h1>Especial pra voce</h1>
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>

            <div className='btn'>
                <a href="/">Conheça a Linx</a>
                <a href="/">Ajude o Algoritmo</a>
                <a href="/">Seus Produtos</a>
                <a href="/">Compartilhe</a>
            </div>

        </header>
    );

}