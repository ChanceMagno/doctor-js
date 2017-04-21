
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  currentDoctor = new Doctor();

  $('#getDoctors').click(function() {
    currentDoctor.getDoctors("bleeding");
  })

})
