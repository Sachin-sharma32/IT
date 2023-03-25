import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Header8 = () => {
  const Container = styled.div`
    color: white;
    scallSnapType: x mandatory;
    overflowX: scroll;
  `;

  return (
    <div className="h-screen">
      <Container className=" w-full h-full overflow-x-scroll flex">
        <div className="bg-cyan-500 w-[100vw] h-full">Sachin</div>
        <div className="bg-red-500 w-[100vw] h-full">Sachin</div>
        <div className="bg-blue-500 w-[100vw] h-full">Sachin</div>
      </Container>
    </div>
  );
};

export default Header8;
