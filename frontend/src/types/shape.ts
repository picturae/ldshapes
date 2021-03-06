
export type UpdateSettingFieldFunction = (field: string, value: any) => void;

export type AddSettingRowFunction = (field: string, row: any) => void;

export type RemoveSettingRowFunction = (field: string, index: number) => void;

export type GetFullIriFunction = (iri: string) => string;

export type GetShorthandFromFullIriFunction = (iri: string) => string;

export type FetchShapesFunction = () => void;
