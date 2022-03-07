

export interface AuthModel {
    id: string;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}