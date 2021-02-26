import AsyncStorage from '@react-native-async-storage/async-storage';

const TABLE_POSTS = '@posts';
const TABLE_ALBUMS = '@albums';
const TABLE_COMMENTS = '@comments';
const TABLE_PHOTOS = '@photos';

export const getPosts = async () => {    
    const data = await AsyncStorage.getItem(TABLE_POSTS);

    return data ? JSON.parse(data) : [];
}

export const savePosts = async (data) => {    
    const dataParsed = JSON.stringify(data);

    await AsyncStorage.setItem(TABLE_POSTS, dataParsed);    
}

export const getAlbums = async () => {    
    const data = await AsyncStorage.getItem(TABLE_ALBUMS);

    return data ? JSON.parse(data) : [];
}

export const saveAlbums = async (data) => {    
    const dataParsed = JSON.stringify(data);

    await AsyncStorage.setItem(TABLE_ALBUMS, dataParsed);    
}

export const getComments = async () => {    
    const data = await AsyncStorage.getItem(TABLE_COMMENTS);

    return data ? JSON.parse(data) : [];
}

export const saveComments = async (data) => {
    const dataParsed = JSON.stringify(data);

    await AsyncStorage.setItem(TABLE_COMMENTS, dataParsed);    
}

export const getPhotos = async () => {
    const data = await AsyncStorage.getItem(TABLE_PHOTOS);

    return data ? JSON.parse(data) : [];
}

export const savePhotos = async (data) => {
    const dataParsed = JSON.stringify(data);

    await AsyncStorage.setItem(TABLE_PHOTOS, dataParsed);    
}