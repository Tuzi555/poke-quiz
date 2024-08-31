"use client";

import { useState } from "react";
import { toast } from "sonner";
import { usePokemonQuery } from "~/lib/queries/pokemon";
import { capitalizeString, getPokemonIds } from "~/lib/utils";
import { Pokemon, PokemonSkeleton } from "./pokemon";
import { ModeToggle } from "~/components/theme-toggle";

export function GuessWhichOne() {
    const [pokemonIds, setPokemonIds] = useState(getPokemonIds);
    const [streak, setStreak] = useState(0);
    const queryOne = usePokemonQuery(pokemonIds[0]!);
    const queryTwo = usePokemonQuery(pokemonIds[1]!);
    const firstOneIsTheOne = Math.round(Math.random()) === 0;

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setStreak((value) => {
                return value + 1;
            });
            toast.success(
                <div className="flex w-full flex-row justify-center">
                    <h1 className="text-center text-2xl">
                        🎉 That is correct!
                    </h1>
                </div>
            );
        } else {
            setStreak(0);
            toast.error(
                <div className="flex w-full flex-row justify-center">
                    <h1 className="text-center text-2xl">
                        🫣 That is incorrect, try again!
                    </h1>
                </div>
            );
        }

        setPokemonIds(getPokemonIds);
    };

    return (
        <>
            <div className="flex w-full flex-row justify-between border border-b-primary bg-accent p-8">
                <ModeToggle />
                {queryOne.isSuccess && queryTwo.isSuccess ? (
                    <h1 className="text-4xl font-bold">
                        Which one is{" "}
                        {capitalizeString(
                            firstOneIsTheOne
                                ? queryOne.data.name
                                : queryTwo.data.name
                        )}
                        ?
                    </h1>
                ) : (
                    <h1 className="text-4xl font-bold">
                        Which one is _______?
                    </h1>
                )}
                <div />
            </div>
            <div className="mt-12 flex h-full w-full flex-col items-center">
                <div className="flex justify-center gap-12 rounded-md bg-secondary p-12">
                    {queryOne.isSuccess && queryTwo.isSuccess ? (
                        <>
                            <button
                                onClick={() => handleAnswer(firstOneIsTheOne)}
                            >
                                <Pokemon
                                    imgUrl={queryOne.data.sprites.front_default}
                                />
                            </button>
                            <button
                                onClick={() => handleAnswer(!firstOneIsTheOne)}
                            >
                                <Pokemon
                                    imgUrl={queryTwo.data.sprites.front_default}
                                />
                            </button>
                        </>
                    ) : (
                        <>
                            <PokemonSkeleton />
                            <PokemonSkeleton />
                        </>
                    )}
                </div>
                <div className="pt-4">
                    <h2>Your current streak is: {streak}</h2>
                </div>
            </div>
        </>
    );
}
