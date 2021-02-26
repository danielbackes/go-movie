import { 
    getPosts as getStorePosts, 
    savePosts as saveStorePosts,
    getAlbums as getStoreAlbums, 
    saveAlbums as saveStoreAlbums,
    getComments as getStoreComments, 
    saveComments as saveStoreComments,
    getPhotos as getStorePhotos, 
    savePhotos as saveStorePhotos
} from '../stores/storeAPI';

const URI_API = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (updateCache = false) => {
    try {
        let data = await getStorePosts();        

        if (data.length === 0 || updateCache) {
            const response = await fetch(`${URI_API}/posts`);                
            
            data = await response.json();                    

            await saveStorePosts(data);
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const getAlbums = async (updateCache = false) => {
    try {
        let data = await getStoreAlbums();        

        if (data.length === 0 || updateCache) {
            const response = await fetch(`${URI_API}/albums`);
            
            data = await response.json();

            await saveStoreAlbums(data);
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const getComments = async (updateCache = false) => {
    try {
        let data = await getStoreComments();        

        if (data.length === 0 || updateCache) {
            const response = await fetch(`${URI_API}/comments`);
            
            data = await response.json();

            await saveStoreComments(data);
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const getPhotos = async (updateCache = false) => {
    try {
        let data = await getStorePhotos();        

        if (data.length === 0 || updateCache) {
            const response = await fetch(`${URI_API}/photos`);
            
            data = await response.json();

            await saveStorePhotos(data);
        }

        return data;
    } catch (error) {
        return error;
    }
}