import React, { 
    useEffect,
    useState,
    useCallback
} from 'react';

import {     
    RefreshControl, 
    StyleSheet,
    FlatList,
    Image
} from 'react-native';

import { Card, Title } from 'react-native-paper';

import { getPhotos } from '../../infra/services/serviceAPI';

export default function BlogPhotos() {
    const [refreshing, setRefreshing] = useState(false);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        (async () => {
            const photos = await getPhotos(true);

            setPhotos(photos);
        })();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        (async () => {
            const photos = await getPhotos(true);

            setPhotos(photos);            

            setRefreshing(false);
        })();                
    });

    const Item = ({ title, uri }) => (
        <Card style={styles.item}>
            <Card.Content>
                <Title style={styles.title}>{title}</Title>                
            </Card.Content>
        </Card>
    );

    const renderItem = ({ item: { title } }) => <Item title={title} />;

    return (                
        <FlatList 
            data={photos} 
            renderItem={renderItem} 
            keyExtractor={item => item.id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />        
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#2a9d8f',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
});