import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const useForm = validate => {
    const [values,setValues] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const handleChnage = e => {
const {name,value} = e.target
        setValues ({
            ...values,
            [name]:value
        })
    }

    const handleSubmit= e=>{
        e.preventDefault()
        setErrors(validate(values))
        console.log(errors)
        if (Object.keys(errors).length === 0) {
            // fetch("http://tookuai.herokuapp.com/", {
            //   method: "POST",
            //   body: values,
            //   headers: {
            //     "Accept": "application/json",
            //     "Content-Type": "application/json",
            //   },
            // })
            //   .then((Response) => Response.json())
            //   .then((Result) => {
            //     if (Result.message == "Operation Successful"){
            //      alert("Sign-up Sucessful");
            //       this.props.history.push("/login");
            //      } else alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
            //   });
              alert("Sign-up Sucessful");
          window.location="/login";
        }else{
            alert("Seems You didn't apply the correct GEAR")
        }
}
    return {handleChnage, values, handleSubmit, errors}
}
export default useForm