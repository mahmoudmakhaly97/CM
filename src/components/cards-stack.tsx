"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import JoinMastersCardArrow from '../../public/join-masters/join-masters-cards-arrow.svg'
import JoinMastersCard1Image from '../../public/join-masters/join-masters-card-image-1.png'
import JoinMastersCard2Image from '../../public/join-masters/join-masters-card-image-2.png'
import JoinMastersCard3Image from '../../public/join-masters/join-masters-card-image-3.png'
import JoinMastersCard4Image from '../../public/join-masters/join-masters-card-image-4.png'


const items = [
    {
        id: 0,
        content: (
            <>
                <Image src={JoinMastersCard1Image} alt="Influencer Image" className='w-full aspect-[6/4]' />
                <h2 className='text-3xl text-wrap pb-10 font-bold'>Master your content creation skills</h2>

            </>
        ),
    },
    {
        id: 1,
        content: (
            <>
                <Image src={JoinMastersCard2Image} alt="Influencer Image" className='w-full aspect-[6/4]' />
                <h2 className='text-3xl text-wrap pb-10 font-bold'>Build an influential online presence</h2>

            </ >
        ),
    },
    {
        id: 2,
        content: (
            <>
                <Image src={JoinMastersCard3Image} alt="Influencer Image" className='w-full aspect-[6/4]' />
                <h2 className='text-3xl text-wrap pb-10 font-bold'>Inspire, engage, and impact specialized communities</h2>

            </>
        ),
    },
    {
        id: 3,
        content: (
            <>
                <Image src={JoinMastersCard4Image} alt="Influencer Image" className='w-full aspect-[6/4]' />
                <h2 className='text-3xl text-wrap pb-10 font-bold'>Empower individuals to develop and showcase their expertise</h2>

            </>
        ),
    }
];


export const CardStack = ({
    offset,
    scaleFactor,
}: {
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState(items);

    const flipNextCard = useCallback(() => {
        setCards((prevCards) => {
            const newArray = [...prevCards]; // create a copy of the array
            newArray.unshift(newArray.pop()!); // move the last element to the front
            return newArray;
        });
    }, [])


    const flipBackCard = useCallback(() => {
        setCards((prevCards) => {
            const newArray = [...prevCards]; // create a copy of the array
            newArray.push(newArray.shift()!); // move the last element to the front
            return newArray;
        });
    }, [])


    return (
        <div className="flex flex-col gap-10 py-10 items-end">
            <div className="flex md:hidden gap-10 justify-center w-full">
                <Image src={JoinMastersCardArrow} alt="Influencer Image" className='w-20 h-20' onClick={flipNextCard} />
                <Image src={JoinMastersCardArrow} alt="Influencer Image" className='w-20 h-20 rotate-180' onClick={flipBackCard} />
            </div>
            <div className='flex items-center justify-center gap-7 w-full md:w-auto'>
                <Image src={JoinMastersCardArrow} alt="Influencer Image" className='w-16 h-16 hidden md:block' onClick={flipNextCard} />
                <div className="relative w-[30rem] aspect-[11/13] me-12">
                    {cards.map((card, index) => {
                        return (
                            <motion.div
                                key={card.id}
                                className="absolute bg-white p-4 rounded-2xl flex flex-col gap-14 w-full shadow-xl border border-gray-500 h-full"
                                style={{
                                    transformOrigin: "right center",
                                }}

                                animate={{
                                    right: index * -CARD_OFFSET,
                                    scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                                    zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                                }}
                                transition={{
                                    duration: .5,
                                }}
                            >
                                {card.content}
                            </motion.div>
                        );
                    })}
                </div>
                <Image src={JoinMastersCardArrow} alt="Influencer Image" className='w-16 h-16 hidden md:block rotate-180' onClick={flipBackCard} />

            </div>
        </div>
    );
};
