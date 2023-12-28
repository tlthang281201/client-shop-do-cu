import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.css";
const FooterComponent = () => {
  return (
    <footer style={{ backgroundColor: "white" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div className="pt-3" style={{ fontSize: "14px" }}>
              <div className="mb-3">
                <span
                  className="pb-1"
                  style={{
                    borderBottom: "3px solid #FF5757",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Chợ Nhà Việt - Mua nhanh bán nhanh
                </span>
              </div>
              <p>
                Chợ Nhà Việt là nền tảng trực tuyến giúp kết nối người mua và
                người bán, hình thành cộng đồng mua bán trực tuyến lớn mạnh, uy
                tín.
              </p>
              <p>
                Đối với người mua, ưu thế của Chợ Nhà Việt đến từ số lượng danh
                mục đa dạng xe máy, đồ điện tử cho đến, thời trang, làm đẹp, nội
                thất… Kết hợp giữa tiến bộ về công nghệ và sự thấu hiểu người
                dùng, mọi nhu cầu mua sắm được đáp ứng chỉ trong vài thao tác
                trên một môi trường an toàn, minh bạch và dễ sử dụng.
              </p>
              <p>
                Đối với người bán, Chợ Nhà Việt tạo ưu đãi hàng loạt gói đăng
                tin và đề xuất những vị trí đăng tin để người bán tăng hiệu suất
                bán hàng, nhanh chóng tiếp cận đối tượng người dùng mục tiêu.
              </p>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="mt-3">
              <div className="mb-3">
                <span
                  style={{
                    borderBottom: "1px solid #FF5757",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "21px",
                  }}
                >
                  Hỗ trợ
                </span>
              </div>
              <ul style={{ listStyle: "none", columnCount: "2", padding: 0 }}>
                <li>Giới thiệu</li>
                <li>Bảng giá</li>
                <li>Dịch vụ</li>
                <li>Quy chế hoạt động</li>
                <li>Tiêu chuẩn duyệt tin</li>
                <li>Ưu đãi</li>
                <li>Hướng dẫn đăng tin</li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="mt-3">
              <div className="mb-3">
                <span
                  style={{
                    borderBottom: "1px solid #FF5757",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "21px",
                  }}
                >
                  Hotline hỗ trợ
                </span>
              </div>
              <div
                className="rounded-pill"
                style={{ backgroundColor: "#FF5757", width: "40%" }}
              >
                <div className="p-2 text-white d-flex align-items-center    ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-headset me-2 ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                  </svg>
                  0926069058
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="mt-3">
              <div className="mb-3">
                <span
                  style={{
                    borderBottom: "1px solid #FF5757",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "21px",
                  }}
                >
                  Liên kết
                </span>
              </div>
              <div
                className="rounded-pill"
                style={{ backgroundColor: "#FF5757", width: "40%" }}
              >
                <div className="p-2 text-white d-flex align-items-center    ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook me-2 ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  0926069058
                </div>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div
              style={{ fontSize: "12px", borderTop: "1px solid #F2F5F8" }}
              className="text-center mt-3 pt-3"
            >
              <p style={{ margin: 0 }}>@Copyright</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
