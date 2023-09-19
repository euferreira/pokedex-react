export interface PokemonBase {
    name: string;
    url: string;
}

export interface PokemonResponse {
    count: number;
    next: string;
    previous?: string;
    results: PokemonBase[];
}

export interface Pokemon {
    name: string;
    order: number;
    id: number;
    sprites: Sprites;
    types: Type[];
}

export interface Sprites {
    front_default: string;
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}
