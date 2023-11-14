# App-AstroGuia

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99768939/269723664-e70bfdb2-092b-44df-acc7-077f475f3ec2.png" alt="Logo" width="200" height="200">


<br/>

### About:
This application has the functionality to show some information about the planets of the Solar System and some information extracted from a NASA API.

<br/>

### Home
This is the home screen of the application

![img2](https://github.com/felipesllopes/App-AstroGuia/assets/99768939/5c746b4c-a325-4240-bd7e-57a2ab7172d7)

<br/>

### Planetas do Sistema Solar
The first button presents the planets of the Solar System, where each one will contain its information and characteristics. The FlatList component was used to list the Planets, also a file containing the information of each one. By clicking on the chosen planet, another screen will open where it will contain the information.


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/0addc460-8bf8-42cf-b6ed-62c1d237ba9d


<br/>

### Foto Astronômica do dia


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/fd677574-9b77-4768-98d3-8a5564d9831d


<br/>

### Imagens Rover em Marte
This button opens a screen where images provided by NASA, through the API, of the missions on Mars will be shown. The Martian day (sol), the rover and the camera used must be informed. A list will show all images related to the search. It is also possible to open the image to have detailed information about the image and the Rover.


- Curiosity:


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/5b560c05-9fa5-4000-b92e-6a39437482ad


- Opportunity:


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/fba45fef-d2ab-4237-a5d6-02a8f831f2aa


- Spirit:


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/69dea464-db46-4044-a59a-c4aab58cb931


<br/>

### Foto policromática da Terra
This button opens a screen where the polychromatic image of the Earth taken by the NOAA DSCOVR satellite will be shown. Contains a picker where all the shooting dates will be shown. Each date corresponds to a different image.


https://github.com/felipesllopes/App-AstroGuia/assets/99768939/d5650812-b21f-497e-9a9c-121190d8ee26


<br/>

### Technologies used:

- Javascript
- React Native
- Node.Js
- Expo
- Axios


 <br/>

### Saved media:

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99768939/269716852-2d0abb19-589f-4b10-a8fe-f1d6ad358278.jpg" alt="Galery" width="214" height="371"> <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99768939/269716850-f2449070-89da-4d67-ad6b-25a36f988b1c.jpg" alt="Galery" width="214" height="371"> <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99768939/269716848-51d36c10-c54a-4dc8-95c8-294826d75fb7.jpg" alt="Galery" width="214" height="371"> <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99768939/269716844-62337f6c-20b9-409f-9795-9480d9ca9f51.jpg" alt="Galery" width="214" height="371">



<br/>

### API and Services used

<table>
 <tr>
  <td>API</td>
  <td>Services</td>
 </tr>
 <tr>
  <td><a href="https://api.nasa.gov/" target="_blank">NASA Open APIs</a></td>
  <td>
   <ul>
    <li>APOD</li>
    <li>Epic</li>
    <li>Mars Rover Photos</li>
   </ul>
  </td>
 </tr>
</table>


<br/>

### Used Libraries: 

<table>
  <tr>
    <td>Library</td>
    <td>Version</td>
    <td>Description</td>
  </tr>
   <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/async-storage/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjwoeemBhCfARIsADR2QCvEshr6Xc9EIJgHd8zg8AB1C2FQZJsiHy0J4LACgvYHaVEHyVG5guAaAlFWEALw_wcB" target="_blank">Async Storage</a></td>
     <td>1.17.11</td>
    <td>Database Service</td>
  </tr>
  <tr>
    <td><a href="https://github.com/react-native-datetimepicker/datetimepicker" target="_blank">Datetimepicker</a></td>
    <td>6.7.3</td>
    <td>Select date and time</td>
  </tr>
 <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/picker/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw2TLV5EtHECEMJyTO0nS1fFAUSFhQcGNJomPp4sM7o_5simasrHOnwaAgq3EALw_wcB" target="_blank">Picker</a></td>
    <td>2.4.8</td>
    <td>Component to choose different options</td>
  </tr>
   <tr>
    <td><a href="https://reactnavigation.org/" target="_blank">React Navigation</a>: <br/>
        <a href="https://reactnavigation.org/docs/stack-navigator" target="_blank">Stack</a>, 
        <a href="https://reactnavigation.org/docs/bottom-tab-navigator" target="_blank">Botton Tabs</a> </td>
    <td></td>
    <td>Navigation between screens</td>
  </tr>
    <tr>
    <td><a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a></td>
      <td>1.3.5</td>
    <td>Request and consume API</td>
    </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/date-fns" target="_blank">Date-fns</a></td>
    <td>2.30.0</td>
    <td>Date formatting</td>
  </tr>
  <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/filesystem/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw2lIm9MUJRnFUxNrhVZHVsU0W9aDUqfCGqKaFLxFX9FOA6Al4kiPDAaAnZuEALw_wcB" target="_blank">Expo FileSystem</a></td>
      <td>15.2.2</td>
    <td>Library that provides access to the local file system on the device</td>
    </tr>
  <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/media-library/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw08IepfvdkG2Eo0TsOD3CeN54CC3hw53sd47oKUjTi_VnHXf09fu3caAqBnEALw_wcB" target="_blank">Expo MediaLibrary</a></td>
      <td>15.2.3</td>
    <td>Library that provides access to the device's media library</td>
    </tr>
    <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/notifications/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw13fEZJj31F7ZqZ0l_0Ca3oz2wO-Xi9v7ZpvYZ5yzW_wUCaxxbnwrsaAjLhEALw_wcB" target="_blank">Expo Notification</a></td>
      <td>0.18.1</td>
    <td>A library to fetch notification tokens</td>
   </tr>
    <tr>
    <td><a href="https://docs.expo.dev/guides/permissions/" target="_blank">Permissions</a></td>
      <td>14.1.1</td>
    <td>Learn about configuring and adding permissions in an app config file</td>
   </tr>
   <tr>
    <td><a href="https://docs.expo.dev/versions/latest/sdk/sharing/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw14sGG1YggBkQSf1rgK3Zw0mOL0WNAugnswLlB0ra-cwPY0ZQNcrwUaApYGEALw_wcB" target="_blank">Expo Sharing</a></td>
      <td>11.2.2</td>
    <td>Library that provides implementing sharing files</td>
   </tr>
    <tr>
    <td><a href="https://redux.js.org/introduction/getting-started" target="_blank">Redux</a></td>
      <td>8.1.2</td>
    <td>Redux is a predictable state container for JavaScript apps</td>
   </tr>
    <tr>
    <td><a href="https://styled-components.com/" target="_blank">Styled-components</a></td>
      <td>6.0.7</td>
    <td>Component styling</td>
    </tr>
</table>


<br/>


To copy and test the project, run:

```
git clone https://github.com/felipesllopes/App-AstroGuia.git
```

<br/>

Now we must access the folder where the project is contained and run the expo command:

```
cd App-AstroGuia

npx expo start
```

<br/>


## Click here to download the project:
[![Download](https://img.shields.io/badge/Download-07C160?style=for-the-badge&logo=download&logoColor=white)](https://drive.google.com/file/d/10cKCZpRUmlhOJnSE7CpxQi8teMupJam5/view?usp=sharing)
