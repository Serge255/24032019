    MYP.GetAllArmorConditions = function(gameItem) {
        var conditions = [];
        var obj = gameItem.object();
        if(obj.meta && obj.meta.COND) {
            regexPattern = /COND:\[(.+)\],(\d+)/i;
            var lines = obj.note.split('\n');
            for(var i = 0; i<lines.length; i++) {
                result = lines[i].match(regexPattern);
                if(result) {
                    conditions.push({
                        itemId: gameItem.itemId(),
                        condition: MYP.ConvertConditionString(result[1]),
                        stateId: Number(result[2])
                    });
                }
            }
        }
        return conditions;
    };
