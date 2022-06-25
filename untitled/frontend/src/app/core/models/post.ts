export interface IPost {
        id: string;
        title: string;
        subtitle: string;
        body: string;
        image_url: any;
    }



export interface IPostResponse{
    results:IPost[];
    }
