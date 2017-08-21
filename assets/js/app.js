// sanity check
console.log("app.js linked.");

$(document).ready(function() {
    $("#fade-in").fadeIn(5000);

    let data_info = {
        website_title:"David's Website",
        background_index:"assets/imgs/SF-background.jpg",
        github_icon:"assets/imgs/GitHub_Logo_White.png",
        linkedin_icon:"assets/imgs/linkedin.png"
    };

    let project_info = [{
	        project_title: "Baseball Sim",
	        project_image: "assets/imgs/baseball-sim.jpeg",
	        project_status: "In progress",
	        project_description: "A baseball simulation game that will pit users against one another."
        },
	    {
		    project_title: "Baseball Sim1",
		    project_image: "assets/imgs/favicon.png",
		    project_status: "In progress",
		    project_description: "A baseball simulation game that will pit users against one another."
	    }
    ];

    //looping incorrectly, need to debug
    for (let i = 0; i<project_info.length; i++) {
	    $(".project-work").append('<div class="col-sm-6 project-img"></div>');
        $(".project-img").append('<img src=' + project_info[i].project_image + '>');
	    $(".project-work").append('<ul class="project-ul col-sm-6"></ul>');
	    $(".project-ul").append('<li class="project-details">' + 'Project: ' + project_info[i].project_title + '</li>');
	    $(".project-ul").append('<li class="project-details">' + 'Status: ' + project_info[i].project_status + '</li>');
	    $(".project-ul").append('<li class="project-details">' + 'Project: ' + project_info[i].project_description + '</li>');
    }
    $(".nav-home").append(`<a href="#nav-top">Home</a>`);
    $(".nav-contact").append('<a href="#footer">Contact</a>');
    $(".nav-work").append(`<a href="#project-section">Work</a>`);
    $(".back-img").attr("src", data_info.background_index);
    $("#index-title").append(data_info.website_title);
    $("#github").attr("src", data_info.github_icon);
    $(".work_title").append('<h2>' + "My Projects" + '</h2>');
    $("#linkedin").attr("src", data_info.linkedin_icon);
});