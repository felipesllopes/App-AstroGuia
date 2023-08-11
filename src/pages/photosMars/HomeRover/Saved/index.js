import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import ListPhotosMars from "../../../../Components/ListPhotosMars";
import { Container, Screen, Wallpaper } from "../../../../Components/styledBackgroundMars";
import { getItem } from "../../../../Storage/asyncStorage";

export default function Saved() {

    const [list, setList] = useState();
    const focus = useIsFocused();

    useEffect(() => {
        (async () => {
            setList(await getItem());
        })()
        console.log(list);
    }, [focus])

    function returnList({ item }) {
        return (<ListPhotosMars data={item} />)
    }

    return (
        <Container>
            <Wallpaper source={require('../../../../img/martian.png')}>
                <Screen>

                    <FlatList
                        data={list}
                        renderItem={returnList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                    />

                </Screen>
            </Wallpaper>
        </Container>
    )
}

const FlatList = styled.FlatList`

`;