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

1.Now use this **http://localhost:4100/api/v1/doctors/register** route to register doctor in API and add the info as shown in image

![image](https://user-images.githubusercontent.com/74106414/236742135-8da37d9f-7495-4f18-8ae4-f0d33e818ec9.png)

2.Use this **http://localhost:4100/api/v1/doctors/login** to login as a doctor and add info as shown in image

![image](https://user-images.githubusercontent.com/74106414/236742179-4670c686-f2c3-467d-a8bb-863141196c1c.png)

3.Use this **http://localhost:4100/api/v1/patients/register** and add the token in authorization area which is recieved in second point

![image](https://user-images.githubusercontent.com/74106414/236742199-0f9a71eb-a2a2-4e4f-889d-000a156e7816.png)

4. Use this **http://localhost:4100/api/v1/patients/62c31cc86a84003324d04cb5/create_report** to create report and add status you can see the types of 
   status in report model.

![image](https://user-images.githubusercontent.com/74106414/236742216-a4684b3b-7e2f-4c2e-a24a-0cf0818d7701.png)


5. Use this **http://localhost:4100/api/v1/patients/62c31cc86a84003324d04cb5/all_reports** to get all the reports.

![image](https://user-images.githubusercontent.com/74106414/236742229-ad057a9b-3b03-4496-bf55-36f1bced526f.png)
