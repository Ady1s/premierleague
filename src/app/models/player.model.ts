export interface Player {
    playerId: number
    info: Info
    nationalTeam: NationalTeam
    currentTeam?: CurrentTeam
    birth: Birth
    age: string
    name: Name
    id: number
    altIds: AltIds2
    previousTeam?: PreviousTeam
}

export interface Info {
    position: string
    shirtNum?: number
    positionInfo: string
    loan?: boolean
}

export interface NationalTeam {
    isoCode: string
    country: string
    demonym: string
}

export interface CurrentTeam {
    name: string
    club: Club
    teamType: string
    shortName: string
    id: number
    altIds: AltIds
}

export interface Club {
    name: string
    abbr: string
    id: number
}

export interface AltIds {
    opta: string
}

export interface Birth {
    date: Date
    country: Country
    place?: string
}

export interface Date {
    millis: number
    label: string
}

export interface Country {
    isoCode: string
    country: string
    demonym: string
}

export interface Name {
    display: string
    first: string
    middle?: string
    last: string
}

export interface AltIds2 {
    opta: string
}

export interface PreviousTeam {
    name: string
    club: Club2
    teamType: string
    shortName: string
    id: number
    altIds: AltIds3
}

export interface Club2 {
    name: string
    abbr: string
    source: string
    id: number
}

export interface AltIds3 {
    opta: string
}
