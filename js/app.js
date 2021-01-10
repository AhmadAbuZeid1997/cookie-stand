'use strict'; 
var Seattle= {
    mincustperhour: 23, 
    maxcustperhour: 65,
    avgcookieperhour: 6.3,
    location: 'Seattle',
    customersperhour:[],
    cookiesperhour:[],
   summationofcookies:0,
    randomcust: function () {
        for (let i = 0; i < 15; i++) {
           this.customersperhour.push(Math.floor( Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour))
            
        }
        
    },
    cookiessoldperhour: function(){
        for (let i = 0; i < 15; i++) {
            this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
            
        }
    },
    summation: function(){
        for (let i = 0; i < 15; i++) {
            this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
            
        }
    },
}
var Tokyo= {
    mincustperhour: 3, 
    maxcustperhour: 24,
    avgcookieperhour: 1.2,
    location: 'Tokyo',
    customersperhour:[],
    cookiesperhour:[],
    summationofcookies:0,
    randomcust: function () {
        for (let i = 0; i < 14; i++) {
           this.customersperhour.push(Math.floor(Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour));
            
        }
        
    },
    cookiessoldperhour: function(){
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
            
        }
    },
    summation: function(){
        for (let i = 0; i < 14; i++) {
            this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
            
        }
    },
}
var Dubai= {
    mincustperhour: 11, 
    maxcustperhour: 38,
    avgcookieperhour: 3.7,
    location: 'Dubai',
    customersperhour:[],
    cookiesperhour:[],
    summationofcookies:0,
    randomcust: function () {
        for (let i = 0; i < 14; i++) {
           this.customersperhour.push(Math.floor(Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour))
            
        }
        
    },

    cookiessoldperhour: function(){
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
            
        }
    },
    summation: function(){
        for (let i = 0; i < 14; i++) {
            this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
            
        }
    },
}
var Paris= {
    mincustperhour: 20, 
    maxcustperhour: 38,
    avgcookieperhour: 2.3,
    location: 'Paris',
    customersperhour:[],
    cookiesperhour:[],
    summationofcookies:0,
    randomcust: function () {
        for (let i = 0; i < 14; i++) {
           this.customersperhour.push(Math.floor(Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour));
            
        }
        
    },
    cookiessoldperhour: function(){
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
            
        }
    },
    summation: function(){
        for (let i = 0; i < 14; i++) {
            this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
            
        }
    },
}
var Lima= {
    mincustperhour: 2, 
    maxcustperhour: 16,
    avgcookieperhour: 4.6,
    location: 'Lima',
    customersperhour:[],
    cookiesperhour:[],
    summationofcookies:0,
    randomcust: function () {
        for (let i = 0; i < 14; i++) {
           this.customersperhour.push(Math.floor(Math.random()*(this.maxcustperhour-this.mincustperhour+1)+this.mincustperhour));
            
        }
        
    },
    cookiessoldperhour: function(){
        for (let i = 0; i < 14; i++) {
            this.cookiesperhour.push(Math.ceil(this.customersperhour[i]* this.avgcookieperhour));
            
        }
    },
    summation: function(){
        for (let i = 0; i < 14; i++) {
            this.summationofcookies=this.summationofcookies+this.cookiesperhour[i];
            
        }
    },
};
Seattle.randomcust()
Seattle.cookiessoldperhour()
Seattle.summation()
var Seattlemain= document.getElementById('Seattle')
var seattletitle=document.createElement('h4')
Seattlemain.appendChild(seattletitle)
seattletitle.textContent='Seattle'
var Seattlelist= document.createElement('ul')
Seattlemain.appendChild(Seattlelist)
for (let i = 0; i < 15; i++) {
   var seattleitem=document.createElement('li');
   Seattlelist.appendChild(seattleitem)
   if (i<6) {
    seattleitem.textContent=(i+6)+' am: '+Seattle.cookiesperhour[i]+' cookies'
   } else {
   if (i==6) {
    seattleitem.textContent=(i+6)+' pm: '+Seattle.cookiesperhour[i]+' cookies'
   } else {
    seattleitem.textContent=(i-6)+' pm: '+Seattle.cookiesperhour[i]+' cookies'
   }
   }

    
};
seattleitem.textContent='Total: '+Seattle.summationofcookies+' cookies';
Tokyo.randomcust()
Tokyo.cookiessoldperhour()
Tokyo.summation()
var Tokyomain= document.getElementById('Tokyo')
var Tokyotitle=document.createElement('h4')
Tokyomain.appendChild(Tokyotitle)
Tokyotitle.textContent='Tokyo'
var Tokyolist= document.createElement('ul')
Tokyomain.appendChild(Tokyolist)
for (let i = 0; i < 15; i++) {
   var Tokyoitem=document.createElement('li');
   Tokyolist.appendChild(Tokyoitem)
   if (i<6) {
    Tokyoitem.textContent=(i+6)+' am: '+Tokyo.cookiesperhour[i]+' cookies'
   } else {
   if (i==6) {
    Tokyoitem.textContent=(i+6)+' pm: '+Tokyo.cookiesperhour[i]+' cookies'
   } else {
    Tokyoitem.textContent=(i-6)+' pm: '+Tokyo.cookiesperhour[i]+' cookies'
   }
   }   
};
Tokyoitem.textContent='Total: '+Tokyo.summationofcookies+' cookies'
;

