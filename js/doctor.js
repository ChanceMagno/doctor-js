var apiKey = require('./../.env').apiKey
var apiName;
var apiSpecialty;
var apiPractice;
var apiLocation;
var apiSortBy;
var skipNumber = 0;


function Doctor() {
}

//to pull next ten search results
Doctor.prototype.showMore = function() {
  skipNumber += 10;
}

//manipulates api call based on users search inputs/data results are passed to front end function
Doctor.prototype.getDoctors = function(name, specialty, practice, location, sortBy, displayDoctors) {
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
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?'+ apiName + apiSpecialty + apiPractice + apiLocation + '&user_location=37.773%2C-122.413' + apiSortBy + '&skip='+ skipNumber + '&limit=10&user_key=' + apiKey).then(function(response) {
        var search = {};
        var searchResults = [];
        response.data.forEach(function(result){
          search.firstName = result.profile.first_name;
          search.LastName = result.profile.last_name;
          search.image = result.profile.image_url;
          search.bio = result.profile.bio;
          search.degree = result.educations.degree;
          search.school = result.educations.school;
          search.category = result.specialties.category;
          search.description = result.specialties.description;
          searchResults.push(search);
        })

            console.log(response);
      })
     .fail(function(error){
        $('.searchResults').text(error.responseJSON.message);
      });
};

exports.doctorModule = Doctor;
