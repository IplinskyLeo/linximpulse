import './index.css';

export const ShareForm = () => {
    return (
        <section>
            <p> Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

            <form className='shareForm'>
                <div className='labels'>
                    <label className='labelOne'>
                        Nome do seu amigo:
                        <input type="text" name="nome" className='shareInput' required/>
                    </label>
                    <label className='labelTwo'>
                        E-mail:
                        <input type="email" name="email" className='shareInput' required/>
                    </label>
                </div>

                <div className='Submit'>
                <input type="submit" value="Enviar agora"  className='submit'/>
                </div>
            </form>
        </section>

    )
}