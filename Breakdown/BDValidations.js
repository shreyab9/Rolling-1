                                                                                                                                            
                                  var specialKeys = new Array();
                                    specialKeys.push(8); //Backspace
                                   
                                    function IsNumericValidation(e) {
                                    var keyCode = e.which ? e.which : e.keyCode
                                    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
                                    return ret;
                                    }
                                     function IsNumericValidationDecimal(e) {
                                    var keyCode = e.which ? e.which : e.keyCode
                                    var ret = ((keyCode >= 46 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
                                    return ret;
                                    }
                                               function IsNumeric(e) {
                                               var ret = IsNumericValidation(e);
                                    document.getElementById("error").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                    
                                    
                                    
                                               function IsNumeric1(e) {
                                               var ret = IsNumericValidation(e);
                                    document.getElementById("error1").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                
                                   
                                               function IsNumeric2(e) {
                                               var ret = IsNumericValidation(e);
                                    document.getElementById("error2").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                                    
                                               function IsNumeric3(e) {
                                               var ret = IsNumericValidationDecimal(e);
                                    document.getElementById("error3").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                
                                   
                                               function IsNumeric4(e) {
                                               var ret =  IsNumericValidationDecimal(e);
                                    document.getElementById("error4").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                 
                                  
                                               function IsNumeric5(e) {
                                               var ret = IsNumericValidation(e);
                                    document.getElementById("error5").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                
                                   
                                               function IsNumeric6(e) {
                                               var ret = IsNumericValidation(e);
                                    document.getElementById("error6").style.display = ret ? "none" : "inline";
                                  return ret;
                                  }
                                  
                                  
            //BREAKDOWN START AND ENDTIME VALIDATIONS                      
                                  
             function checkIfSameDate() {
       
       var endTimeString = document.getElementById('endtime').value;
       var startTimeString = document.getElementById('starttime').value;
       var endDate = new Date(endTimeString);
       var startDate = new Date(startTimeString);
       if(endDate.getDate() == startDate.getDate() && endDate.getFullYear() == startDate.getFullYear() && endDate.getMonth() == startDate.getMonth()){
            document.getElementById('sTime_only').value = startDate.getHours() + ':' + ((startDate.getMinutes()<10?'0':'') + startDate.getMinutes());
            document.getElementById('eTime_only').value = endDate.getHours() + ':' + ((endDate.getMinutes()<10?'0':'') + endDate.getMinutes())
           
       }
       else
       {         
     document.getElementById('sTime_only').value = startDate.getDate()+ '/' + (startDate.getMonth()+1) + " "+ startDate.getHours() + ':' + ((startDate.getMinutes()<10?'0':'') + startDate.getMinutes());
       // document.getElementById('sTime_only').value = startDate.getDate()+ '/' + (startDate.getMonth()+1) + " "+ startDate.getHours() + ':' + startDate.getMinutes();
        document.getElementById('eTime_only').value = endDate.getDate()+ '/'+ (endDate.getMonth()+1) +" "+ endDate.getHours() + ':' + ((endDate.getMinutes()<10?'0':'') + endDate.getMinutes());
       
            }
 }

      function timediff(){

       var endTime = document.getElementById('endtime').value;
       var startTime = document.getElementById('starttime').value;
       var endDateTime = new Date(endTime);
       var startDateTime = new Date(startTime);
   
      if(endDateTime == startDateTime){
           alert("Start Date Time and End Date Time Should Not be Same")
             return false;
        }
                   else{
                
                 return true;              
        }
        
   }                 
        
      function endDateValidations(){
       
      var today =new Date();
        var endTime_New = document.getElementById('endtime').value;
        var endDateTime_New = new Date(endTime_New);
         if (endDateTime_New > today){
            alert('End Date cannot be greater than todays date');
             return false;
         }
         else{
        //alert('enddatevalidation');-->
          return true;
         
         
        }
      
         }
         
         
         
          function startDateValidations(){
        //alert('endValidation1');
      var today =new Date();
        var starttime_New = document.getElementById('starttime').value;
        var StartDateTime_New = new Date(starttime_New);
         if (StartDateTime_New > today){
            alert('Start date cannot be greater than todays date');
             return false;
         }
         else{
        //alert('enddatevalidation');-->
          return true;
         
         
        }
      
         }
         
            
     function onFormSubmit(){
      //alert ('hi');
       var val1 = timediff();
       var val2 =startDateValidations();
       var val3 = endDateValidations();
       var val4 = confirm('Are you sure you want to submit this form?');
      // alert(val1);
       //alert (val2);
       //alert (val3);
       if(val1 & val2 & val3 & val4){
      return true;
       }
       else{
       alert('please Correct the Dates and then Submit Form');
       return false;
       
       }
  } 
   

       
     