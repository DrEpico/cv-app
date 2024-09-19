// import React from "react"

function Form({ formData, handleChange }){
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" value={FormData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
        </form>
    );
}
 
export default Form;