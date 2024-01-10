
export interface ResponseTodoBody {
    id: string
    order: number
    title: string
    done: boolean
    createdAt: string
    updatedAt: string
}

export interface ResponsePokemonBody {
    count :number,
    next : string,
    previous : string,
    results : PokemonItem[]
}
export interface PokemonItem {
    name : string,
    url : string
}

export interface ResponsePokemonBody {
    abilities : [],
    base_experience: number,
    forms : [],
    game_indices : [],
    held_items : [],
    height : number,
    id : number,
    is_default : boolean,
    location_area_encounters : string,
    moves : [],
    name : string,
    order : number,
    past_abilities : [],
    past_types : [],
    species : {},
    sprites : PokemonSprites,
    stats : [],
    types : PokemonType[],
    weight : number
}

export interface PokemonType {
    slot : number,
    type : PokemonItem
}
export interface PokemonSprites {
    back_default : string,
    back_female : string,
    back_shiny : string,
    back_shiny_female :string,
    front_default : string,
    front_female : string,
    front_shiny : string,
    front_shiny_female : string,
}
export interface PokemonDetail {
    name : string ,
    types : PokemonType[],
    sprites : PokemonSprites,
}