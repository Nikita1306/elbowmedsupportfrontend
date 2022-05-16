import {useNavigate} from "react-router-dom";

export default function RouteFromLogin() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `doctor`;
        navigate(path);
    }
}