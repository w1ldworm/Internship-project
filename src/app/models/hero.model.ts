export interface Hero {
    id: number,
    name: string
}

export interface HeroList {
    count: number,
    next?: string,
    prev?: string,
    results: Hero[]
}
