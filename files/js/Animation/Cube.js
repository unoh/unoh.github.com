// Animation.Cube

if ( typeof(Animation) == "undefined" ) Animation = function () {};

Animation.Cube = function ( ifrom, idest ) {
    this.imageLoaded = false;           // next image is loaded or not
    this.startOnLoad = false;           // start commanded received
    this.is_running = false;            // all done flag
    var init = this.initialize(ifrom,idest);
    if ( ! init ) return;
    return this;
};

Animation.Cube.VERSION = "0.04";
Animation.Cube.prototype.onComplete    = null;      // callback function
Animation.Cube.prototype.onInterval    = null;      // callback function
Animation.Cube.prototype.background    = null;
Animation.Cube.prototype.waitSeconds   = 0.000;
Animation.Cube.prototype.rotateSeconds = 0.500;
Animation.Cube.prototype.viewDistance  = 2.000;     // or 1.414, 1.732
Animation.Cube.prototype.minResolution =  2;
Animation.Cube.prototype.maxResolution = 32;
Animation.Cube.prototype.cursor        =  0;
Animation.Cube.prototype.repeat        = true;
Animation.Cube.prototype.clockWise     = true;

Animation.Cube.prototype.initialize = function ( ifrom, idest ) {
    this.canvas = document.createElement( "div" );
    this.canvas.style.position = "relative";

    // canvas base
    this.imgBase = new Animation.Cube.Image( this.canvas );
    var ebase = this.imgBase.fromElement( ifrom );
    if ( ! ebase ) return;

    this.canvasWidth  = ebase.offsetWidth;
    this.canvasHeight = ebase.offsetHeight;
    ebase.parentNode.insertBefore( this.canvas, ebase );

    var imglist;
    if ( typeof(idest) == "string" ) {
        imglist = [ ebase.src, idest ];
        this.repeat = false;
    } else {
        imglist = idest;
        this.repeat = true;
    }
    this.imgBuffer = [];

    var __this = this;
    var __len  = imglist.length;
    var trigcheck = function (elem) {
        for( var i=0; i<__len; i++ ) {
            if ( ! __this.imgBuffer[i].loaded ) return;
        }
        __this.imageLoaded = true;
        if ( __this.startOnLoad ) {
            __this.startOnLoad = false;
            __this.beginAnimation();
        }
    };

    for( var i=0; i<imglist.length; i++ ) {
        this.imgBuffer[i] = new Animation.Cube.Image( this.canvas );
        this.imgBuffer[i].onLoad = trigcheck;
        this.imgBuffer[i].fromURL( imglist[i] );
    }

    return true;
};

Animation.Cube.appendEvent = function( elem, type, func ) {
    if ( elem.addEventListener ) {
        return elem.addEventListener( type, func, false );
    } else if ( elem.attachEvent ) {
        return elem.attachEvent( "on"+type, func );
    }
};

Animation.Cube.prototype.rotate = function() {
    if ( this.is_running ) return;      // already started
    if ( this.imageLoaded ) {
        this.beginAnimation();
    } else {
        this.startOnLoad = true;  // wait until image loaded
    }
};

Animation.Cube.prototype.beginAnimation = function() {
    if ( this.background ) {
        this.canvas.style.background = this.background;
    }

    var curnext = this.nextCursor(this.cursor);

    this.imgBase.elem.style.visibility = "hidden";

    this.rotation = this.clockWise ? 0.0 : 1.0;
    if ( this.clockWise ) {
        this.imgLeft  = this.imgBuffer[this.cursor];
        this.imgRight = this.imgBuffer[curnext];
    } else {
        this.imgLeft  = this.imgBuffer[curnext];
        this.imgRight = this.imgBuffer[this.cursor];
    }

    this.startWise = this.clockWise;

    this.is_running = true;
    this.timer = new Animation.Cube.Timer(this);    // timer object
    this.timer.start();
};

Animation.Cube.prototype.nextCursor = function(cur) {
    if ( this.clockWise ) {
        cur ++;
        cur = cur % this.imgBuffer.length;
    } else {
        cur --;
        if ( cur < 0 ) cur += this.imgBuffer.length;
    }
    return cur;
};

Animation.Cube.prototype.dispEdge = function() {
    if ( this.timer ) {
        if ( this.timer.is_running() ) this.timer.stop();
        this.timer = null;
    }
    if ( ! this.is_running ) return;

    this.imgLeft.hideClip( 0 );
    this.imgRight.hideClip( 0 );

    if ( this.startWise == this.clockWise ) {
        this.cursor = this.nextCursor(this.cursor);
    }
    this.startWise = null;
    this.imgBase.elem.src = this.imgBuffer[this.cursor].elem.src;
    this.imgBase.elem.style.width  = this.canvasWidth +"px";
    this.imgBase.elem.style.height = this.canvasHeight+"px";
    this.imgBase.elem.style.visibility = "visible";
};

