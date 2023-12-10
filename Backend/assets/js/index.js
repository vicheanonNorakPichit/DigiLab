$("#add_subject").submit(function (event) {
  alert("Data Insert Successfully");
});

$("#update_subject").submit(function (event) {
  event.preventDefault();

  var unidexed_array = $(this).serializeArray();
  var data = {}

  $.map(unidexed_array, function(n, i) {
    data[n['name']] = n['value']
  })

  console.log(data)

  var request = {
    'url': `http://localhost:3000/api/subjects/${data.subject_id}`,
    "method": "PUT",
    "data":data
  }
  $.ajax(request).done(function(response){
    alert("Data Updated Successfully")
  })

});
