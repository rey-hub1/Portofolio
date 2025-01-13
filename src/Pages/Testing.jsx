/* eslint-disable react/prop-types */
import styles  from "../styles/Testing.module.css";
const Testing = () => {
    const images = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
    ]
    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} />
                <Column images={[images[3], images[4], images[5]]} />
                <Column images={[images[0], images[1], images[2]]} />
            </div>
        </main>
    );
}



function Column({ images }) {
    return (
        <div className={styles.column}>
            {images.map((src, index) => {
                return <div key={index} className="">
                    <img src={"/images/Poster/" + src} alt="image" />
                </div>;
            })}
        </div>);
}
export default Testing;