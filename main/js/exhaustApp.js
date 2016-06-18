ExhaustApp = function()
{
	Sim.App.call(this);
}

ExhaustApp.prototype = new Sim.App();

ExhaustApp.prototype.init = function(param)
{
	Sim.App.prototype.init.call(this, param);
	
	this.headlight = new THREE.DirectionalLight( 0xffffff, 1);
	this.headlight.position.set(0, 0, 1);
	this.scene.add(this.headlight);	

	var exhaust = new Exhaust();
	exhaust.init();
	this.addObject(exhaust);

	this.camera.position.z = 3;
}

ExhaustApp.prototype.update = function()
{	
	Sim.App.prototype.update.call(this);
}
