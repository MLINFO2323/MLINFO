import button__style from "./ShoppingCartButton.module.css";
import Image from "next/image";
const ShoppingCartButton = () => {
  return (
    <div className={button__style.container}>
      <Image layout="fill" objectFit="contain" src="/ds.svg" alt="shopping" />
    </div>
  );
};

export default ShoppingCartButton;
