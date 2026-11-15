import Image from "next/image";

export default function CafeEffect({ item }) {
  return (
    <div className="mz-fx-cafe">
      <Image className="mz-modal-img" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      <span className="mz-fx-steam mz-fx-steam-1" aria-hidden="true"></span>
      <span className="mz-fx-steam mz-fx-steam-2" aria-hidden="true"></span>
      <span className="mz-fx-steam mz-fx-steam-3" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-1" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-2" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-3" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-4" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-5" aria-hidden="true"></span>
      <span className="mz-fx-grain mz-fx-grain-6" aria-hidden="true"></span>
    </div>
  );
}
