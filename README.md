Sure! Here's your updated README with your name as the creator:


# MERN Job Portal – Created by Praveena Pantham

Welcome to my Job Portal project! This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to search and apply for jobs, and recruiters to post job openings.

## Table of Contents

* Project Overview
* Features
* Installation
* Usage
* Contributing
* License
* Author

## Project Overview

This job portal was developed by Praveena Pantham as a practical MERN stack project. The platform supports both job seekers and recruiters with a clean, modern UI and intuitive functionality.

## Features

* User registration, login, and role-based access (Student / Recruiter)
* Recruiters can post and manage job listings
* Students can search for jobs and apply
* Secure authentication using JWT and cookies
* File uploads for profile photos and resumes (via Cloudinary)
* Responsive design

## Installation

To run this project locally:

🛠 Backend Setup

1. Navigate to the backend directory:

   cd ./Backend

2. Install the dependencies:

   npm install

3. Create a .env file in the backend folder with the following (update with your actual credentials):

PORT=5000
MONGO\_URI=your\_mongo\_uri
JWT\_SECRET=your\_jwt\_secret
CLOUDINARY\_CLOUD\_NAME=your\_cloud\_name
CLOUDINARY\_API\_KEY=your\_api\_key
CLOUDINARY\_API\_SECRET=your\_api\_secret

4. Start the backend server:

   npm run dev

You should see:
Server is running on port 5000
MongoDB Connected...

💻 Frontend Setup

1. Navigate to the frontend directory:

   cd ./Frontend

2. Install dependencies:

   npm install

3. Start the frontend server:

   npm run dev

Default app URL: [http://localhost:5173](http://localhost:5173)

## Usage

* Open [http://localhost:5173](http://localhost:5173)
* Register as a Student or Recruiter
* Recruiters can create job posts
* Students can browse and apply to jobs

## Contributing

This project is personal, but feel free to fork it or build upon it for your own use or learning. Contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Developed by Praveena Pantham
GitHub: [ https://github.com/praveenapantham](https://github.com/praveenapantham)
LinkedIn: [https://www.linkedin.com/in/praveenapantham](https://www.linkedin.com/in/praveenapantham) 

