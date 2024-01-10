import ky from 'ky';

export const api = ky.create({
    headers: {
        'content-type': 'application/json',
    },
});

export const interiorApi = api.extend({
    headers: {
        'apikey': import.meta.env.VITE_API_KEY,
        'username': import.meta.env.VITE_USER,
    },
    prefixUrl: import.meta.env.VITE_URL,
});

export const pokemonApi = api.extend({
    prefixUrl: import.meta.env.VITE_URL_POKEMON
});
