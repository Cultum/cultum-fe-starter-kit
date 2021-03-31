import * as React from 'react';
// components
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';
// view components
import { PersonContainer } from '@md-sw-person/index';
import { useModal } from '@md-modules/shared/hooks/use-modal';
import Modal from '@md-modules/shared/components/ui/modal';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => {
  const { openModal, closeModal, modalIsOpen } = useModal(false);
  return (
    <CardWrapper key={id}>
      <CardImgWrapper>
        <CardImg src={'/static/images/Ben-Kenobi.jpg'} alt={`${name}-${id}`} />
      </CardImgWrapper>
      <CardFooter>
        <CardFooterTitle>{name}</CardFooterTitle>

        <Button preset='details' onClick={openModal}>
          Details
        </Button>

        <Modal isOpen={modalIsOpen}>
          <PersonContainer closeModal={closeModal} id={id} />
        </Modal>
      </CardFooter>
    </CardWrapper>
  );
};

export { Card };
