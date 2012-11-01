Wii = function() {};
Object.extend(Wii, {
  isWii: function() {
    return navigator.userAgent.toLowerCase().indexOf('nintendo wii') >= 0;
  }
});

/*
 * Wii.Command class
 */
Wii.Command = function(fieldElement, replaceElement) {
  replaceElement = replaceElement || fieldElement;
  this.fieldElement   = $(fieldElement);
  this.replaceElement = $(replaceElement);
}
Wii.Command.prototype = new Wii;

Object.extend(Wii.Command.prototype, {
  controller: null,
  fieldElement: null,
  linkMessage: 'Click here to input command',
  keyMap: {
    Up:    'k', Down:  'j', Left:  'h', Right: 'l', A:     'a', B:     'b',
    1:     '1', 2:     '2', Plus:  '+', Minus: '-'},
  promptMessage: 'Input command then press A button',

  disableWiimote: function() {
    this.controller.stop();
  },

  enableWiimote: function() {
    if (!this.controller) {
      this.controller = new Wii.Controller();
      this.controller.handler = this.handleKey.bind(this);
    }
    this.controller.start();
  },

  end: function() {
    this.disableWiimote();
    this.hideWindow();
  },

  handleKey: function(event, key) {
    Event.stop(event);
    switch (key) {
    case 'Up':
    case 'Down':
    case 'Left':
    case 'Right':
    case '1':
    case '2':
      this.fieldElement.value += this.keyMap[key];
      break;
    case 'A':
      this.end();
      break;
    }
  },

  hideWindow: function() {
    Wii.Window.hide();
  },

  replace: function() {
    replaceElement = this.replaceElement;
    fieldElement   = this.fieldElement;

    Element.hide(replaceElement);
    var id = 'wii_command_link'
    var href = 'javascript:void(0);';
    var html = '<a href="'+href+'" id="'+id+'">'+this.linkMessage+'</a>';
    new Insertion.Before(replaceElement, html);

    Event.observe(id, 'click', this.start.bindAsEventListener(this));
  },

  showWindow: function() {
    Wii.Window.show(this.promptMessage);
  },

  start: function() {
    setTimeout(this.enableWiimote.bind(this), 10);
    this.fieldElement.value = '';
    this.showWindow();
  }
});

/*
 * Wii.Controller class
 */
Wii.Controller = function() {
  Event.observe(document, 'keypress', this.keyPress.bindAsEventListener(this));
  Event.observe(document, 'click', this.click.bindAsEventListener(this));

  this.browser = this.getBrowser();
};
Wii.Controller.prototype = new Wii;

Object.extend(Wii.Controller.prototype, {
  keyCode: {
    Firefox: {
       38: 'Up',  40: 'Down',  37: 'Left',  39: 'Right',  97: 'A',  98: 'B',
       49: '1',   50: '2',     43: 'Plus',  45: 'Minus'},
    IE: {
       38: 'Up',  40: 'Down',  37: 'Left',  39: 'Right',  65: 'A',  66: 'B',
       49: '1',   50: '2',    187: 'Plus', 189: 'Minus'},
    Opera: {
       38: 'Up',  40: 'Down',  37: 'Left',  39: 'Right',  65: 'A',  66: 'B',
       49: '1',   50: '2',     43: 'Plus',  45: 'Minus'},
    Wii: {
      175: 'Up', 176: 'Down', 178: 'Left', 177: 'Right',           171: 'B',
      172: '1',  173: '2',    174: 'Plus', 170: 'Minus'}
  },
  original_handler: null,

  click: function(event) {
    if (this.browser != 'Wii') {
      return true;
    }
    this.handler(event, 'A');
    return false;
  },

  getBrowser: function() {
    var browser = null;
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') >= 0) {
      browser = 'IE';
    } else if (userAgent.indexOf('gecko') >= 0) {
      browser = 'Firefox';
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari';
    } else if (userAgent.indexOf('nintendo wii') >= 0) {
      browser = 'Wii';
    } else if (userAgent.indexOf('opera') >= 0) {
      browser = 'Opera';
    }
    return browser;
  },

  handler: function(event, keyCode) {
    return true;
  },

  keyPress: function(event) {
    var keyCode = event.keyCode || event.charCode;
    if (!this.keyCode[this.browser][keyCode]) {
      return true;
    }

    keyCode = this.keyCode[this.browser][keyCode];
    this.handler(event, keyCode);

    return false;
  },

  start: function() {
    if (this.original_handler) {
      this.handler = this.original_handler;
    }
  },

  stop: function() {
    this.original_handler = this.handler;
    this.handler = function() {};
  }
});

/*
 * Wii.Window class
 */
Wii.Window = function() {};
Wii.Window.prototype = new Wii;

Object.extend(Wii.Window, {
  addElements: function() {
    this.addOverlay();
    this.addMessageWindow();
  },

  addMessageWindow: function() {
    if ($('wii_window_message')) {
      return;
    }

    var element = document.createElement('div');
    element.id = 'wii_window_message';
    Element.setStyle(element, {
      'background-color': '#fff',
      'border':           '2px solid #aaa',
      'display':          'none',
      'height':           '350px',
      'width':            '700px',
      'z-index':          '100'
    });
    element.innerHTML = 
      '<table width="100%" height="100%">' +
      '  <tr>' +
      '    <td valign="middle" align="center">' +
      '      <span id="wii_window_message_space"></span>' +
      '    </td>' +
      ' </tr>' +
      '</table>' +
      '';
    document.body.appendChild(element);
  },

  addOverlay: function() {
    if ($('wii_window_overlay')) {
      return;
    }

    var element = document.createElement('div');
    element.id = 'wii_window_overlay';
    Element.setStyle(element, {
      'background-color': '#000',
      'display':          'none',
      'height':           '100%',
      'left':             '0',
      'opacity':	  '0.5',
      'position':         'absolute',
      'top':              '0',
      'width':            '100%',
      'z-index':          '90'
    });
    document.body.appendChild(element);
  },

  centerize: function(element) {
    element = $(element);
    var element_size    = Element.getDimensions(element);
    var browser_size     = this.getBrowserDimensions();
    var browser_position = this.getBrowserPosition();
    var top  = (browser_size['height'] - element_size['height']) / 2 + browser_position['top']  + "px";
    var left = (browser_size['width']  - element_size['width'])  / 2 + browser_position['left'] + "px";
    element.setStyle({top: top, left: left, position: 'absolute'});
  },

  getBrowserDimensions: function() {
    var width, height;
    if (window.innerWidth) {
      width  = window.innerWidth;
      height = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width  = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    } else {
      width  = document.body.offsetWidth;
      height = document.body.offsetHeight;
    }
    return {width: width, height: height};
  },

  getBrowserPosition: function() {
    Position.prepare();
    return {top: Position.deltaY, left: Position.deltaX};
  },

  hide: function() {
    Element.hide('wii_window_overlay');
    Element.hide('wii_window_message');
  },

  show: function(message) {
    this.addElements();
    var element_overlay = $('wii_window_overlay');
    var element_message = $('wii_window_message');
    $('wii_window_message_space').innerHTML = message;
    this.centerize(element_overlay);
    this.centerize(element_message);
    Element.show(element_overlay);
    Element.show(element_message);
  }
});
