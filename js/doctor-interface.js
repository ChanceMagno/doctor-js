var Doctor = require('./../js/doctor.js').doctorModule;

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
  //   if ($('form #nameInput').is(":visible")) {
  //     currentDoctor.searchName(name);
  //   } else if ($('form #specialtyInput').is(":visible")) {
  //       currentDoctor.searchLocation(location);
  //   } else if ($("form #specialtyInput").is(":visible")) {
  //       currentDoctor.searchSpecialty(specialty);
  //   } else if ()
  // }
    // var name = $("form #nameInput").val();
    // var specialty = $("form #specialtyInput").val();
    // var practice = $("form #practiceInput").val();
    // var location = $("form #locationInput").val();
    // var sortBy = $("form #sortOption").val();
    //
    currentDoctor.getDoctors(name, specialty, practice, location, sortBy);
});
//end Search Submit
});
