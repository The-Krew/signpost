import { Row } from "reactstrap";
import ComboBox from "./comboBox.";


const Linkbox = () => {

    return (
        <>
            <form className='form-linkbox'>
                <div className='form-inputs'>
                    <ComboBox />
                    <div className='input-text'>
                        <input type="text" placeholder="Name" className='input-name' />
                        <input type="text" placeholder="URL" className='input-url' />
                    </div>
                </div>
                <button type='submit' className='form-submit'>Přidat</button>
            </form>
        </>
    );
}

export default Linkbox;
