import './Form.css';

export const FormAlter = (props) => {
    return (
        <section className="Form">
            <form action="http://localhost:3001/produtos/" method="post">
                <h2>Alterar</h2>
                <input defaultValue="1" readOnly>{props.id}</input>
                <button type="submit">enviar</button>
            </form>
        </section>
    )
}