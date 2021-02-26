import React, { 
    useEffect,
    useState,
    useCallback
} from 'react';

import {     
    RefreshControl,     
    StyleSheet,
    FlatList
} from 'react-native';

import { Card, Title } from 'react-native-paper';

import { getAlbums } from '../../infra/services/serviceAPI';

export default function BlogAlbums() {
    const [refreshing, setRefreshing] = useState(false);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        (async () => {
            const albums = await getAlbums(true);

            setAlbums(albums);
        })();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        (async () => {
            const albums = await getAlbums(true);

            setAlbums(albums);            

            setRefreshing(false);
        })();                
    });

    const Item = ({ title }) => (
        <Card style={styles.item}>
            <Card.Content>
                <Title style={styles.title}>{title}</Title>                
            </Card.Content>
        </Card>
    );

    const renderItem = ({ item: {title} }) => <Item title={title} />;

    return (                
        <FlatList 
            data={albums} 
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