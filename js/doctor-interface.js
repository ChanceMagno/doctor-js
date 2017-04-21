
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  currentDoctor = new Doctor();

  $('#nameSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .practiceForm, .locationForm, .sortOption, #nameSearch').hide("fast");
    $('.sortOption, .nameForm').slideDown("slow");
  })

  $('#specialtySearch').click(function() {
    $('#nameSearch, #practiceSearch, #locationSearch, #searchSubmit').show("slow");
    $('.nameForm, .locationForm, .practiceForm, .sortOption, #specialtySearch').hide("fast");
    $('.sortOption, .specialtyForm').slideDown("slow");
  })

  $('#practiceSearch').click(function() {
    $('#specialtySearch, #nameSearch, #locationSearch, #searchSubmit').show("slow");
    $('.specialtyForm, .locationForm, .nameForm, .sortOption, #practiceSearch').hide("fast");
    $('.sortOption, .practiceForm').slideDown("slow");
  })

  $('#locationSearch').click(function() {
    $('#specialtySearch, #practiceSearch, #nameSearch, #searchSubmit').show("slow");
    $('.nameForm, .specialtyForm, .practiceForm, .sortOption, #locationSearch').hide("fast");
    $('.sortOption, .locationForm').slideDown("slow");
  })

  $('#searchSubmit').click(function() {
    var name = $("form #nameInput").val();
    var specialty = $("form #specialtyInput").val();
    var practice = $("form #practiceInput").val();
    var location = $("form #locationInput").val();
    if (null == name || name == "" && null == specialty || specialty == "" && null == practice || practice == "" && null == location || location == "") {
      alert("Search Field is Empty");
    } else {alert("not blank?");}
  })

})
