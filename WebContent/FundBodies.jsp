<%@page import= "com.FundBodies" %>
<%@page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>FundingBodies</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="componets/jquery-3.2.1.min.js"></script>
<script src= "componets/FundBodies.js"></script>
</head>
<body>

<div class="container">
<div class="row">
   <div class="col-8">
   
      <h1 class="m-3"> FundBodies Details Management </h1>
      
      <form id="formFundBodies" name="formFundBodies">
 FundBodies ID:
<input id="FundBodiesID" name="FundBodiesID" type="text" 
 class="form-control form-control-sm">
 
 <br> FundBodies Name:
<input id="FundBodiesName" name="FundBodiesName" type="text"
 class="form-control form-control-sm">
 
 <br> FundBodies Address :
<input id="FundBodiesAddress" name="FundBodiesAddress" type="text" class="form-control form-control-sm">
 
 <br> FundBodies PhoneNo:
<input id="FundBodiesPhoneNo" name="FundBodiesPhoneNo" type="number"
 class="form-control form-control-sm">
 
 <br> FundBody Value:
<input id="FundBodyValue" name="FundBodyValue" type="text"
 class="form-control form-control-sm">
 
 <br>
<input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
<input type="hidden" id="hidFundBodiesIDSave" name="hidFundBodiesIDSave" value="">
</form>
<br>

<div id="alertSuccess" class = "alert alert-success"></div>
<div id ="alertError" class =" alert alert-danger"></div>

 <br>
<div id="divFundBodiesGrid"> 
<%
FundBodies fundbodiesObj = new FundBodies();
out.print(fundbodiesObj.readFundBodies());
%>
</div>
</div>
   
   
   </div>


</div>
</div>


</body>
</html>
      
      
      
      


</body>
</html>