import type { ReactNode } from "react";
import { Card, CardContent } from "~/components/ui/card";

export function Pokemon({ imgUrl }: { imgUrl: string }) {
    return (
        <PokemonCard>
            <img className="h-52 w-52" src={imgUrl} />
        </PokemonCard>
    );
}

export function PokemonSkeleton() {
    return (
        <PokemonCard>
            <div className="h-52 w-52" />
        </PokemonCard>
    );
}

function PokemonCard({ children }: { children: ReactNode }) {
    return (
        <Card className="bg-card hover:bg-primary">
            <CardContent>{children}</CardContent>
        </Card>
    );
}
