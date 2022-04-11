import React, { useState } from "react";
import Modal, { ModalProvider } from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 8%;
  height: auto;
  border-radius: 15px;
  display: grid;
  position: absolute;
  top: 10%;
  left: ${(props) => props.left} ;
  right: ${(props) => props.right} ;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  @media (max-width: 1023px) {
    width: auto ;
    height: auto;
    top: 85%;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
  }`;
  export default function FancyModalButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
    props.rick(props.action)
  }

  function beforeClose() {
    props.rick('normal');
  }

  return (
    <ModalProvider>
      <div>
        <button className={`text-sm lg:text-4xl rounded-lg socb inline-block hover:bg-transparent ${props.cNameB}`} onClick={toggleModal}>{props.title}</button>
        <StyledModal
          className=" bg-gray-600"
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={0}
          left={props.left}
          right={props.right}
        >
          {props.contents}
        </StyledModal>
      </div>
    </ModalProvider>
  );
}