import Ionicons from "@expo/vector-icons/Ionicons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import ListPhotoEarth from "../../Components/ListPhotoEarth";
import LogoLoading from "../../Components/LogoLoading";
import api from "../../services/api";
import { key } from "../../services/key";

export default function EarthPolychromaticPhoto() {

    const [date, setDate] = useState(new Date());
    const [apiDate, setApiDate] = useState([]);
    const [epic, setEpic] = useState();
    const [msg, setMsg] = useState('');
    let data = format(date, 'yyyy-MM-dd');

    useEffect(() => {
        (async () => {
            api.get(`/EPIC/api/natural/date/${data}?api_key=${key}`)
                .then((response) => {
                    setEpic(response.data);
                })
                .catch(() => alert("Ocorreu um erro inesperado"))
        })()
    }, [date])

    useEffect(() => {
        (async () => {
            api.get(`/EPIC/api/natural/all?api_key=${key}`)
                .then((response) => {
                    setApiDate(response.data);
                    setDate(new Date(response.data[0].date));
                })
                .catch(() => alert("Ocorreu um erro ao buscar datas."))
        })()
    }, [])

    function onChange(event, selectedDate) {

        const apiDates = apiDate.map(item => item.date.split('T')[0]);
        let data = format(selectedDate, 'yyyy-MM-dd')

        if (!apiDates.includes(data)) {
            setMsg("Não consta nenhum registro nessa data.");
        }
        setDate(selectedDate);
    };

    const showMode = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: date,
            maximumDate: new Date(apiDate[0].date),
            minimumDate: new Date(apiDate[apiDate.length - 1].date),
        });
    };

    function renderList({ item }) {
        return <ListPhotoEarth item={item} />
    }

    return (
        <Container>
            <Wallpaper source={require("../../img/wallpaper3.jpg")}>

                {!apiDate[0]

                    ? <LogoLoading /> :

                    <Container2>
                        <ButtonBack pag={'Foto policromática da Terra'} />

                        <Subtitle>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo da espaçonave NOAA DSCOVR</Subtitle>

                        <ViewDate>
                            <Ionicons name="calendar-outline" size={28} color={'#FFF'} onPress={showMode} />
                            <TextDate>{format(date, 'dd/MM/yyyy')}</TextDate>
                        </ViewDate>


                        <ListImages
                            data={epic}
                            renderItem={renderList}
                            numColumns={2}
                            contentContainerStyle={{ alignItems: 'center' }}
                            ListEmptyComponent={<Message>{msg}</Message>}
                        />

                    </Container2>
                }

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

const Container2 = styled.View`
flex: 1;
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
padding: 1px 4px;
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