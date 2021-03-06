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

import { Card, Title, Paragraph } from 'react-native-paper';

import { getComments } from '../../infra/services/serviceAPI';

export default function BlogComments() {
    const [refreshing, setRefreshing] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const comments = await getComments(true);

            setComments(comments);
        })();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        (async () => {
            const comments = await getComments(true);

            setComments(comments);            

            setRefreshing(false);
        })();                
    });

    const Item = ({ title, text }) => (
        <Card style={styles.item}>
            <Card.Content>
                <Title style={styles.title}>{title}</Title>
                <Paragraph style={styles.text}>{text}</Paragraph>
            </Card.Content>
        </Card>
    );

    const renderItem = ({ item: { email, body } }) => <Item title={email} text={body} />;

    return (                
        <FlatList 
            data={comments} 
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
    text: {
        color: '#f4a261',
        fontSize: 12,        
    },        
});