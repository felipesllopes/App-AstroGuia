# App-theUniverse

### About:
This application has the functionality to show some information about the planets of the Solar System and some information extracted from a NASA API.

![App-theUniverse-image](https://github.com/felipesllopes/App-theUniverse/assets/99768939/5f26f1ff-fca0-4ac6-a7f9-82ab5a037654)



### Home
This is the home screen of the application

![home](https://github.com/felipesllopes/App-theUniverse/assets/99768939/3a5f2277-b16f-4ee8-ac08-e541a0b286ab)



### Planetas do Sistema Solar
The first button presents the planets of the Solar System, where each one will contain its information and characteristics. The FlatList component was used to list the Planets, also a file containing the information of each one. By clicking on the chosen planet, another screen will open where it will contain the information.

![planets](https://github.com/felipesllopes/App-theUniverse/assets/99768939/1fd96697-b54a-4993-b21e-e59a81dd46b4)



### Foto Astronômica do dia
This button opens a screen where the astronomical image of the day, made available by NASA, through the API, will be shown. The "Compartilhar" button gives the option to share the URL of the image.

![astronomyc-photo](https://github.com/felipesllopes/App-theUniverse/assets/99768939/f716d8e5-6021-4b79-919a-b5c1f52f92eb)



### Imagens Rover em Marte
This button opens a screen where images provided by NASA, through the API, of the missions on Mars will be shown. The Martian day (sol), the rover and the camera used must be informed. A list will show all images related to the search. It is also possible to open the image to have detailed information about the image and the Rover.

![rovers-Marte](https://github.com/felipesllopes/App-theUniverse/assets/99768939/e8ff1e52-e134-4c0d-8587-24bd30e2be63)



### Foto policromática da Terra
This button opens a screen where the polychromatic image of the Earth taken by the NOAA DSCOVR satellite will be shown. Contains a picker where all the shooting dates will be shown. Each date corresponds to a different image.

![earth-photo](https://github.com/felipesllopes/App-theUniverse/assets/99768939/5c67cec1-6440-47ef-aa6d-9ea4a4f380ec)



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
  
 npm install axios
  
 npx expo install @react-native-picker/picker
 
 npm install @react-navigation/native
 
 npx expo install react-native-screens react-native-safe-area-context
 
 npm install @react-navigation/native-stack
 
 
 ### Documentation for navigation:
 
 [ReactNavigation](https://reactnavigation.org/docs/getting-started/)


### To download the project to your computer:

#### To clone the repository:
- git clone https://github.com/felipesllopes/App-theUniverse.git

#### Access the repository folder:
- cd App-theUniverse

#### Install dependencies:
- yarn add expo

#### Run the command:
- npx expo start

![cmd](https://github.com/felipesllopes/App-theUniverse/assets/99768939/06a6cf89-62b7-494f-acd4-291c47990efd)


To physically execute the project on your cell phone, just install the Expo.go app from the play store and scan the QR Code.

To run in Android Studio, just access by IP or by pressing the "a" key.
