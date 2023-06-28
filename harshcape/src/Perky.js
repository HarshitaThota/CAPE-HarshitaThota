
import Porky from "./Porky";
function Perky({ users }) {
    return (
        <div className="card">{users.map((user) => (
            <Porky key={user.id} user={user} />
        ))}</div>
    );
}
export default Perky;