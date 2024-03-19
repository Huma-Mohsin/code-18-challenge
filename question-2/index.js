// //Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
//Solution
//creating an object
var skills = {
    coding_languages: [
        "JavaScript",
        "Python",
        "Java",
        "Ruby",
        "Swift",
        "Go",
        "TypeScript",
        "PHP",
        "Kotlin",
        "Rust",
    ], //passing values in an array to each key in an object.
    tools: [
        "VS-code",
        "Git",
        "Docker",
        "Jira",
        "Postman",
        "Jenkins",
        "Xcode",
        "Atom",
        "Eclipse",
    ],
    software_frameworks: [
        "Flutter",
        ".NetCore",
        "Spring Boot",
        "Express.js",
        "Laravel",
        "Django",
    ],
};
//Finding a way to get three specific skills from this list first we have to assume keys to an object name
var coding_languages = skills.coding_languages, tools = skills.tools, software_frameworks = skills.software_frameworks;
//log a result
// accessing data by defining index to a key.
console.log("\n");
console.log("coding_languages:".concat(coding_languages[4], ", tools:").concat(tools[3], ", software_frameworks:").concat(software_frameworks[5]));
//Author- HUMA MOHSIN
