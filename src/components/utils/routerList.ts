interface router {
    name : string,
    link : string,
}

export const routerList : router[] = [
    {
        name : "main",
        link :"/"
    },
    {
        name : "about",
        link : "#/about"
    }
]