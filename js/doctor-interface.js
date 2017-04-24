var Doctor = require('./../js/doctor.js').doctorModule;

var name;
var specialty;
var practice;
var location;
var sortBy;
var searchCriteria = [];

$(document).ready(function() {
currentDoctor = new Doctor();
//Reactive form
  $('#nameSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .practiceForm, .locationForm, #nameSearch, .specialtyWarning').hide("fast");
    $('.sortOption, .nameForm').slideDown("slow");
    $("#nameSearch").bind("click", function() {
      $("form #specialtyInput[type=text], textarea").val("");
      $("form #locationInput[type=text], textarea").val("");
      $("form #practiceInput[type=text], textarea").val("");
    });
  });

  $('#specialtySearch').click(function() {
    $('#nameSearch, #practiceSearch, #locationSearch, #searchSubmit, .specialtyWarning').show("slow");
    $('.locationForm, .practiceForm, nameForm, #specialtySearch').hide("fast");
    $('.nameForm .sortOption, .specialtyForm').slideDown("slow");
    $("#specialtySearch").bind("click", function() {
      $("form #locationInput[type=text], textarea").val("");
      $("form #practiceInput[type=text], textarea").val("");
    });
  });

  $('#practiceSearch').click(function() {
    $('#specialtySearch, #nameSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .locationForm, .nameForm, #practiceSearch, .specialtyWarning').hide("fast");
    $('.sortOption, .practiceForm').slideDown("slow");
    $("#praciteSearch").bind("click", function() {
      $("form #specialtyInput[type=text], textarea").val("");
      $("form #locationInput[type=text], textarea").val("");
      $("form #nameInput[type=text], textarea").val("");
    });
  });

  $('#locationSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #nameSearch, #searchSubmit').show("slow");
    $('.nameForm, .specialtyForm, .practiceForm, #locationSearch, .specialtyWarning').hide("fast");
    $('.sortOption, .locationForm').slideDown("slow");
    $("#locationSearch").bind("click", function() {
      $("form #specialtyInput[type=text], textarea").val("");
      $("form #nameInput[type=text], textarea").val("");
      $("form #practiceInput[type=text], textarea").val("");
    });
  });
//End Reactive form

//Search Submit
  $('#searchSubmit').click(function() {
    skipNumber = 0;
    searchCriteria = [];
    var name = $("form #nameInput").val();
    var specialty = $("form #specialtyInput").val();
    var practice = $("form #practiceInput").val();
    var location = $("form #locationInput").val();
    var sortBy = $("form #sortOption").val();
    $(".searchResults").empty();
    searchCriteria.push(name, specialty, practice, location, sortBy);
    currentDoctor.getDoctors(name, specialty, practice, location, sortBy, displayDoctors);


});
//end Search Submit

// show data from search

var displayDoctors = function(searchResults) {
  if (searchResults.length === 0) {
    $(".searchResults").append("<p>Sorry, no doctors were found with your given search criteria </p>");
  } else {
    searchResults.forEach(function(result) {
      $('.searchResults').append("<div class='panel-group'><div class='panel panel-primary'><div class='panel-heading'>" + result.firstName + " " + result.lastName + "</div><div class='panel-body'>" +  "<img class='bioImage'src='" + result.image + "'>" + result.bio + "</div></div></div>");
    });
  }
};



// for loading page with more search results
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           currentDoctor.next();
           currentDoctor.getDoctors(searchCriteria[0], searchCriteria[1], searchCriteria[2], searchCriteria[3], searchCriteria[4], displayDoctors);
    }
  });


});
