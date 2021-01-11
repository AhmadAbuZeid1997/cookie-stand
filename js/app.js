'use strict'; 
var Time =['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']
var MainTable=document.getElementById('content')
    var Table=document.createElement('table')
    Table.setAttribute('border-collapse', 'collapse')
    MainTable.appendChild(Table)
    Table.setAttribute("width","100%")
    var TimeRow=document.createElement('tr');
    Table.appendChild(TimeRow)
    var Timesdata1=document.createElement('th')
    TimeRow.appendChild(Timesdata1)
    Timesdata1.textContent='Hour'
    var SumRow=document.createElement('tfoot');
    Table.appendChild(SumRow)  
    var Sumsdata1=document.createElement('th')
    SumRow.appendChild(Sumsdata1)
   Sumsdata1.textContent='Total'
   
var Cookie= function(mincustperhour,maxcustperhour,avgcookieperhour, location){
    this.mincustperhour= mincustperhour;
    this.maxcustperhour=maxcustperhour;
    this.avgcookieperhour=avgcookieperhour;
    this.location=location;
    this.customersperhour=[];
    this.cookiesperhour=[];
    this.summationofcookies=0;
};
Cookie.prototype.TotalCustumerAndCookieAndSummationoOfCookieInOneDay= function(){
    for (let i = 0; i < Time.length+1; i++) {
        this.customersperhour.push(Math.floor( Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour));
        this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
        this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
     }
};
for (let i = 0; i < Time.length; i++) {
    
   
    Table.appendChild(TimeRow)
   
    var TimeData=document.createElement('th')
    TimeRow.appendChild(TimeData)
    TimeData.textContent=Time[i] 
    
}
Cookie.prototype.runder= function(){
    
    var Row=document.createElement('tr')
    Table.appendChild(Row)
    var Location=document.createElement('td')
    Row.appendChild(Location)
    
    Location.textContent=this.location
    for (let i = 0; i < Time.length; i++) {
     var  data=document.createElement('td')
     Row.appendChild(data)
     data.textContent=this.cookiesperhour[i]
     
        
    }
    data=document.createElement('th')
     Row.appendChild(data)
     data.textContent=this.summationofcookies
}


var Seattle=new Cookie(23,65,6.3, 'Seattle')
Seattle.TotalCustumerAndCookieAndSummationoOfCookieInOneDay()
Seattle.runder()
var Tokyo=new Cookie(3,24,1.2, 'Tokyo')
Tokyo.TotalCustumerAndCookieAndSummationoOfCookieInOneDay()
Tokyo.runder()
var Dubai=new Cookie(11,38,3.7, 'Dubai')
Dubai.TotalCustumerAndCookieAndSummationoOfCookieInOneDay()
Dubai.runder()
var Paris=new Cookie(20,38,2.3, 'Paris')
Paris.TotalCustumerAndCookieAndSummationoOfCookieInOneDay()
Paris.runder()
var Lima=new Cookie(2,16,4.6, 'Lima')
Lima.TotalCustumerAndCookieAndSummationoOfCookieInOneDay()
Lima.runder()
for (let i = 1; i < Time.length+1; i++) {
var SumData=document.createElement('th')
SumRow.appendChild(SumData)
SumData.textContent=Seattle.cookiesperhour[i]+Tokyo.cookiesperhour[i]+Dubai.cookiesperhour[i]+Paris.cookiesperhour[i]+Lima.cookiesperhour[i]
    
}
console.log(Seattle.cookiesperhour)