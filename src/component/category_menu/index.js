import { Container } from "react-bootstrap";
import CategoryMenu from "./CategoryMenu";
import { getCategoryParent } from "@/services/CategoryServices";
import { revalidatePath } from "next/cache";

const CategorySection = async () => {
  revalidatePath("/");
  const { cateparent } = await getCategoryParent();
  return (
    <Container>
      <CategoryMenu cateparent={cateparent} />
    </Container>
  );
};

export default CategorySection;
