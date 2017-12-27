# BackTest
Condor labs test. Backend section, this repository has an API REST made in Node js 
## Quick start
1) Clone this repository 
2) Run  in bash: 
```
cd BackTest
cd Back Test
```
3) Ask for the file **.env** is provided by admin and *paste* this file in the folder Back Test



4) Run in bash: 
```
npm install
node server.js
```
5) In your browser http://localhost:3000/api and use anywhere route
 **Get:** ``/providers``
  **Getbyid:** ``/provider/:id``
  **Update:** ``/provider/edit/:id``
  **Post:** ``/provider/add``
  **Delete:** ``/provider/delete/:id``
*To use the post or put routes I recommend postman, it is very useful to send the Json from the body of the request * 
 ## Unit Test:

Run in bash ``Npm test``
 
