import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { ImageGallery, ProductionBox } from "../Styled/accomplishment.styled";

export const Accomplishment = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewrIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <ProductionBox>
        <ImageGallery>
          <p className="menu__category">Realizacje</p>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewrIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </ImageGallery>
      </ProductionBox>
    </>
  );
};
