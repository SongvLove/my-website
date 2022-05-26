//缩小
function scaleSmall(idx) {
    var title = document.getElementById('title_box');
    switch (idx) {
        case 1:
            title.style.setProperty("animation", " leftMouseOverAnimation 1s linear forwards ");
            break;
        case 2:
            title.style.setProperty("animation", " centerMouseOverAnimation 1s linear forwards ");
            break;
        case 3:
            title.style.setProperty("animation", " rightMouseOverAnimation 1s linear forwards ");
            break;
    }
}

//放大
function scaleBig(idx) {
    var title = document.getElementById('title_box');
    switch (idx) {
        case 1:
            title.style.setProperty("animation", " leftMouseOutAnimation 1s linear forwards ");
            break;
        case 2:
            title.style.setProperty("animation", " centerMouseOutAnimation 1s linear forwards ");
            break;
        case 3:
            title.style.setProperty("animation", " rightMouseOutAnimation 1s linear forwards ");
            break;
    }
}
//画轴3d转动
function rotatePainting(idx) {
    var title = document.getElementById('title_box');
    var main = document.getElementById('mainpage');
    var e = window.event || arguments.callee.caller.arguments[0];
    switch (idx) {
        case 1:
            title.style.setProperty("animation", " leftRotateAnimation 2s linear forwards ");
            main.style.setProperty("background", " linear-gradient(to bottom, #e8ebf7, #b3a2a7)");
            e.stopPropagation();　
            break;
        case 2:
            title.style.setProperty("animation", " centerRotateAnimation 2s linear forwards ");
            main.style.setProperty("background", " linear-gradient(to bottom, #e7eff6, #aecfeb)");
            e.stopPropagation();
            break;
        case 3:
            title.style.setProperty("animation", " rightRotateAnimation 1s linear forwards ");
            main.style.setProperty("background", " linear-gradient(to bottom, #f9f8eb, #4e5052)");
            e.stopPropagation();
            break;
    }
}

//记录name值
let click_name = "default_box";
let click_dom = "";

//点击导航栏带出动画
function showBox(value) {
	var last_dom = click_dom;
	click_dom = value + "_bar";
	var bar = document.getElementById(click_dom);

	if( last_dom != "" && last_dom != click_dom) {
		var hiddenBar = document.getElementById(last_dom);
		hiddenBar.style.setProperty("background","");		
	}
	

	var last_name = click_name;
	var now_name = value + "_box";
	click_name = now_name;
	var dom = document.getElementById(click_name);
	var hiddenBox = document.getElementById(last_name);

	// var music_num = document.getElementsByClassName('music_list_demon').length;
	// var music_box_width = dom.offsetWidth;
	// var music_box_height = dom.offsetHeight;
	// var music_line_num = Math.floor(music_box_width / 430);
	// var music_colume_num = Math.floor(music_box_height / 210);
	// console.log(music_line_num);
	if( last_name != now_name) {
		hiddenBox.style.setProperty("animation","zeroOpacityAnimation 1s linear forwards");
		dom.style.setProperty("display","block");
		switch (value) {
			case 'boke':
				bar.style.setProperty("background","#f7cbd2");
				dom.style.setProperty("animation","bokeMessagePopup 1s linear forwards 1s");
				break;
			case 'movie':
				bar.style.setProperty("background","#c1e7e7");
				break;
			case 'animation':
				bar.style.setProperty("background","#f9cfcc");
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
				break;				
			case 'food':
				bar.style.setProperty("background","#ede2c4");
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
				break;			
			case 'music':
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
				bar.style.setProperty("background","#f5dcf7");
				break;			
			case 'memory':
				bar.style.setProperty("background","#bda3ae");
				break;								
			case 'resume':
				bar.style.setProperty("background","#b7afc9");
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
				break;
			case 'game':
				bar.style.setProperty("background","#cae7da");
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
				break;
			default:
				//bar.style.setProperty("background","#696c84");
				dom.style.setProperty("animation","resumeMessagePopup 1s linear forwards 1s");
		}
	}
}

//动漫放大预览
function previewAnimation() {

}

function turnRightPage(idx) {
	var x_move = - (idx + 1 ) * 100 ;
	var translateX = "translateX(" + x_move + "%)";
	var translateDom = document.getElementsByClassName("music_module");
	translateDom[0].style.setProperty("transform", translateX);
}

function turnLeftPage(idx) {
	var x_move = - (idx - 1 ) * 100 ;
	var translateX = "translateX(" + x_move + "%)";
	var translateDom = document.getElementsByClassName("music_module");
	translateDom[0].style.setProperty("transform", translateX);
	
}

function getMusicInfo(musicInfo, className, type) {
	
	var ele = "";
	musicInfo.forEach( mes => {
		 ele += "<div class='music_list_demon'><div class='music_img'><img width='120' height='120' src='" + mes.img + "' alt='" + mes.name + "'/><div class='music_type'>" + type + "<span class='music_name'>" + mes.name + "</span></div></div><audio controls style='width:260px;'><source src='http://124.220.1.178:8999/music/" + mes.src + "' type='audio/mpeg'><embed height='50' width='100' src='src/music/" + mes.src + "'></audio></div>";
	});
		  var div = document.createElement("div");
		  div.className ='music_playlist';
		  div.innerHTML = ele;
		  var dom = document.getElementsByClassName(className);
		  console.log(dom);
		  dom[0].appendChild(div);
}

