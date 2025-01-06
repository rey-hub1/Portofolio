import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        const audio = new Audio('/audio/luNyariApa.mp3');
        audio.play().catch((err) => {
            console.log('Autoplay blocked:', err);
        });
    }, []);

    return (
        <>
            <h1 className="text-3xl cursor-[url('/images/porshe.jpeg'), auto]">
                PAGE NOT FOUND
            </h1>
        </>
    );
}
export default NotFound