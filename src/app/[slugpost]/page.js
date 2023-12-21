import Breadcumber from "@/component/breadcumber/Breadcumber";
import RightPost from "@/component/listpost/right/RightPost";
import PostDetail from "@/component/post/PostDetail";
import { Col, Container, Row } from "react-bootstrap";

const Post = () => {
  return (
    <Container>
      <Breadcumber />
      <div className="mt-2">
        <Row>
          <Col
            lg={8}
            md={12}
            sm={12}
            xs={12}
            style={{ padding: 0, borderRight: "1px solid #F2F5F8" }}
          >
            <PostDetail />
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} style={{ padding: 0 }}>
            <RightPost />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
