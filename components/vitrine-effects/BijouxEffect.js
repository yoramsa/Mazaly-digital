"use client";

import { useRef } from "react";
import Image from "next/image";

export default function BijouxEffect({ item }) {
  const stageRef = useRef(null);

  function onMove(e) {
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    stage.style.setProperty("--fx-mx", `${e.clientX - r.left}px`);
    stage.style.setProperty("--fx-my", `${e.clientY - r.top}px`);
  }

  return (
    <div className="mz-fx-bijoux" ref={stageRef} onPointerMove={onMove}>
      <Image className="mz-modal-img" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      <span className="mz-fx-halo" aria-hidden="true"></span>
      <span className="mz-fx-spark mz-fx-spark-1" aria-hidden="true"></span>
      <span className="mz-fx-spark mz-fx-spark-2" aria-hidden="true"></span>
      <span className="mz-fx-spark mz-fx-spark-3" aria-hidden="true"></span>
      <span className="mz-fx-spark mz-fx-spark-4" aria-hidden="true"></span>
      <span className="mz-fx-spark mz-fx-spark-5" aria-hidden="true"></span>
    </div>
  );
}
