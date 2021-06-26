(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"project_atlas_1", frames: [[519,368,88,342],[112,864,32,126],[157,213,146,367],[609,246,64,162],[157,582,151,325],[478,830,75,162],[609,547,58,150],[310,542,187,146],[555,712,94,121],[609,410,74,135],[669,547,61,125],[310,690,177,138],[675,246,72,129],[305,213,102,146],[0,0,145,445],[700,0,54,166],[447,0,155,366],[651,699,57,136],[409,213,36,120],[0,447,155,415],[408,830,68,183],[555,835,94,121],[604,0,94,121],[147,0,298,211],[0,864,110,134],[685,377,54,134],[305,368,212,172],[310,830,96,130],[604,123,94,121]]},
		{name:"project_atlas_2", frames: [[0,594,1962,155],[820,1841,408,179],[0,1758,1989,81],[0,1528,408,196],[1352,1520,408,196],[0,1841,408,196],[410,1841,408,196],[0,751,1962,155],[1636,0,185,470],[805,908,545,423],[1352,908,337,610],[461,908,342,692],[805,1333,545,423],[1381,0,253,449],[732,0,315,445],[1823,0,146,481],[1691,908,246,599],[0,0,730,592],[1049,0,330,398],[0,908,459,618]]},
		{name:"project_atlas_3", frames: [[0,1335,1629,373],[0,0,1026,649],[960,651,998,649],[0,651,958,682],[1028,0,920,637]]},
		{name:"project_atlas_4", frames: [[0,0,998,707],[952,803,960,707],[0,709,950,719],[1000,0,860,801]]},
		{name:"project_atlas_5", frames: [[0,823,1026,707],[0,0,1026,821],[1028,0,998,776],[1028,778,998,731]]},
		{name:"project_atlas_6", frames: [[0,778,998,878],[1000,778,998,878],[0,0,1162,776]]},
		{name:"project_atlas_7", frames: [[0,0,1280,900],[0,902,1280,900]]},
		{name:"project_atlas_8", frames: [[0,0,1280,900],[0,902,1280,900]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_28 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2622,1160);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2298,1229);


(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2622,1205);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2622,1205);


