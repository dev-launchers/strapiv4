declare const _default: {
    kind: string;
    collectionName: string;
    info: {
        singularName: string;
        pluralName: string;
        displayName: string;
    };
    options: {
        draftAndPublish: boolean;
        timestamps: boolean;
    };
    pluginOptions: {
        'content-manager': {
            visible: boolean;
        };
        'content-type-builder': {
            visible: boolean;
        };
    };
    attributes: {
        action: {
            type: string;
            required: boolean;
        };
        date: {
            type: string;
            required: boolean;
        };
        user: {
            type: string;
            relation: string;
            target: string;
        };
        payload: {
            type: string;
        };
    };
};
export default _default;
