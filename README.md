# App-theUniverse

### About:
This application has the functionality to show some information about the planets of the Solar System and some information extracted from a NASA API.

![App-theUniverse-home](https://github.com/felipesllopes/App-theUniverse/assets/99768939/51e7d32f-a5ad-47eb-be71-cd98310905f6)


### Home
This is the home screen of the application

![img1](https://github.com/felipesllopes/App-theUniverse/assets/99768939/5d5c4930-4db4-462c-9d19-9f54dcdd882f)


### Planetas do Sistema Solar
The first button presents the planets of the Solar System, where each one will contain its information and characteristics. The FlatList component was used to list the Planets, also a file containing the information of each one. By clicking on the chosen planet, another screen will open where it will contain the information.

![img2](https://github.com/felipesllopes/App-theUniverse/assets/99768939/1734daf2-a065-4135-aac7-ea201cefcc35)
![img3](https://github.com/felipesllopes/App-theUniverse/assets/99768939/2ab00b26-28f6-4169-ba49-6dc7245ea878)
![img4](https://github.com/felipesllopes/App-theUniverse/assets/99768939/921b9659-2e77-4323-a47a-94ee89da5969)


### Foto Astronômica do dia
This button opens a screen where the astronomical image of the day, made available by NASA, through the API, will be shown. The "Compartilhar" button gives the option to share the URL of the image.

![img5](https://github.com/felipesllopes/App-theUniverse/assets/99768939/8827671c-352e-4fb2-bfb5-432972c2358d)
![img6](https://github.com/felipesllopes/App-theUniverse/assets/99768939/f2b1257d-b21f-4a0d-82e5-6bbdf8d9cf7b)


### Imagens Rover em Marte
This button opens a screen where images provided by NASA, through the API, of the missions on Mars will be shown. The Martian day (sol), the rover and the camera used must be informed. A list will show all images related to the search. It is also possible to open the image to have detailed information about the image and the Rover.

![img7](https://github.com/felipesllopes/App-theUniverse/assets/99768939/877fe7ff-6c37-4fc5-9e5e-28542fdab867)
![img8](https://github.com/felipesllopes/App-theUniverse/assets/99768939/72913b1d-b150-446c-9b09-0cf9efef5dd6)
![img9](https://github.com/felipesllopes/App-theUniverse/assets/99768939/1542ff1a-c0ed-49c7-a31b-4eb7cbf6193c)
![img10](https://github.com/felipesllopes/App-theUniverse/assets/99768939/a1f68bce-7750-460d-ad76-b5a766c6aa4c)
![img11](https://github.com/felipesllopes/App-theUniverse/assets/99768939/0ff4ad7b-3c36-4f32-ba5a-047e4a72e064)



### Foto policromática da Terra
This button opens a screen where the polychromatic image of the Earth taken by the NOAA DSCOVR satellite will be shown. Contains a picker where all the shooting dates will be shown. Each date corresponds to a different image.

![img12](https://github.com/felipesllopes/App-theUniverse/assets/99768939/a7cd65b8-4a58-4181-afa0-2f7dcce44843)
![img13](https://github.com/felipesllopes/App-theUniverse/assets/99768939/5cfbb5ee-f31c-48c5-a0f8-4f76afe42a31)
![img14](https://github.com/felipesllopes/App-theUniverse/assets/99768939/2664498b-9c21-430d-a805-a6aa9deeca89)



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
