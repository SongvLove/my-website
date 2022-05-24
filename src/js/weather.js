
function  getWeatherInfo() {
    let weatherInfo = axios({
            method: 'GET',
            url: 'http://api.help.bj.cn/apis/weather/?id=101250101'
        }).then(response => {
            return response.data;
        }).catch(result => {
            return  {
                mes: "Error"
            };
        });
    return weatherInfo;
}


function createBubbles(loops) {
    let moveX = 120;
    for (var i = 0; i < loops; i++) {
        //获取元素节点
        var b_dom = document.getElementById('bubble_module');
        var b_ele = document.createElement("div");
        var c_ele = document.createElement("span");
        //定义泡泡直径、偏移量和光点偏移量
        moveX = moveX + Math.round(Math.random() * 200);
        let random_radius = Math.round(Math.random() * 100);
        let bubble_top = Math.round(-90 - Math.random() * 100) + "px";
        let bubble_left = moveX + "px";
        random_radius = (random_radius >= 20 ? random_radius : 25) + 'px';
        let deviate_top = Math.round(20 + Math.random() * 10) + "%";
        let deviate_left = Math.round(20 + Math.random() * 10) + "%";
        let delay = Math.round(Math.random() * 100) / 30 + 's';
        //设置css变量和Class
        b_ele.style.setProperty("--bubble_top", bubble_top);
        b_ele.style.setProperty("--bubble_left", bubble_left);
        b_ele.style.setProperty("--diameter", random_radius);
        b_ele.style.setProperty("--deviate-top", deviate_top);
        b_ele.style.setProperty("--deviate-left", deviate_left);
        b_ele.style.setProperty("--delay", delay);
        b_ele.className = "bubble";
        c_ele.className = "shining_circle";
        b_ele.appendChild(c_ele);
        b_dom.appendChild(b_ele);
    }
}

function weatherValue () {
	getWeatherInfo ().then((data) => {
    	var weather = document.getElementById('weather');
    	var city = document.getElementById('city');
    	var temp = document.getElementById('temp');
    	var wind = document.getElementById('wind');
    	var pm = document.getElementById('pm');
    	var img = document.getElementById('weatherimg');
        var humidity = document.getElementById('humidity');
        var today = document.getElementById('today_info');
        var wind_speed = document.getElementById('wind_speed');
    	console.log("??",data);
        today.innerHTML = data.today;
    	pm.innerHTML = data.pm25;
    	city.innerHTML = data.city;
        wind_speed.innerHTML = data.wdspd;
    	temp.innerHTML = data.temp + '℃';
    	wind.innerHTML = data.wd + data.wdforce;
        humidity.innerHTML =  data.humidity;
        img.innerHTML = "<img src='https:" + data.weatherimg + "' alt='weather' width='40' height='40'/>";
    	weather.innerHTML = data.weather ;
    });

}


createBubbles(20);
