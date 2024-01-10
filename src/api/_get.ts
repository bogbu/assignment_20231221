import type {PokemonDetail, PokemonItem, ResponsePokemonBody, ResponseTodoBody} from "../interface/Res";
import {api, interiorApi, pokemonApi} from "./createKy";

export const getTodoList = async () => {
    try {
        const response = await interiorApi.get('todos').json<ResponseTodoBody[]>();
        return response;
    } catch (error) {
        throw new Error();
    }
}

export const getPokemonList = async () => {
    try {
        const response = await pokemonApi.get('').json<ResponsePokemonBody>();
        return response;
    } catch (error) {
        throw new Error();
    }
}

export const getPokemonItem = async (index: string): Promise<PokemonDetail> => {
    try {
        const extendApi = api.extend({
            prefixUrl: index
        });
        const response = await extendApi.get('').json<ResponsePokemonBody>();
        return {
            name: response.name, types: response.types, sprites: response.sprites
        };
    } catch (error) {
        throw new Error();
    }
}

export const loopPokemonList = async () => {
    let pokemonViewList: PokemonDetail[] = [];
    for(let i = 0; i< 20 ; i++ ) {
        await getPokemonItem(`https://pokeapi.co/api/v2/pokemon/${i+1}/`).then((item) => {
            pokemonViewList.push(item);
        });
    }
    return pokemonViewList;
}


export const deleteTodoList = async (id: string) => {
    try {
        const response = await interiorApi.delete(`todos/${id}`).json<ResponseTodoBody[]>();
        return response;
    } catch (error) {
        throw new Error();
    }
}