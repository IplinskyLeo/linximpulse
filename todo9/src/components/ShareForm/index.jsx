import './index.css';

export const ShareForm = () => {
    return (
        <section>
            <p> Quer que seus amigos também ganhem a lista personalidazada deles: Preencha agora!</p>

            <form className='shareForm'>
                <div className='labels'>
                    <label>
                        Nome do seu amigo:
                        <input type="text" name="nome" className='shareInput'/>
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" className='shareInput'/>
                    </label>
                </div>

                <div className='Submit'>
                <input type="submit" value="Enviar agora"  className='submit'/>
                </div>
            </form>
        </section>

    )
}