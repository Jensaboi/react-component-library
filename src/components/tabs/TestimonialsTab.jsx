import TestimonialWithImg from "../ui/TestimonialWithImg";
import TestimonialImg from "../../assets/testimonial-img.jpg";

export default function TestimonialsTab() {
  return (
    <>
      <TestimonialWithImg img={TestimonialImg} name={"May Andersons"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        praesentium dignissimos dolorem dolorum quisquam amet nesciunt. Mollitia
        quibusdam nostrum voluptate corrupti culpa!
      </TestimonialWithImg>
    </>
  );
}
