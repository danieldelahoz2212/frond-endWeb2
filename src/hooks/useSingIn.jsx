import { useState } from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";
//import  Swal from "sweetalert2"

const useSingIn = (props)=> {
    const history = useNavigate();
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
    const [loading,] = useState(false);
    const { user, loginRequest, setPermissions, setToken, token } = props;
    
    const handleInput = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    };
    return {
        form,
        handleInput,
        loading
    };
};

export default useSingIn;