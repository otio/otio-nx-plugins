export interface StudioGeneratorSchema {
    project: string;
    dataset?: string | 'develop' |'production';
    outputPath?: string;
    template?: string | "clean";
    visibility?: 'public' | 'private' ;
    createProject?: string;
}