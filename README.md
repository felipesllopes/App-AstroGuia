# App-theUniverse

### About:
This application has the functionality to show some information about the planets of the Solar System and some information extracted from a NASA API.

![App-theUniverse-home](https://user-images.githubusercontent.com/99768939/233464504-6f671be1-beb4-4b9d-aeca-1199a62067cd.jpg)



### Home
This is the home screen of the application

![App-theUniverse-home](https://user-images.githubusercontent.com/99768939/233472004-868a2c28-ee2c-46b7-96d1-3ee29567ef55.png)



### Planetas do Sistema Solar
The first button presents the planets of the Solar System, where each one will contain its information and characteristics. The FlatList component was used to list the Planets, also a file containing the information of each one. By clicking on the chosen planet, another screen will open where it will contain the information.

![App-theUniverse-planets](https://user-images.githubusercontent.com/99768939/233465918-8479b00a-c129-495e-9c1c-17ba4ce3587f.png)



### Foto Astronômica do dia
This button opens a screen where the astronomical image of the day, made available by NASA, through the API, will be shown. The "Compartilhar" button gives the option to share the URL of the image.

![App-theUniverse-astronomicalPhoto](https://user-images.githubusercontent.com/99768939/233466615-b972c63c-53f9-4dd6-b5e6-176b424186de.png)



### Imagens Rover em Marte
This button opens a screen where images provided by NASA, through the API, of the missions on Mars will be shown. The Martian day (sol), the rover and the camera used must be informed. A list will show all images related to the search. It is also possible to open the image to have detailed information about the image and the Rover.

![App-theUniverse-roversMars](https://user-images.githubusercontent.com/99768939/233800877-c5e1f9d6-118c-45a1-bf11-40eda6d6ce12.png)



### Foto policromática da Terra
This button opens a screen where the polychromatic image of the Earth taken by the NOAA DSCOVR satellite will be shown. Contains a picker where all the shooting dates will be shown. Each date corresponds to a different image.

![App-theUniverse-photoEarth](https://user-images.githubusercontent.com/99768939/233470446-5ab1360f-ccb0-47af-96c1-0a6fc728c4f4.png)



### Technologies used:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


### API used
[NASA Open APIs](https://api.nasa.gov/)
 
### Services used:

- APOD
- EPIC
- Mars Rover Photos


### Example of sharing each service:

- https://api.nasa.gov/EPIC/archive/natural/2023/04/21/png/epic_1b_20230421002712.png?api_key=euvql4khtokVFQr78Cnf6bInZyEMfR1igp4aIDex
- Imagem astronômica do dia: NGC 1333: Stellar Nursery in Perseus 
https://apod.nasa.gov/apod/image/2304/NGC1333HST33rd_800.png
- Foto rover Curiosity em Marte. 
http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00050/opgs/edr/fcam/FRA_401936576EDR_F0042956FHAZ00305M_.JPG

### installations (using expo):

 - To create the project:
 
 npx create-expo-app theUniverse
 
 - To add axios:
 
 npm install axios
 
 - For navigation between screens:
 
 npx expo install @react-native-picker/picker
 
 npm install @react-navigation/native
 
 npx expo install react-native-screens react-native-safe-area-context
 
 npm install @react-navigation/native-stack
 
 
 ### Documentation for navigation:
 
 [ReactNavigation](https://reactnavigation.org/docs/getting-started/)



https://user-images.githubusercontent.com/99768939/236703429-c217a4bf-f2a9-418f-bf72-4447e0574b9b.mp4

