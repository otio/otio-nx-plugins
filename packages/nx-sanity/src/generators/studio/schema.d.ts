import { NxSanityGeneratorSchema } from '../nx-sanity/schema'
export interface StudioGeneratorSchema extends NxSanityGeneratorSchema {
    project: string;
    dataset?: string | 'develop' |'production';
    outputPath?: string;
    template?: string | "clean";
    visibility?: 'public' | 'private' ;
    createProject?: string;
}