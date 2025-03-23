export const Button = ({ children, variant, className, cv = null }) => {
    const baseClasses = "px-7 py-2 text-sm rounded-lg shadow-md transition font-semibold ";

    const solidClasses = "bg-Az-700 text-Az-100 hover:bg-[#345A54]";
    const outlineClasses = "border border-Az-100 text-Az-100 bg-transparent hover:bg-[#2C4E48] hover:text-white";
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/file/cv_contoh.pdf'; // Ganti dengan path file CV
        link.download = 'cv_contoh.pdf'; // Nama file yang akan diunduh
        link.click(); // Memulai download
    };

    return (
        <button
            className={` ${baseClasses} ${variant === "outline" ? outlineClasses : solidClasses} ${className}`}
            onClick={cv === "true" ? downloadCV : null}
        >
            {children}
        </button>
    );
};
