const Rating = ({ value }) => {
  const maxStars = 5; // Số sao tối đa
  const roundedValue = Math.round(value); // Làm tròn giá trị đầu vào

  // Tạo một mảng để chứa các sao được hiển thị
  const stars = Array.from(Array(maxStars), (_, index) => {
    if (index < roundedValue) {
      return <span key={index}>&#9733;</span>; // Hiển thị sao đầy
    }
    return <span key={index}>&#9734;</span>; // Hiển thị sao rỗng
  });

  return <div className="rating">{stars}</div>;
};

export default Rating;
