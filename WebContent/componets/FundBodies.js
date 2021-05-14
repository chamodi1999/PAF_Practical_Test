$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation-------------------
	var status = validateFundBodiesForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	var type = ($("#hidFundBodiesIDSave").val() == "") ? "POST" : "PUT";
	console.log($("#formFundBodies").serialize());
	$.ajax({
		url : "FundBodiesAPI",
		type : type,
		data : $("#formFundBodies").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onFundBodiesSaveComplete(response.responseText, status);
		}
	});

});
// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidFundBodiesIDSave").val( 
					$(this).closest("tr").find('#hidFundBodiesIDUpdate').val());
			$("#FundBodiesID")
					.val($(this).closest("tr").find('td:eq(0)').text());
			$("#FundBodiesName")
					.val($(this).closest("tr").find('td:eq(1)').text());
			$("#FundBodiesAddress")
					.val($(this).closest("tr").find('td:eq(2)').text());
			$("#FundBodiesPhoneNo").val(
					$(this).closest("tr").find('td:eq(3)').text());
			$("#FundBodyValue")
					.val($(this).closest("tr").find('td:eq(4)').text());
		});
// DELETE====================================================
$(document).on("click", ".btnRemove", function(event) {
	console.log($(this).data("fundid"));
	$.ajax({
		url : "FundBodiesAPI",
		type : "DELETE",
		data : "FundBodiesID="+$(this).data("fundid"), 
		dataType : "text",
		complete : function(response, status) {
			onFundBodiesDeleteComplete(response.responseText, status);
		}

	});
});
// CLIENT-MODEL================================================================
function validateFundBodiesForm() {
	// ID
	if ($("#FundBodiesID").val().trim() == "") {   // FundBodiesID FundBodiesName FundBodiesAddress FundBodiesPhoneNo FundBodyValue
		return "Insert FundBodies id.";
	}
	// NAME
	if ($("#FundBodiesName").val().trim() == "") {
		return "Insert FundBodies Name.";
	}
	// ADDRESS------------------------
	if ($("#FundBodiesAddress").val().trim() == "") {
		return "Insert FundBodies Address.";
	}
	//PhoneNO---------------------------
	if ($("#FundBodiesPhoneNo").val().trim() == "") {
		return "Insert FundBody Phone Number.";
	}
	// is numerical value
	var tmpPrice = $("#FundBodyValue").val().trim();
	if (!$.isNumeric(tmpPrice)) {
		return "Insert a numerical value for FundBody Value.";
	}
	// convert to decimal price
	$("#FundBodyValue").val(parseFloat(tmpPrice).toFixed(2));
	return true;
}
function onFundBodiesSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved In FundBodies Table.");
			$("#alertSuccess").show();
			$("#divFundBodiesGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error..! While Saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidFundBodiesIDSave").val("");
	$("#formFundBodies")[0].reset();
}
function onFundBodiesDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divFundBodiesGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}