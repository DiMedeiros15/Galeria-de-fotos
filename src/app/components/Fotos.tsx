"use client";

import { useState } from "react";
import { photoList } from "../data/photoList";
import PhotoItem from "./PhotoItem";
import Modal from "./Modal";

export default function Fotos() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  function openModal(id: number) {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="mx-2">
      <div className="bg-white p-5 rounded">
        <h1 className="bold text-3xl my-10 text-black font-bold">
          Galeria de Fotos
        </h1>
        <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photoList.map((e) => (
            <PhotoItem key={e.id} photo={e} onClick={() => openModal(e.id)} />
          ))}
        </section>
      </div>
      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
}
