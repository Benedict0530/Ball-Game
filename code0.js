gdjs.GameCode = {};
gdjs.GameCode.GDBallObjects2_1final = [];

gdjs.GameCode.GDPaddle_95951Objects1= [];
gdjs.GameCode.GDPaddle_95951Objects2= [];
gdjs.GameCode.GDPaddle_95951Objects3= [];
gdjs.GameCode.GDPaddle_95951Objects4= [];
gdjs.GameCode.GDPaddle_95951Objects5= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDBallObjects4= [];
gdjs.GameCode.GDBallObjects5= [];
gdjs.GameCode.GDMiddleLineObjects1= [];
gdjs.GameCode.GDMiddleLineObjects2= [];
gdjs.GameCode.GDMiddleLineObjects3= [];
gdjs.GameCode.GDMiddleLineObjects4= [];
gdjs.GameCode.GDMiddleLineObjects5= [];
gdjs.GameCode.GDPaddle_95952Objects1= [];
gdjs.GameCode.GDPaddle_95952Objects2= [];
gdjs.GameCode.GDPaddle_95952Objects3= [];
gdjs.GameCode.GDPaddle_95952Objects4= [];
gdjs.GameCode.GDPaddle_95952Objects5= [];
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1= [];
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2= [];
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects3= [];
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects4= [];
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects5= [];
gdjs.GameCode.GDWinTextObjects1= [];
gdjs.GameCode.GDWinTextObjects2= [];
gdjs.GameCode.GDWinTextObjects3= [];
gdjs.GameCode.GDWinTextObjects4= [];
gdjs.GameCode.GDWinTextObjects5= [];
gdjs.GameCode.GDControls_9595Player2Objects1= [];
gdjs.GameCode.GDControls_9595Player2Objects2= [];
gdjs.GameCode.GDControls_9595Player2Objects3= [];
gdjs.GameCode.GDControls_9595Player2Objects4= [];
gdjs.GameCode.GDControls_9595Player2Objects5= [];
gdjs.GameCode.GDControls_9595Player1Objects1= [];
gdjs.GameCode.GDControls_9595Player1Objects2= [];
gdjs.GameCode.GDControls_9595Player1Objects3= [];
gdjs.GameCode.GDControls_9595Player1Objects4= [];
gdjs.GameCode.GDControls_9595Player1Objects5= [];
gdjs.GameCode.GDPressSpaceTextObjects1= [];
gdjs.GameCode.GDPressSpaceTextObjects2= [];
gdjs.GameCode.GDPressSpaceTextObjects3= [];
gdjs.GameCode.GDPressSpaceTextObjects4= [];
gdjs.GameCode.GDPressSpaceTextObjects5= [];
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1= [];
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2= [];
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects3= [];
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects4= [];
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects5= [];
gdjs.GameCode.GDLoseZoneObjects1= [];
gdjs.GameCode.GDLoseZoneObjects2= [];
gdjs.GameCode.GDLoseZoneObjects3= [];
gdjs.GameCode.GDLoseZoneObjects4= [];
gdjs.GameCode.GDLoseZoneObjects5= [];
gdjs.GameCode.GDBarrierObjects1= [];
gdjs.GameCode.GDBarrierObjects2= [];
gdjs.GameCode.GDBarrierObjects3= [];
gdjs.GameCode.GDBarrierObjects4= [];
gdjs.GameCode.GDBarrierObjects5= [];
gdjs.GameCode.GDRePlayObjects1= [];
gdjs.GameCode.GDRePlayObjects2= [];
gdjs.GameCode.GDRePlayObjects3= [];
gdjs.GameCode.GDRePlayObjects4= [];
gdjs.GameCode.GDRePlayObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controls_Player1"), gdjs.GameCode.GDControls_9595Player1Objects1);
/* Reuse gdjs.GameCode.GDControls_9595Player2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("PressSpaceText"), gdjs.GameCode.GDPressSpaceTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPressSpaceTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPressSpaceTextObjects1[i].setString("Touch to continue");
}
}{for(var i = 0, len = gdjs.GameCode.GDControls_9595Player2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDControls_9595Player2Objects1[i].setString("Drag the paddle to move it");
}
}{for(var i = 0, len = gdjs.GameCode.GDControls_9595Player1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDControls_9595Player1Objects1[i].setString("Drag the paddle to move it");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects3);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects3[i].addPolarForce(-(90), 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects3);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects3[i].addPolarForce(90, 500, 0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects3);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects3[i].addPolarForce(-(90), 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects2);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects2[i].addPolarForce(90, 500, 0);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))), "", 0) < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects4);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects4[i].returnVariable(gdjs.GameCode.GDPaddle_95951Objects4[i].getVariables().get("TouchId")).setNumber(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))), "", 0) > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2 / 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects4);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects4[i].returnVariable(gdjs.GameCode.GDPaddle_95952Objects4[i].getVariables().get("TouchId")).setNumber(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))));
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("index").add(1);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


const repeatCount3 = gdjs.evtTools.input.getStartedTouchCount(runtimeScene);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("index").setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPaddle_95951Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPaddle_95951Objects2[0].getVariables()).get("TouchId"))));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddle_95951Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects2[i].returnVariable(gdjs.GameCode.GDPaddle_95951Objects2[i].getVariables().get("TouchId")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPaddle_95952Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPaddle_95952Objects2[0].getVariables()).get("TouchId"))));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddle_95952Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects2[i].returnVariable(gdjs.GameCode.GDPaddle_95952Objects2[i].getVariables().get("TouchId")).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPaddle_95951Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPaddle_95951Objects2[i].getVariableNumber(gdjs.GameCode.GDPaddle_95951Objects2[i].getVariables().get("TouchId")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPaddle_95951Objects2[k] = gdjs.GameCode.GDPaddle_95951Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPaddle_95951Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddle_95951Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects2[i].setY(gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPaddle_95951Objects2[i].getVariables().get("TouchId"))), "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPaddle_95952Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPaddle_95952Objects1[i].getVariableNumber(gdjs.GameCode.GDPaddle_95952Objects1[i].getVariables().get("TouchId")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPaddle_95952Objects1[k] = gdjs.GameCode.GDPaddle_95952Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPaddle_95952Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddle_95952Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects1[i].setY(gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPaddle_95952Objects1[i].getVariables().get("TouchId"))), "", 0));
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Barrier"), gdjs.GameCode.GDBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects2);
{for(var i = 0, len = gdjs.GameCode.GDPaddle_95951Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95951Objects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects, false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPaddle_95952Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddle_95952Objects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects, false);
}
}}

}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595951Objects2Objects = Hashtable.newFrom({"Paddle_1": gdjs.GameCode.GDPaddle_95951Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595951Objects2Objects = Hashtable.newFrom({"Paddle_1": gdjs.GameCode.GDPaddle_95951Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595952Objects2Objects = Hashtable.newFrom({"Paddle_2": gdjs.GameCode.GDPaddle_95952Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595952Objects2Objects = Hashtable.newFrom({"Paddle_2": gdjs.GameCode.GDPaddle_95952Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLoseZoneObjects2Objects = Hashtable.newFrom({"LoseZone": gdjs.GameCode.GDLoseZoneObjects2});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 10;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 10;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Won");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= 10;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("NotStarted");
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLoseZoneObjects1Objects = Hashtable.newFrom({"LoseZone": gdjs.GameCode.GDLoseZoneObjects1});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 10;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 10;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Won");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 10;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("NotStarted");
}}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle_1"), gdjs.GameCode.GDPaddle_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDPaddle_95951Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOffHorizontally(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595951Objects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\hitImpact.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 0, 0, (( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getCenterYInScene()) / 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle_2"), gdjs.GameCode.GDPaddle_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595952Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDPaddle_95952Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOffHorizontally(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddle_959595952Objects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\hitImpact.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 5, 0, (( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getCenterYInScene()) / 100);
}}

}


{



}


{

gdjs.GameCode.GDBallObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDBallObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects3[i].averageForceAngleIs(90, 20) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects3[k] = gdjs.GameCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects2_1final.indexOf(gdjs.GameCode.GDBallObjects3[j]) === -1 )
            gdjs.GameCode.GDBallObjects2_1final.push(gdjs.GameCode.GDBallObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects3[i].averageForceAngleIs(-(90), 20) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects3[k] = gdjs.GameCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects2_1final.indexOf(gdjs.GameCode.GDBallObjects3[j]) === -1 )
            gdjs.GameCode.GDBallObjects2_1final.push(gdjs.GameCode.GDBallObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBallObjects2_1final, gdjs.GameCode.GDBallObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12389236);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].addPolarForce(gdjs.randomInRange((gdjs.GameCode.GDBallObjects2[i].getAverageForce().getAngle()) - 15, (gdjs.GameCode.GDBallObjects2[i].getAverageForce().getAngle()) + 15), 500, 1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Barrier"), gdjs.GameCode.GDBarrierObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDBarrierObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("LoseZone"), gdjs.GameCode.GDLoseZoneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLoseZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLoseZoneObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDLoseZoneObjects2[i].getVariableNumber(gdjs.GameCode.GDLoseZoneObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLoseZoneObjects2[k] = gdjs.GameCode.GDLoseZoneObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDLoseZoneObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player_2_Score"), gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Miss.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 0, 0, (( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getCenterYInScene()) / 100);
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("LoseZone"), gdjs.GameCode.GDLoseZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLoseZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLoseZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDLoseZoneObjects1[i].getVariableNumber(gdjs.GameCode.GDLoseZoneObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLoseZoneObjects1[k] = gdjs.GameCode.GDLoseZoneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDLoseZoneObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player_1_Score"), gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("NotStarted");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Miss.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 5, 0, (( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getCenterYInScene()) / 100);
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayer_959595952_95959595ScoreObjects2ObjectsGDgdjs_9546GameCode_9546GDPlayer_959595951_95959595ScoreObjects2Objects = Hashtable.newFrom({"Player_2_Score": gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2, "Player_1_Score": gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayer_959595952_95959595ScoreObjects1ObjectsGDgdjs_9546GameCode_9546GDPlayer_959595951_95959595ScoreObjects1Objects = Hashtable.newFrom({"Player_2_Score": gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1, "Player_1_Score": gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10341868);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10341156);
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_1_Score"), gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2_Score"), gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayer_959595952_95959595ScoreObjects2ObjectsGDgdjs_9546GameCode_9546GDPlayer_959595951_95959595ScoreObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11903628);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2 */
/* Reuse gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2[i].setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_1_Score"), gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_2_Score"), gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayer_959595952_95959595ScoreObjects1ObjectsGDgdjs_9546GameCode_9546GDPlayer_959595951_95959595ScoreObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11904676);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1 */
/* Reuse gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1[i].setOpacity(255);
}
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11906196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "PreCard");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "WinLayer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GUI");
}}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Playing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12034876);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "PreCard");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GUI");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMiddleLineObjects2 */
gdjs.GameCode.GDBallObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, (( gdjs.GameCode.GDMiddleLineObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects2[0].getX()), gdjs.randomInRange(0, (( gdjs.GameCode.GDMiddleLineObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects2[0].getHeight()) + (( gdjs.GameCode.GDMiddleLineObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects2[0].getY())), "");
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].addPolarForce(gdjs.randomInRange(0, 359), 500, 1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Playing");
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "NotStarted";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MiddleLine"), gdjs.GameCode.GDMiddleLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("PressSpaceText"), gdjs.GameCode.GDPressSpaceTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPressSpaceTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPressSpaceTextObjects2[i].setCenterXInScene((( gdjs.GameCode.GDMiddleLineObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects2[0].getCenterXInScene()));
}
}
{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRePlayObjects1Objects = Hashtable.newFrom({"RePlay": gdjs.GameCode.GDRePlayObjects1});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8757716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "WinLayer");
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(gdjs.GameCode.GDWinTextObjects1, gdjs.GameCode.GDWinTextObjects2);

