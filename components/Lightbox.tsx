"use client";
import { useState } from "react";

interface Props {
    images: string[];
    initialIndex: number;
    onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
    const [index, setIndex] = useState(initialIndex);

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
            <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl hover:text-cyan-400 z-10">×</button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white text-4xl hover:text-cyan-400">‹</button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white text-4xl hover:text-cyan-400">›</button>
            <img src={images[index]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
    );
}