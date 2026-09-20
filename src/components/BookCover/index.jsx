const BookCover = ({ src, alt, className }) => <img src={src || "/book-cover-fallback.svg"} className={className} alt={alt} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/book-cover-fallback.svg"; }} />;
export default BookCover;