Animation.Cube.prototype.nextAnimation = function() {
    this.dispEdge();
    var __this = this;
    var func = function () {
        if ( ! __this.is_running ) return;
        __this.beginAnimation();
    }
    if ( this.onInterval ) this.onInterval(this.cursor);
    if ( ! this.is_running ) return;
    setTimeout( func, this.waitSeconds*1000 );
};

Animation.Cube.prototype.finish = function() {
    this.dispEdge();
//  this.canvas.parentNode.removeChild( this.canvas );  // clear canvas
    this.is_running = false;
    if ( this.onComplete ) this.onComplete(this.cursor);
};

Animation.Cube.prototype.loop = function(secs,diff,count) {
    if ( ! this.is_running ) return;
    if ( ! this.clockWise ) diff = - diff;
    this.rotation += diff * 0.001 / this.rotateSeconds;

    var fincheck = false;
    if ( this.rotation > 1.0 ) {
        this.rotation = 1.0;
        fincheck = true;
    } else if ( this.rotation < 0.0 ) {
        this.rotation = 0.0;
        fincheck = true;
    }

    this.display( this.rotation );

    if ( fincheck ) {
        if ( this.repeat ) {
            this.nextAnimation();
        } else {
            this.finish();
        }
        return false;
    } else {
        return true;
    }
};

Animation.Cube.prototype.display = function( prog ) {
    var alpha = (1.0-2.0*prog)/4.0*Math.PI;
    var sina = Math.sin( alpha );
    var cosa = Math.cos( alpha );
    var ah = this.viewDistance / ( this.viewDistance +(cosa+sina));
    var bh = 1;
    var ch = this.viewDistance / ( this.viewDistance +(cosa-sina));
    var aw = cosa * ah;
    var bw = sina;
    var cw = -cosa * ch;

    var ow = 0;
    if ( aw >  Math.SQRT1_2 ) ow = aw-Math.SQRT1_2;
    if ( cw < -Math.SQRT1_2 ) ow = cw+Math.SQRT1_2;
    if ( ow ) {
        aw -= ow;
        bw -= ow;
        cw -= ow;
    }

    if ( aw > bw ) {
        this.dispPanel( this.imgRight, bw, bh, aw, ah);
    } else {
        this.imgRight.hideClip( 0 );
    }
    if ( cw < bw ) {
        this.dispPanel( this.imgLeft, cw, ch, bw, bh );
    } else {
        this.imgLeft.hideClip( 0 );
    }
};

Animation.Cube.prototype.dispPanel = function( img, x1, h1, x2, h2 ) {
    if ( x1 > x2 ) {
        var x0 = x1;
        x1 = x2;
        x2 = x0;
        var h0 = h1;
        h1 = h2;
        h2 = h0;
    }

    var lx = Math.round( Math.SQRT1_2 * this.canvasWidth * (x1+Math.SQRT1_2) );
    var lh = Math.round( this.canvasHeight * h1 );
    var ly = Math.round((this.canvasHeight-lh)/2);
    var rx = Math.round( Math.SQRT1_2 * this.canvasWidth * (x2+Math.SQRT1_2) );
    var rh = Math.round( this.canvasHeight * h2 );
    var ry = Math.round((this.canvasHeight-rh)/2);

    var reso = this.canvasWidth;
    if ( ry != ly ) {
        reso = Math.round(Math.abs(2.0*(rx-lx)/(ry-ly)));
        if ( reso > this.maxResolution ) reso = this.maxResolution;
        if ( reso < this.minResolution ) reso = this.minResolution;
    }

    var ww = rx-lx;
    var clipnum = 0;
    for( var ix=lx; ix<rx; ix+=reso ) {
        var prog = (ix-lx)/(rx-lx);
        var iy = Math.round( ly + (ry-ly)*prog );
        var ih = Math.round( lh + (rh-lh)*prog );
        var iw = reso;
        if ( ix+iw > this.canvasWidth ) iw = this.canvasWidth - ix;
        img.dispClip( clipnum, ix,iy,iw,ih,prog,ww );
        clipnum ++;
    }
    img.hideClip( clipnum );
};

//  Animation.Cube.Image class

Animation.Cube.Image = function( work ) {
    this.plane = null;
    this.work = work;           // work div element
    this.elem = null;           // image element
    this.onLoad = null;         // callback function
    this.clipbuf = [];
    this.loaded = false;
    this.lasthided = null;
    return this;
};

Animation.Cube.Image.prototype.getClip = function( num ) {
    if ( this.clipbuf[num] ) return this.clipbuf[num];
    var line = this.elem.cloneNode(true);
    line.style.position   = "absolute";
    line.style.display    = "";
    line.style.visibility = "hidden";
    this.clipbuf[num] = line;
    return line;
};

Animation.Cube.Image.prototype.hideClip = function( num ) {
    var lastclip = this.clipbuf.length;
    if ( this.lasthided != null ) lastclip = this.lasthided;
    for( var i=num; i<lastclip; i++ ) {
        this.clipbuf[i].style.visibility = "hidden";
    }
    this.lasthided = num;
};