Dubai.randomcust()
Dubai.cookiessoldperhour()
Dubai.summation()
var Dubaimain= document.getElementById('Dubai')
var Dubaititle=document.createElement('h4')
Dubaimain.appendChild(Dubaititle)
Dubaititle.textContent='Dubai'
var Dubailist= document.createElement('ul')
Dubaimain.appendChild(Dubailist)
for (let i = 0; i < 15; i++) {
   var Dubaiitem=document.createElement('li');
   Dubailist.appendChild(Dubaiitem)
   if (i<6) {
    Dubaiitem.textContent=(i+6)+' am: '+Dubai.cookiesperhour[i]+' cookies'
   } else {
   if (i==6) {
    Dubaiitem.textContent=(i+6)+' pm: '+Dubai.cookiesperhour[i]+' cookies'
   } else {
    Dubaiitem.textContent=(i-6)+' pm: '+Dubai.cookiesperhour[i]+' cookies'
   }
   }
   
    
};
Dubaiitem.textContent='Total: '+Dubai.summationofcookies+' cookies';

Paris.randomcust()
Paris.cookiessoldperhour()
Paris.summation()
var Parismain= document.getElementById('Paris')
var Paristitle=document.createElement('h4')
Parismain.appendChild(Paristitle)
Paristitle.textContent='Paris'
var Parislist= document.createElement('ul')
Parismain.appendChild(Parislist)
for (let i = 0; i < 15; i++) {
   var Parisitem=document.createElement('li');
   Parislist.appendChild(Parisitem)
   if (i<6) {
    Parisitem.textContent=(i+6)+' am: '+Paris.cookiesperhour[i]+' cookies'
   } else {
   if (i==6) {
    Parisitem.textContent=(i+6)+' pm: '+Paris.cookiesperhour[i]+' cookies'
   } else {
    Parisitem.textContent=(i-6)+' pm: '+Paris.cookiesperhour[i]+' cookies'
   }
   }
   
    
};
Parisitem.textContent='Total: '+Paris.summationofcookies+' cookies';

Lima.randomcust()
Lima.cookiessoldperhour()
Lima.summation()
var Limamain= document.getElementById('Lima')
var Limatitle=document.createElement('h4')
Limamain.appendChild(Limatitle)
Limatitle.textContent='Lima'
var Limalist= document.createElement('ul')
Limamain.appendChild(Limalist)
for (let i = 0; i < 15; i++) {
   var Limaitem=document.createElement('li');
   Limalist.appendChild(Limaitem)
   if (i<6) {
    Limaitem.textContent=(i+6)+' am: '+Lima.cookiesperhour[i]+' cookies'
   } else {
   if (i==6) {
    Limaitem.textContent=(i+6)+' pm: '+Lima.cookiesperhour[i]+' cookies'
   } else {
    Limaitem.textContent=(i-6)+' pm: '+Lima.cookiesperhour[i]+' cookies'
   }
   }
   
    
};
Limaitem.textContent='Total: '+Lima.summationofcookies+' cookies';
console.log(Seattle.cookiesperhour);