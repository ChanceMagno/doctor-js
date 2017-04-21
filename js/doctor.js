var apiKey = require('./../.env').apiKey

function Doctor() {
}

var apiName;
var apiSpecialty;
var apiPractice;
var apiLocation;
var apiSortBy;

//manipulates api call based on users search inputs
Doctor.prototype.getDoctors = function(name, specialty, practice, location, sortBy) {
  if (name == "") {
    apiName = name;
  } else { apiName = ("name=" + name);
    }
  if (specialty == "") {
    apiSpecialty = specialty;
  } else { apiSpecialty = ("&specialty_uid=" + specialty);
    }
  if (practice == "") {
    apiPractice = practice;
  } else { apiPractice = ("&practice_uid=" + practice);
    }
  if (location == "") {
    apiLocation = location;
  } else { apiLocation = ("&location=" + location);
    }
  if (sortBy == "") {
    apiSortBy = sortBy;
  } else { apiSortBy = ("&sort=" + sortBy);
    }
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?'+ apiName + apiSpecialty + apiPractice + apiLocation + '&user_location=37.773%2C-122.413' + apiSortBy + '&skip=0&limit=10&user_key=' + apiKey).then(function(result) {
            console.log(result);
      })
     .fail(function(error){
        console.log("fail");
      });
};

exports.doctorModule = Doctor;

'https://api.betterdoctor.com/2016-03-01/doctors?name=Jim&specialty_uid=sadf&practice_uid=asdf&location=portland&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=fe19389833306d02643db671a806c649'
