// import { NxSanityGeneratorSchema } from '../nx-sanity/schema'
export interface StudioGeneratorSchema {
    project: string;
    dataset?: string | 'develop' |'production';
    projectPath?: string;
    template?: string | "clean";
    visibility?: 'public' | 'private' ;
    createProject?: string;
    tags?: string;
}