(lib.CachedBmp_16 = function() {
	this.initialize(ss["project_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["project_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["project_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["project_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["project_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["project_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["project_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["project_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["project_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["project_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["project_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4370,2244);


(lib.GEmitos = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GEmitosBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.GEuozo = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.GEuozoBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.GEwine = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.GEwineBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.GEzipori = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.GEziporiBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glass = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glassBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.grecee = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hagar = function() {
	this.initialize(ss["project_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.idan = function() {
	this.initialize(ss["project_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IDbaileys = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.IDbaileysBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.IDbeer = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.IDbeerBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.IDhat = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.IDhatBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.IDjemson = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.IDjemsonBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.IDshirdan = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.IDshirdanBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ILarak = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ILarakBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ILbeer = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ILmalcaBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ILtubi = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ILtubiBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ILwhiskey = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ILwiskiBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.irland = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.israel = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.logohittelem2 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.margaritaMEblack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.MEcorona = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.MEcoronaBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.MEhat = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.MEhatBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.MEmargrita = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.MEtacila = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.MEtaquliaBlack = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.mexcio = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.ofer = function() {
	this.initialize(ss["project_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shachar = function() {
	this.initialize(ss["project_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sofa = function() {
	this.initialize(img.sofa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3004,2572);


(lib.tubiIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.ILtubi();
	this.instance.setTransform(0,0,0.2329,0.2329);

	this.instance_1 = new lib.ILtubiBlack();
	this.instance_1.setTransform(0,0,0.9444,0.9333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,112);


(lib.tequilaME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.MEtacila();
	this.instance.setTransform(0,0,0.1791,0.1791);

	this.instance_1 = new lib.MEtaquliaBlack();
	this.instance_1.setTransform(0,0,0.8561,0.855);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.2,111.2);


(lib.retsinaGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.GEwine();
	this.instance.setTransform(0,0,0.343,0.343);

	this.instance_1 = new lib.GEwineBlack();
	this.instance_1.setTransform(0,0,0.6905,0.6882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.8,111.5);


(lib.ouzoGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.GEuozo();
	this.instance.setTransform(0,0,0.3315,0.3315);

	this.instance_1 = new lib.GEuozoBlack();
	this.instance_1.setTransform(0,0,0.7562,0.7509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.4,121.7);


(lib.mythosGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.GEmitos();
	this.instance.setTransform(0,0,0.2539,0.2539);

	this.instance_1 = new lib.GEmitosBlack();
	this.instance_1.setTransform(22.2,0,0.6932,0.6971,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,87.9);


(lib.mhIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.ILwhiskey();
	this.instance.setTransform(0,0,0.3395,0.3395);

	this.instance_1 = new lib.ILwiskiBlack();
	this.instance_1.setTransform(0,0,0.7737,0.7699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,140.9);


(lib.merphisIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.IDbeer();
	this.instance.setTransform(0,0,0.1298,0.1298);

	this.instance_1 = new lib.IDbeerBlack();
	this.instance_1.setTransform(-1,0,0.7456,0.7227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,45.5,90.4);


(lib.MEhat_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.MEhat();
	this.instance.setTransform(0,0,0.2324,0.2324);

	this.instance_1 = new lib.MEhatBlack();
	this.instance_1.setTransform(0,0,0.8005,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.7,137.6);


(lib.margaritaME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.MEmargrita();
	this.instance.setTransform(0,0,0.263,0.263);

	this.instance_1 = new lib.margaritaMEblack();
	this.instance_1.setTransform(0,0,0.7892,0.7814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.8,104.7);


(lib.malcaIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.ILbeer();
	this.instance.setTransform(0,0,0.2581,0.2581);

	this.instance_1 = new lib.ILmalcaBlack();
	this.instance_1.setTransform(0,0,0.7011,0.6992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,95.1);


(lib.jamesonIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.IDjemson();
	this.instance.setTransform(0,0,0.2561,0.2561);

	this.instance_1 = new lib.IDjemsonBlack();
	this.instance_1.setTransform(0,0,0.8998,0.8913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,115);


(lib.irishcreamIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.IDshirdan();
	this.instance.setTransform(0,3,0.2089,0.2089);

	this.instance_1 = new lib.IDshirdanBlack();
	this.instance_1.setTransform(0,3,0.645,0.6366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,65.8,93);


(lib.IRhat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.IDhat();
	this.instance.setTransform(0,0,0.2644,0.2644);

	this.instance_1 = new lib.IDhatBlack();
	this.instance_1.setTransform(0,0,0.8142,0.8107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.1,111.9);


(lib.glass_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.glass();
	this.instance.setTransform(0,0,0.1971,0.1971);

	this.instance_1 = new lib.glassBlack();
	this.instance_1.setTransform(0,0,0.5742,0.5707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.4,83.4);


(lib.coronaME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.MEcoronaBlack();
	this.instance.setTransform(0,0,0.7629,0.7463);

	this.instance_1 = new lib.MEcorona();
	this.instance_1.setTransform(0,0,0.1674,0.1674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleY:0.7463}}]}).to({state:[{t:this.instance,p:{scaleY:0.7518}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.2,100.8);


(lib.chiporoGR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.GEzipori();
	this.instance.setTransform(0,0,0.2847,0.2847);

	this.instance_1 = new lib.GEziporiBlack();
	this.instance_1.setTransform(0,0,0.9078,0.8921);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,133.8);


(lib.baileysIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.IDbaileys();
	this.instance.setTransform(0,0,0.124,0.124);

	this.instance_1 = new lib.IDbaileysBlack();
	this.instance_1.setTransform(0,0,0.5643,0.5598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,75.6);


(lib.arakIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.ILarak();
	this.instance.setTransform(0,0,0.2814,0.2814);

	this.instance_1 = new lib.ILarakBlack();
	this.instance_1.setTransform(40.8,0,0.7553,0.7544,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.8,125.3);


(lib.plusButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhXjbICvAAQCEAAAACEIAACvQAACEiEAAIivAAQiEAAAAiEIAAivQAAiECEAAg");
	this.shape.setTransform(22,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA95D").s().p("AhXDcQiEAAAAiEIAAivQAAiECEAAICvAAQCEAAAACEIAACvQAACEiEAAg");
	this.shape_1.setTransform(22,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:22,y:22}},{t:this.shape,p:{scaleX:1,scaleY:1,x:22,y:22}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.03,scaleY:1.03,x:22.0731,y:22.0645}},{t:this.shape,p:{scaleX:1.03,scaleY:1.03,x:22.0731,y:22.0645}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:22,y:22}},{t:this.shape,p:{scaleX:1,scaleY:1,x:22,y:22}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:22,y:22}},{t:this.shape,p:{scaleX:1,scaleY:1,x:22,y:22}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,47.4,47.300000000000004);


(lib.mexicoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מקסיקו", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(121.95,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApcjWIS5AAQBQAAAABQIAAENQAABQhQAAIy5AAQhQAAAAhQIAAkNQAAhQBQAAg");
	this.shape.setTransform(68.525,26.6459,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,227,224,0.098)").s().p("ApcDXQhQAAAAhQIAAkNQAAhQBQAAIS5AAQBQAAAABQIAAENQAABQhQAAg");
	this.shape_1.setTransform(68.525,26.6459,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:121.95,y:2}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.06,scaleY:1.1922,x:68.5641,y:26.6597}},{t:this.shape,p:{scaleX:1.06,scaleY:1.1922,x:68.5641,y:26.6597}},{t:this.text,p:{scaleX:1.06,scaleY:1.06,x:125.146,y:0.5}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:121.95,y:2}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:26.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:121.95,y:2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1.6,147.2,56);


(lib.israelButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ישראל", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(114,3.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,227,227,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.1959,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:114,y:3.55}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:23.8703}},{t:this.shape,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:23.8703}},{t:this.text,p:{scaleX:1.07,scaleY:1.07,x:117.15,y:1.7}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:114,y:3.55}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:114,y:3.55}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3,148.6,63.4);


(lib.irlandButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אירלנד", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(116.95,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(223,225,222,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.1959,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:116.95,y:3}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:23.9203}},{t:this.shape,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:23.9203}},{t:this.text,p:{scaleX:1.07,scaleY:1.07,x:120.35,y:1.2}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:116.95,y:3}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.1959}},{t:this.text,p:{scaleX:1,scaleY:1,x:116.95,y:3}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3,148.6,62.9);


(lib.imgHerf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logohittelem2();
	this.instance.setTransform(93,167,0.4692,0.4692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.48,scaleY:0.48,x:91,y:166},0).wait(1).to({scaleX:0.4692,scaleY:0.4692,x:93,y:167},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,166,143.1,101.30000000000001);


(lib.greeceBotton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("יוון", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 65;
	this.text.parent = this;
	this.text.setTransform(88.45,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.6459,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,227,227,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.6459,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:88.45,y:2}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:24.4203}},{t:this.shape,p:{scaleX:1.07,scaleY:1.2035,x:68.5678,y:24.4203}},{t:this.text,p:{scaleX:1.07,scaleY:1.07,x:89.8867,y:0.1}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:88.45,y:2}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.shape,p:{scaleX:1,scaleY:1.1247,x:68.525,y:24.6459}},{t:this.text,p:{scaleX:1,scaleY:1,x:88.45,y:2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-2.5,148.6,61.3);


(lib.close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiSB5ICSh6ICUhzAiSh4ICSB3ICOBy");
	this.shape.setTransform(21.15,17.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgBICUhzAAAgBICOByAiSh4ICSB3AiSB5ICSh6");
	this.shape_1.setTransform(21.15,17.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.027)").ss(3,1,1).p("Ah3k1IDvAAQC+AAAAC+IAADvQAAC+i+AAIjvAAQi+AAAAi+IAAjvQAAi+C+AAg");
	this.shape_2.setTransform(21.0193,16.5363,0.7231,0.7231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("Ah3E2Qi+AAAAi+IAAjvQAAi+C+AAIDvAAQC+AAAAC+IAADvQAAC+i+AAg");
	this.shape_3.setTransform(21.0193,16.5363,0.7231,0.7231);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,0,0,0.698)").ss(3,1,1).p("Ah3k1IDvAAQC+AAAAC+IAADvQAAC+i+AAIjvAAQi+AAAAi+IAAjvQAAi+C+AAg");
	this.shape_4.setTransform(21.0193,16.5363,0.7231,0.7231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.8)").s().p("Ah3E2Qi+AAAAi+IAAjvQAAi+C+AAIDvAAQC+AAAAC+IAADvQAAC+i+AAg");
	this.shape_5.setTransform(21.0193,16.5363,0.7231,0.7231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-7.4,47.9,47.9);


(lib.aboutButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Amei9IM9AAQBkAAAABkIAACzQAABkhkAAIs9AAQhkAAAAhkIAAizQAAhkBkAAg");
	this.shape.setTransform(51.525,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,227,227,0.098)").s().p("AmeC+QhkAAAAhkIAAizQAAhkBkAAIM9AAQBkAAAABkIAACzQAABkhkAAg");
	this.shape_1.setTransform(51.525,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:51.525,y:19}},{t:this.shape,p:{scaleX:1,scaleY:1,x:51.525,y:19}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.07,scaleY:1.07,x:51.5783,y:19.0131}},{t:this.shape,p:{scaleX:1.07,scaleY:1.07,x:51.5783,y:19.0131}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:51.525,y:19}},{t:this.shape,p:{scaleX:1,scaleY:1,x:51.525,y:19}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:51.525,y:19}},{t:this.shape,p:{scaleX:1,scaleY:1,x:51.525,y:19}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-2.3,112.2,42.699999999999996);


(lib.taps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(39,58.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-6,58.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(9,81.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-30,47.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-10,81.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(-30,40.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(3,66.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(-98,66.85,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(-16,66.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_11();
	this.instance_9.setTransform(-30,78.85,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_12();
	this.instance_10.setTransform(-16,78.85,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_13();
	this.instance_11.setTransform(-16,64.85,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_14();
	this.instance_12.setTransform(-16,44.85,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_15();
	this.instance_13.setTransform(-14,48.85,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_16();
	this.instance_14.setTransform(-22,56.85,0.5,0.5);

	this.instance_15 = new lib.irland();
	this.instance_15.setTransform(-91,160,1.5999,1.5999);

	this.instance_16 = new lib.grecee();
	this.instance_16.setTransform(-83,156,1.5,1.5);

	this.instance_17 = new lib.israel();
	this.instance_17.setTransform(-76,117,1.595,1.595);

	this.instance_18 = new lib.mexcio();
	this.instance_18.setTransform(-78,154,1.6942,1.6942);

	this.instance_19 = new lib.shachar();
	this.instance_19.setTransform(703,218,0.2228,0.2309);

	this.instance_20 = new lib.ofer();
	this.instance_20.setTransform(494,221,0.233,0.233);

	this.instance_21 = new lib.idan();
	this.instance_21.setTransform(74,219,0.225,0.2274);

	this.instance_22 = new lib.hagar();
	this.instance_22.setTransform(285,218,0.2309,0.2385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},1).wait(1));

	// textbox
	this.instance_23 = new lib.GEwine();
	this.instance_23.setTransform(52,80,0.6844,0.6844);

	this.instance_24 = new lib.MEtacila();
	this.instance_24.setTransform(35,83,0.3137,0.3137);

	this.instance_25 = new lib.IDjemson();
	this.instance_25.setTransform(35,68,0.4828,0.4828);

	this.instance_26 = new lib.ILarak();
	this.instance_26.setTransform(70,60,0.5186,0.5186);

	this.instance_27 = new lib.ILwhiskey();
	this.instance_27.setTransform(61,71,0.5223,0.5223);

	this.instance_28 = new lib.GEuozo();
	this.instance_28.setTransform(60,58,0.5618,0.5618);

	this.instance_29 = new lib.IDbaileys();
	this.instance_29.setTransform(61,93,0.3506,0.3506);

	this.instance_30 = new lib.ILbeer();
	this.instance_30.setTransform(62,76,0.5135,0.5135);

	this.instance_31 = new lib.GEmitos();
	this.instance_31.setTransform(83,93,0.5902,0.5902);

	this.instance_32 = new lib.IDbeer();
	this.instance_32.setTransform(60,109,0.2339,0.2339);

	this.instance_33 = new lib.ILtubi();
	this.instance_33.setTransform(73,53,0.4967,0.4967);

	this.instance_34 = new lib.GEzipori();
	this.instance_34.setTransform(52,79,0.4513,0.4513);

	this.instance_35 = new lib.MEmargrita();
	this.instance_35.setTransform(33,99,0.457,0.457);

	this.instance_36 = new lib.IDshirdan();
	this.instance_36.setTransform(35,93,0.4344,0.4344);

	this.instance_37 = new lib.MEcorona();
	this.instance_37.setTransform(52,93,0.3435,0.3435);

	this.instance_38 = new lib.CachedBmp_17();
	this.instance_38.setTransform(-219.05,-44.15,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_18();
	this.instance_39.setTransform(-226.05,-44.15,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_19();
	this.instance_40.setTransform(-61.95,-44.15,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_20();
	this.instance_41.setTransform(-226.05,-44.15,0.5,0.5);

	this.imgHerf = new lib.imgHerf();
	this.imgHerf.name = "imgHerf";
	this.imgHerf.setTransform(-8,369.5,1,1,0,0,0,149,105.5);
	new cjs.ButtonHelper(this.imgHerf, 0, 1, 2, false, new lib.imgHerf(), 3);

	this.instance_42 = new lib.CachedBmp_28();
	this.instance_42.setTransform(44,45.1,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_27();
	this.instance_43.setTransform(821.1,-72.15,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_26();
	this.instance_44.setTransform(30.9,106.05,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_25();
	this.instance_45.setTransform(80.95,441.35,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_24();
	this.instance_46.setTransform(289.95,441.35,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_23();
	this.instance_47.setTransform(721.05,441.35,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_22();
	this.instance_48.setTransform(494,441.35,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_21();
	this.instance_49.setTransform(128,227.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.imgHerf}]},1).wait(1));

	// X
	this.close = new lib.close();
	this.close.name = "close";
	this.close.setTransform(9,54.05);
	new cjs.ButtonHelper(this.close, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(15).to({regX:21.2,regY:34.6,x:-37.8,y:-31.65},0).wait(5));

	// pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CB995E").ss(7,1,1).p("EgbAglzMA2BAAAQGtAAEwEvQEwEwAAGuMAAAArOQAAGtkwEwQkwEwmtAAMg2BAAAQmtAAkwkwQkwkwAAmtMAAAgrOQAAmuEwkwQEwkvGtAAg");
	this.shape.setTransform(254.6116,232.5862,1.0289,0.8998);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF6ED").s().p("EgbAAl0QmtAAkwkwQkwkvAAmuMAAAgrNQAAmuEwkwQEwkwGtAAMA2BAAAQGtAAEwEwQEwEwAAGuMAAAArNQAAGukwEvQkwEwmtAAg");
	this.shape_1.setTransform(254.6116,232.5862,1.0289,0.8998);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CB995E").ss(7,1,1).p("EhaZg0RMC0zAAAQBkAABGBHQBHBGAABkMAAABhBQAABkhHBGQhGBHhkAAMi0zAAAQhkAAhGhHQhHhGAAhkMAAAhhBQAAhkBHhGQBGhHBkAAg");
	this.shape_2.setTransform(511.65,241.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDF6ED").s().p("EhaZA0SQhjAAhHhHQhGhGgBhkMAAAhhBQABhkBGhGQBHhHBjAAMC0zAAAQBjAABHBHQBGBGABBkMAAABhBQgBBkhGBGQhHBHhjAAg");
	this.shape_3.setTransform(511.65,241.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},15).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-96.4,1343.8,676.1);


(lib.plus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// plus
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAAhvIAABiAhrgCIBrAAIBsAAAAAgCIAABy");
	this.shape.setTransform(258.6,23.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("AAAgCIAAByAAAgCIBsAAAhrgCIBrAAAAAhvIAABi");
	this.shape_1.setTransform(258.6,23.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// border
	this.instance = new lib.plusButton();
	this.instance.setTransform(258.5,22,1,1,0,0,0,22,22);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.plusButton(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AhXjbICvAAQCEAAAACEIAACvQAACEiEAAIivAAQiEAAAAiEIAAivQAAiECEAAg");
	this.shape_2.setTransform(258.5,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(225,227,224,0.098)").s().p("AhXDcQiEAAAAiEIAAivQAAiECEAAICvAAQCEAAAACEIAACvQAACEiEAAg");
	this.shape_3.setTransform(258.5,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234.9,-1.6,47.400000000000006,47.300000000000004);


(lib.mexico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.mexicoButton();
	this.instance.setTransform(68.5,23.95,1,1,0,0,0,68.5,26.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.mexicoButton(), 3);

	this.text = new cjs.Text("מקסיקו", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(121.95,-0.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA95D").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.1959,1,1.1247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape_2.setTransform(69.525,23.7959,1,1.1247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(225,227,224,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_3.setTransform(69.525,23.7959,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:121.95,y:-0.45,color:"#000000",lineWidth:110}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{x:123.9,y:1,color:"#999999",lineWidth:121}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4,147.2,96.7);


(lib.israel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.israelButton();
	this.instance.setTransform(68.5,28.9,1,1,0,0,0,68.5,28.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.israelButton(), 3);

	this.text = new cjs.Text("ישראל", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(114,3.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA95D").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.1959,1,1.1247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape_2.setTransform(68.525,24.1959,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#999999"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3,148.6,63.4);


(lib.irland_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.irlandButton();
	this.instance.setTransform(68.5,28.7,1,1,0,0,0,68.5,28.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.irlandButton(), 3);

	this.text = new cjs.Text("אירלנד", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(116.95,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,24.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA95D").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,24.1959,1,1.1247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape_2.setTransform(68.525,24.1959,1,1.1247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(225,227,224,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_3.setTransform(68.525,24.1959,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#999999"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3,148.6,62.9);


(lib.greece = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.greeceBotton();
	this.instance.setTransform(68.5,27.95,1,1,0,0,0,68.5,28.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.greeceBotton(), 3);

	this.text = new cjs.Text("יוון", "40px 'Calibri Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 65;
	this.text.parent = this;
	this.text.setTransform(88.45,2.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape.setTransform(68.525,25.1959,1,1.1247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA95D").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_1.setTransform(68.525,25.1959,1,1.1247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("Ao+jWIR9AAQBuAAAABuIAADRQAABuhuAAIx9AAQhuAAAAhuIAAjRQAAhuBuAAg");
	this.shape_2.setTransform(68.775,24.0459,1,1.1247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(225,227,224,0.098)").s().p("Ao+DXQhuAAAAhuIAAjRQAAhuBuAAIR9AAQBuAAAABuIAADRQAABuhuAAg");
	this.shape_3.setTransform(68.775,24.0459,1,1.1247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:2.55,color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:1.4,color:"#999999"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-2.9,148.6,61.3);


(lib.about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.aboutButton();
	this.instance.setTransform(51.5,21.2,1,1,0,0,0,51.5,19);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.aboutButton(), 3);

	this.text = new cjs.Text("אודות", "normal 400 30px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 30;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(81.5,6.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(3,1,1).p("Amei9IM9AAQBkAAAABkIAACzQAABkhkAAIs9AAQhkAAAAhkIAAizQAAhkBkAAg");
	this.shape.setTransform(51.525,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000",lineHeight:30.4}},{t:this.instance}]}).to({state:[{t:this.text,p:{color:"#999999",lineHeight:28.6}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-0.1,112.2,46.800000000000004);


// stage content:
(lib.project = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		//מה יוצג על הבמה
		addEventListenerALL();
		self.taps.visible = false;
		instrutionSelf();
		//נראות כל האובייקטים הלחיצים
		mousewithLook();
		
		//משתנים לקיבועים
		var israel = "false";
		var irland = "false";
		var greece = "false";
		var mexico = "false";
		
		//קישור לאתר של HIT
		self.taps.imgHerf.addEventListener("click", herfHIT);
		function herfHIT() {
			window.open("https://www.hit.ac.il/telem/overview");
		}
		
		//מאזין ל CLOSE
		self.taps.close.addEventListener("click", closeCLICK);
		
		//פונקציה שמזמנת את כל המאזינים
		function addEventListenerALL() {
		
			//מאזין ללחיצה על אודות
			self.about.addEventListener("click", aboutClick);
		
			//מאזינים ללחיצה על כל פלוס
			self.plusIR.addEventListener("click", plusIRclick);
			self.plusME.addEventListener("click", plusMEclick);
			self.plusGR.addEventListener("click", plusGRclick);
			self.plusIL.addEventListener("click", plusILclick);
		
			//מאזין ללחיצה על כל מדינה
			self.israel.addEventListener("click", israelClick);
			self.irland.addEventListener("click", irlandClick);
			self.greece.addEventListener("click", greeceClick);
			self.mexico.addEventListener("click", mexicoClick);
		
			//מאזינים ללחיצה, מעבר עכבר ויציאה ממעבר עכבר לכל משקה 
			self.tubiIL.addEventListener("mouseover", tubiover);
			self.tubiIL.addEventListener("mouseout", Outmouse);
			self.tubiIL.addEventListener("click", tubiclick);
		
			self.irishcreamIR.addEventListener("mouseover", irishcreamIRover);
			self.irishcreamIR.addEventListener("mouseout", Outmouse);
			self.irishcreamIR.addEventListener("click", irishcreamIRclick);
		
			self.chiporoGR.addEventListener("mouseover", chiporoGRover);
			self.chiporoGR.addEventListener("mouseout", Outmouse);
			self.chiporoGR.addEventListener("click", chiporoGRclick);
		
			self.margaritaME.addEventListener("mouseover", margaritaMEover);
			self.margaritaME.addEventListener("mouseout", Outmouse);
			self.margaritaME.addEventListener("click", margaritaMEclick);
		
			self.baileysIR.addEventListener("mouseover", baileysIRover);
			self.baileysIR.addEventListener("mouseout", Outmouse);
			self.baileysIR.addEventListener("click", baileysIRclick);
		
			self.jamesonIR.addEventListener("mouseover", jamesonIRover);
			self.jamesonIR.addEventListener("mouseout", Outmouse);
			self.jamesonIR.addEventListener("click", jamesonIRclick);
		
			self.retsinaGR.addEventListener("mouseover", retsinaGRover);
			self.retsinaGR.addEventListener("mouseout", Outmouse);
			self.retsinaGR.addEventListener("click", retsinaGRclick);
		
			self.ouzeGR.addEventListener("mouseover", ouzeGRover);
			self.ouzeGR.addEventListener("mouseout", Outmouse);
			self.ouzeGR.addEventListener("click", ouzeGRclick);
		
			self.tequilaME.addEventListener("mouseover", tequilaMEover);
			self.tequilaME.addEventListener("mouseout", Outmouse);
			self.tequilaME.addEventListener("click", tequilaMEclick);
		
			self.arakIL.addEventListener("mouseover", arakILover);
			self.arakIL.addEventListener("mouseout", Outmouse);
			self.arakIL.addEventListener("click", arakILclick);
		
			self.mhIL.addEventListener("mouseover", mhILover);
			self.mhIL.addEventListener("mouseout", Outmouse);
			self.mhIL.addEventListener("click", mhILclick);
		
			self.malacaIL.addEventListener("mouseover", malacaILover);
			self.malacaIL.addEventListener("mouseout", Outmouse);
			self.malacaIL.addEventListener("click", malacaILclick);
		
			self.coronaME.addEventListener("mouseover", coronaMEover);
			self.coronaME.addEventListener("mouseout", Outmouse);
			self.coronaME.addEventListener("click", coronaMEclick);
		
			self.mythosGR.addEventListener("mouseover", mythosGRover);
			self.mythosGR.addEventListener("mouseout", Outmouse);
			self.mythosGR.addEventListener("click", mythosGRclick);
		
			self.merphisIR.addEventListener("mouseover", merphisIRover);
			self.merphisIR.addEventListener("mouseout", Outmouse);
			self.merphisIR.addEventListener("click", merphisIRclick);
		}
		
		//פונקציה שמבטלת את כל המאזינים
		function removeEventListenerALL() {
			//ביטול מאזין ללחיצה על אודות
			self.about.removeEventListener("click", aboutClick);
		
			//ביטול מאזינים לפלוסים
			self.plusIR.removeEventListener("click", plusIRclick);
			self.plusME.removeEventListener("click", plusMEclick);
			self.plusGR.removeEventListener("click", plusGRclick);
			self.plusIL.removeEventListener("click", plusILclick);
			
			//ביטול מאזינים למדינות
			self.israel.removeEventListener("click", israelClick);
			self.irland.removeEventListener("click", irlandClick);
			self.greece.removeEventListener("click", greeceClick);
			self.mexico.removeEventListener("click", mexicoClick);
		
			//ביטול מאזינים לכל לחיצה, מעבר עכבר ויציאה ממעבר עכבר על כל משקה
		
			self.tubiIL.removeEventListener("mouseover", tubiover);
			self.tubiIL.removeEventListener("mouseout", Outmouse);
			self.tubiIL.removeEventListener("click", tubiclick);
		
			self.irishcreamIR.removeEventListener("mouseover", irishcreamIRover);
			self.irishcreamIR.removeEventListener("mouseout", Outmouse);
			self.irishcreamIR.removeEventListener("click", irishcreamIRclick);
		
			self.chiporoGR.removeEventListener("mouseover", chiporoGRover);
			self.chiporoGR.removeEventListener("mouseout", Outmouse);
			self.chiporoGR.removeEventListener("click", chiporoGRclick);
		
			self.margaritaME.removeEventListener("mouseover", margaritaMEover);
			self.margaritaME.removeEventListener("mouseout", Outmouse);
			self.margaritaME.removeEventListener("click", margaritaMEclick);
		
			self.baileysIR.removeEventListener("mouseover", baileysIRover);
			self.baileysIR.removeEventListener("mouseout", Outmouse);
			self.baileysIR.removeEventListener("click", baileysIRclick);
		
			self.jamesonIR.removeEventListener("mouseover", jamesonIRover);
			self.jamesonIR.removeEventListener("mouseout", Outmouse);
			self.jamesonIR.removeEventListener("click", jamesonIRclick);
		
			self.retsinaGR.removeEventListener("mouseover", retsinaGRover);
			self.retsinaGR.removeEventListener("mouseout", Outmouse);
			self.retsinaGR.removeEventListener("click", retsinaGRclick);
		
			self.ouzeGR.removeEventListener("mouseover", ouzeGRover);
			self.ouzeGR.removeEventListener("mouseout", Outmouse);
			self.ouzeGR.removeEventListener("click", ouzeGRclick);
		
			self.tequilaME.removeEventListener("mouseover", tequilaMEover);
			self.tequilaME.removeEventListener("mouseout", Outmouse);
			self.tequilaME.removeEventListener("click", tequilaMEclick);
		
			self.arakIL.removeEventListener("mouseover", arakILover);
			self.arakIL.removeEventListener("mouseout", Outmouse);
			self.arakIL.removeEventListener("click", arakILclick);
		
			self.mhIL.removeEventListener("mouseover", mhILover);
			self.mhIL.removeEventListener("mouseout", Outmouse);
			self.mhIL.removeEventListener("click", mhILclick);
		
			self.malacaIL.removeEventListener("mouseover", malacaILover);
			self.malacaIL.removeEventListener("mouseout", Outmouse);
			self.malacaIL.removeEventListener("click", malacaILclick);
		
			self.coronaME.removeEventListener("mouseover", coronaMEover);
			self.coronaME.removeEventListener("mouseout", Outmouse);
			self.coronaME.removeEventListener("click", coronaMEclick);
		
			self.mythosGR.removeEventListener("mouseover", mythosGRover);
			self.mythosGR.removeEventListener("mouseout", Outmouse);
			self.mythosGR.removeEventListener("click", mythosGRclick);
		
			self.merphisIR.removeEventListener("mouseover", merphisIRover);
			self.merphisIR.removeEventListener("mouseout", Outmouse);
			self.merphisIR.removeEventListener("click", merphisIRclick);
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		//פונקציות כלליות
		
		//פונקציה לפתיחת כרטיסיןת
		function openTabs(number) {
			self.taps.visible = true;
			self.instrution1.visible = false;
			self.instrution2.visible = false;
			self.israel.visible = false;
			self.irland.visible = false;
			self.mexico.visible = false;
			self.greece.visible = false;
			self.about.visible = false;
			self.plusIR.visible = false;
			self.plusME.visible = false;
			self.plusIL.visible = false;
			self.plusGR.visible = false;
			self.taps.gotoAndStop(number);
			removeEventListenerALL();
			mousewithLook();
		}
		
		//פונקציה שמעבירים את הבקבוקים לפריים אפס
		function primeZeroBottles() {
			self.irishcreamIR.gotoAndStop(0);
			self.chiporoGR.gotoAndStop(0);
			self.margaritaME.gotoAndStop(0);
			self.MEhat.gotoAndStop(0);
			self.IRhat.gotoAndStop(0);
			self.jamesonIR.gotoAndStop(0);
			self.glass.gotoAndStop(0);
			self.retsinaGR.gotoAndStop(0);
			self.ouzeGR.gotoAndStop(0);
			self.tequilaME.gotoAndStop(0);
			self.arakIL.gotoAndStop(0);
			self.mhIL.gotoAndStop(0);
			self.coronaME.gotoAndStop(0);
			self.malacaIL.gotoAndStop(0);
			self.mythosGR.gotoAndStop(0);
			self.merphisIR.gotoAndStop(0);
			self.baileysIR.gotoAndStop(0);
			self.tubiIL.gotoAndStop(0);
		}
		//פונקציה שמעבירה את הבקבוקים לפריים אחד
		function primeOneBottles() {
			self.irishcreamIR.gotoAndStop(1);
			self.chiporoGR.gotoAndStop(1);
			self.margaritaME.gotoAndStop(1);
			self.MEhat.gotoAndStop(1);
			self.IRhat.gotoAndStop(1);
			self.jamesonIR.gotoAndStop(1);
			self.glass.gotoAndStop(1);
			self.retsinaGR.gotoAndStop(1);
			self.ouzeGR.gotoAndStop(1);
			self.tequilaME.gotoAndStop(1);
			self.arakIL.gotoAndStop(1);
			self.mhIL.gotoAndStop(1);
			self.coronaME.gotoAndStop(1);
			self.malacaIL.gotoAndStop(1);
			self.mythosGR.gotoAndStop(1);
			self.merphisIR.gotoAndStop(1);
			self.baileysIR.gotoAndStop(1);
			self.tubiIL.gotoAndStop(1);
		}
		//פונקציה שמעבירה את בפלוסים לפריים אפס
		function primeZeroPlus() {
			self.plusIR.gotoAndStop(0);
			self.plusME.gotoAndStop(0);
			self.plusIL.gotoAndStop(0);
			self.plusGR.gotoAndStop(0);
		
		}
		//פונקתיה שמעבירה את הפלוסים לפריים אחד
		function primeOnePlus() {
			self.plusIR.gotoAndStop(1);
			self.plusME.gotoAndStop(1);
			self.plusIL.gotoAndStop(1);
			self.plusGR.gotoAndStop(1);
		
		}
		//פונקציה שנעבירה את המדינות לפריים אפס
		function primeZeroCountry() {
			self.israel.gotoAndStop(0);
			self.irland.gotoAndStop(0);
			self.mexico.gotoAndStop(0);
			self.greece.gotoAndStop(0);
		}
		
		//פונקציה שמעבירה את המידנות לפריים שתיים
		function primeTwoCountry() {
			self.israel.gotoAndStop(2);
			self.irland.gotoAndStop(2);
			self.mexico.gotoAndStop(2);
			self.greece.gotoAndStop(2);
		}
		//פונקציות לשינוי הנחיות
		function instrutionSelf() {
			self.instrution1.text = "בלחיצה על מדינה תוכל לראות את מותגי האלכוהול שלה ובלחיצה .על כפתור הפלוס תיחשף למידע על תרבות האלכוהול שלה";
			self.instrution2.text = "במעבר עכבר על בקבוק תוכל לראות לאיזו מדינה הוא שייך .ובלחיצה על בקבוק שאתה אוהב תחשף למידע עליו";
		
			}
		function instrutionFilter() {
			self.instrution1.text = "לחיצה נוספת על המדינה תחזיר אותך למצב הקודם ובלחיצה על .כפתור הפלוס תחשפו למידע על תרבות האלכוהול שלה";
			self.instrution2.text = ".בלחיצה על בקבוק ממדינה זו תחשף למידע עליו";
		}
		function instrutionOverBottle() {
			self.instrution2.text = ".בלחיצה על בקבוק זה תחשף למידע עליו";
		}
		//ביטול נראות ככפתור
		function mousWithoutLook() {
			self.tubiIL.cursor = "not-allowed";
			self.irishcreamIR.cursor = "not-allowed";
			self.chiporoGR.cursor = "not-allowed";
			self.margaritaME.cursor = "not-allowed";
			self.baileysIR.cursor = "not-allowed";
			self.jamesonIR.cursor = "not-allowed";
			self.retsinaGR.cursor = "not-allowed";
			self.ouzeGR.cursor = "not-allowed";
			self.tequilaME.cursor = "not-allowed";
			self.arakIL.cursor = "not-allowed";
			self.mhIL.cursor = "not-allowed";
			self.coronaME.cursor = "not-allowed";
			self.malacaIL.cursor = "not-allowed";
			self.mythosGR.cursor = "not-allowed";
			self.merphisIR.cursor = "not-allowed";
			self.israel.cursor = "not-allowed";
			self.irland.cursor = "not-allowed";
			self.greece.cursor = "not-allowed";
			self.mexico.cursor = "not-allowed";
			self.plusIR.cursor = "not-allowed";
			self.plusME.cursor = "not-allowed";
			self.plusIL.cursor = "not-allowed";
			self.plusGR.cursor = "not-allowed";
		}
		//נראות עכבר
		function mousewithLook() {
			self.tubiIL.cursor = "pointer";
			self.irishcreamIR.cursor = "pointer";
			self.chiporoGR.cursor = "pointer";
			self.margaritaME.cursor = "pointer";
			self.baileysIR.cursor = "pointer";
			self.jamesonIR.cursor = "pointer";
			self.retsinaGR.cursor = "pointer";
			self.ouzeGR.cursor = "pointer";
			self.tequilaME.cursor = "pointer";
			self.arakIL.cursor = "pointer";
			self.mhIL.cursor = "pointer";
			self.coronaME.cursor = "pointer";
			self.malacaIL.cursor = "pointer";
			self.mythosGR.cursor = "pointer";
			self.merphisIR.cursor = "pointer";
			self.about.cursor = "pointer";
			self.israel.cursor = "pointer";
			self.irland.cursor = "pointer";
			self.greece.cursor = "pointer";
			self.mexico.cursor = "pointer";
			self.plusIR.cursor = "pointer";
			self.plusME.cursor = "pointer";
			self.plusGR.cursor = "pointer";
			self.plusIL.cursor = "pointer";
		}
		//פונקציה שמאפירה את כל האובייקטים
		function overMouse() {
			primeOneBottles();
			primeTwoCountry();
			primeOnePlus();
			instrutionOverBottle();
			self.instrution1.visible = false;
			self.about.visible = false;
		}
		//פונקציה ליציאה ממבעבר עכבר
		function Outmouse() {
			primeZeroPlus();
			primeZeroBottles();
			primeZeroCountry();
			instrutionSelf();
			self.instrution1.visible = true;
			self.about.visible = true;
		}
		//חזרה למצב במה
		function selfBack() {
			self.about.visible = true;
			addEventListenerALL();
			self.taps.visible = false;
			self.instrution1.visible = true;
			self.instrution2.visible = true;
			self.israel.visible = true;
			self.irland.visible = true;
			self.mexico.visible = true;
			self.greece.visible = true;
			self.plusIR.visible = true;
			self.plusME.visible = true;
			self.plusIL.visible = true;
			self.plusGR.visible = true;
			mousewithLook();
			instrutionSelf();
			primeZeroCountry();
			primeZeroPlus();
			primeZeroBottles();
		
		}
		//לחיצה על ישראל
		function israelFilter() {
			//ביטול אירועי עכבר והחזרה למי שצריך
			removeEventListenerALL();
			self.plusIL.addEventListener("click", plusILclick);
			self.israel.addEventListener("click", israelClick);
			israelListenerBottle();
			//ביטול נראות עכבר והחזרה למי שצריך
			mousWithoutLook();
			self.tubiIL.cursor = "pointer";
			self.arakIL.cursor = "pointer";
			self.malacaIL.cursor = "pointer";
			self.mhIL.cursor = "pointer";
			self.israel.cursor = "pointer";
			self.plusIL.cursor = "pointer";
			//שינוי נראות לאפור ומחזיר למי שצריך לנראות רגילה לבקבוקים
			primeOneBottles();
			self.arakIL.gotoAndStop(0);
			self.mhIL.gotoAndStop(0);
			self.malacaIL.gotoAndStop(0);
			self.tubiIL.gotoAndStop(0);
			//פלוסים באפור מלבד מי שצריך להיות רגיל
			primeOnePlus();
			self.plusIL.gotoAndStop(0);
			//שינוי נראות לאפור מוחזיר למה שצריך מדינות
			primeTwoCountry();
			self.israel.gotoAndStop(0);
			//ביטול כפתור אודות
			self.about.visible = false;
			//שינוי נראות הנחיות
			instrutionFilter();
		}
		
		//לחיצה על אילרנד
		function irlandFilter() {
			//ביטול אירועי עכבר והחזרה למי שצריך
			removeEventListenerALL();
			self.plusIR.addEventListener("click", plusIRclick);
			irlandListenerBottle();
			self.irland.addEventListener("click", irlandClick);
			//ביטול נראות עכבר והחזרה למי שצריך
			mousWithoutLook();
			self.irishcreamIR.cursor = "pointer";
			self.baileysIR.cursor = "pointer";
			self.jamesonIR.cursor = "pointer";
			self.merphisIR.cursor = "pointer";
			self.irland.cursor = "pointer";
			self.plusIR.cursor = "pointer";
			//שינוי נראות לאפור ומחזיר למי שצריך לנראות רגילה לבקבוקים
			primeOneBottles();
			self.irishcreamIR.gotoAndStop(0);
			self.baileysIR.gotoAndStop(0);
			self.jamesonIR.gotoAndStop(0);
			self.merphisIR.gotoAndStop(0);
			//פלוסים באפור מלבד מי שצריך להיות רגיל
			primeOnePlus();
			self.plusIR.gotoAndStop(0);
			//שינוי נראות לאפור מוחזיר למה שצריך מדינות
			primeTwoCountry();
			self.irland.gotoAndStop(1);
			//ביטול כפתור אודות
			self.about.visible = false;
			//שינוי נראות הנחיות
			instrutionFilter();
		}
		
		//לחיצה על מקסיקו
		function mexicoFilter() {
			//ביטול אירועי עכבר והחזרה למי שצריך
			removeEventListenerALL();
			self.plusME.addEventListener("click", plusMEclick);
			self.mexico.addEventListener("click", mexicoClick);
			mexicoListenerBottle();
			//ביטול נראות עכבר והחזרה למי שצריך
			mousWithoutLook();
			self.coronaME.cursor = "pointer";
			self.tequilaME.cursor = "pointer";
			self.margaritaME.cursor = "pointer";
			self.mexico.cursor = "pointer";
			self.plusME.cursor = "pointer";
			//שינוי נראות לאפור ומחזיר למי שצריך לנראות רגילה לבקבוקים
			primeOneBottles();
			self.coronaME.gotoAndStop(0);
			self.tequilaME.gotoAndStop(0);
			self.margaritaME.gotoAndStop(0);
			//פלוסים באפור מלבד מי שצריך להיות רגיל
			primeOnePlus();
			self.plusME.gotoAndStop(0);
			//שינוי נראות לאפור מוחזיר למה שצריך מדינות
			primeTwoCountry();
			self.mexico.gotoAndStop(0);
			//ביטול כפתור אודות
			self.about.visible = false;
			//שינוי נראות הנחיות
			instrutionFilter();
		}
		
		//לחיצה על יין
		function greeceFilter() {
			//ביטול אירועי עכבר והחזרה למי שצריך
			removeEventListenerALL();
			self.plusGR.addEventListener("click", plusGRclick);
			self.greece.addEventListener("click", greeceClick);
			greeeceListenerBottle();
			//ביטול נראות עכבר והחזרה למי שצריך
			mousWithoutLook();
			self.chiporoGR.cursor = "pointer";
			self.retsinaGR.cursor = "pointer";
			self.ouzeGR.cursor = "pointer";
			self.mythosGR.cursor = "pointer";
			self.greece.cursor = "pointer";
			self.plusGR.cursor = "pointer";
			//שינוי נראות לאפור ומחזיר למי שצריך לנראות רגילה לבקבוקים
			primeOneBottles();
			self.chiporoGR.gotoAndStop(0);
			self.ouzeGR.gotoAndStop(0);
			self.mythosGR.gotoAndStop(0);
			self.retsinaGR.gotoAndStop(0);
			//פלוסים באפור מלבד מי שצריך להיות רגיל
			primeOnePlus();
			self.plusGR.gotoAndStop(0);
			//שינוי נראות לאפור מוחזיר למה שצריך מדינות
			primeTwoCountry();
			self.greece.gotoAndStop(0);
			//ביטול כפתור אודות
			self.about.visible = false;
			//שינוי נראות הנחיות
			instrutionFilter();
		}
		
		//פונקציות מאפשרות שכל בקבוק של כל מדינה יהיה לחיץ
		function israelListenerBottle() {
			self.tubiIL.addEventListener("click", tubiclick);
			self.arakIL.addEventListener("click", arakILclick);
			self.mhIL.addEventListener("click", mhILclick);
			self.malacaIL.addEventListener("click", malacaILclick);
		}
		function greeeceListenerBottle() {
			self.retsinaGR.addEventListener("click", retsinaGRclick);
			self.chiporoGR.addEventListener("click", retsinaGRclick);
			self.ouzeGR.addEventListener("click", ouzeGRclick);
			self.mythosGR.addEventListener("click", mythosGRclick);
		}
		function mexicoListenerBottle() {
			self.margaritaME.addEventListener("click", margaritaMEclick);
			self.tequilaME.addEventListener("click", tequilaMEclick);
			self.coronaME.addEventListener("click", coronaMEclick);
		}
		function irlandListenerBottle() {
			self.merphisIR.addEventListener("click", merphisIRclick);
			self.jamesonIR.addEventListener("click", jamesonIRclick);
			self.baileysIR.addEventListener("click", baileysIRclick);
			self.irishcreamIR.addEventListener("click", irishcreamIRclick);
		}
		///////////////////////////////////////////////////////////////////////////////////////////////
		//פונקציות לחיצה על אובייקטים
		
		// פונקציה ABOUT
		function aboutClick() {
			openTabs(19);
		}
		//לחיצה על פלוס
		function plusIRclick() {
			openTabs(15);
		}
		
		function plusMEclick() {
			openTabs(18);
		}
		
		function plusGRclick() {
			openTabs(16);
		}
		
		function plusILclick() {
			openTabs(17);
		}
		
		//לחיצה על טובי
		function tubiclick() {
			openTabs(10);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (israel == "true") {
				israelListenerBottle();
				self.malacaIL.cursor = "pointer";
				self.mhIL.cursor = "pointer";
				self.arakIL.cursor = "pointer";
		
			}
		}
		//לחיצה על אייריש
		function irishcreamIRclick() {
			openTabs(13);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (irland == "true") {
				irlandListenerBottle();
				self.baileysIR.cursor = "pointer";
				self.jamesonIR.cursor = "pointer";
				self.merphisIR.cursor = "pointer";
		
			}
		}
		//לחיצה על ציפורו
		function chiporoGRclick() {
			openTabs(11);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (greece == "true") {
				greeceListenerBottle();
				self.mythosGR.cursor = "pointer";
				self.ouzeGR.cursor = "pointer";
				self.retsinaGR.cursor = "pointer";
		
			}
		}
		//לחיצה על מרגריטה
		function margaritaMEclick() {
			openTabs(12);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (mexico == "true") {
				mexicoListenerBottle();
				self.tequilaME.cursor = "pointer";
				self.coronaME.cursor = "pointer";
		
			}
		}
		//לחיצה על גיימסון 
		function jamesonIRclick() {
			openTabs(2);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (irland == "true") {
				irlandListenerBottle();
				self.irishcreamIR.cursor = "pointer";
				self.baileysIR.cursor = "pointer";
				self.merphisIR.cursor = "pointer";
		
			}
		}
		//לחיצה על רצינה
		function retsinaGRclick() {
			openTabs(0);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (greece == "true") {
				greeceListenerBottle();
				self.mythosGR.cursor = "pointer";
				self.ouzeGR.cursor = "pointer";
				self.chiporoGR.cursor = "pointer";
		
			}
		}
		//לחיצה על אוזו
		function ouzeGRclick() {
			openTabs(5);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (greece == "true") {
				greeceListenerBottle();
				self.mythosGR.cursor = "pointer";
				self.retsinaGR.cursor = "pointer";
				self.chiporoGR.cursor = "pointer";
		
			}
		}
		//לחיצה על טקילה
		function tequilaMEclick() {
			openTabs(1);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (mexico == "true") {
				mexicoListenerBottle();
				self.coronaME.cursor = "pointer";
				self.margaritaME.cursor = "pointer";
		
			}
		}
		//לחיצה על ארק
		function arakILclick() {
			openTabs(3);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (israel == "true") {
				israelListenerBottle();
				self.malacaIL.cursor = "pointer";
				self.mhIL.cursor = "pointer";
				self.tubiIL.cursor = "pointer";
		
			}
		}
		//לחיצה על מילקי דבש
		function mhILclick() {
			openTabs(4);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (israel == "true") {
				israelListenerBottle();
				self.malacaIL.cursor = "pointer";
				self.arakIL.cursor = "pointer";
				self.tubiIL.cursor = "pointer";
		
			}
		}
		//לחיצה על קורונה
		function coronaMEclick() {
			openTabs(14);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (mexico == "true") {
				mexicoListenerBottle();
				self.tequilaME.cursor = "pointer";
				self.margaritaME.cursor = "pointer";
		
			}
		}
		//לחיצה על מלכה
		function malacaILclick() {
			openTabs(7);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (israel == "true") {
				israelListenerBottle();
				self.mhIL.cursor = "pointer";
				self.arakIL.cursor = "pointer";
				self.tubiIL.cursor = "pointer";
		
			}
		}
		//לחיצה על מיתוס
		function mythosGRclick() {
			openTabs(8);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (greece == "true") {
				greeceListenerBottle();
				self.ouzeGR.cursor = "pointer";
				self.retsinaGR.cursor = "pointer";
				self.chiporoGR.cursor = "pointer";
		
			}
		}
		//לחיצה על מרפייס
		function merphisIRclick() {
			openTabs(9);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (irland == "true") {
				irlandListenerBottle();
				self.irishcreamIR.cursor = "pointer";
				self.baileysIR.cursor = "pointer";
				self.jamesonIR.cursor = "pointer";
		
			}
		}
		////לחיצה על בייליס
		function baileysIRclick() {
			openTabs(6);
			//ביטול נראות עכבר
			mousWithoutLook();
			if (irland == "true") {
				irlandListenerBottle();
				self.irishcreamIR.cursor = "pointer";
				self.jamesonIR.cursor = "pointer";
				self.merphisIR.cursor = "pointer";
		
			}
		}
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		//פונקציות למעברי עכבר
		//מעבר עכבר על טובי
		function tubiover() {
			overMouse();
			self.israel.gotoAndStop(1);
			self.tubiIL.gotoAndStop(0);
		}
		//מעבר עכבר על אייריש
		function irishcreamIRover() {
			overMouse();
			self.irland.gotoAndStop(1);
			self.irishcreamIR.gotoAndStop(0);
		}
		//מעבר עכבר על ציפורו
		function chiporoGRover() {
			overMouse();
			self.greece.gotoAndStop(1);
			self.chiporoGR.gotoAndStop(0);
		
		}
		//מעבר עכבר על מרגריטה
		function margaritaMEover() {
			overMouse();
			self.mexico.gotoAndStop(1);
			self.margaritaME.gotoAndStop(0);
		}
		//מעבר עכבר על גיימסון
		function jamesonIRover() {
			overMouse();
			self.irland.gotoAndStop(1);
			self.jamesonIR.gotoAndStop(0);
		}
		//מעבר עכבר על רצינה
		function retsinaGRover() {
			overMouse();
			self.greece.gotoAndStop(1);
			self.retsinaGR.gotoAndStop(0);
		}
		//מעבר עכבר על אוזו
		function ouzeGRover() {
			overMouse();
			self.greece.gotoAndStop(1);
			self.ouzeGR.gotoAndStop(0);
		}
		//מעבר עכבר על טקילה
		function tequilaMEover() {
			overMouse();
			self.mexico.gotoAndStop(1);
			self.baileysIR.gotoAndStop(0);
		}
		//מעבר עכבר על ארק
		function arakILover() {
			overMouse();
			self.israel.gotoAndStop(1);
			self.arakIL.gotoAndStop(0);
		}
		//מעבר עכבר על מלקי דבש
		function mhILover() {
			overMouse();
			self.israel.gotoAndStop(1);
			self.mhIL.gotoAndStop(1);
		}
		//מעבר עכבר על קורונה
		function coronaMEover() {
			overMouse();
			self.mexico.gotoAndStop(1);
			self.coronaME.gotoAndStop(0);
		}
		//מעבר על מלכה
		function malacaILover() {
			overMouse();
			self.israel.gotoAndStop(1);
			self.malacaIL.gotoAndStop(0);
		}
		//מעבר עכבר על מיתוס
		function mythosGRover() {
			overMouse();
			self.greece.gotoAndStop(1);
			self.mythosGR.gotoAndStop(0);
		}
		//מעבר עכבר על מרפייס
		function merphisIRover() {
			overMouse();
			self.irland.gotoAndStop(1);
			self.merphisIR.gotoAndStop(0);
		}
		//מעבר עכבר על בייליס
		function baileysIRover() {
			overMouse();
			self.irland.gotoAndStop(1);
			self.baileysIR.gotoAndStop(0);
		}
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////////////////
		//פילטריים
		
		
		//פיילטר מקסיקו
		function mexicoClick() {
			if (mexico == "true") {
				mexico = "false";
				selfBack();
			} else {
				mexico = "true";
				mexicoFilter();
		
			}
		}
		//פיילטר אירלנד
		function irlandClick() {
			if (irland == "true") {
				irland = "false";
				selfBack();
			} else {
				irland = "true";
				irlandFilter();
		
			}
		}
		//פילטר יוון
		function greeceClick() {
			if (greece == "true") {
				greece = "false";
				selfBack();
			} else {
				greece = "true";
				greeceFilter();
		
			}
		}
		//פילטר ישראל
		function israelClick() {
			if (israel == "true") {
				israel = "false";
				selfBack();
			} else {
				israel = "true";
				israelFilter();
		
			}
		}
		
		function closeCLICK() {
			selfBack();
			if (israel == "true") {
				israelFilter();
			}
			if (irland == "true") {
				irlandFilter();
			}
			if (greece == "true") {
				greeceFilter();
			}
			if (mexico == "true") {
				mexicoFilter();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// taps
	this.taps = new lib.taps();
	this.taps.name = "taps";
	this.taps.setTransform(407.5,361.45,1,1,0,0,0,276.6,242.1);

	this.timeline.addTween(cjs.Tween.get(this.taps).wait(1));

	// explian
	this.instrution2 = new cjs.Text("", "23px 'Calibri'");
	this.instrution2.name = "instrution2";
	this.instrution2.textAlign = "right";
	this.instrution2.lineHeight = 20;
	this.instrution2.lineWidth = 533;
	this.instrution2.parent = this;
	this.instrution2.setTransform(665.7,374.7);

	this.instrution1 = new cjs.Text("", "23px 'Calibri'");
	this.instrution1.name = "instrution1";
	this.instrution1.textAlign = "right";
	this.instrution1.lineHeight = 20;
	this.instrution1.lineWidth = 541;
	this.instrution1.parent = this;
	this.instrution1.setTransform(668.7,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instrution1},{t:this.instrution2}]}).wait(1));

	// battels
	this.MEhat = new lib.MEhat_1();
	this.MEhat.name = "MEhat";
	this.MEhat.setTransform(1181.9,107.55,1,1,0,0,0,84.8,68.8);

	this.glass = new lib.glass_1();
	this.glass.name = "glass";
	this.glass.setTransform(1101.3,250.9,1,1,0,0,0,53.7,41.6);

	this.IRhat = new lib.IRhat();
	this.IRhat.name = "IRhat";
	this.IRhat.setTransform(809.6,246.2,1,1,0,0,0,72,55.9);

	this.merphisIR = new lib.merphisIR();
	this.merphisIR.name = "merphisIR";
	this.merphisIR.setTransform(1172.8,542.7,1,1,0,0,0,22.2,44.9);

	this.mythosGR = new lib.mythosGE();
	this.mythosGR.name = "mythosGR";
	this.mythosGR.setTransform(1058.8,540.7,1,1,0,0,0,11.2,43.4);

	this.malacaIL = new lib.malcaIL();
	this.malacaIL.name = "malacaIL";
	this.malacaIL.setTransform(936.6,539.5,1,1,0,0,0,20,47.2);

	this.coronaME = new lib.coronaME();
	this.coronaME.name = "coronaME";
	this.coronaME.setTransform(826.2,534.4,1,1,0,0,0,20.6,50.1);

	this.mhIL = new lib.mhIL();
	this.mhIL.name = "mhIL";
	this.mhIL.setTransform(1183.9,383.55,1,1,0,0,0,26.3,70.5);

	this.arakIL = new lib.arakIL();
	this.arakIL.name = "arakIL";
	this.arakIL.setTransform(1089.95,383.05,1.1,1.1,0,0,0,20.4,62.6);

	this.tequilaME = new lib.tequilaME();
	this.tequilaME.name = "tequilaME";
	this.tequilaME.setTransform(928.7,397.9,1,1,0,0,0,41.1,55.4);

	this.ouzeGR = new lib.ouzoGE();
	this.ouzeGR.name = "ouzeGR";
	this.ouzeGR.setTransform(807.85,376.25,1.2023,1.2023,0,0,0,24.2,60.9);

	this.retsinaGR = new lib.retsinaGE();
	this.retsinaGR.name = "retsinaGR";
	this.retsinaGR.setTransform(1193.5,227.35,1.2079,1.2079,0,0,0,25.9,55.8);

	this.jamesonIR = new lib.jamesonIR();
	this.jamesonIR.name = "jamesonIR";
	this.jamesonIR.setTransform(966,227.8,1,1,0,0,0,32.4,57.5);

	this.baileysIR = new lib.baileysIR();
	this.baileysIR.name = "baileysIR";
	this.baileysIR.setTransform(902.55,230.3,1.4233,1.4233,0,0,0,20.9,37.9);

	this.margaritaME = new lib.margaritaME();
	this.margaritaME.name = "margaritaME";
	this.margaritaME.setTransform(1042.1,94.5,0.8281,0.8281,0,0,0,43.5,52.4);

	this.chiporoGR = new lib.chiporoGR();
	this.chiporoGR.name = "chiporoGR";
	this.chiporoGR.setTransform(959.9,73.45,1,1,0,0,0,26.3,66.9);

	this.irishcreamIR = new lib.irishcreamIR();
	this.irishcreamIR.name = "irishcreamIR";
	this.irishcreamIR.setTransform(847.6,45.3);

	this.tubiIL = new lib.tubiIL();
	this.tubiIL.name = "tubiIL";
	this.tubiIL.setTransform(800.6,79.05,1,1,0,0,0,17,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tubiIL},{t:this.irishcreamIR},{t:this.chiporoGR},{t:this.margaritaME},{t:this.baileysIR},{t:this.jamesonIR},{t:this.retsinaGR},{t:this.ouzeGR},{t:this.tequilaME},{t:this.arakIL},{t:this.mhIL},{t:this.coronaME},{t:this.malacaIL},{t:this.mythosGR},{t:this.merphisIR},{t:this.IRhat},{t:this.glass},{t:this.MEhat}]}).wait(1));

	// buttton
	this.about = new lib.about();
	this.about.name = "about";
	this.about.setTransform(48.6,19.75);

	this.plusME = new lib.plus();
	this.plusME.name = "plusME";
	this.plusME.setTransform(178.4,305.85,1,1,0,0,0,258.5,22);

	this.plusIR = new lib.plus();
	this.plusIR.name = "plusIR";
	this.plusIR.setTransform(178.4,243.85,1,1,0,0,0,258.5,22);

	this.plusGR = new lib.plus();
	this.plusGR.name = "plusGR";
	this.plusGR.setTransform(442.45,307.85,1,1,0,0,0,258.5,22);

	this.plusIL = new lib.plus();
	this.plusIL.name = "plusIL";
	this.plusIL.setTransform(441.45,243.85,1,1,0,0,0,258.5,22);

	this.mexico = new lib.mexico();
	this.mexico.name = "mexico";
	this.mexico.setTransform(280.4,303.6,1,1,0,0,0,68.5,20.7);

	this.israel = new lib.israel_1();
	this.israel.name = "israel";
	this.israel.setTransform(543.45,240.15,1,1,0,0,0,68.5,21.9);

	this.irland = new lib.irland_1();
	this.irland.name = "irland";
	this.irland.setTransform(280.4,240.2,1,1,0,0,0,68.5,21.4);

	this.greece = new lib.greece();
	this.greece.name = "greece";
	this.greece.setTransform(543.45,303.6,1,1,0,0,0,68.5,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.greece},{t:this.irland},{t:this.israel},{t:this.mexico},{t:this.plusIL},{t:this.plusGR},{t:this.plusIR},{t:this.plusME},{t:this.about}]}).wait(1));

	// background
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-310.45,52.75,0.5,0.5);

	this.instance_1 = new lib.sofa();
	this.instance_1.setTransform(-22,413,0.1349,0.1349);

	this.instance_2 = new lib.background();
	this.instance_2.setTransform(0,0,0.2929,0.3209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(329.6,360,950.4,400);
// library properties:
lib.properties = {
	id: 'FE5BF6358C193744966FA20FA4C24101',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_20.png?1624721651941", id:"CachedBmp_20"},
		{src:"images/CachedBmp_19.png?1624721651941", id:"CachedBmp_19"},
		{src:"images/CachedBmp_18.png?1624721651941", id:"CachedBmp_18"},
		{src:"images/CachedBmp_17.png?1624721651941", id:"CachedBmp_17"},
		{src:"images/background.png?1624721651941", id:"background"},
		{src:"images/sofa.png?1624721651941", id:"sofa"},
		{src:"images/project_atlas_1.png?1624721651779", id:"project_atlas_1"},
		{src:"images/project_atlas_2.png?1624721651780", id:"project_atlas_2"},
		{src:"images/project_atlas_3.png?1624721651780", id:"project_atlas_3"},
		{src:"images/project_atlas_4.png?1624721651780", id:"project_atlas_4"},
		{src:"images/project_atlas_5.png?1624721651780", id:"project_atlas_5"},
		{src:"images/project_atlas_6.png?1624721651780", id:"project_atlas_6"},
		{src:"images/project_atlas_7.png?1624721651780", id:"project_atlas_7"},
		{src:"images/project_atlas_8.png?1624721651781", id:"project_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE5BF6358C193744966FA20FA4C24101'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;