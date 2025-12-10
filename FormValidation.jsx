import React, { useState } from 'react'

export default function FormValidation() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");

    const validationHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            seterror("all field are required to fill");
            return;
        }
        if (name.length < 3 || name.length > 25) {
            seterror("name must be between 3 to 25 character");
            return;
        }
        if (!email.includes("@")) {
            seterror("email must be contain  @");
            return;

        }

        const passwordRegx = /^(?=.*[A-Z]).{8,}$/;
        if (!passwordRegx.test(password)) {
            seterror("Password must be at least 8 characters and contain one capital letter");
            return;
        }

        seterror("");
        alert("form submitted successfully");
        console.log(name, email, password);



    }







    return (
        <div>
            <form onSubmit={validationHandler}>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />


                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type='submit'>SUBMIT</button>


            </form>



        </div>
    )
}
