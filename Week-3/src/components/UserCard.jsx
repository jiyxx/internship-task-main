function UserCard(props) { 
    console.log("user card", props );
    return (
        <div className = "card">
            <h2> Name: {props.name}</h2>

            <p>
                <strong>Email: </strong> {props.email}
            </p>
            <p>
                <strong>City: </strong> {props.city}
            </p>
            <p>
                <strong>Company: </strong> {props.company}
            </p>
            <p> 
                <strong> Phone: </strong> {props.phone}
            </p>
        </div>
    )
}
export default UserCard ;