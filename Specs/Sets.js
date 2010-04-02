(function(context){
 
context.Sets = {
 
'master': [

    'Control/BaseButton/initialize',
    
    'Control/PlayPause/initialize',
    'Control/PlayPause/toggleState',
    
    'Control/PlayProgress/initialize',
    'Control/PlayProgress/tick', //todo
    'Control/PlayProgress/change',
    
    'Subtitle/Item/initialize',
    
    'Subtitle/Parser/Base/run',
    'Subtitle/Parser/Base/hash',
    'Subtitle/Parser/SubRip/parse',
    
    'Subtitle/Player/initialize',
    'Subtitle/Player/tick',
    
    'Subtitle/Tree/initialize',
    'Subtitle/Tree/buildChildren',
    'Subtitle/Tree/getChildren',
    'Subtitle/Tree/doesSubtitleFit',
    'Subtitle/Tree/addSub',
    'Subtitle/Tree/getSubs'

],

 
};
 
})(this.exports || this);