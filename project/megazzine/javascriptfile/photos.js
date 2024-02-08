function forword() {
    let eventimage = document.getElementById('img');
    if (eventimage.src == "https://palife.co.uk/wp-content/uploads/2016/12/shutterstock_165461042.jpg") {
        eventimage.src = "https://indianewengland.com/wp-content/uploads/2018/11/Gurjar-team.jpg "
    }
    else if (eventimage.src == 'https://indianewengland.com/wp-content/uploads/2018/11/Gurjar-team.jpg') 
    { eventimage.src = "https://digimantralabs.com/wp-content/uploads/2016/08/team.jpg" }
    else if (eventimage.src == "https://digimantralabs.com/wp-content/uploads/2016/08/team.jpg")
     { eventimage.src = "https://c8.alamy.com/comp/EFDK5D/indian-friends-group-holi-festival-fun-EFDK5D.jpg" }
    else if (eventimage.src == "https://c8.alamy.com/comp/EFDK5D/indian-friends-group-holi-festival-fun-EFDK5D.jpg")
     { eventimage.src = "https://www.sjchs.edu.in/wp-content/uploads/2022/05/IMG-20220504-WA0020-1024x768.jpg" }
    else { eventimage.src = "https://palife.co.uk/wp-content/uploads/2016/12/shutterstock_165461042.jpg" }
}
function backword() {
    let eventimage = document.getElementById('img');
    if (eventimage.src == 'https://www.sjchs.edu.in/wp-content/uploads/2022/05/IMG-20220504-WA0020-1024x768.jpg')
     { eventimage.src = "https://c8.alamy.com/comp/EFDK5D/indian-friends-group-holi-festival-fun-EFDK5D.jpg" }
    else if(eventimage.src == "https://c8.alamy.com/comp/EFDK5D/indian-friends-group-holi-festival-fun-EFDK5D.jpg")
    {eventimage.src = "https://digimantralabs.com/wp-content/uploads/2016/08/team.jpg" 
    }
    else if(eventimage.src == "https://digimantralabs.com/wp-content/uploads/2016/08/team.jpg"){
        eventimage.src = "https://indianewengland.com/wp-content/uploads/2018/11/Gurjar-team.jpg "
    }
    else if (eventimage.src == 'https://indianewengland.com/wp-content/uploads/2018/11/Gurjar-team.jpg'){
        eventimage.src = "https://palife.co.uk/wp-content/uploads/2016/12/shutterstock_165461042.jpg"     
    }
    
    else { eventimage.src ='https://www.sjchs.edu.in/wp-content/uploads/2022/05/IMG-20220504-WA0020-1024x768.jpg' }


}
    function menu(){
        let sublist = document.getElementById('sublist');
       if(sublist.style.display == 'block')
         {
             sublist.style.display = 'none';
         }
         else{
             sublist.style.display = 'block';
         }
    }
    setInterval(forword,4000)
