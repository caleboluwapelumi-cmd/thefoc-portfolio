"use client";
import { useState } from "react";
import Image from "next/image";

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
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.95)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    color: 'white',
                    fontSize: '3rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 10000
                }}
            >
                ×
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                style={{
                    position: 'absolute',
                    left: '1rem',
                    color: 'white',
                    fontSize: '4rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                ‹
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                style={{
                    position: 'absolute',
                    right: '1rem',
                    color: 'white',
                    fontSize: '4rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                ›
            </button>
            <Image
                src={images[index]}
                alt=""
                width={1920}
                height={1080}
                style={{
                    maxHeight: '90vh',
                    maxWidth: '90vw',
                    objectFit: 'contain',
                    width: 'auto',
                    height: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
                quality={95}
            />
        </div>
    );
}