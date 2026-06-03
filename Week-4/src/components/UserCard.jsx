import {useNavigate} from "react-router-dom";

function UserCard(props) { 
    const navigate = useNavigate();

    return (
        <div className = "card" 
        onClick={() => navigate(`/users/${props.id}`)}>
            <h2> {props.name}</h2>

            <p>
                <strong>Email: </strong> {props.email}
            </p>
            <p>
                <strong>City: </strong> {props.city}
            </p>
        </div>
    )
}
export default UserCard ;