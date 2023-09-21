import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { styled } from "styled-components/native";
import ListPhotosMars from "../../../Components/ListPhotosMars";
import { Container, Screen, Wallpaper } from "../../../Components/styledBackgroundMars";
import { useMyContext } from "../../../Context/Context";
import { getItem } from "../../../Storage/asyncStorage";

export default function Saved() {

    const focus = useIsFocused();
    const { sharedValue } = useMyContext();
    let data = [];

    useEffect(() => {
        (async () => {
            await getItem().then((item) => {
                item.forEach(async e => {
                    if (await e.rover.name === await sharedValue) {
                        data.push(e)
                    }
                });
            });
        })()
    }, [focus])

    function returnList({ item }) {
        return (<ListPhotosMars data={item} />)
    }

    return (
        <Container>
            <Wallpaper source={require('../../../img/martian.png')}>
                <Screen>

                    <FlatList
                        data={data}
                        renderItem={returnList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                    />

                </Screen>
            </Wallpaper>
        </Container>
    )
}

const FlatList = styled.FlatList``;