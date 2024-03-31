import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

it('renders without issue', ()=>{
  render(<Card 
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={TEST_IMAGES.length}
    />);
})

it('mathes snapshot', () => {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
})