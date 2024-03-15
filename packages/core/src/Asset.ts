import { basename, dirname, extname } from 'upath';
import { extractTagsFromFileName } from './utils/extractTagsFromFileName';

export interface AssetOptions
{
    path: string;
    transformName?: string;
    lastModified?: number;
    isFolder?: boolean;
}

export class Asset
{
    static defaultOptions: AssetOptions = {
        path: '',
        isFolder: false,
    };

    // file based..
    parent: Asset | null = null;
    children: Asset[] = [];
    ignoreChildren = false;
    lastModified = 0;

    // transform based..
    transformParent: Asset | null = null;
    transformChildren: Asset[] = [];

    transformName: string | null = null;

    metaData: Record<string, any> = {};
    inheritedMetaData: Record<string, any> = {};
    allMetaData: Record<string, any> = {};

    settings?: Record<string, any>;

    isFolder: boolean;
    path = '';
    state: 'deleted' | 'added' | 'modified' | 'normal' = 'added';

    constructor(options: AssetOptions)
    {
        options = { ...Asset.defaultOptions, ...options };

        this.path = options.path;
        this.isFolder = options.isFolder as boolean;
        this.transformName = options.transformName || null;
        this.lastModified = options.lastModified || 0;

        // extract tags from the path
        extractTagsFromFileName(this.filename, this.metaData);
    }

    addChild(asset: Asset)
    {
        this.children.push(asset);

        asset.parent = this;

        asset.inheritedMetaData = { ...this.inheritedMetaData, ...this.metaData };

        asset.allMetaData = { ...asset.inheritedMetaData, ...asset.metaData };
    }

    removeChild(asset: Asset)
    {
        const index = this.children.indexOf(asset);

        if (index !== -1)
        {
            this.children.splice(index, 1);
            asset.parent = null;
        }
    }

    addTransformChild(asset: Asset)
    {
        this.transformChildren.push(asset);

        asset.transformParent = this;

        asset.inheritedMetaData = { ...this.inheritedMetaData, ...this.metaData };

        asset.allMetaData = { ...asset.inheritedMetaData, ...asset.metaData };

        asset.settings = this.settings;
    }

    get filename()
    {
        return basename(this.path);
    }

    get directory()
    {
        return dirname(this.path);
    }

    get extension()
    {
        return extname(this.path);
    }

    get rootAsset()
    {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let asset: Asset = this;

        while (asset.parent)
        {
            asset = asset.parent;
        }

        return asset;
    }

    get rootTransformAsset()
    {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let asset: Asset = this;

        while (asset.transformParent)
        {
            asset = asset.transformParent;
        }

        return asset;
    }

    getFinalTransformedChildren(asset: Asset = this, finalChildren: Asset[] = []): Asset[]
    {
        if (asset.transformChildren.length > 0)
        {
            for (let i = 0; i < asset.transformChildren.length; i++)
            {
                const child = asset.transformChildren[i];

                this.getFinalTransformedChildren(child, finalChildren);
            }
        }
        else
        {
            finalChildren.push(asset);
        }

        return finalChildren;
    }

    markParentAsModified(asset: Asset = this)
    {
        const parent = asset.parent;

        if (parent)
        {
            if (parent.state === 'normal')
            {
                parent.state = 'modified';
                parent.lastModified = asset.lastModified;
            }

            this.markParentAsModified(parent);
        }
    }
}

