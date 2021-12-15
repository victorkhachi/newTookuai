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
}
    return {handleChnage, values, handleSubmit, errors}
}
export default useForm