function getMusicAllInfo () {
	const musicInfoFir = [{name: '想想 - 愿我如星', src: '想想 - 愿我如星.mp3', img: 'https://imgessl.kugou.com/stdmusic/20190318/20190318054954803047.jpg'},
		{name: '许嵩 - 宇宙之大', src: '许嵩 - 宇宙之大.mp3', img: 'https://imgessl.kugou.com/stdmusic/20150714/20150714135002208061.jpg'},
		{name: '买辣椒也用券 - 起风了', src: '买辣椒也用券 - 起风了.mp3', img: 'https://imgessl.kugou.com/stdmusic/20220119/20220119171002204341.jpg'},
		{name: '小时姑娘 - 爱殇', src: '小时姑娘 - 爱殇 (电视剧《东宫》片头曲).mp3', img: 'https://imgessl.kugou.com/stdmusic/20210621/20210621090608893404.jpg'},
		{name: '华晨宇 - 烟火里的尘埃 (live)', src: '华晨宇 - 烟火里的尘埃 (2014北京火星演唱会).mp3', img: 'https://imgessl.kugou.com/uploadpic/softhead/400/20211009/20211009174756159.jpg'},
		{name: '安九 - 陌路之人', src: '安九 - 《陌路之人》.mp3', img: 'https://imgessl.kugou.com/stdmusic/20190514/20190514100924638240.jpg'}
	];
	const musicInfoTwo = [{name: 'serial TV drama - 桃源郷エイリアン (桃源乡的外星人)', src: 'serial TV drama - 桃源郷エイリアン (桃源乡的外星人).mp3', img: 'https://imgessl.kugou.com/stdmusic/20150718/20150718203652484970.jpg'},
		{name: 'ラムジ - PLANET', src: 'ラムジ - PLANET.mp3', img: 'https://imgessl.kugou.com/stdmusic/20160908/20160908173324137842.jpg'},
		{name: '浜崎あゆみ - My All (巡演)', src: '浜崎あゆみ - My All (2015 ARENA TOUR巡回演唱会).mp3', img: 'https://imgessl.kugou.com/stdmusic/20200909/20200909112334719397.jpg'},
		{name: '米津玄師 - LOSER', src: '米津玄師 - LOSER.mp3', img: 'https://imgessl.kugou.com/stdmusic/20211013/20211013132801858370.jpg'},
		{name: '宇多田ヒカル - One Last Kiss', src: '宇多田ヒカル - One Last Kiss.mp3', img: 'https://imgessl.kugou.com/stdmusic/20210301/20210301152705561394.jpg'},
		{name: '小岩井ことり - ピカピカなのん (闪闪发光)', src: '小岩井ことり - ピカピカなのん (闪闪发光).mp3', img: 'https://imgessl.kugou.com/stdmusic/20150719/20150719080528305885.jpg'}
	];
	const musicInfoTrd = [{name: 'Imagine Dragons、Broiler - Shots', src: 'Imagine Dragons、Broiler - Shots (Broiler Remix).mp3', img: 'https://imgessl.kugou.com/stdmusic/20210809/20210809085303193992.jpg'},
		{name: 'Biffy Clyro - Re-arrange', src: 'Biffy Clyro - Re-arrange.mp3', img: 'https://imgessl.kugou.com/stdmusic/20160909/20160909071409695539.jpg'},
		{name: 'Khalid - Young Dumb & Broke', src: 'Khalid - Young Dumb & Broke.mp3', img: 'https://imgessl.kugou.com/stdmusic/20210807/20210807084611245739.jpg'},
		{name: 'Owl City - The Saltwater Room', src: 'Owl City - The Saltwater Room.mp3', img: 'https://imgessl.kugou.com/stdmusic/20160908/20160908141316903039.jpg'},
		{name: 'The Ready Set - Bleeding', src: 'The Ready Set - Bleeding.mp3', img: 'https://imgessl.kugou.com/stdmusic/20150721/20150721164653664471.jpg'},
		{name: "Kate Havnevik - Think Again", src: "Kate Havnevik - Think Again.mp3", img: 'https://imgessl.kugou.com/stdmusic/20190103/20190103113735371009.jpg'}
	];
	const musicInfoFourth = [{name: '叶里 - 落子无悔', src: '叶里 - 落子无悔.mp3', img: 'https://imgessl.kugou.com/stdmusic/20190403/20190403054316640012.jpg'},
		{name: '叶里 - 无归', src: '叶里 - 无归.mp3', img: 'https://imgessl.kugou.com/stdmusic/20211124/20211124102201919202.jpg'},
		{name: '银临、云の泣 - 锦鲤抄', src: '银临、云の泣 - 锦鲤抄.mp3', img: 'https://imgessl.kugou.com/stdmusic/20200928/20200928023525757879.jpg'},
		{name: '银临、Aki阿杰 - 牵丝戏', src: '银临、Aki阿杰 - 牵丝戏.mp3', img: 'https://imgessl.kugou.com/stdmusic/20150717/20150717105120943095.jpg'},
		{name: '千面音葉7ZH、洛天依 - 朝汐', src: '千面音葉7ZH、洛天依 - 朝汐.mp3', img: 'https://imgessl.kugou.com/stdmusic/20181006/20181006040947737807.jpg'},
		{name: '著小生zoki、洛天依 - 以你为名', src: '著小生zoki、洛天依 - 以你为名.mp3', img: 'https://imgessl.kugou.com/stdmusic/20180121/20180121001113520263.jpg'}
	];
	getMusicInfo(musicInfoFir, "music_module_firpage", "流行音乐");
	getMusicInfo(musicInfoTwo, "music_module_secpage","日语流行");
	getMusicInfo(musicInfoTrd, "music_module_trdpage","欧美流行");
	getMusicInfo(musicInfoFourth, "music_module_fourthpage", "V家/古风")
}

getMusicAllInfo();
//window.addEventListener("sc")