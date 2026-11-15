import Image from "next/image";

export default function SneakersEffect({ item }) {
  return (
    <div className="mz-fx-sneaker">
      <div className="mz-fx-sneaker-float mz-fx-sneaker-float-1">
        <div className="mz-fx-sneaker-explode mz-fx-sneaker-explode-1">
          <Image className="mz-modal-img mz-fx-sneaker-clip-1" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
        </div>
      </div>
      <div className="mz-fx-sneaker-float mz-fx-sneaker-float-2">
        <div className="mz-fx-sneaker-explode mz-fx-sneaker-explode-2">
          <Image className="mz-modal-img mz-fx-sneaker-clip-2" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
        </div>
      </div>
      <div className="mz-fx-sneaker-float mz-fx-sneaker-float-3">
        <div className="mz-fx-sneaker-explode mz-fx-sneaker-explode-3">
          <Image className="mz-modal-img mz-fx-sneaker-clip-3" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
        </div>
      </div>
    </div>
  );
}
