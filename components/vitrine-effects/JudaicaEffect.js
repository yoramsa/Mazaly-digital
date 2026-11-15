import Image from "next/image";

export default function JudaicaEffect({ item }) {
  return (
    <div className="mz-fx-judaica">
      <Image className="mz-modal-img" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      <span className="mz-fx-judaica-panel mz-fx-judaica-panel-start" aria-hidden="true"></span>
      <span className="mz-fx-judaica-panel mz-fx-judaica-panel-end" aria-hidden="true"></span>
      <span className="mz-fx-judaica-shine" aria-hidden="true"></span>
    </div>
  );
}
