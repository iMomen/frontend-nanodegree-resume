// My Data
var bio = {
    "name": "Momen Zakaria",
    "role": "Senior UX Designer and Front-End Developer",
    "contacts": {
        "mobile": "+966541981279",
        "email": "coder@imomen.com",
        "github": "iMomenUI",
        "twitter": "@iMomenUI",
        "location": "Saudi Arabia"
    },
    "welcomeMessage": "Welcome on my resume :)",
    "skills": ["User Experience", "User Interface Design", "CSS", "HTML 5", "jQuery"],
    "biopic": "images/imomen-logo.png",
    "display": "displayBio()"

}

var education = {
    "schools": [
        {
            "name": "Mubarak Secondary School",
            "location": "Alexandria",
            "degree": "Secondary Degree",
            "majors": ["Math", "Physics", "History"],
            "dates": 2003,
            "url": ""
    },
        {
            "name": "Faculty of Science",
            "location": "Assuit",
            "degree": "Bechalor Degree",
            "majors": ["Chemistry", "Physics", "History"],
            "dates": 2009,
            "url": "http://www.aun.edu.eg/arabic/"
    }
],
    "onlineCourses": [
        {
            "title": "Computer Science 101",
            "school": "Stanford University",
            "date": "October 2014",
            "url": "https://prod-cert-bucket.s3.amazonaws.com/downloads/dd318c2dc4d94578ad8c8256c81b0740/Certificate.pdf"
    },
        {
            "title": "Up and Running with AngularJS",
            "school": "Lynda",
            "date": "December 2014",
            "url": "http://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html"
    },
        {
            "title": "Nanodegree, Front end web developer",
            "school": "Udacity ",
            "date": "Current",
            "url": "https://www.udacity.com"
    }
],
    "display": "displayEducation()"
}

var work = {
    "jobs": [
        {
            "employer": "Gulfsip",
            "title": "UI Designer",
            "location": "Egypt,Alexandria",
            "dates": "September 2009 - September 2010",
            "description": "Responsible for the development of creative web pages ,focusing on UI Development and HTML5/CSS3 prototype designs."
    },
        {
            "employer": "Sahabtec",
            "title": "Software Quality Assurance",
            "location": "Alexandria , Egypt",
            "dates": "Februray 2012 - September 2012",
            "description": "Manage work and projects with the SDLC system ( Agile )."
    },
        {
            "employer": "Umm Al-Qura University",
            "title": "Senior UI Developer",
            "location": "Mecca,Saudi Arabia",
            "dates": "Augest 2014 - Present",
            "description": "Senior UI Developer at KACST GIS Technology Innovation Center in Umm Al-Qura University"
    }
],
    "display": "displayJobs()"
}

var projects = {
    "projects": [
        {
            "title": "GULFSIP Website",
            "dates": "January 2010 - September 2010",
            "description": "GULFSIP.com is a VOIP provider company, this is the re-design of the website .. which was lunched on 1 February 2014, it's takes too long to prepare the layout",
            "images": "images/GULFSIP-Re-Design.png"
    },
        {
            "title": "GULFSIP Mobile Application",
            "dates": "April 2014 - October 2014",
            "description": "GULFSIP is a mobile application that's allow user to make free calls and send free SMS to friends, users also can make very cheap international calls to anywhere in the world.",
            "images": "images/GULFSIP-Mobile-Application.jpg"
    },
        {
            "title": "Dafater Business Solution",
            "dates": "January 2015",
            "description": "BusinessClouds announced yesterday that it is releasing Dafater for the public. Dafater is a cloud ERP solution especially tailored for businesses in Saudi. Geared towards the SMB community, Dafater promises to change the way small businesses actually do business.",
            "images": "images/Dafater-Wireframes.jpg"
    }
],
    "display": "displayProjects()"
}

function displayBio() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    // Contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var myContacts = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;

    // append the contacts items on both topContacts and footerContacts div
    $("#topContacts, #footerContacts").append(myContacts);

    // Skills

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);

        }
    }

}
displayBio();

$("#mapDiv").append(googleMap);

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);
    }
}
displayWork();

function displayEducation() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {


        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").prepend(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);

    }

    $(".education-entry:last").append(HTMLonlineClasses);
    
    for (course in education.onlineCourses) {

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool + formattedCourseDate + formattedCourseUrl);

    }

}
displayEducation();

projects.display = function () {

    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {

                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            }
            $(".project-entry:last").append(formattedImage);
        }

    }
}
projects.display();