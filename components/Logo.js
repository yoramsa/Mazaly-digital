import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="brand-mark"
      src="/logo-mark.png"
      alt=""
      width={30}
      height={30}
      aria-hidden="true"
    />
  );
}
