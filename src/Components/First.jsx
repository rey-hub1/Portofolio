import { useNavigate } from "react-router-dom";
export default function First() {
    const navigate = useNavigate()
    return (
        <>
            <h3>HOMEPAGE ROUTE</h3>
            <button onClick={() => navigate('/about')}>Go To About</button>
        </>
    )
}