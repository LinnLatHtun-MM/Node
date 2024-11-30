import React from 'react';
import {useMultipleCustomHook} from '../component/UseInputHook/MultipleCustomHook';

function MultiForm() {

    const {values, handleChange, resetValues} = useMultipleCustomHook(
        //set inital valuess set null
        {
            name: '',
            email: ''
        }
    );

    const handleSubmit = (e) => {
        //prevent including pathvariable
        e.preventDefault();
        console.log(values);
        //calling api insteads of using this.
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={values.name}
                            name="name"
                            placeholder='Enter name: '
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder='Enter email: '
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
                {/* buuton disable after click */}
                <button type="reset" onClick={resetValues}>Reset</button>
            </form>
            {values.name}
            {values.email}
        </>
    );
}

export default MultiForm;