import Breadcumber from "@/component/breadcumber/Breadcumber";
import RightPost from "@/component/listpost/right/RightPost";
import PostDetail from "@/component/post/PostDetail";
import SuggestedPost from "@/component/post/component/SuggestedPost";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {

  return {
    title: `Bán đồ`,
  };
}
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
            style={{  borderRight: "1px solid #F2F5F8" }}
          >
            <PostDetail />
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} >
            <RightPost />
          </Col>
        </Row>
        <Row>
          <Col><SuggestedPost /></Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
