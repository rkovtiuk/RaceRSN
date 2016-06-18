var TBE = {
  CreateCanvasElement: function ()
  {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    return canvas;
  },

  CreateSquareCanvasElement: function (size)
  {
    var canvas = TBE.CreateCanvasElement ();

    canvas.setAttribute ('width', size);
    canvas.setAttribute ('height', size);

    return canvas;
  },

  GetElement2DContext: function (element)
  {
    if (typeof (element) != 'object')
      element = document.getElementById (element);

    if (element && element.getContext)
      return element.getContext('2d');

    return null;
  },

  ClearCanvas: function (element)
  {
    if (typeof (element) != 'object')
      element = document.getElementById(element);

    if (element)
      element.setAttribute ('width', element.getAttribute ('width'));
  },

  defaultView: null, // Cache defaultView
  GetElementComputedStyle: function (element)
  {
    if (!this.defaultView) this.defaultView = document.defaultView; 
    if (this.defaultView && this.defaultView.getComputedStyle)
      return this.defaultView.getComputedStyle (element, null);

    return null;
  },

  Deg2Rad: function (theta)
  {
    return theta * Math.PI / 180.0;
  }
};
