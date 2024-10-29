// "use client";

// import Image from "next/image";
// import React from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   imageSrc: string | null;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
//   if (!isOpen || !imageSrc) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//       <div className="relative w-full h-full">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-2xl"
//         >
//           &times;
//         </button>
//         <Image
//           src={imageSrc}
//           alt="Imagen ampliada"
//           layout="fill" // Ocupa todo el contenedor
//           objectFit="contain" // Mantiene la proporción
//           className="max-w-full max-h-full" // Asegúrate de que se mantenga dentro de los límites
//         />
//       </div>
//     </div>
//   );
// };

// export default Modal;
