import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it('renders without issue', ()=>{
  render(<Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />);
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//tested the fix for bug 3 and 4 at the same time!!
it('works when you click the left arrow', () => {
  const {container} = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 3"]')).not.toBeInTheDocument();

  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow);

  expect(container.querySelector('img[alt="testing image 3"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
});