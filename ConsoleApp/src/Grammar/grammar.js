/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,10],$V2=[1,18],$V3=[1,13],$V4=[1,17],$V5=[1,16],$V6=[1,14],$V7=[1,15],$V8=[1,20],$V9=[1,22],$Va=[1,23],$Vb=[1,24],$Vc=[1,25],$Vd=[1,26],$Ve=[5,13,14,17,18,19,24,25,26,27,31,33,34,35,36,37],$Vf=[1,42],$Vg=[1,54],$Vh=[1,56],$Vi=[1,46],$Vj=[1,47],$Vk=[1,48],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,63],$Vr=[30,38],$Vs=[1,68],$Vt=[1,67],$Vu=[1,69],$Vv=[1,70],$Vw=[1,71],$Vx=[1,72],$Vy=[1,73],$Vz=[1,74],$VA=[1,75],$VB=[1,76],$VC=[1,77],$VD=[1,78],$VE=[9,22,39,40,41,42,43,44,45,46,47,48,49,50],$VF=[9,22,39,40,43,44,45,46,47,48,49,50],$VG=[9,22,43,44,45,46,47,48,49,50],$VH=[9,22,47,48,49,50];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"Instructions":4,"EOF":5,"Instruction":6,"IfSt":7,"PrintSt":8,";":9,"DoWhileSt":10,"WhileSt":11,"InstructionSt":12,"BREAK":13,"CONTINUE":14,"Declaration":15,"Assignment":16,"LBRACE":17,"RBRACE":18,"IF":19,"(":20,"Expression":21,")":22,"ELSE":23,"WHILE":24,"DO":25,"PRINT":26,"PRINTLN":27,"Type":28,"IdList":29,"=":30,"ID":31,"AssignmentId":32,"INTEGER":33,"DOUBLE":34,"BOOLEAN":35,"CHAR":36,"STRING":37,",":38,"-":39,"+":40,"*":41,"/":42,"<":43,">":44,"<=":45,">=":46,"==":47,"!=":48,"&&":49,"||":50,"!":51,"LINTEGER":52,"LCHAR":53,"LDECIMAL":54,"TRUE":55,"FALSE":56,"LSTRING":57,"AccessId":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:";",13:"BREAK",14:"CONTINUE",17:"LBRACE",18:"RBRACE",19:"IF",20:"(",22:")",23:"ELSE",24:"WHILE",25:"DO",26:"PRINT",27:"PRINTLN",30:"=",31:"ID",33:"INTEGER",34:"DOUBLE",35:"BOOLEAN",36:"CHAR",37:"STRING",38:",",39:"-",40:"+",41:"*",42:"/",43:"<",44:">",45:"<=",46:">=",47:"==",48:"!=",49:"&&",50:"||",51:"!",52:"LINTEGER",53:"LCHAR",54:"LDECIMAL",55:"TRUE",56:"FALSE",57:"LSTRING"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[6,2],[6,2],[12,3],[7,5],[7,7],[7,7],[11,5],[10,6],[8,4],[8,4],[15,4],[15,4],[16,3],[32,1],[28,1],[28,1],[28,1],[28,1],[28,1],[29,3],[29,1],[21,2],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,3],[21,1],[58,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return $$[$0-1];
    
break;
case 2:

        this.$ = $$[$0-1]; 
        this.$.push($$[$0]);
    
break;
case 3:

        this.$ = [$$[$0]]; 
    
break;
case 4: case 7: case 8: case 53:

        this.$ = $$[$0];
    
break;
case 5: case 6: case 11: case 12:

        this.$ = $$[$0-1];
    
break;
case 9:

        this.$ = new Break(_$[$0-1].first_line,_$[$0-1].first_column);
    
break;
case 10:

        this.$ = new Continue(_$[$0-1].first_line,_$[$0-1].first_column);
    
break;
case 13:

        this.$ = new InstrBody($$[$0-1],_$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 14:

        this.$ = new If($$[$0-2], $$[$0], null, _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 15: case 16:

        this.$ = new If($$[$0-4], $$[$0-2], $$[$0], _$[$0-6].first_line, _$[$0-6].first_column);
    
break;
case 17:

        this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 18:
 
        this.$ = new DoWhile($$[$0-1], $$[$0-4], _$[$0-5].first_line, _$[$0-5].first_column); 
    
break;
case 19:

        this.$ = new Print($$[$0-1],false,_$[$0-3].first_line,_$[$0-3].first_column);
    
break;
case 20:

        this.$ = new Print($$[$0-1],true,_$[$0-3].first_line,_$[$0-3].first_column);
    
break;
case 21:

        this.$ = new Declaration($$[$0-3],$$[$0-2],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);
    
break;
case 22:

        this.$ = new Declaration(new Type(Types.STRUCT,$$[$0-3]),$$[$0-2],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);
    
break;
case 23:

        this.$ = new Assignment($$[$0-2],$$[$0],_$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 24:

        this.$ = new AssignmentId($$[$0],null,_$[$0].first_line,_$[$0].first_column);
    
break;
case 25:

        this.$ = new Type(Types.INTEGER);
    
break;
case 26:

        this.$ = new Type(Types.DOUBLE);
    
break;
case 27:

        this.$ = new Type(Types.BOOLEAN);
    
break;
case 28:

        this.$ = new Type(Types.CHAR);
    
break;
case 29:

        this.$ = new Type(Types.STRING);
    
break;
case 30:

        this.$ = $$[$0-2];
        this.$.push($$[$0]);
    
break;
case 31:

        this.$ = [$$[$0]];
    
break;
case 32:
 
        this.$ = null;
    
break;
case 33:
 
        this.$ = new Plus($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 34:
 
        this.$ = new Minus($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 35:
 
        this.$ = new Times($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 36:
 
        this.$ = new Div($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 37:
 
        this.$ = new Less(false,$$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 38:
 
        this.$ = new Greater(false,$$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 39:
 
        this.$ = new Less(true,$$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 40:
 
        this.$ = new Greater(true,$$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 41:
 
        this.$ = new Equals($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 42:
 
        this.$ = new NotEquals($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 43:
 
        this.$ = new And($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 44:
 
        this.$ = new Or($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
    
break;
case 45:
 
        this.$ = new Not($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
    
break;
case 46:
 
        this.$ = new PrimitiveL(Types.INTEGER, $$[$0], _$[$0].first_line, _$[$0].first_column); 
    
break;
case 47:
 
        this.$ = new PrimitiveL(Types.CHAR, $$[$0].charCodeAt(0), _$[$0].first_line, _$[$0].first_column); 
    
break;
case 48:
 
        this.$ = new PrimitiveL(Types.DOUBLE, $$[$0], _$[$0].first_line, _$[$0].first_column); 
    
break;
case 49:
 
        this.$ = new PrimitiveL(Types.BOOLEAN, true, _$[$0].first_line, _$[$0].first_column); 
    
break;
case 50:
 
        this.$ = new PrimitiveL(Types.BOOLEAN, false, _$[$0].first_line, _$[$0].first_column); 
    
break;
case 51:
  
        this.$ = new StringL(Types.STRING,$$[$0],_$[$0].first_line,_$[$0].first_column);
    
break;
case 52:
 
        this.$ = $$[$0-1]; 
    
break;
case 54:

        this.$ = new AccessId($$[$0],null,_$[$0].first_line,_$[$0].first_column);
    
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,10:6,11:7,12:8,13:$V0,14:$V1,15:11,16:12,17:$V2,19:$V3,24:$V4,25:$V5,26:$V6,27:$V7,28:19,31:$V8,32:21,33:$V9,34:$Va,35:$Vb,36:$Vc,37:$Vd},{1:[3]},{5:[1,27],6:28,7:4,8:5,10:6,11:7,12:8,13:$V0,14:$V1,15:11,16:12,17:$V2,19:$V3,24:$V4,25:$V5,26:$V6,27:$V7,28:19,31:$V8,32:21,33:$V9,34:$Va,35:$Vb,36:$Vc,37:$Vd},o($Ve,[2,3]),o($Ve,[2,4]),{9:[1,29]},{9:[1,30]},o($Ve,[2,7]),o($Ve,[2,8]),{9:[1,31]},{9:[1,32]},{9:[1,33]},{9:[1,34]},{20:[1,35]},{20:[1,36]},{20:[1,37]},{12:38,17:$V2},{20:[1,39]},{4:40,6:3,7:4,8:5,10:6,11:7,12:8,13:$V0,14:$V1,15:11,16:12,17:$V2,19:$V3,24:$V4,25:$V5,26:$V6,27:$V7,28:19,31:$V8,32:21,33:$V9,34:$Va,35:$Vb,36:$Vc,37:$Vd},{29:41,31:$Vf},{29:43,30:[2,24],31:$Vf},{30:[1,44]},{31:[2,25]},{31:[2,26]},{31:[2,27]},{31:[2,28]},{31:[2,29]},{1:[2,1]},o($Ve,[2,2]),o($Ve,[2,5]),o($Ve,[2,6]),o($Ve,[2,9]),o($Ve,[2,10]),o($Ve,[2,11]),o($Ve,[2,12]),{20:$Vg,21:45,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:57,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:58,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{24:[1,59]},{20:$Vg,21:60,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{6:28,7:4,8:5,10:6,11:7,12:8,13:$V0,14:$V1,15:11,16:12,17:$V2,18:[1,61],19:$V3,24:$V4,25:$V5,26:$V6,27:$V7,28:19,31:$V8,32:21,33:$V9,34:$Va,35:$Vb,36:$Vc,37:$Vd},{30:[1,62],38:$Vq},o($Vr,[2,31]),{30:[1,64],38:$Vq},{20:$Vg,21:65,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{22:[1,66],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},{20:$Vg,21:79,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:80,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},o($VE,[2,46]),o($VE,[2,47]),o($VE,[2,48]),o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),{20:$Vg,21:81,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},o($VE,[2,53]),o($VE,[2,54]),{22:[1,82],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},{22:[1,83],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},{20:[1,84]},{22:[1,85],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},o([5,13,14,17,18,19,23,24,25,26,27,31,33,34,35,36,37],[2,13]),{20:$Vg,21:86,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{31:[1,87]},{20:$Vg,21:88,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{9:[2,23],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},{12:89,17:$V2},{20:$Vg,21:90,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:91,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:92,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:93,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:94,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:95,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:96,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:97,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:98,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:99,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:100,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{20:$Vg,21:101,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},o($VE,[2,32]),o($VE,[2,45]),{22:[1,102],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},{9:[2,19]},{9:[2,20]},{20:$Vg,21:103,31:$Vh,39:$Vi,51:$Vj,52:$Vk,53:$Vl,54:$Vm,55:$Vn,56:$Vo,57:$Vp,58:55},{12:104,17:$V2},{9:[2,21],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},o($Vr,[2,30]),{9:[2,22],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},o($Ve,[2,14],{23:[1,105]}),o($VF,[2,33],{41:$Vu,42:$Vv}),o($VF,[2,34],{41:$Vu,42:$Vv}),o($VE,[2,35]),o($VE,[2,36]),o($VG,[2,37],{39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($VG,[2,38],{39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($VG,[2,39],{39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($VG,[2,40],{39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($VH,[2,41],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz}),o($VH,[2,42],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz}),o([9,22,49,50],[2,43],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB}),o([9,22,50],[2,44],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC}),o($VE,[2,52]),{22:[1,106],39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD},o($Ve,[2,17]),{7:108,12:107,17:$V2,19:$V3},{9:[2,18]},o($Ve,[2,15]),o($Ve,[2,16])],
defaultActions: {22:[2,25],23:[2,26],24:[2,27],25:[2,28],26:[2,29],27:[2,1],82:[2,19],83:[2,20],106:[2,18]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const {If} = require('../Compiler/Instruction/Control/If');
    const {DoWhile} = require('../Compiler/Instruction/Control/DoWhile');
    const {While} = require('../Compiler/Instruction/Control/While');
    const {InstrBody} = require('../Compiler/Instruction/Control/InstrBody');
    const {Print} = require('../Compiler/Instruction/Functions/Print');

    const {Break} = require('../Compiler/Instruction/Transfer/Break');
    const {Continue} = require('../Compiler/Instruction/Transfer/Continue');
    const {Return} = require('../Compiler/Instruction/Transfer/Return');

    const {Declaration} = require('../Compiler/Instruction/Variables/Declaration');
    const {Assignment} = require('../Compiler/Instruction/Variables/Assignment');

    const {Div} = require('../Compiler/Expression/Arithmetic/Div');
    const {Minus} = require('../Compiler/Expression/Arithmetic/Minus');
    const {Mod} = require('../Compiler/Expression/Arithmetic/Mod');
    const {Plus} = require('../Compiler/Expression/Arithmetic/Plus');
    const {Pot} = require('../Compiler/Expression/Arithmetic/Pot');
    const {Times} = require('../Compiler/Expression/Arithmetic/Times');

    const {PrimitiveL} = require('../Compiler/Expression/Literal/PrimitiveL');
    const {StringL} = require('../Compiler/Expression/Literal/StringL');

    const {And} = require('../Compiler/Expression/Logical/And');
    const {Not} = require('../Compiler/Expression/Logical/Not');
    const {Or} = require('../Compiler/Expression/Logical/Or');

    const {Equals} = require('../Compiler/Expression/Relational/Equals');
    const {Greater} = require('../Compiler/Expression/Relational/Greater');
    const {Less} = require('../Compiler/Expression/Relational/Less');
    const {NotEquals} = require('../Compiler/Expression/Relational/NotEquals');

    const {AccessId} = require('../Compiler/Expression/Access/AccessId');
    const {AssignmentId} = require('../Compiler/Expression/Assignment/AssignmentId');

    const {Types,Type} = require('../Compiler/Utils/Type');

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:
break;
case 3:return 54
break;
case 4:return 52 
break;
case 5:return 41
break;
case 6:return 42
break;
case 7:return 9
break;
case 8:return 39
break;
case 9:return 40
break;
case 10:return 50
break;
case 11:return 49
break;
case 12:return 51
break;
case 13:return 45
break;
case 14:return 46
break;
case 15:return 43
break;
case 16:return 44
break;
case 17:return 47
break;
case 18:return 48
break;
case 19:return 30
break;
case 20:return 20
break;
case 21:return 22  
break;
case 22:return '['
break;
case 23:return ']'
break;
case 24:return 18
break;
case 25:return 17
break;
case 26:return 38
break;
case 27:return 33
break;
case 28:return 34
break;
case 29:return 35
break;
case 30:return 36
break;
case 31:return 37
break;
case 32:return 55
break;
case 33:return 56
break;
case 34:return 19
break;
case 35:return 23
break;
case 36:return 'VOID'
break;
case 37:return 24
break;
case 38:return 25
break;
case 39:return 'RETURN'
break;
case 40:return 26
break;
case 41:return 27
break;
case 42:return 14
break;
case 43:return 13
break;
case 44:return 31
break;
case 45: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace("\\n", "\n").replace("\\t", "\t").replace("\\r", "\r").replace("\\\\", "\\").replace("\\\"", "\""); return 53; 
break;
case 46: yy_.yytext = yy_.yytext.slice(1,-1).replace("\\n", "\n").replace("\\t", "\t").replace("\\r", "\r").replace("\\\\", "\\").replace("\\\"", "\""); return 57; 
break;
case 47:return 5
break;
case 48: 
    console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);        

break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*][*]+)*[/])/i,/^(?:(([0-9]+)\.([0-9]+)))/i,/^(?:([0-9]+))/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:;)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\})/i,/^(?:\{)/i,/^(?:,)/i,/^(?:integer\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:STRING\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:void\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:return\b)/i,/^(?:print\b)/i,/^(?:println\b)/i,/^(?:continue\b)/i,/^(?:break\b)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_ñÑ]*)/i,/^(?:[\']([^\t\'\"\n]|(\\")|(\\n)|(\\')|(\\t))?[\'])/i,/^(?:"[^"]+")/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}