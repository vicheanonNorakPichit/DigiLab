// ADD SUBJECT PAGE
$("#add_subject").submit(function (event) {
  alert("Data Insert Successfully");
});

// ADD EXPERIMENT PAGE
$("#add_experiment").submit(function (event) {
  alert("Data Insert Successfully");
});

$("#update_subject").submit(function (event) {
  event.preventDefault();

  var unidexed_array = $(this).serializeArray();
  var data = {};

  $.map(unidexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/subjects/${data.subject_id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var subject_id = $(this).attr("data-id");
    console.log(subject_id);

    var request = {
      url: `http://localhost:3000/api/subjects/${subject_id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Updated Successfully");
        location.reload();
      });
    }
  });
}

if (window.location.pathname == "/experiment_list") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var experiment_id = $(this).attr("data-id");
    console.log(experiment_id);

    var request = {
      url: `http://localhost:3000/api/experiments/${experiment_id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Updated Successfully");
        location.reload();
      });
    }
  });
}

$("#update_experiment").submit(function (event) {
  event.preventDefault();

  var unidexed_array = $(this).serializeArray();
  var data = {};

  $.map(unidexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/experiments/${data.experiment_id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully");
  });
});
