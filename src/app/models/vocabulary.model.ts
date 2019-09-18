export interface  Vocabulary {
    id: string;
    name: string;
    data: VocabularyPair[];
}

export interface VocabularyPair {
    language1: string;
    language2: string;
}
