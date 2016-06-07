/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="9" inline="true" x="291" y="43"><field name="VAR">MyCar</field><value name="VALUE"><block type="scriptr_xee_vehicle" id="6" inline="true"><field name="type">plateNumber</field><value name="username"><block type="text" id="38"><field name="TEXT">beghin</field></block></value><value name="id"><block type="text" id="39"><field name="TEXT">BZ-602-GC</field></block></value></block></value><next><block type="scriptr_return" id="63" inline="false"><value name="return"><block type="scriptr_xee_wiperstatus" id="97" inline="true"><value name="NAME"><block type="variables_get" id="98"><field name="VAR">MyCar</field></block></value></block></value></block></next></block><block type="scriptr_xee_enginespeed" id="83" inline="true" x="382" y="185"><value name="NAME"><block type="variables_get" id="84"><field name="VAR">MyCar</field></block></value></block><block type="scriptr_xee_fuellevel" id="72" inline="true" x="345" y="291"><value name="NAME"><block type="variables_get" id="77"><field name="VAR">MyCar</field></block></value></block><block type="scriptr_xee_vehiclespeed" id="90" inline="true" x="313" y="349"><value name="NAME"><block type="variables_get" id="91"><field name="VAR">MyCar</field></block></value></block></xml>*#*#*/
var MyCar;


MyCar = ((function(){var userModule = require("/modules/xee/user");
		  var user = new userModule.User({username:'beghin'});
		  var vehicle = user.getVehicle({plateNumber:'BZ-602-GC'});
		  return vehicle;})());
return MyCar.getWiperStatus().ManualWiperSts[0]

MyCar.getSpeedStatus().EngineSpeed[0]
;

MyCar.getFuelLevel()
;

MyCar.getSpeedStatus().VehiculeSpeed[0]
;
			