Animation.Cube.Image.prototype.dispClip = function( num,left,top,width,height,prog,xcomp) {
    var line = this.getClip( num );
    var offset = Math.round(xcomp*prog);
    var lstyle = line.style;
    lstyle.left   = (left-offset)+"px";
    lstyle.width  = xcomp+"px";
    lstyle.top    = top+"px";
    lstyle.height = height+"px";
    lstyle.visibility = "visible";
    lstyle.clip = "rect(0px,"+(offset+width)+"px,"+(height)+"px,"+offset+"px)";
    this.work.appendChild( line );
};

Animation.Cube.Image.prototype.fromElement = function( elem ) {
    if ( typeof elem == "string" ) {
        elem = document.getElementById(elem);
    }
    if ( ! elem ) return;
    if ( elem.tagName != "IMG" ) return;
    this.elem = elem;
    this.loaded = true;
    return elem;
};

Animation.Cube.Image.prototype.fromURL = function( url ) {
    var elem = document.createElement( "img" );    // new image
    elem.src = url;
    elem.style.visibility = "hidden";
    elem.style.position = "absolute";
    this.work.appendChild( elem );
    this.checkLoaded( elem );
    this.elem = elem;
    return elem;
};

Animation.Cube.Image.prototype.checkLoaded = function( orig ) {
    var check = orig.cloneNode(true);                   // image to check
    var __this = this;
    var ldfunc = function(e){
        if ( ! e && window.event ) e = window.event;    // IE event
        __this.loaded = true;
        check.parentNode.removeChild( check );
        if ( __this.onLoad ) __this.onLoad();
    };
    Animation.Cube.appendEvent( check, "load", ldfunc );        // onload image
    this.work.appendChild( check );
};

//  Animation.Cube.Timer class

Animation.Cube.Timer = function (target) {
    this.target = target;
    this.started = false;
    this.stoped = false;
    this.count = 0;
    var __this = this;
    this.next = function(){
        if ( __this.stoped ) return;
        var now_time = (new Date()).getTime();
        if ( ! __this.begin_time ) __this.begin_time = now_time;
        if ( ! __this.prev_time ) __this.prev_time = now_time;
        var spent_time = now_time-__this.begin_time;
        var diff_time = now_time - __this.prev_time;
        __this.prev_time = now_time;
        var flag = __this.target.loop(spent_time,diff_time,__this.count++);
        if ( flag ) {
            setTimeout( __this.next, 1 );
        } else {
            __this.stop();
        }
    };
    return this;
};

Animation.Cube.Timer.prototype.start = function () {
    this.started = true;
    this.stoped = false;
    this.next();
};

Animation.Cube.Timer.prototype.now = function () {
    return (new Date()).getTime();
};
Animation.Cube.Timer.prototype.stop = function () {
    this.stoped = true;
};

Animation.Cube.Timer.prototype.is_running = function () {
    return ( this.started && ! this.stoped );
};

/*
// ========================================================================

=head1 NAME

Animation.Cube -- Rotating Cube Animation Effect

=head1 SYNOPSIS

2-Images-Rotation-Mode:

    var cube = new Animation.Cube( img_id, "next.jpg" );
    cube.rotate();

N-Images-Loop-Mode:

    var list = [
        "first.jpg",
        "second.jpg",
        "third.jpg",
        "forth.jpg"
    ];
    var cube = new Animation.Cube( img_id, list );
    cube.rotate();

=head1 DESCRIPTION

This library provides a rotating cube animation effect.

=head1 METHODS

=head2 cube = new Animation.Cube( id_or_elem, "next.jpg" );

This constructor method returns a new Animation.Cube object.
First argument is a <img> element or its id.
2-Images-Rotation-Mode is used when second argument is a image's URL.

=head2 cube = new Animation.Cube( id_or_elem, ["1st.jpg","2nd.jpg",...] );

N-Images-Loop-Mode is used when second argument is a array for URLs.
Number of images is not limited. 
I think four images is best for intuitive cube's shape.

=head2 cube.rotate();

This method starts a animation effect.

=head2 cube.finish();

This method forces to stop a animation effect if it's running.

=head2 PROPERTIES

Following properties are available:

    cube.onComplete = function (cur) { ... };
    cube.onInterval = function (cur) { ... };
    cube.background = "#000000";
    cube.waitSeconds = 1.000;
    cube.rotateSeconds = 0.500;
    cube.minResolution =  2;
    cube.maxResolution = 32;
    cube.cursor = 0;
    cube.clockWise = true;

=head1 AUTHOR

Yusuke Kawasaki http://www.kawa.net/

=head1 COPYRIGHT AND LICENSE

Copyright (c) 2005-2006 Yusuke Kawasaki. All rights reserved.
This program is free software; you can redistribute it and/or
modify it under the Artistic license. Or whatever license I choose,
which I will do instead of keeping this documentation like it is.

=cut
// ========================================================================
*/
