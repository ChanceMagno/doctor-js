var Doctor = require('./../js/doctor.js').doctorModule;

var name;
var specialty;
var practiceForm;
var location;
var sortBy;

// show data from search
// var displayDoctors = function(doctorList) {
//   doctorList.forEach(function(doctor){
//     $('.searchResults').append("<p>" + doctor.data.profile.bio + "</p>");
//   })
// }

$(document).ready(function() {
  currentDoctor = new Doctor();
//Reactive form
  $('#nameSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .practiceForm, .locationForm, .sortOption, #nameSearch').hide("fast");
    $('.sortOption, .nameForm').slideDown("slow");
  });

  $('#specialtySearch').click(function() {
    $('#nameSearch, #practiceSearch, #locationSearch, #searchSubmit').show("slow");
    $('.nameForm, .locationForm, .practiceForm, .sortOption, #specialtySearch').hide("fast");
    $('.sortOption, .specialtyForm').slideDown("slow");
  });

  $('#practiceSearch').click(function() {
    $('#specialtySearch, #nameSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .locationForm, .nameForm, .sortOption, #practiceSearch').hide("fast");
    $('.sortOption, .practiceForm').slideDown("slow");
  });

  $('#locationSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #nameSearch, #searchSubmit').show("slow");
    $('.nameForm, .specialtyForm, .practiceForm, .sortOption, #locationSearch').hide("fast");
    $('.sortOption, .locationForm').slideDown("slow");
  });
//End Reactive form

//Search Submit (determines which search method to call and if for is empty)
  $('#searchSubmit').click(function() {
    var name = $("form #nameInput").val();
    var specialty = $("form #specialtyInput").val();
    var practice = $("form #practiceInput").val();
    var location = $("form #locationInput").val();
    var sortBy = $("form #sortOption").val();
    currentDoctor.getDoctors(name, specialty, practice, location, sortBy);
});
//end Search Submit

$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
         currentDoctor.next();
         currentDoctor.getDoctors(name, specialty, practice, location, sortBy);
  }
});




});
