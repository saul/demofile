export interface IItemDefinition {
    itemName: string;
    className: string;
}
export declare const itemDefinitionIndexMap: {
    [itemIndex: string]: IItemDefinition | undefined;
};
export interface IPaintKit {
    name: string;
    tag: string;
}
export declare const paintKitIndexMap: {
    [paintKitIndex: string]: IPaintKit | undefined;
};