{for(var i = 0, len = gdjs.GameCode.GDWinTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWinTextObjects2[i].setString("Player 1 Won");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Win.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 0, 0, (( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getCenterYInScene()) / 100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(gdjs.GameCode.GDWinTextObjects1, gdjs.GameCode.GDWinTextObjects2);

{for(var i = 0, len = gdjs.GameCode.GDWinTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWinTextObjects2[i].setString("Player 2 Won");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Win.ogg", 0, false, 60, 1);
}{gdjs.evtTools.spatialSound.setSoundPosition(runtimeScene, 0, 5, 0, (( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getCenterYInScene()) / 100);
}}

}


{



}


{

/* Reuse gdjs.GameCode.GDRePlayObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRePlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Won";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MiddleLine"), gdjs.GameCode.GDMiddleLineObjects1);
gdjs.copyArray(runtimeScene.getObjects("RePlay"), gdjs.GameCode.GDRePlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.GameCode.GDWinTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWinTextObjects1[i].setCenterXInScene((( gdjs.GameCode.GDMiddleLineObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDRePlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRePlayObjects1[i].setCenterXInScene((( gdjs.GameCode.GDMiddleLineObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMiddleLineObjects1[0].getCenterXInScene()));
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}
{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controls_Player2"), gdjs.GameCode.GDControls_9595Player2Objects1);
{Howler.pos(5, 0, 5);
}{for(var i = 0, len = gdjs.GameCode.GDControls_9595Player2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDControls_9595Player2Objects1[i].setTextAlignment("right");
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPaddle_95951Objects1.length = 0;
gdjs.GameCode.GDPaddle_95951Objects2.length = 0;
gdjs.GameCode.GDPaddle_95951Objects3.length = 0;
gdjs.GameCode.GDPaddle_95951Objects4.length = 0;
gdjs.GameCode.GDPaddle_95951Objects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDMiddleLineObjects1.length = 0;
gdjs.GameCode.GDMiddleLineObjects2.length = 0;
gdjs.GameCode.GDMiddleLineObjects3.length = 0;
gdjs.GameCode.GDMiddleLineObjects4.length = 0;
gdjs.GameCode.GDMiddleLineObjects5.length = 0;
gdjs.GameCode.GDPaddle_95952Objects1.length = 0;
gdjs.GameCode.GDPaddle_95952Objects2.length = 0;
gdjs.GameCode.GDPaddle_95952Objects3.length = 0;
gdjs.GameCode.GDPaddle_95952Objects4.length = 0;
gdjs.GameCode.GDPaddle_95952Objects5.length = 0;
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects1.length = 0;
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects2.length = 0;
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects3.length = 0;
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects4.length = 0;
gdjs.GameCode.GDPlayer_95951_9595ScoreObjects5.length = 0;
gdjs.GameCode.GDWinTextObjects1.length = 0;
gdjs.GameCode.GDWinTextObjects2.length = 0;
gdjs.GameCode.GDWinTextObjects3.length = 0;
gdjs.GameCode.GDWinTextObjects4.length = 0;
gdjs.GameCode.GDWinTextObjects5.length = 0;
gdjs.GameCode.GDControls_9595Player2Objects1.length = 0;
gdjs.GameCode.GDControls_9595Player2Objects2.length = 0;
gdjs.GameCode.GDControls_9595Player2Objects3.length = 0;
gdjs.GameCode.GDControls_9595Player2Objects4.length = 0;
gdjs.GameCode.GDControls_9595Player2Objects5.length = 0;
gdjs.GameCode.GDControls_9595Player1Objects1.length = 0;
gdjs.GameCode.GDControls_9595Player1Objects2.length = 0;
gdjs.GameCode.GDControls_9595Player1Objects3.length = 0;
gdjs.GameCode.GDControls_9595Player1Objects4.length = 0;
gdjs.GameCode.GDControls_9595Player1Objects5.length = 0;
gdjs.GameCode.GDPressSpaceTextObjects1.length = 0;
gdjs.GameCode.GDPressSpaceTextObjects2.length = 0;
gdjs.GameCode.GDPressSpaceTextObjects3.length = 0;
gdjs.GameCode.GDPressSpaceTextObjects4.length = 0;
gdjs.GameCode.GDPressSpaceTextObjects5.length = 0;
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects1.length = 0;
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects2.length = 0;
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects3.length = 0;
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects4.length = 0;
gdjs.GameCode.GDPlayer_95952_9595ScoreObjects5.length = 0;
gdjs.GameCode.GDLoseZoneObjects1.length = 0;
gdjs.GameCode.GDLoseZoneObjects2.length = 0;
gdjs.GameCode.GDLoseZoneObjects3.length = 0;
gdjs.GameCode.GDLoseZoneObjects4.length = 0;
gdjs.GameCode.GDLoseZoneObjects5.length = 0;
gdjs.GameCode.GDBarrierObjects1.length = 0;
gdjs.GameCode.GDBarrierObjects2.length = 0;
gdjs.GameCode.GDBarrierObjects3.length = 0;
gdjs.GameCode.GDBarrierObjects4.length = 0;
gdjs.GameCode.GDBarrierObjects5.length = 0;
gdjs.GameCode.GDRePlayObjects1.length = 0;
gdjs.GameCode.GDRePlayObjects2.length = 0;
gdjs.GameCode.GDRePlayObjects3.length = 0;
gdjs.GameCode.GDRePlayObjects4.length = 0;
gdjs.GameCode.GDRePlayObjects5.length = 0;

gdjs.GameCode.eventsList17(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
