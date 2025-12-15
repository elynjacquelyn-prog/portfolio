(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABfBSIhMghYgBgBgBABAAAAIgBAAIg5A7IAGADIAIhSYAAgCgBgCgCgBIAAAAIhKgjIgBAJIBQgTYACAAACgCAAgCIALhTIgJACIArBGIAAABYABABACABABgBIBSgPIgEgGIg1A/IAAAAYAAABAAAAAAABIAqBIABfBSIgmhKIgBADIA4g+YABgBAAgCgCgBYgBgBgBAAgBAAIAAAAIhRAOIAEACIgqhHYgBgCgDgBgDACYgBAAgBACAAABIgLBTIAEgFIhRAUYgCABgCACABADYAAABABABABABIBMAiIgDgEIgFBSIAAABYgBABACACACAAYABAAABAAAAgBIA3g9IgCABIBOAd");
	this.shape.setTransform(-320.7946,-49.6196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCClIh3hJYAAAAgBAAgBABIhtBVIAGADIAfiHYAAgCAAgCgCgBIh0hMIgCAJICLgNYACgBABgBABgCIAliGIgJABIA3B/YAAACACABACAAICLgHIgDgGIhnBcYgBABAAABAAAAIAzCCACCClIgviDIAAACIBphaYABgBABgCgCgCYAAAAgBgBgBAAIAAAAIiLAFIAEADIg2iAYgBgDgDgBgDABYgBABgBABAAABIgmCGIAFgDIiLANYgCAAgCACAAADYAAACABABABABIB0BLIgCgEIgdCIIAAAAYgBACACACABAAYACAAABAAAAgBIBrhXIgCAAIB5BF");
	this.shape_1.setTransform(-125.1199,42.4798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACCClIh3hJYAAAAgBAAgBABIhtBVIAGADIAfiHYAAgCAAgCgCgBIh0hMIgCAJICLgNYACgBABgBABgCIAliGIgJABIA3B/YAAACACABACAAICLgHIgDgGIhnBcYgBABAAABAAAAIAzCCACCClIgviDIAAACIBphaYABgBABgCgCgCYAAAAgBgBgBAAIAAAAIiLAFIAEADIg2iAYgBgDgDgBgDABYgBABgBABAAABIgmCGIAFgDIiLANYgCAAgCACAAADYAAACABABABABIB0BLIgCgEIgdCIIAAAAYgBACACACABAAYACAAABAAAAgBIBrhXIgCAAIB5BF");
	this.shape_2.setTransform(119.0301,-20.6202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABGBXIhAgnYAAgBgBABgBAAIAAAAIg6AtIAFADIAShHYAAgCgBgCgBgBIAAAAIg+goIgDAJIBLgGYACgBACgBAAgCIAThHIgIABIAeBDIAAAAYAAACACABACAAIBLgEIgDgGIg3AwIAAAAYgBABAAABAAAAIAcBEABGBXIgYhFIgBACIA6guYABgBAAgDgBgBYgBgBgBAAgBAAIAAAAIhLACIAEACIgdhDYAAgDgDgBgCABYgCABgBABAAABIgUBHIAEgDIhKAGYgDABgCACAAADYAAABABABABABIA/AnIgCgEIgPBIIAAAAYgBACABACACAAYABAAABAAABgBIA5gvIgDAAIBCAk");
	this.shape_3.setTransform(321.505,-35.5691);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFFFF").s().p("A0nHVIh0hMICLgOIAliGIA4CBICKgGIhoBbIAwCDIh3hHIhtBWgARiihIh0hMICLgOIAliGIA3CAICLgFIhoBcIAwCBIh4hGIhsBWgEAxrgFLIg/goIBKgHIAUhHIAfBEIBKgEIg4AxIAbBEIhCglIg6AugEgyngHTIhMgkIBRgTIALhSIArBGIBSgPIg2A/IAoBJIhNgfIg5A7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332,-61.1,664,122);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABfBSIhMghYgBgBgBABAAAAIgBAAIg5A7IAGADIAIhSYAAgCgBgCgCgBIAAAAIhKgjIgBAJIBQgTYACAAACgCAAgCIALhTIgJACIArBGIAAABYABABACABABgBIBSgPIgEgGIg1A/IAAAAYAAABAAAAAAABIAqBIABfBSIgmhKIgBADIA4g+YABgBAAgCgCgBYgBgBgBAAgBAAIAAAAIhRAOIAEACIgqhHYgBgCgDgBgDACYgBAAgBACAAABIgLBTIAEgFIhRAUYgCABgCACABADYAAABABABABABIBMAiIgDgEIgFBSIAAABYgBABACACACAAYABAAABAAAAgBIA3g9IgCABIBOAd");
	this.shape.setTransform(-320.7946,-49.6196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCClIh3hJYAAAAgBAAgBABIhtBVIAGADIAfiHYAAgCAAgCgCgBIh0hMIgCAJICLgNYACgBABgBABgCIAliGIgJABIA3B/YAAACACABACAAICLgHIgDgGIhnBcYgBABAAABAAAAIAzCCACCClIgviDIAAACIBphaYABgBABgCgCgCYAAAAgBgBgBAAIAAAAIiLAFIAEADIg2iAYgBgDgDgBgDABYgBABgBABAAABIgmCGIAFgDIiLANYgCAAgCACAAADYAAACABABABABIB0BLIgCgEIgdCIIAAAAYgBACACACABAAYACAAABAAAAgBIBrhXIgCAAIB5BF");
	this.shape_1.setTransform(-125.1199,42.4798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACCClIh3hJYAAAAgBAAgBABIhtBVIAGADIAfiHYAAgCAAgCgCgBIh0hMIgCAJICLgNYACgBABgBABgCIAliGIgJABIA3B/YAAACACABACAAICLgHIgDgGIhnBcYgBABAAABAAAAIAzCCACCClIgviDIAAACIBphaYABgBABgCgCgCYAAAAgBgBgBAAIAAAAIiLAFIAEADIg2iAYgBgDgDgBgDABYgBABgBABAAABIgmCGIAFgDIiLANYgCAAgCACAAADYAAACABABABABIB0BLIgCgEIgdCIIAAAAYgBACACACABAAYACAAABAAAAgBIBrhXIgCAAIB5BF");
	this.shape_2.setTransform(119.0301,-20.6202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABGBXIhAgnYAAgBgBABgBAAIAAAAIg6AtIAFADIAShHYAAgCgBgCgBgBIAAAAIg+goIgDAJIBLgGYACgBACgBAAgCIAThHIgIABIAeBDIAAAAYAAACACABACAAIBLgEIgDgGIg3AwIAAAAYgBABAAABAAAAIAcBEABGBXIgYhFIgBACIA6guYABgBAAgDgBgBYgBgBgBAAgBAAIAAAAIhLACIAEACIgdhDYAAgDgDgBgCABYgCABgBABAAABIgUBHIAEgDIhKAGYgDABgCACAAADYAAABABABABABIA/AnIgCgEIgPBIIAAAAYgBACABACACAAYABAAABAAABgBIA5gvIgDAAIBCAk");
	this.shape_3.setTransform(321.505,-35.5691);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFFFF").s().p("A0mHVIh0hMICKgOIAliFIA3CAICMgHIhpBcIAxCDIh4hHIhtBXgARiihIh0hMICKgOIAliGIA4CBICLgGIhpBbIAxCDIh3hHIhuBWgEAxqgFLIg+goIBLgHIAUhHIAdBEIBMgEIg5AxIAaBEIhBglIg6AugEgyogHTIhKgkIBQgTIALhTIAsBHIBRgPIg2A/IAoBJIhNgfIg5A7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332,-61.1,664,122);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHZAAQAADEiLCKQiLCLjDAAQjDAAiKiLQiLiKAAjEQAAjCCLiLQCKiKDDAAQDDAACLCKQCLCLAADCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AlNFOQiLiLABjDQgBjDCLiKQCKiKDDAAQDEAACKCKQCLCKAADDQAADDiLCLQiKCKjEABQjDgBiKiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-48.2,96.5,96.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AE8AAYAAAAAAAIgBAOYAAAHgCAJgBAKYgBAGgBAFgBAGYgCAGgBAGgCAHYgHAZgMAfgVAfYgGAHgGAIgGAIYgGAIgIAHgHAHYgHAIgIAHgIAHYgJAIgJAGgJAHYgmAagvARg0AGYgHABgHAAgGAAYgHAAgHABgFgBYgOAAgOAAgNgDYgbgDgbgJgagLYgHgDgGgDgHgDYgGgEgGgEgGgDYgGgEgGgEgGgFYgFgEgHgEgFgFIgQgPYgGgFgEgGgGgFYgKgLgIgMgJgMYgRgZgNgcgJgcYgIgdgDgfgBgeYABgeADgeAIgdYAJgdANgbARgZYAJgMAIgMAKgLYAGgFAEgHAGgEIAQgPYAGgFAGgEAFgFYAGgEAGgEAGgEYAGgEAGgDAHgEYAGgDAHgDAGgDYAagMAbgIAbgDYAOgDAOAAANAAYAFgBAHABAHAAYAHAAAGAAAHABYA0AGAwARAlAaYAJAHAKAGAIAIYAIAHAJAHAHAHYAHAIAHAHAGAIYAGAIAGAHAGAIYAVAfAMAfAHAZYACAHABAGACAGYABAGABAFABAGYABAKACAJAAAHYABAOAAAHAAAAAE8AAYAAAAAAgHgBgOYAAgHgBgJgBgLYgBgFAAgGgCgFYgBgGgBgGgCgHYgHgagLgggVgfYgGgIgGgIgGgIYgGgIgHgHgHgIYgHgIgIgHgIgHYgJgIgJgGgJgIYgngagwgTg2gGYgGgBgHAAgHgBYgHAAgGgBgGABYgOAAgOAAgOADYgcADgcAIgbAMYgGADgHADgHADYgGAEgGAEgHADYgGAEgGAEgGAFYgGAFgHAEgFAFIgRAPYgGAFgEAGgGAGYgKAKgJANgJAMYgRAagOAcgJAeYgJAegDAggBAeYABAfADAfAJAeYAJAeAOAdARAZYAJAMAJAOAKAKYAGAGAEAFAGAGIARAPYAFAFAHAEAGAFYAGAEAGAFAGADYAHAEAGAEAGAEYAHADAHADAGADYAbAMAcAIAcADYAOADAOAAAOAAYAGABAGgBAHAAYAHgBAHAAAGgBYA2gGAwgTAmgbYAKgHAJgGAIgIYAIgHAJgHAHgIYAHgIAHgIAGgHYAGgJAGgHAGgIYAVgfALggAHgaYACgHABgGABgGYACgGAAgFABgFYABgLABgJAAgHYABgOAAgIAAAA");
	this.shape.setTransform(31.1007,31.3504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFFFF").s().p("AjdDdQhchbAAiCQAAiBBchcQBchcCBAAQCCAABbBcQBdBcAACBQAACChdBbQhbBdiCAAQiBAAhchdg");
	this.shape_1.setTransform(31.35,31.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.4,-0.4,63.199999999999996,63.5), null);


(lib.SunSymbol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHZAAQAADDiLCLQiLCLjDAAQjDAAiKiLQiLiLAAjDQAAjDCLiKQCKiLDDAAQDDAACLCLQCLCKAADDg");
	this.shape.setTransform(47.25,47.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AlNFOQiKiLgBjDQABjCCKiLQCLiKDCgBQDDABCLCKQCKCLABDCQgBDDiKCLQiLCKjDABQjCgBiLiKg");
	this.shape_1.setTransform(47.25,47.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,96.5,96.5);


(lib.Btnplay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000033").s().p("AgRAmQg2AAAAghQAAgUASgMQAQgKAWAAIAQAAQAOAAALAEQAOAGABAMQAAAMgMAHIgkAAIALgXIgWAAIgJAaIgCAEQAAAJAPAAIBXAAQgCAJgJAFQgIAEgJAAg");
	this.shape.setTransform(155.45,173.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgRBQQgNgCAAgLQAAgFACgFIAbhGIhEBTQgIAIgNAAIgXAAIAtiAIg+AAIARgdIBLAAQAPAAAAAMIgBAKIgZBFIAwg2QAJgKAFgEQAIgFANAAQAEAAAEADQAGAEAAAIQAAAFgCAGIgXA4IAsgrIAMgLQAFgDAKAAQAEAAAFADQAHAEAAAJQgBAFgCAFIgaBGIAyAAQgFASgaAAIgpAAQgSAAgBgLQABgDACgHIASgwIg3A9QgIAKgLAAIgEAAg");
	this.shape_1.setTransform(135.55,169.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AAIBEQgOAAAAgMIABgIIALggIgoAmQgJAIgFACQgGAEgIAAIgRAAIAwiHIAnAAIgdBTIAsgrIAaAAIgaAbIAIAAQAQAAAAALIgCAIIgLAfIAuAAQgCAKgLAEQgHAEgIAAg");
	this.shape_2.setTransform(105.775,170.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AgWAmQgTAAgNgGQgRgIAAgRIABgEQABgTAUgLQAQgKAWAAIAbAAQAKAAAGAGQAIAGAAAJQAAAJgIAGQgGAFgKAAQgJAAgHgFQgFgGAAgJIAAgDIgOAAIgJAYIgBAFQAAAKAQAAIBVAAQgCAJgJAFQgGAEgKAAg");
	this.shape_3.setTransform(91.35,173.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_4.setTransform(80.15,169.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AgaBEQgRAAAAgMIABgGIAqh1IAnAAIgpB1IAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_5.setTransform(71.65,170.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("AALBPQglAAgZgLQghgPABgjQAAgTAMgUQAPgbAegPQAcgPAgAAIAXAAQAKAAAJAJQAJAHgBAMQABALgKAIQgJAIgLAAQgNAAgIgIQgKgIAAgLIABgIQgYABgTAZQgSAXAAAXQAAAvA8AAIA4AAQgDASgYAAg");
	this.shape_6.setTransform(59.4496,169.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("AxBkQIR0AAIQPAAIAAIhMgiDAAAg");
	this.shape_7.setTransform(109,170.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AxBERIAAohIR0AAIQPAAIAAIhg");
	this.shape_8.setTransform(109,170.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AgRAmQg3AAAAghQABgUASgMQAQgKAXAAIAPAAQAOAAAKAEQAPAGABAMQABAMgNAHIgkAAIALgXIgXAAIgJAaIgBAEQAAAJAPAAIBXAAQgDAJgIAFQgIAEgKAAg");
	this.shape_9.setTransform(171.45,178.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AgRBQQgNgCAAgLQAAgFACgFIAbhGIhEBTQgIAIgNAAIgXAAIAuiAIg/AAIARgdIBLAAQAQAAAAAMIgCAKIgYBFIAvg2QAJgKAFgEQAIgFANAAQAEAAAEADQAGAEAAAIQAAAFgDAGIgWA4IAsgrIAMgLQAFgDALAAQADAAAFADQAGAEABAJQAAAFgDAFIgbBGIAzAAQgFASgbAAIgoAAQgSAAAAgLQgBgDADgHIASgwIg3A9QgIAKgLAAIgEAAg");
	this.shape_10.setTransform(151.55,174.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AgVAmQgUAAgNgGQgRgIAAgRIAAgEQACgTAUgLQAQgKAWAAIAbAAQAKAAAHAGQAGAGABAJQgBAJgGAGQgHAFgKAAQgJAAgHgFQgGgGABgJIAAgDIgOAAIgJAYIgBAFQAAAKAQAAIBVAAQgCAJgJAFQgHAEgJAAg");
	this.shape_11.setTransform(107.35,178.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAoAAIgUA6IAtAAQgEAKgJAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_12.setTransform(96.15,174.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("AgbBEQgQAAAAgMIABgGIAqh1IAnAAIgpB1IAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_13.setTransform(87.65,175.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("AALBPQglAAgZgLQghgQAAgiQABgTAMgUQAQgbAdgPQAcgPAgAAIAXAAQAKAAAJAIQAIAJABAKQgBAMgJAIQgJAIgLAAQgMAAgJgIQgKgIAAgMIABgHQgYABgTAYQgSAYAAAXQAAAvA7AAIA5AAQgDASgYAAg");
	this.shape_14.setTransform(75.4496,174);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(10,1,1).p("AxBkQMAiDAAAIAAIhMgiDAAAg");
	this.shape_15.setTransform(125,175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0033").s().p("AxBERIAAohMAiDAAAIAAIhg");
	this.shape_16.setTransform(125,175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AxBERIAAohMAiDAAAIAAIhg");
	this.shape_17.setTransform(125,175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(10,1,1).p("AxBkQIQ4GuIRLmuIAAIhMgiDAAAg");
	this.shape_18.setTransform(125,175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0099").s().p("AxBERIAAohIQ4GvIRLmvIAAIhg");
	this.shape_19.setTransform(125,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:105.775,y:170.425}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_2,p:{x:121.775,y:175.125}},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_2,p:{x:121.775,y:175.125}},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_2,p:{x:121.775,y:175.125}},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,138,244,69.30000000000001);


// stage content:
(lib.Animatefile = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// Animation_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AAHAoQgOAAAAgKIABgIIAHgXIglAfQgOAKgJAAIgUAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape.setTransform(503.95,110.074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("AhVAdQgMgKAAgPIABgFQACgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQAEACACAHQACAGAAAFQgCASgNALQgPAKgWAAQgbAAgPgKgAg7AIIgBAEQAAAKASAAIAEgBIAOgpIgZAAg");
	this.shape_1.setTransform(492.5,110.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_2.setTransform(478.85,106.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AggA9QgQAAAAgMIABgGIAOgpIgTAAIAIgRQATgFAJgIQAMgIALgYIAVAAIgPAtIAdAAQgHARgVAAIgIAAIgNApIA8AAQgGASgWAAg");
	this.shape_3.setTransform(469.4,107.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AhAAfQgJgIAAgNQAAgWASgOQARgMAXAAIA/AAIgVA5IAvAAQgGASgWAAIgqAAQgRAAAAgLQgNANgSAAQgNAAgHgIgAgeAFIAAAFQgBAJAUAAIAMgnIgXAAg");
	this.shape_4.setTransform(457.25,110.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003399").s().p("AgpAdQAAgDACgFIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAFgCAEIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAfQgPALgKABQgPAAAAgMg");
	this.shape_5.setTransform(438.825,110.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003399").s().p("AgbBLQgPAAAAgOIABgIIAUg2IAnAAIgTA6IAsAAQgCAKgJAEQgHAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAIgIAMAAQAMAAAJAIQAJAIgBALQABAMgJAHQgJAIgMAAQgMAAgIgIg");
	this.shape_6.setTransform(423.8,106.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003399").s().p("AAHAoQgOAAAAgKIABgIIAIgXIgmAfQgNAKgJAAIgVAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_7.setTransform(411.75,110.074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003399").s().p("AiRBOQgOgIAAgNQAAgNAKgMQARgSAhgKQAZgGAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGASgWgBIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAcQgOAKAAALQAAAKAKAAQAOAAAVgQQASgOAKgOQgqABgRAMgAAGgCIAZAAIAYg/g");
	this.shape_8.setTransform(394.175,106.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003399").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgIAAIgVAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_9.setTransform(498.4,109.074);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003399").s().p("AhVAdQgMgKAAgPIABgFQACgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQAEACACAHQACAGAAAFQgCASgNALQgPAKgWAAQgbAAgPgKgAg7AIIgBAEQAAAKASAAIAEgBIAPgpIgaAAg");
	this.shape_10.setTransform(485.3,109.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003399").s().p("AgbBLQgPAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_11.setTransform(471.2,105.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003399").s().p("AggA9QgRAAAAgMIABgGIAPgpIgSAAIAHgRQATgFAKgIQALgIAKgYIAXAAIgQAtIAdAAQgHARgWAAIgHAAIgNApIA8AAQgGASgXAAg");
	this.shape_12.setTransform(458.75,106.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003399").s().p("AhAAfQgJgIAAgNQAAgWASgOQAQgMAYAAIA/AAIgUA5IAuAAQgFASgXAAIgqAAQgRAAAAgLQgNANgRAAQgOAAgHgIgAgeAFIgBAFQAAAJATAAIANgnIgXAAg");
	this.shape_13.setTransform(443.1,109.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003399").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAEgCAFIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAeQgPAMgKABQgPAAAAgMg");
	this.shape_14.setTransform(422.675,109.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003399").s().p("AgaBLQgRAAABgOIABgIIAUg2IAoAAIgUA6IAsAAQgCAKgKAEQgGAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAJgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgJgIg");
	this.shape_15.setTransform(404.2,105.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003399").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgIAAIgVAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_16.setTransform(389.4,109.074);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003399").s().p("AiRBOQgOgHAAgOQAAgNAKgLQARgTAhgJQAZgHAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGARgWAAIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgPQgqABgRALgAAGgCIAZAAIAYg/g");
	this.shape_17.setTransform(367.175,105.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC3300").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgIAAIgVAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_18.setTransform(498.4,109.074);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC3300").s().p("AhVAdQgMgKAAgPIABgFQACgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQAEACACAHQACAGAAAFQgCASgNALQgPAKgWAAQgbAAgPgKgAg7AIIgBAEQAAAKASAAIAEgBIAPgpIgaAAg");
	this.shape_19.setTransform(485.3,109.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC3300").s().p("AgbBLQgPAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_20.setTransform(471.2,105.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC3300").s().p("AggA9QgRAAAAgMIABgGIAPgpIgSAAIAHgRQATgFAKgIQALgIAKgYIAXAAIgQAtIAdAAQgHARgWAAIgHAAIgNApIA8AAQgGASgXAAg");
	this.shape_21.setTransform(458.75,106.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC3300").s().p("AhAAfQgJgIAAgNQAAgWASgOQAQgMAYAAIA/AAIgUA5IAuAAQgFASgXAAIgqAAQgRAAAAgLQgNANgRAAQgOAAgHgIgAgeAFIgBAFQAAAJATAAIANgnIgXAAg");
	this.shape_22.setTransform(443.1,109.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC3300").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAEgCAFIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAeQgPAMgKABQgPAAAAgMg");
	this.shape_23.setTransform(422.675,109.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC3300").s().p("AgaBLQgRAAABgOIABgIIAUg2IAoAAIgUA6IAsAAQgCAKgKAEQgGAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAJgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgJgIg");
	this.shape_24.setTransform(404.2,105.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC3300").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgIAAIgVAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_25.setTransform(389.4,109.074);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC3300").s().p("AiRBOQgOgHAAgOQAAgNAKgLQARgTAhgJQAZgHAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGARgWAAIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgPQgqABgRALgAAGgCIAZAAIAYg/g");
	this.shape_26.setTransform(367.175,105.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCC33").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgJAAIgUAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_27.setTransform(567.4,109.074);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCC33").s().p("AhUAdQgNgKAAgPIABgFQADgRANgKQAPgKAZAAICKAAQgFASgWAAIhGAAQADACADAHQADAGgBAFQgBASgOALQgPAKgXAAQgaAAgOgKgAg7AIIgBAEQAAAKASAAIAEgBIAPgpIgaAAg");
	this.shape_28.setTransform(554.3,109.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCC33").s().p("AgaBLQgRAAABgOIABgIIAUg2IAoAAIgUA6IAtAAQgEAKgJAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_29.setTransform(540.2,105.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCC33").s().p("AggA9QgQAAAAgMIAAgGIAPgpIgSAAIAGgRQAUgFAKgIQAKgIALgYIAXAAIgQAtIAdAAQgHARgVAAIgIAAIgNApIA7AAQgFASgXAAg");
	this.shape_30.setTransform(527.75,106.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCC33").s().p("AhBAfQgIgIAAgNQAAgWASgOQAQgMAZAAIA/AAIgVA5IAuAAQgGASgVAAIgrAAQgRAAAAgLQgMANgSAAQgNAAgJgIgAgeAFIAAAFQAAAJASAAIAOgnIgYAAg");
	this.shape_31.setTransform(512.1,109.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCC33").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAEgCAFIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAeQgPAMgKABQgPAAAAgMg");
	this.shape_32.setTransform(491.675,109.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCC33").s().p("AgbBLQgQAAAAgOIACgIIAUg2IAnAAIgTA6IAsAAQgDAKgIAEQgHAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAJgIALAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgLAAgJgIg");
	this.shape_33.setTransform(473.2,105.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCC33").s().p("AAHAoQgOAAAAgKIABgIIAHgXIglAfQgNAKgKAAIgUAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_34.setTransform(458.4,109.074);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCC33").s().p("AiRBOQgOgHAAgOQAAgNAKgLQARgTAhgJQAZgHAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGARgWAAIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgPQgqABgRALgAAGgCIAZAAIAYg/g");
	this.shape_35.setTransform(436.175,105.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("AAHAoQgOAAAAgKIABgIIAIgXIgmAfQgNAKgJAAIgVAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_36.setTransform(735.4,109.074);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("AhUAdQgNgKAAgPIAAgFQADgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQADACADAHQADAGgBAFQgCASgOALQgOAKgXAAQgaAAgOgKgAg7AIIgBAEQAAAKASAAIAEgBIAOgpIgZAAg");
	this.shape_37.setTransform(722.3,109.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("AgbBLQgPAAAAgOIABgIIAUg2IAnAAIgTA6IAsAAQgCAKgJAEQgHAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAIgIAMAAQAMAAAJAIQAJAIgBALQABAMgJAHQgJAIgMAAQgMAAgIgIg");
	this.shape_38.setTransform(708.2,105.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("AggA9QgQAAAAgMIABgGIAOgpIgTAAIAIgRQATgFAJgIQAMgIALgYIAVAAIgPAtIAdAAQgHARgVAAIgIAAIgNApIA8AAQgGASgWAAg");
	this.shape_39.setTransform(695.75,106.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC00").s().p("AhAAfQgJgIAAgNQAAgWASgOQARgMAXAAIBAAAIgWA5IAvAAQgGASgWAAIgqAAQgRAAAAgLQgMANgTAAQgNAAgHgIgAgeAFIAAAFQgBAJAUAAIAMgnIgXAAg");
	this.shape_40.setTransform(680.1,109.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAEgCAFIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAeQgPAMgKABQgPAAAAgMg");
	this.shape_41.setTransform(659.675,109.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC00").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgDAKgKAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_42.setTransform(641.2,105.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("AAHAoQgOAAAAgKIABgIIAIgXIgmAfQgNAKgJAAIgVAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_43.setTransform(626.4,109.074);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("AiRBOQgOgHAAgOQAAgNAKgLQARgTAhgJQAZgHAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGARgWAAIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgPQgqABgRALgAAGgCIAZAAIAYg/g");
	this.shape_44.setTransform(604.175,105.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33CC00").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgJAAIgUAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_45.setTransform(576.4,109.074);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#33CC00").s().p("AhUAdQgNgKAAgPIABgFQADgRANgKQAPgKAZAAICKAAQgFASgWAAIhGAAQADACADAHQADAGgBAFQgBASgOALQgPAKgXAAQgaAAgOgKgAg7AIIgBAEQAAAKASAAIAEgBIAPgpIgaAAg");
	this.shape_46.setTransform(563.3,109.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33CC00").s().p("AgaBLQgRAAABgOIABgIIAUg2IAoAAIgUA6IAtAAQgEAKgJAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_47.setTransform(549.2,105.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33CC00").s().p("AggA9QgQAAAAgMIAAgGIAPgpIgSAAIAGgRQAUgFAKgIQAKgIALgYIAXAAIgQAtIAdAAQgHARgVAAIgIAAIgNApIA7AAQgFASgXAAg");
	this.shape_48.setTransform(536.75,106.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#33CC00").s().p("AhBAfQgIgIAAgNQAAgWASgOQAQgMAZAAIA/AAIgVA5IAuAAQgGASgVAAIgrAAQgRAAAAgLQgMANgSAAQgNAAgJgIgAgeAFIAAAFQAAAJASAAIAOgnIgYAAg");
	this.shape_49.setTransform(521.1,109.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#33CC00").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAEgCAFIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAeQgPAMgKABQgPAAAAgMg");
	this.shape_50.setTransform(500.675,109.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33CC00").s().p("AgbBLQgQAAAAgOIACgIIAUg2IAnAAIgTA6IAsAAQgDAKgIAEQgHAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAJgIALAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgLAAgJgIg");
	this.shape_51.setTransform(482.2,105.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#33CC00").s().p("AAHAoQgOAAAAgKIABgIIAHgXIglAfQgNAKgKAAIgUAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_52.setTransform(467.4,109.074);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#33CC00").s().p("AiRBOQgOgHAAgOQAAgNAKgLQARgTAhgJQAZgHAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGARgWAAIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgPQgqABgRALgAAGgCIAZAAIAYg/g");
	this.shape_53.setTransform(445.175,105.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#33CC00").s().p("AkKCPQgZgOAAgaQAAgXATgVQAegiA8gQQAvgMA5AAIAoAAIB7iVIBjAAIg1CVIChAAQgLAggnAAIh6AAIgmBqIhKAAIAnhqIg+AAQhoB8hiAAQgdAAgUgKgAiuAzQgZASAAAVQAAASASAAQAaAAAmgdQAhgZASgZQhNAAgfAWgAALgDIAuAAIAshzg");
	this.shape_54.setTransform(417.675,116.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#33CC00").s().p("AANBKQgcAAAAgTQAAgGADgIIAPgsIhHA8QgZARgRAAIgmAAIAyiOIBMAAIgYBEIA/g1QAagVAeABQAVABAAAVQAAAHgDAKIgbBLIBVAAQgFASgTAJQgNAGgPAAg");
	this.shape_55.setTransform(459.325,123.7728);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#33CC00").s().p("AgyCMQgeAAAAgaQAAgHADgIIAkhlIBLAAIglBsIBUAAQgFASgRAJQgNAGgOABgAgcg1QgQgOAAgWQAAgUAQgPQAQgOAXAAQAXAAAQAOQAQAPAAAUQAAAWgQAOQgQAPgXAAQgXAAgQgPg");
	this.shape_56.setTransform(453.875,117.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#33CC00").s().p("AAHAoQgPAAAAgKIACgIIAHgXIglAfQgOAKgIAAIgVAAIAbhMIApAAIgOAkIAigcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_57.setTransform(420.9,109.074);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#33CC00").s().p("AhOA2QAAgHADgIIARgsIhTBFQgLAJgQAAIgrAAIAziOIBLAAIgXBDIBAg1QAYgUAdAAQAZAAAAATQAAAGgDAGIgOAqIA+g1QAXgUAcAAQAbAAgBAXQAAAHgDAKIgbBKIBWAAQgGAigqAAIhVAAQgKAAgJgIQgIgJAAgKIABgHIANgsIhFA6QgbAXgTAAQgdAAAAgWg");
	this.shape_58.setTransform(483.95,123.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33CC00").s().p("AgbBLQgPAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_59.setTransform(435.2,105.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#33CC00").s().p("Ah6A7QgPgQAAgYQAAgrAhgZQAfgYAsABIB3AAIgnBsIBXAAQgKAhgpABIhQAAQghAAAAgXQgXAaghAAQgZABgPgPgAg6AJIgBAJQAAASAkAAIAahKIguAAg");
	this.shape_60.setTransform(499.325,124.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#33CC00").s().p("Ag9ByQgeAAAAgXQgBgFADgGIAahLIgiAAIAOghQAkgKASgPQAUgQAWgrIApAAIgeBUIA3AAQgNAggoABIgPAAIgZBLIBwAAQgJAhgsABg");
	this.shape_61.setTransform(514.85,119.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#33CC00").s().p("AhAAfQgJgIAAgNQAAgWASgOQARgMAXAAIBAAAIgWA5IAvAAQgGASgWAAIgqAAQgRAAAAgLQgMANgTAAQgNAAgHgIgAgeAFIAAAFQgBAJAUAAIAMgnIgXAAg");
	this.shape_62.setTransform(473.1,109.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#33CC00").s().p("AggA9QgRAAAAgMIABgGIAPgpIgTAAIAIgRQATgFAKgIQALgIALgYIAWAAIgQAtIAdAAQgHARgWAAIgHAAIgNApIA8AAQgGASgWAAg");
	this.shape_63.setTransform(486.75,106.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#33CC00").s().p("AifA2QgXgSAAgdIABgKQAFggAagSQAbgTAvAAIEDAAQgIAigqAAIiEAAQAIAEAEANQAEAMAAAJQgDAigcAUQgaATgqAAIgDAAQgwAAgagTgAhwAOIgBAIQAAASAhAAIAIAAIAchOIgwAAg");
	this.shape_64.setTransform(540.4,124.2256);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#33CC00").s().p("AgbBLQgQAAAAgOIACgIIAUg2IAnAAIgTA6IAsAAQgDAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_65.setTransform(499.2,105.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#33CC00").s().p("AhUAdQgNgKAAgPIAAgFQADgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQADACADAHQADAGgBAFQgCASgOALQgOAKgXAAQgaAAgOgKgAg7AIIgBAEQAAAKASAAIAEgBIAOgpIgZAAg");
	this.shape_66.setTransform(515.3,109.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#33CC00").s().p("AAHAoQgOAAAAgKIABgIIAIgXIgmAfQgNAKgJAAIgVAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_67.setTransform(555.4,160.074);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#33CC00").s().p("AhVAdQgMgKAAgPIAAgFQADgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQAEACACAHQACAGAAAFQgCASgOALQgOAKgWAAQgbAAgPgKgAg7AIIgBAEQAAAKASAAIAEgBIAOgpIgZAAg");
	this.shape_68.setTransform(540.3,160.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#33CC00").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgDAKgKAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_69.setTransform(524.2,156.575);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33CC00").s().p("AggA9QgRAAAAgMIABgGIAPgpIgSAAIAHgRQATgFAKgIQALgIAKgYIAXAAIgQAtIAdAAQgHARgWAAIgHAAIgNApIA7AAQgFASgXAAg");
	this.shape_70.setTransform(511.75,157.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#33CC00").s().p("AhAAfQgJgIAAgNQAAgWASgOQAQgMAYAAIA/AAIgUA5IAuAAQgGASgWAAIgqAAQgRAAAAgLQgNANgSAAQgNAAgHgIgAgeAFIgBAFQAAAJAUAAIAMgnIgXAAg");
	this.shape_71.setTransform(498.1,160.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#33CC00").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahLIApAAIgNAkIAjgcQANgMAPAAQANAAAAALIgBAGIgIAXIAhgdQANgLAOAAQAPAAAAANQAAADgCAGIgPAnIAuAAQgDASgWAAIguAAQgFAAgFgEQgEgFAAgFIAAgEIAIgXIglAeQgPAMgKAAQgPABAAgMg");
	this.shape_72.setTransform(477.675,160.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#33CC00").s().p("AgaBLQgQAAAAgOIABgIIAUg2IAoAAIgUA6IAtAAQgEAKgJAEQgGAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAKgIALAAQAMAAAJAIQAJAIAAALQAAAMgJAHQgJAIgMAAQgLAAgKgIg");
	this.shape_73.setTransform(460.2,156.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#33CC00").s().p("AiRBOQgOgHAAgPQAAgMAKgLQARgUAhgIQAZgHAgABIAVAAIBDhSIA3AAIgdBSIBYAAQgGAQgWABIhCAAIgWA6IgoAAIAVg6IghAAQg5BEg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgOAKgNQgqgBgRAMgAAGgBIAZAAIAYg/g");
	this.shape_74.setTransform(430.175,156.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#33CC00").s().p("AAHAoQgOAAAAgKIABgIIAIgXIgmAfQgNAKgKAAIgUAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgCAJIgOAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_75.setTransform(637.4,195.074);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#33CC00").s().p("AhVAdQgMgKAAgPIAAgFQADgRAOgKQAPgKAZAAICKAAQgEASgXAAIhGAAQAEACACAHQACAGAAAFQgCASgOALQgOAKgXAAQgaAAgPgKgAg7AIIgBAEQAAAKASAAIAEgBIAOgpIgZAAg");
	this.shape_76.setTransform(622.3,195.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#33CC00").s().p("AgaBLQgQAAgBgOIACgIIAUg2IAnAAIgTA6IAtAAQgEAKgIAEQgHAEgIAAgAgPgcQgIgHAAgMQAAgLAIgIQAJgIAMAAQAMAAAJAIQAIAIAAALQAAAMgIAHQgJAIgMAAQgMAAgJgIg");
	this.shape_77.setTransform(606.2,191.575);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#33CC00").s().p("AggA9QgRAAAAgMIABgGIAPgpIgSAAIAHgRQATgFAKgIQALgIAKgYIAXAAIgQAtIAdAAQgHARgWAAIgHAAIgNApIA8AAQgGASgXAAg");
	this.shape_78.setTransform(593.75,192.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#33CC00").s().p("AhAAfQgJgIAAgNQAAgWASgOQARgMAXAAIA/AAIgVA5IAvAAQgGASgWAAIgqAAQgRAAAAgLQgNANgSAAQgNAAgHgIgAgeAFIAAAFQgBAJAUAAIAMgnIgXAAg");
	this.shape_79.setTransform(580.1,195.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#33CC00").s().p("AgpAdQAAgEACgEIAIgXIgsAkQgGAFgIAAIgXAAIAahLIApAAIgNAkIAjgcQANgMAPAAQANAAAAALIgBAGIgIAXIAhgdQANgLAOAAQAPAAAAANQAAADgCAGIgPAnIAuAAQgDASgWAAIguAAQgFAAgFgEQgEgFAAgFIAAgEIAIgXIglAfQgPALgKAAQgPAAAAgLg");
	this.shape_80.setTransform(559.675,195.15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#33CC00").s().p("AiRBOQgOgHAAgPQAAgMAKgLQARgUAhgJQAZgFAgAAIAVAAIBDhSIA3AAIgdBSIBYAAQgGARgWAAIhCAAIgWA6IgoAAIAVg6IghAAQg5BEg2AAQgPAAgLgGgAhfAbQgOALAAALQAAAKAKAAQAOAAAVgQQASgNAKgOQgqAAgRALgAAGgBIAZAAIAYg/g");
	this.shape_81.setTransform(512.175,191.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#33CC00").s().p("AhUAdQgNgKAAgPIAAgFQAEgRANgKQAPgKAZAAICKAAQgFASgWAAIhGAAQADACADAHQADAGgBAFQgBASgPALQgOAKgXAAQgaAAgOgKgAg7AIIgBAEQAAAKASAAIAEgBIAPgpIgaAAg");
	this.shape_82.setTransform(715.3,164.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#33CC00").s().p("AgbBLQgPAAAAgOIABgIIAUg2IAnAAIgTA6IAsAAQgCAKgJAEQgHAEgIAAgAgOgcQgJgHAAgMQAAgLAJgIQAIgIAMAAQAMAAAJAIQAJAIgBALQABAMgJAHQgJAIgMAAQgMAAgIgIg");
	this.shape_83.setTransform(699.2,160.575);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#33CC00").s().p("AggA9QgQAAAAgMIABgGIAOgpIgTAAIAIgRQATgFAJgIQAMgIALgYIAVAAIgPAtIAdAAQgHARgVAAIgIAAIgNApIA8AAQgGASgWAAg");
	this.shape_84.setTransform(686.75,161.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#33CC00").s().p("AhBAfQgIgIAAgNQAAgWASgOQAQgMAZAAIA/AAIgWA5IAvAAQgFASgWAAIgrAAQgRAAAAgLQgNANgSAAQgNAAgIgIgAgeAFIAAAFQAAAJASAAIAOgnIgYAAg");
	this.shape_85.setTransform(673.1,164.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#33CC00").s().p("AgpAdQAAgDACgFIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPABQANAAAAAKIgBAGIgIAWIAhgcQANgKAOAAQAPgBAAAMQAAAFgCAEIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAfQgPALgKABQgPAAAAgMg");
	this.shape_86.setTransform(652.675,164.15);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#33CC00").s().p("AAHAoQgPAAAAgKIACgIIAIgXIgmAfQgOAKgIAAIgVAAIAbhMIAoAAIgMAkIAhgcQAOgLAQAAQALABAAALIgBAJIgPAoIAuAAQgDAKgKAEQgHAEgIAAg");
	this.shape_87.setTransform(620.9,164.074);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#33CC00").s().p("AiRBOQgOgIAAgNQAAgNAKgMQARgSAhgKQAZgGAgAAIAVAAIBDhRIA3AAIgdBRIBYAAQgGASgWgBIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAcQgOAKAAALQAAAKAKAAQAOAAAVgQQASgOAKgOQgqABgRAMgAAGgCIAZAAIAYg/g");
	this.shape_88.setTransform(605.175,160.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#33CC00").s().p("AhBAfQgIgIAAgNQAAgWASgOQAQgMAZAAIA/AAIgWA5IAvAAQgFASgWAAIgrAAQgRAAAAgLQgNANgSAAQgMAAgJgIgAgeAFIAAAFQAAAJASAAIAOgnIgYAAg");
	this.shape_89.setTransform(781.1,120.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#33CC00").s().p("AgpAdQAAgDACgFIAIgXIgsAkQgGAFgIAAIgXAAIAahMIApAAIgNAkIAjgcQANgLAPAAQANAAAAALIgBAGIgIAWIAhgcQANgLAOAAQAPAAAAAMQAAAFgCAEIgPAoIAuAAQgDASgWAAIguAAQgFAAgFgFQgEgEAAgGIAAgDIAIgXIglAfQgPAMgKgBQgPAAAAgLg");
	this.shape_90.setTransform(760.675,120.15);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#33CC00").s().p("AiRBOQgOgIAAgNQAAgNAKgMQARgSAhgKQAZgFAggBIAVAAIBDhRIA3AAIgdBRIBYAAQgGASgWgBIhCAAIgWA7IgoAAIAVg7IghAAQg5BFg2AAQgPAAgLgGgAhfAcQgOAKAAALQAAAKAKAAQAOAAAVgQQASgOAKgOQgqAAgRANgAAGgCIAZAAIAYg/g");
	this.shape_91.setTransform(713.175,116.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},4).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},4).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},4).to({state:[{t:this.shape_53,p:{x:445.175}},{t:this.shape_52},{t:this.shape_51,p:{x:482.2,y:105.575}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},5).to({state:[{t:this.shape_53,p:{x:445.175}},{t:this.shape_52},{t:this.shape_51,p:{x:482.2,y:105.575}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},5).to({state:[{t:this.shape_54},{t:this.shape_52},{t:this.shape_51,p:{x:482.2,y:105.575}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},5).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_52},{t:this.shape_51,p:{x:482.2,y:105.575}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_55,p:{x:459.325}},{t:this.shape_51,p:{x:482.2,y:105.575}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_56,p:{x:453.875}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_56,p:{x:453.875}},{t:this.shape_50,p:{x:500.675}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_58},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_50,p:{x:452.675}},{t:this.shape_60},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_50,p:{x:452.675}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_50,p:{x:452.675}},{t:this.shape_62},{t:this.shape_63},{t:this.shape_56,p:{x:526.875}},{t:this.shape_46},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_50,p:{x:452.675}},{t:this.shape_62},{t:this.shape_63},{t:this.shape_65},{t:this.shape_64},{t:this.shape_45,p:{x:576.4,y:109.074}}]},1).to({state:[{t:this.shape_53,p:{x:405.175}},{t:this.shape_57},{t:this.shape_59},{t:this.shape_50,p:{x:452.675}},{t:this.shape_62},{t:this.shape_63},{t:this.shape_65},{t:this.shape_66},{t:this.shape_55,p:{x:554.825}}]},1).to({state:[{t:this.shape_74},{t:this.shape_45,p:{x:445.9,y:160.074}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:524.2,y:156.575}},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_74},{t:this.shape_45,p:{x:445.9,y:160.074}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:524.2,y:156.575}},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_81},{t:this.shape_45,p:{x:527.9,y:195.074}},{t:this.shape_69,p:{x:542.2,y:191.575}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_81},{t:this.shape_45,p:{x:527.9,y:195.074}},{t:this.shape_69,p:{x:542.2,y:191.575}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_88},{t:this.shape_87,p:{x:620.9,y:164.074}},{t:this.shape_51,p:{x:635.2,y:160.575}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:686.75,y:161.975}},{t:this.shape_83,p:{x:699.2,y:160.575}},{t:this.shape_82,p:{x:715.3,y:164.325}},{t:this.shape_45,p:{x:730.4,y:164.074}}]},1).to({state:[{t:this.shape_88},{t:this.shape_87,p:{x:620.9,y:164.074}},{t:this.shape_51,p:{x:635.2,y:160.575}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:686.75,y:161.975}},{t:this.shape_83,p:{x:699.2,y:160.575}},{t:this.shape_82,p:{x:715.3,y:164.325}},{t:this.shape_45,p:{x:730.4,y:164.074}}]},1).to({state:[{t:this.shape_91},{t:this.shape_87,p:{x:728.9,y:120.074}},{t:this.shape_51,p:{x:743.2,y:116.575}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_84,p:{x:794.75,y:117.975}},{t:this.shape_83,p:{x:807.2,y:116.575}},{t:this.shape_82,p:{x:823.3,y:120.325}},{t:this.shape_45,p:{x:838.4,y:120.074}}]},1).wait(1));

	// Star
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(606.3,165.4);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(461.35,109.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance_1}]},42).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true,x:461.35,y:109.4},42).wait(1));

	// Btn_Play
	this.button_1 = new lib.Btnplay();
	this.button_1.name = "button_1";
	this.button_1.setTransform(636.5,272.45,1,1,0,0,0,249.5,62.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Btnplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(58).to({y:277.45},0).wait(1));

	// Hill
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("EhQXgcRIKIArIKHA8IKFBMIKDBcYDWAiDYATDZAFYDYAFDZgJDYgYYGuguGphnGXiUYDKhKDQg8DUgvYDTgwDWghDXgUYDYgTDZgGDYAHYBsADBsAHBsAKIBQAHIApAEIAoAFIChAVIKEBTIKHBEIKHA2IKJAnIgFgFMAAAA9RIAFgFMigtAADIACACMgACg9REhQXgcRMgADA9RYAAACABABACAAIAAAAMCgtAACYADAAACgCAAgDIAAAAMAAAg9RYAAgDgCgCgDAAIAAAAIqIgmIqIg2IqFhEIqFhSIihgVIgogFIgpgEIhRgHYhrgKhtgHhsgDYjYgHjZAGjYAUYjYAUjXAhjTAwYjTAvjRA9jLBKYmWCUmoBnmuAvYjXAYjZAJjYgFYjZgEjYgTjWghIqDhcIqFhLIqHg7IqIgq");
	this.shape_92.setTransform(511.7684,559.3614);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#33CC33").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_93.setTransform(511.65,559.3077);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#32CA32").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_94.setTransform(511.65,559.2577);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#31C831").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_95.setTransform(511.65,559.1577);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#30C730").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_96.setTransform(511.65,559.1077);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2FC52F").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_97.setTransform(511.65,559.0577);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2FC32F").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_98.setTransform(511.65,559.0077);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2EC12E").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_99.setTransform(511.65,558.9077);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2DC02D").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_100.setTransform(511.65,558.8577);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2CBE2C").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_101.setTransform(511.65,558.8077);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2BBC2B").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_102.setTransform(511.65,558.7077);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2ABA2A").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_103.setTransform(511.65,558.6577);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#29B929").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_104.setTransform(511.65,558.6077);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#28B728").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_105.setTransform(511.65,558.5077);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#28B528").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_106.setTransform(511.65,558.4577);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#27B327").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_107.setTransform(511.65,558.4077);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#26B226").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_108.setTransform(511.65,558.3577);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#25B025").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_109.setTransform(511.65,558.2577);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#24AE24").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_110.setTransform(511.65,558.2077);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#23AC23").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_111.setTransform(511.65,558.1577);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#22AB22").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_112.setTransform(511.65,558.0577);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#21A921").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_113.setTransform(511.65,558.0077);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#21A721").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_114.setTransform(511.65,557.9577);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#20A520").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_115.setTransform(511.65,557.9077);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1FA41F").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_116.setTransform(511.65,557.8077);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1EA21E").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_117.setTransform(511.65,557.7577);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1DA01D").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_118.setTransform(511.65,557.7077);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1C9E1C").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_119.setTransform(511.65,557.6077);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1B9D1B").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_120.setTransform(511.65,557.5577);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1A9B1A").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_121.setTransform(511.65,557.5077);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1A991A").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_122.setTransform(511.65,557.4577);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#199719").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_123.setTransform(511.65,557.3577);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#189518").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_124.setTransform(511.65,557.3077);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#179417").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_125.setTransform(511.65,557.2577);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#169216").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_126.setTransform(511.65,557.1577);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#159015").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_127.setTransform(511.65,557.1077);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#148E14").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_128.setTransform(511.65,557.0577);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#138D13").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_129.setTransform(511.65,556.9577);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#128B12").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_130.setTransform(511.65,556.9077);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#128912").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_131.setTransform(511.65,556.8577);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#118711").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_132.setTransform(511.65,556.8077);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#108610").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_133.setTransform(511.65,556.7077);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0F840F").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_134.setTransform(511.65,556.6577);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0E820E").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_135.setTransform(511.65,556.6077);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0D800D").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_136.setTransform(511.65,556.5077);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0C7F0C").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_137.setTransform(511.65,556.4577);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0B7D0B").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_138.setTransform(511.65,556.4077);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0B7B0B").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_139.setTransform(511.65,556.3577);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0A790A").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_140.setTransform(511.65,556.2577);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#097809").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_141.setTransform(511.65,556.2077);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#087608").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_142.setTransform(511.65,556.1577);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#077407").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_143.setTransform(511.65,556.0577);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#067206").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_144.setTransform(511.65,556.0077);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#057105").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_145.setTransform(511.65,555.9577);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#046F04").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_146.setTransform(511.65,555.8577);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#046D04").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_147.setTransform(511.65,555.8077);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#036B03").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_148.setTransform(511.65,555.7577);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#026A02").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_149.setTransform(511.65,555.7077);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#016801").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_150.setTransform(511.65,555.6077);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#006600").s().p("EhQWgcQQUFBDUHDIQUFDJUFnVQSvmxUrC6QUrC5USA+MAAAA9RMigtAABg");
	this.shape_151.setTransform(511.65,555.5577);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92,p:{y:559.3614}}]}).to({state:[{t:this.shape_94},{t:this.shape_92,p:{y:559.3114}}]},1).to({state:[{t:this.shape_95},{t:this.shape_92,p:{y:559.2114}}]},1).to({state:[{t:this.shape_96},{t:this.shape_92,p:{y:559.1614}}]},1).to({state:[{t:this.shape_97},{t:this.shape_92,p:{y:559.1114}}]},1).to({state:[{t:this.shape_98},{t:this.shape_92,p:{y:559.0614}}]},1).to({state:[{t:this.shape_99},{t:this.shape_92,p:{y:558.9614}}]},1).to({state:[{t:this.shape_100},{t:this.shape_92,p:{y:558.9114}}]},1).to({state:[{t:this.shape_101},{t:this.shape_92,p:{y:558.8614}}]},1).to({state:[{t:this.shape_102},{t:this.shape_92,p:{y:558.7614}}]},1).to({state:[{t:this.shape_103},{t:this.shape_92,p:{y:558.7114}}]},1).to({state:[{t:this.shape_104},{t:this.shape_92,p:{y:558.6614}}]},1).to({state:[{t:this.shape_105},{t:this.shape_92,p:{y:558.5614}}]},1).to({state:[{t:this.shape_106},{t:this.shape_92,p:{y:558.5114}}]},1).to({state:[{t:this.shape_107},{t:this.shape_92,p:{y:558.4614}}]},1).to({state:[{t:this.shape_108},{t:this.shape_92,p:{y:558.4114}}]},1).to({state:[{t:this.shape_109},{t:this.shape_92,p:{y:558.3114}}]},1).to({state:[{t:this.shape_110},{t:this.shape_92,p:{y:558.2614}}]},1).to({state:[{t:this.shape_111},{t:this.shape_92,p:{y:558.2114}}]},1).to({state:[{t:this.shape_112},{t:this.shape_92,p:{y:558.1114}}]},1).to({state:[{t:this.shape_113},{t:this.shape_92,p:{y:558.0614}}]},1).to({state:[{t:this.shape_114},{t:this.shape_92,p:{y:558.0114}}]},1).to({state:[{t:this.shape_115},{t:this.shape_92,p:{y:557.9614}}]},1).to({state:[{t:this.shape_116},{t:this.shape_92,p:{y:557.8614}}]},1).to({state:[{t:this.shape_117},{t:this.shape_92,p:{y:557.8114}}]},1).to({state:[{t:this.shape_118},{t:this.shape_92,p:{y:557.7614}}]},1).to({state:[{t:this.shape_119},{t:this.shape_92,p:{y:557.6614}}]},1).to({state:[{t:this.shape_120},{t:this.shape_92,p:{y:557.6114}}]},1).to({state:[{t:this.shape_121},{t:this.shape_92,p:{y:557.5614}}]},1).to({state:[{t:this.shape_122},{t:this.shape_92,p:{y:557.5114}}]},1).to({state:[{t:this.shape_123},{t:this.shape_92,p:{y:557.4114}}]},1).to({state:[{t:this.shape_124},{t:this.shape_92,p:{y:557.3614}}]},1).to({state:[{t:this.shape_125},{t:this.shape_92,p:{y:557.3114}}]},1).to({state:[{t:this.shape_126},{t:this.shape_92,p:{y:557.2114}}]},1).to({state:[{t:this.shape_127},{t:this.shape_92,p:{y:557.1614}}]},1).to({state:[{t:this.shape_128},{t:this.shape_92,p:{y:557.1114}}]},1).to({state:[{t:this.shape_129},{t:this.shape_92,p:{y:557.0114}}]},1).to({state:[{t:this.shape_130},{t:this.shape_92,p:{y:556.9614}}]},1).to({state:[{t:this.shape_131},{t:this.shape_92,p:{y:556.9114}}]},1).to({state:[{t:this.shape_132},{t:this.shape_92,p:{y:556.8614}}]},1).to({state:[{t:this.shape_133},{t:this.shape_92,p:{y:556.7614}}]},1).to({state:[{t:this.shape_134},{t:this.shape_92,p:{y:556.7114}}]},1).to({state:[{t:this.shape_135},{t:this.shape_92,p:{y:556.6614}}]},1).to({state:[{t:this.shape_136},{t:this.shape_92,p:{y:556.5614}}]},1).to({state:[{t:this.shape_137},{t:this.shape_92,p:{y:556.5114}}]},1).to({state:[{t:this.shape_138},{t:this.shape_92,p:{y:556.4614}}]},1).to({state:[{t:this.shape_139},{t:this.shape_92,p:{y:556.4114}}]},1).to({state:[{t:this.shape_140},{t:this.shape_92,p:{y:556.3114}}]},1).to({state:[{t:this.shape_141},{t:this.shape_92,p:{y:556.2614}}]},1).to({state:[{t:this.shape_142},{t:this.shape_92,p:{y:556.2114}}]},1).to({state:[{t:this.shape_143},{t:this.shape_92,p:{y:556.1114}}]},1).to({state:[{t:this.shape_144},{t:this.shape_92,p:{y:556.0614}}]},1).to({state:[{t:this.shape_145},{t:this.shape_92,p:{y:556.0114}}]},1).to({state:[{t:this.shape_146},{t:this.shape_92,p:{y:555.9114}}]},1).to({state:[{t:this.shape_147},{t:this.shape_92,p:{y:555.8614}}]},1).to({state:[{t:this.shape_148},{t:this.shape_92,p:{y:555.8114}}]},1).to({state:[{t:this.shape_149},{t:this.shape_92,p:{y:555.7614}}]},1).to({state:[{t:this.shape_150},{t:this.shape_92,p:{y:555.6614}}]},1).to({state:[{t:this.shape_151},{t:this.shape_92,p:{y:555.6114}}]},1).wait(1));

	// Sun
	this.instance_2 = new lib.SunSymbol("synched",0);
	this.instance_2.setTransform(84.25,154.65,1,1,0,0,0,47.2,47.2);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(579.25,425.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},58).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:0,regY:0,x:579.25,y:425.7},58).wait(1));

	// Moon
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(712.6,411.65,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:31.1,x:712.3,y:407.65},0).wait(1).to({x:712.35,y:403.7},0).wait(1).to({x:712.4,y:399.75},0).wait(1).to({x:712.45,y:395.75},0).wait(1).to({x:712.5,y:391.8},0).wait(1).to({y:387.85},0).wait(1).to({x:712.55,y:383.85},0).wait(1).to({x:712.6,y:379.9},0).wait(1).to({x:712.65,y:375.95},0).wait(1).to({x:712.7,y:371.95},0).wait(1).to({x:712.75,y:368},0).wait(1).to({y:364.05},0).wait(1).to({x:712.8,y:360.05},0).wait(1).to({x:712.85,y:356.1},0).wait(1).to({x:712.9,y:352.15},0).wait(1).to({x:712.95,y:348.2},0).wait(1).to({x:713,y:344.2},0).wait(1).to({y:340.25},0).wait(1).to({x:713.05,y:336.3},0).wait(1).to({x:713.1,y:332.3},0).wait(1).to({x:713.15,y:328.35},0).wait(1).to({x:713.2,y:324.4},0).wait(1).to({x:713.25,y:320.4},0).wait(1).to({y:316.45},0).wait(1).to({x:713.3,y:312.5},0).wait(1).to({x:713.35,y:308.5},0).wait(1).to({x:713.4,y:304.55},0).wait(1).to({x:713.45,y:300.6},0).wait(1).to({x:713.5,y:296.65},0).wait(1).to({y:292.65},0).wait(1).to({x:713.55,y:288.7},0).wait(1).to({x:713.6,y:284.75},0).wait(1).to({x:713.65,y:280.75},0).wait(1).to({x:713.7,y:276.8},0).wait(1).to({y:272.85},0).wait(1).to({x:713.75,y:268.85},0).wait(1).to({x:713.8,y:264.9},0).wait(1).to({x:713.85,y:260.95},0).wait(1).to({x:713.9,y:256.95},0).wait(1).to({x:713.95,y:253},0).wait(1).to({y:249.05},0).wait(1).to({x:714,y:245.05},0).wait(1).to({x:714.05,y:241.1},0).wait(1).to({x:714.1,y:237.15},0).wait(1).to({x:714.15,y:233.2},0).wait(1).to({x:714.2,y:229.2},0).wait(1).to({y:225.25},0).wait(1).to({x:714.25,y:221.3},0).wait(1).to({x:714.3,y:217.3},0).wait(1).to({x:714.35,y:213.35},0).wait(1).to({x:714.4,y:209.4},0).wait(1).to({x:714.45,y:205.4},0).wait(1).to({y:201.45},0).wait(1).to({x:714.5,y:197.5},0).wait(1).to({x:714.55,y:193.5},0).wait(1).to({x:714.6,y:189.55},0).wait(1).to({x:714.65,y:185.6},0).wait(1).to({x:714.7,y:181.65},0).wait(1));

	// sky
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("EhQQAAAYAAAAKCABPDACYPEAAUEABUDABYUEgBUFgBPDAAYPDgCKCgBAAAAIAAAAYAAAAqCAAvDgCYvDAA0FgB0EgBY0DAB0EABvEAAYvDACqCAAAAAAIAAAA");
	this.shape_152.setTransform(511.65,-3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAACMYADgvABguAAgvYAAgtAAgvgEguIAAAAIAFAAIAAAAIgFgBYAAAAAAAAAAAAIAAAAIAAABYgEAuAAAvAAAtYAAAvABAuADAvIAAAA");
	this.shape_153.setTransform(-2.5997,60.6996);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00CCFF").s().p("EhQTAqWMAAAhM5IAAnyMCghAAAIAGAAMAAABUrg");
	this.shape_154.setTransform(511.95,267.975);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00C9FD").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_155.setTransform(511.95,268.375);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00C7FB").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_156.setTransform(511.95,268.825);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00C4FA").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_157.setTransform(511.95,269.225);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00C1F8").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_158.setTransform(511.95,269.625);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00BFF6").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_159.setTransform(511.95,270.025);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00BCF4").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_160.setTransform(511.95,270.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00BAF3").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_161.setTransform(511.95,270.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00B7F1").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_162.setTransform(511.95,271.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00B4EF").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_163.setTransform(511.95,271.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00B2ED").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_164.setTransform(511.95,272.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00AFEC").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_165.setTransform(511.95,272.525);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00ACEA").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_166.setTransform(511.95,272.925);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00AAE8").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_167.setTransform(511.95,273.375);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00A7E6").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_168.setTransform(511.95,273.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00A4E5").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_169.setTransform(511.95,274.175);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00A2E3").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_170.setTransform(511.95,274.575);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009FE1").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_171.setTransform(511.95,275.025);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#009DDF").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_172.setTransform(511.95,275.425);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009ADE").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_173.setTransform(511.95,275.825);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0097DC").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_174.setTransform(511.95,276.275);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0095DA").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_175.setTransform(511.95,276.675);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0092D8").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_176.setTransform(511.95,277.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#008FD7").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_177.setTransform(511.95,277.475);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#008DD5").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_178.setTransform(511.95,277.925);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#008AD3").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_179.setTransform(511.95,278.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0087D1").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_180.setTransform(511.95,278.725);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0085D0").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_181.setTransform(511.95,279.125);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0082CE").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_182.setTransform(511.95,279.575);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0080CC").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_183.setTransform(511.95,279.975);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#007DCA").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_184.setTransform(511.95,280.375);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#007AC8").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_185.setTransform(511.95,280.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0078C7").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_186.setTransform(511.95,281.225);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0075C5").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_187.setTransform(511.95,281.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0072C3").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_188.setTransform(511.95,282.025);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0070C1").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_189.setTransform(511.95,282.475);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#006DC0").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_190.setTransform(511.95,282.875);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#006ABE").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_191.setTransform(511.95,283.275);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0068BC").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_192.setTransform(511.95,283.675);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0065BA").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_193.setTransform(511.95,284.125);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0062B9").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_194.setTransform(511.95,284.525);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0060B7").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_195.setTransform(511.95,284.925);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#005DB5").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_196.setTransform(511.95,285.375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#005BB3").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_197.setTransform(511.95,285.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0058B2").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_198.setTransform(511.95,286.175);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0055B0").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_199.setTransform(511.95,286.575);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0053AE").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_200.setTransform(511.95,287.025);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0050AC").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_201.setTransform(511.95,287.425);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#004DAB").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_202.setTransform(511.95,287.825);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#004BA9").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_203.setTransform(511.95,288.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0048A7").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_204.setTransform(511.95,288.675);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0045A5").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_205.setTransform(511.95,289.075);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0043A4").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_206.setTransform(511.95,289.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0040A2").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_207.setTransform(511.95,289.925);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#003EA0").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_208.setTransform(511.95,290.325);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#003B9E").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_209.setTransform(511.95,290.725);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00389D").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_210.setTransform(511.95,291.125);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00369B").s().p("EhQTAqWMAAAhUrMCgnAAAMAAABUrg");
	this.shape_211.setTransform(511.95,291.575);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#003399").s().p("EhQTAqWMAAAhQpIAAkCMCghAAAIAGAAMAAABUrg");
	this.shape_212.setTransform(511.95,291.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{y:-3}}]}).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212},{t:this.shape_153},{t:this.shape_152,p:{y:21}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(508.9,380.5,517.6,390.6);
// library properties:
lib.properties = {
	id: '17D47AFF63BF924EAB046FD612C4C736',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
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
an.compositions['17D47AFF63BF924EAB046FD612C4C736'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;