# Information about API:
### Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date

# Instructions about SetUp:

First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor.
You will need a code editor and mongoDB setup on your computer.
We will use postman to check the api is working or not,So download postman on your computer.

1.Now use this **http://localhost:4100/api/v1/doctor/register** route to register doctor in API and add the info as shown in image

![Screenshot (2)](https://github.com/sdmohapatra7/Hospital_API/assets/121569281/ec98ee81-e02f-454f-b5db-d1424f2bc8f5)

2.Use this **http://localhost:4100/api/v1/doctor/login** to login as a doctor and add info as shown in image

![Screenshot (3)](https://github.com/sdmohapatra7/Hospital_API/assets/121569281/87bc2893-f32a-42d7-93d5-9246d907cead)


3.Use this **http://localhost:4100/api/v1/patient/register** and add the token in authorization area which is recieved in second point

![Screenshot (4)](https://github.com/sdmohapatra7/Hospital_API/assets/121569281/b66fd4b9-379d-4e9f-a278-b1a902441b04)


4. Use this **http://localhost:4100/api/v1/patients/62c31cc86a84003324d04cb5/create_report** to create report and add status you can see the types of 
   status in report model.

![image](https://user-images.githubusercontent.com/74106414/236742216-a4684b3b-7e2f-4c2e-a24a-0cf0818d7701.png)


5. Use this **http://localhost:4100/api/v1/patients/62c31cc86a84003324d04cb5/all_reports** to get all the reports.

![image](https://user-images.githubusercontent.com/74106414/236742229-ad057a9b-3b03-4496-bf55-36f1bced526f.png)
