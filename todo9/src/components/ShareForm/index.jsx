import './index.css';

export const ShareForm = () => {
    return (
        <section>
            <p> Quer que seus amigos também ganhem a lista personalidazada deles: Preencha agora!</p>

            <form >
                <div>
                    <label>
                        Nome:
                        <input type="text" name="nome" />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email"/>
                    </label>
                </div>

                <input type="submit" value="Enviar agora"/>

            </form>
        </section>

    )
}