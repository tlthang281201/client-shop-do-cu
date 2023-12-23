import { Container } from "react-bootstrap";
import CategoryMenu from "./CategoryMenu";
import { getCategoryChildren } from "@/services/CategoryServices";
import { revalidatePath } from "next/cache";

const CategoryChildrenSection = async ({ slug }) => {
  const params = slug.split("-");
  const id = params[params.length - 1];
  revalidatePath("/");
  const { catechildren } = await getCategoryChildren(id);
  return (
    <Container>
      <CategoryMenu catechildren={catechildren} title={`Danh mục nổi bật`} />
    </Container>
  );
};

export default CategoryChildrenSection;
