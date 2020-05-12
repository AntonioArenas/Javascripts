//4.	Write an interest calculator that accepts an initial deposit sum, interest rate (annual), optional yearly additional 
//contribution and the number of years to calculate and returns the total balance, 
//total contribution and total interest. 

var deposit = prompt("Please enter deposit", deposit);
var interestR = prompt("Please enter Interest Rate", interestR);
var contri = prompt("Please enter Additional contribution", contri);
var yearnum = prompt("Please enter interest year", yearnum);
var total;
var interestot= 0;
var totalContribution=0;
var totalconInterest =0;
var interest;

for (i = 0; i < yearnum; i++) {
  if (i==0){
    interest = (parseInt(deposit)*(parseInt(interestR)*0.01));
    total = parseInt(deposit) + parseInt(interest); 
    interestot = parseInt(interestot) + parseInt(interest);
    totalconInterest = parseInt(totalconInterest) + parseInt(total);    
  }else{
    interest = ((parseInt(totalconInterest)+parseInt(contri))*(parseInt(interestR)*0.01));
    total = parseInt(totalconInterest) + parseInt(interest); 
    totalContribution = parseInt(totalContribution) + parseInt(contri); 
    interestot = parseInt(interestot) + parseInt(interest);
    totalconInterest= parseInt(totalconInterest) + parseInt(total);  
  }

}
  alert(interestot);
  alert(totalconInterest);
  alert(totalContribution);
