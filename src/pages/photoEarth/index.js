import Ionicons from "@expo/vector-icons/Ionicons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import ListPhotoEarth from "../../Components/ListPhotoEarth";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoEarth() {

    const [date, setDate] = useState(new Date());
    const [epic, setEpic] = useState();
    let data = format(date, 'yyyy-MM-dd');

    useEffect(() => {
        (async () => {
            api.get(`/EPIC/api/natural/date/${data}?api_key=${key}`)
                .then((response) => {
                    setEpic(response.data);
                })
                .catch(() => {
                    alert("Ocorreu um erro inesperado");
                })
        })()
    }, [date])

    function onChange(event, selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: date,
            maximumDate: new Date(),
        });
    };

    function renderList({ item }) {
        return <ListPhotoEarth item={item} />
    }

    return (
        <Container>
            <Wallpaper source={require("../../img/wallpaper3.jpg")}>

                <ButtonBack pag={'Foto policromática da Terra'} />

                <Subtitle>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo da espaçonave NOAA DSCOVR</Subtitle>

                <ViewDate>
                    <Ionicons name="calendar-outline" size={28} color={'#FFF'} onPress={showMode} />
                    <TextDate> {format(date, 'dd/MM/yyyy')}</TextDate>
                </ViewDate>

                <ListImages
                    data={epic}
                    renderItem={renderList}
                    numColumns={2}
                    contentContainerStyle={{ alignItems: 'center' }}
                    ListEmptyComponent={<Message>Não consta nenhum registro nessa data.</Message>}
                />

            </Wallpaper>
        </Container>
    );


}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #003;
`

const Wallpaper = styled.ImageBackground`
flex: 1;
width: 100%;
`;

const Subtitle = styled.Text`
font-size: 17px;
color: white;
text-align: center;
margin: 10px 3px 15px;
`;

const ViewDate = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`;

const TextDate = styled.Text`
font-size: 16px;
background-color: #FFF;
border-radius: 5px;
padding: 1px 2px;
margin-left: 5px;
`;

const ListImages = styled.FlatList`
`;

const Message = styled.Text`
font-size: 18px;
color: #FFF;
text-align: center;
margin-top: 50%;
font-style: italic;
`;

const Loading = styled.ActivityIndicator`
flex: 1;
justify-content: center;
`;