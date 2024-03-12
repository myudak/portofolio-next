"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";
import { Container, Heading, Box } from "@chakra-ui/react";
import cardsData from "./page.data";

import image_allymotion from "@/../public/allymotion.png";

const image = () => {
  return (
    <Container>
      <Heading as="h3" variant="section-title">
        My Images
      </Heading>
      <Box m={0} h={100 * cardsNew.length + "px"} w="full">
        <LayoutGrid cards={cardsNew} />
      </Box>
    </Container>
  );
};

const SkeletonCard = ({ Heading, Texts }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{Heading}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {Texts}
      </p>
    </div>
  );
};
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

let firstPat = 1;
let secPat = 4;

function checkIndex(i) {
  let className;

  if (i === firstPat || i === secPat) {
    className = "md:col-span-2";
    if (i === firstPat) firstPat += 4;
    if (i === secPat) secPat += 4;
  } else className = "col-span-1";

  return className;
}

const cardsNew = cardsData.map((data, i) => {
  i++;
  const className = checkIndex(i);
  return {
    id: i,
    content: <SkeletonCard Heading={data.Heading} Texts={data.Texts} />,
    className: className,
    thumbnail: data.Thumbnail,
  };
});

// console.log(cardsNew);

export default image;
