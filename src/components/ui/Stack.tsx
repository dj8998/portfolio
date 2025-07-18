"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface CardData {
  id: number;
  img: string;
}

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: unknown, info: unknown) {
    console.log('onDragEnd', info);
    const infoTyped = info as { offset: { x: number; y: number } };
    if (
      Math.abs(infoTyped.offset.x) > sensitivity ||
      Math.abs(infoTyped.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
      onDrag={() => console.log('onDrag')}
      onPointerDown={() => console.log('onPointerDown')}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  cardsData?: CardData[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState<CardData[]>(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
          { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
          { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
          { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
        ]
  );

  const sendToBack = (id: unknown) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Move randomRotate and setRandomRotate to the main component body
  const [randomRotates, setRandomRotates] = useState<number[]>(() => cardsData.map(() => 0));
  useEffect(() => {
    setRandomRotates(cardsData.map(() => randomRotation ? Math.random() * 10 - 5 : 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomRotation, cardsData.length]);

  return (
    <div
      className="relative z-50"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() => sendToBack(card.id)}
          sensitivity={sensitivity}
        >
          <motion.div
            className="rounded-2xl border-4 border-white overflow-hidden shadow-lg"
            onClick={() => {
              console.log('onClick card', card.id);
              if (sendToBackOnClick) {
                sendToBack(card.id);
              }
            }}
            animate={{
              rotateZ: (cards.length - index - 1) * 4 + randomRotates[index],
              scale: 1 + index * 0.06 - cards.length * 0.06,
              transformOrigin: "90% 90%",
            }}
            initial={false}
            transition={{
              type: "spring",
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          >
            <Image
              src={card.img}
              alt={`card-${card.id}`}
              className="w-full h-full object-cover select-none"
              draggable={false}
              width={cardDimensions.width}
              height={cardDimensions.height}
              priority
            />
          </motion.div>
        </CardRotate>
      ))}
    </div>
  );
} 