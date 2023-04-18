import { useEffect, useState } from 'react';

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => {
    if (!openModal) {
      setOpenModal((prev) => !prev);
    }
  };
  const onCloseModal = () => {
    if (openModal) {
      setOpenModal((prev) => !prev);
    }
  };
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'overlay';
    }
  }, [openModal]);
  return [openModal, onOpenModal, onCloseModal];
}
