var englishChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var punctuation = ["'", "\"", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "~", "<", ">", "_", "-", " ", "\n", ";", ":", "+", "=", "/", "|", "~", "?", ".", ",", "%", "^"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var allChars = englishChars.concat(punctuation).concat(numbers)

var cleanedEmojis = ["&#128288;","&#128289;","&#128292;","&#127744;","&#127746;","&#127747;","&#127748;","&#127749;","&#127750;","&#127751;","&#127752;","&#127753;","&#127754;","&#127755;","&#127756;","&#127757;","&#127758;","&#127759;","&#127760;","&#127761;","&#127762;","&#127763;","&#127764;","&#127765;","&#127766;","&#127767;","&#127768;","&#127769;","&#127770;","&#127771;","&#127772;","&#127773;","&#127774;","&#127775;","&#127776;","&#127792;","&#127793;","&#127794;","&#127795;","&#127796;","&#127797;","&#127799;","&#127800;","&#127801;","&#127802;","&#127803;","&#127804;","&#127805;","&#127806;","&#127807;","&#127808;","&#127809;","&#127810;","&#127811;","&#127812;","&#127813;","&#127814;","&#127815;","&#127816;","&#127817;","&#127818;","&#127819;","&#127820;","&#127821;","&#127822;","&#127823;","&#127824;","&#127825;","&#127826;","&#127827;","&#127828;","&#127829;","&#127830;","&#127831;","&#127832;","&#127833;","&#127834;","&#127835;","&#127836;","&#127837;","&#127838;","&#127839;","&#127840;","&#127841;","&#127842;","&#127843;","&#127844;","&#127845;","&#127846;","&#127847;","&#127848;","&#127849;","&#127850;","&#127851;","&#127852;","&#127853;","&#127854;","&#127855;","&#127856;","&#127857;","&#127858;","&#127859;","&#127860;","&#127861;","&#127862;","&#127863;","&#127864;","&#127865;","&#127866;","&#127868;","&#127872;","&#127873;","&#127874;","&#127875;","&#127876;","&#127877;","&#127878;","&#127879;","&#127881;","&#127882;","&#127883;","&#127884;","&#127885;","&#127886;","&#127887;","&#127888;","&#127889;","&#127890;","&#127891;","&#127904;","&#127905;","&#127906;","&#127907;","&#127908;","&#127909;","&#127910;","&#127911;","&#127912;","&#127913;","&#127914;","&#127915;","&#127916;","&#127917;","&#127918;","&#127919;","&#127920;","&#127921;","&#127922;","&#127923;","&#127924;","&#127925;","&#127926;","&#127927;","&#127928;","&#127929;","&#127930;","&#127931;","&#127932;","&#127933;","&#127934;","&#127935;","&#127936;","&#127937;","&#127938;","&#127939;","&#127940;","&#127942;","&#127943;","&#127944;","&#127946;","&#127968;","&#127969;","&#127970;","&#127971;","&#127972;","&#127973;","&#127974;","&#127975;","&#127976;","&#127977;","&#127978;","&#127979;","&#127980;","&#127981;","&#127982;","&#127983;","&#127984;","&#128000;","&#128001;","&#128002;","&#128003;","&#128004;","&#128005;","&#128006;","&#128007;","&#128008;","&#128009;","&#128010;","&#128011;","&#128012;","&#128013;","&#128014;","&#128015;","&#128016;","&#128017;","&#128018;","&#128019;","&#128020;","&#128021;","&#128022;","&#128023;","&#128024;","&#128025;","&#128026;","&#128027;","&#128028;","&#128029;","&#128030;","&#128031;","&#128032;","&#128033;","&#128034;","&#128035;","&#128036;","&#128037;","&#128038;","&#128039;","&#128040;","&#128041;","&#128042;","&#128043;","&#128044;","&#128045;","&#128046;","&#128047;","&#128048;","&#128049;","&#128050;","&#128051;","&#128052;","&#128053;","&#128054;","&#128055;","&#128056;","&#128057;","&#128058;","&#128059;","&#128060;","&#128061;","&#128062;","&#128064;","&#128066;","&#128067;","&#128068;","&#128069;","&#128070;","&#128071;","&#128072;","&#128073;","&#128074;","&#128075;","&#128076;","&#128077;","&#128078;","&#128079;","&#128080;","&#128081;","&#128082;","&#128083;","&#128084;","&#128085;","&#128086;","&#128087;","&#128088;","&#128089;","&#128090;","&#128091;","&#128092;","&#128093;","&#128094;","&#128095;","&#128096;","&#128097;","&#128098;","&#128099;","&#128100;","&#128101;","&#128102;","&#128103;","&#128104;","&#128106;","&#128108;","&#128109;","&#128111;","&#128112;","&#128113;","&#128114;","&#128115;","&#128116;","&#128117;","&#128118;","&#128119;","&#128120;","&#128121;","&#128122;","&#128123;","&#128124;","&#128125;","&#128126;","&#128127;","&#128128;","&#128129;","&#128130;","&#128131;","&#128132;","&#128133;","&#128134;","&#128135;","&#128136;","&#128137;","&#128138;","&#128139;","&#128140;","&#128141;","&#128142;","&#128143;","&#128144;","&#128145;","&#128146;","&#128148;","&#128149;","&#128150;","&#128151;","&#128152;","&#128153;","&#128154;","&#128155;","&#128156;","&#128157;","&#128158;","&#128159;","&#128160;","&#128161;","&#128162;","&#128163;","&#128164;","&#128165;","&#128166;","&#128167;","&#128168;","&#128169;","&#128170;","&#128171;","&#128172;","&#128173;","&#128174;","&#128175;","&#128176;","&#128177;","&#128178;","&#128179;","&#128180;","&#128181;","&#128182;","&#128183;","&#128184;","&#128185;","&#128186;","&#128187;","&#128188;","&#128189;","&#128190;","&#128191;","&#128192;","&#128193;","&#128194;","&#128195;","&#128196;","&#128197;","&#128198;","&#128199;","&#128200;","&#128201;","&#128202;","&#128203;","&#128205;","&#128206;","&#128207;","&#128208;","&#128209;","&#128210;","&#128211;","&#128212;","&#128213;","&#128214;","&#128215;","&#128216;","&#128217;","&#128218;","&#128219;","&#128220;","&#128221;","&#128222;","&#128223;","&#128224;","&#128225;","&#128226;","&#128227;","&#128229;","&#128230;","&#128233;","&#128234;","&#128235;","&#128236;","&#128237;","&#128238;","&#128239;","&#128240;","&#128241;","&#128242;","&#128243;","&#128244;","&#128245;","&#128246;","&#128247;","&#128249;","&#128250;","&#128251;","&#128252;","&#128256;","&#128257;","&#128258;","&#128259;","&#128260;","&#128261;","&#128262;","&#128263;","&#128264;","&#128265;","&#128266;","&#128267;","&#128268;","&#128269;","&#128270;","&#128271;","&#128272;","&#128273;","&#128274;","&#128276;","&#128277;","&#128278;","&#128279;","&#128280;","&#128281;","&#128282;","&#128283;","&#128284;","&#128285;","&#128286;","&#128287;","&#128290;","&#128291;","&#128293;","&#128294;","&#128295;","&#128296;","&#128297;","&#128298;","&#128299;","&#128300;","&#128301;","&#128302;","&#128303;","&#128304;","&#128305;","&#128306;","&#128307;","&#128308;","&#128309;","&#128310;","&#128311;","&#128312;","&#128313;","&#128314;","&#128315;","&#128316;","&#128317;","&#128336;","&#128337;","&#128338;","&#128339;","&#128340;","&#128341;","&#128342;","&#128343;","&#128344;","&#128345;","&#128346;","&#128347;","&#128348;","&#128349;","&#128350;","&#128351;","&#128352;","&#128353;","&#128354;","&#128355;","&#128356;","&#128357;","&#128358;","&#128359;","&#128507;","&#128508;","&#128509;","&#128510;","&#128511;","&#128512;","&#128513;","&#128514;","&#128515;","&#128516;","&#128517;","&#128518;","&#128519;","&#128520;","&#128521;","&#128522;","&#128523;","&#128524;","&#128525;","&#128526;","&#128527;","&#128528;","&#128529;","&#128530;","&#128531;","&#128532;","&#128533;","&#128534;","&#128535;","&#128536;","&#128537;","&#128538;","&#128539;","&#128540;","&#128541;","&#128542;","&#128543;","&#128544;","&#128545;","&#128546;","&#128547;","&#128548;","&#128549;","&#128550;","&#128551;","&#128552;","&#128553;","&#128554;","&#128555;","&#128557;","&#128558;","&#128559;","&#128560;","&#128561;","&#128562;","&#128563;","&#128564;","&#128565;","&#128566;","&#128567;","&#128568;","&#128569;","&#128570;","&#128571;","&#128572;","&#128573;","&#128574;","&#128575;","&#128576;","&#128581;","&#128582;","&#128583;","&#128584;","&#128585;","&#128586;","&#128587;","&#128588;","&#128589;","&#128590;","&#128591;","&#128640;","&#128641;","&#128642;","&#128643;","&#128644;","&#128645;","&#128646;","&#128647;","&#128648;","&#128650;","&#128651;","&#128652;","&#128653;","&#128654;","&#128656;","&#128657;","&#128658;","&#128659;","&#128660;","&#128661;","&#128662;","&#128663;","&#128664;","&#128665;","&#128666;","&#128667;","&#128668;","&#128669;","&#128670;","&#128681;","&#128682;","&#128684;","&#128689;","&#128690;","&#128691;","&#128698;","&#128701;","&#128702;","&#128705;","&#128706;","&#128707;","&#128708;","&#128709;"]

var englishToEmojiDictionary = {"0":["&#127776;","&#127829;","&#128013;","&#128182;","&#128296;","&#128559;"],"1":["&#128643;","&#127773;","&#128528;","&#127984;","&#128037;","&#127759;"],"2":["&#128549;","&#127826;","&#127750;","&#127853;","&#128706;","&#128288;"],"3":["&#128128;","&#128005;","&#128185;","&#127850;","&#128153;","&#128356;"],"4":["&#127862;","&#128648;","&#127859;","&#128008;","&#128073;","&#127913;"],"5":["&#128075;","&#128127;","&#127751;","&#128209;","&#128667;","&#128011;"],"6":["&#128076;","&#127923;","&#128101;","&#127908;","&#127857;","&#128281;"],"7":["&#128029;","&#128251;","&#127809;","&#128272;","&#128317;","&#127805;"],"8":["&#128641;","&#127866;","&#128708;","&#127909;","&#128023;","&#128229;"],"9":["&#128575;","&#128167;","&#127763;","&#128142;","&#128164;","&#128117;"],"10":["&#128284;","&#128574;","&#128245;","&#127747;","&#128256;","&#128646;"],"a":["&#128207;","&#128089;","&#128644;","&#128247;","&#128176;","&#127800;"],"b":["&#128344;","&#127969;","&#127968;","&#127825;","&#128585;","&#128178;"],"c":["&#128091;","&#128201;","&#127746;","&#128336;","&#128163;","&#127937;"],"d":["&#127810;","&#128177;","&#128306;","&#128157;","&#128154;","&#127891;"],"e":["&#128302;","&#127973;","&#128531;","&#127876;","&#128070;","&#128527;"],"f":["&#128192;","&#128658;","&#128552;","&#127983;","&#128031;","&#127793;"],"g":["&#128589;","&#127877;","&#128183;","&#128304;","&#128180;","&#128340;"],"h":["&#128359;","&#128124;","&#128040;","&#127849;","&#128560;","&#128584;"],"i":["&#128094;","&#128544;","&#127939;","&#128198;","&#128114;","&#128343;"],"j":["&#128663;","&#128188;","&#128053;","&#128145;","&#128653;","&#128054;"],"k":["&#128187;","&#128310;","&#127977;","&#128587;","&#128654;","&#127912;"],"l":["&#128218;","&#128567;","&#128548;","&#128526;","&#128640;","&#128313;"],"m":["&#128347;","&#127936;","&#128581;","&#127794;","&#127886;","&#128277;"],"n":["&#128027;","&#127981;","&#128138;","&#128086;","&#128235;","&#128582;"],"o":["&#127943;","&#127933;","&#128208;","&#128012;","&#128300;","&#128190;"],"p":["&#128038;","&#128219;","&#128084;","&#128285;","&#127928;","&#127926;"],"q":["&#128115;","&#128543;","&#127821;","&#127847;","&#128100;","&#128046;"],"r":["&#127865;","&#128121;","&#127935;","&#127845;","&#128508;","&#128197;"],"s":["&#128033;","&#127874;","&#128072;","&#128071;","&#128664;","&#128682;"],"t":["&#128066;","&#128169;","&#128286;","&#128520;","&#127834;","&#128550;"],"u":["&#128212;","&#128569;","&#127976;","&#128267;","&#128346;","&#128172;"],"v":["&#128656;","&#128539;","&#128337;","&#128171;","&#127820;","&#128237;"],"w":["&#127883;","&#128116;","&#128278;","&#127918;","&#128018;","&#128039;"],"x":["&#128155;","&#128553;","&#128129;","&#128532;","&#128591;","&#128143;"],"y":["&#128203;","&#128173;","&#127980;","&#128295;","&#127921;","&#127811;"],"z":["&#128239;","&#128061;","&#128196;","&#128241;","&#128642;","&#128314;"],"A":["&#127814;","&#128316;","&#128666;","&#128224;","&#128082;","&#128249;"],"B":["&#127873;","&#128049;","&#128170;","&#128118;","&#128358;","&#128067;"],"C":["&#128524;","&#128707;","&#128266;","&#127808;","&#128355;","&#127946;"],"D":["&#127882;","&#128514;","&#127766;","&#128534;","&#127920;","&#128572;"],"E":["&#128098;","&#128289;","&#127827;","&#127934;","&#128555;","&#128102;"],"F":["&#128015;","&#127878;","&#128564;","&#127749;","&#128200;","&#128586;"],"G":["&#128194;","&#127764;","&#127888;","&#128009;","&#128264;","&#128588;"],"H":["&#128287;","&#128058;","&#128230;","&#128557;","&#128160;","&#128517;"],"I":["&#128152;","&#128312;","&#128007;","&#128149;","&#128354;","&#128652;"],"J":["&#127795;","&#128562;","&#128525;","&#128087;","&#128136;","&#127774;"],"K":["&#128645;","&#128276;","&#128348;","&#128133;","&#127889;","&#128002;"],"L":["&#128303;","&#128529;","&#127822;","&#128051;","&#128135;","&#128259;"],"M":["&#128659;","&#128661;","&#128055;","&#127819;","&#128349;","&#128126;"],"N":["&#128350;","&#127940;","&#128088;","&#128290;","&#128036;","&#127864;"],"O":["&#128565;","&#127851;","&#128016;","&#128186;","&#128006;","&#128050;"],"P":["&#128151;","&#128309;","&#127910;","&#127792;","&#127761;","&#128292;"],"Q":["&#128510;","&#128307;","&#127804;","&#128357;","&#128057;","&#127770;"],"R":["&#127796;","&#128518;","&#127813;","&#128020;","&#127875;","&#127756;"],"S":["&#128132;","&#127919;","&#128243;","&#128246;","&#127803;","&#127812;"],"T":["&#128225;","&#128081;","&#128215;","&#128077;","&#127843;","&#128150;"],"U":["&#128069;","&#127815;","&#128268;","&#128137;","&#127907;","&#128112;"],"V":["&#128030;","&#128080;","&#128166;","&#128271;","&#128583;","&#128250;"],"W":["&#128148;","&#128108;","&#127911;","&#128195;","&#128545;","&#128546;"],"X":["&#127974;","&#128210;","&#128566;","&#128542;","&#128047;","&#127944;"],"Y":["&#127833;","&#128025;","&#127916;","&#128199;","&#128691;","&#128651;"],"Z":["&#127753;","&#127914;","&#127768;","&#128119;","&#128244;","&#127769;"],"'":["&#128236;","&#128045;","&#127905;","&#127970;","&#128165;","&#128558;"],"\"":["&#128660;","&#128064;","&#128068;","&#127802;","&#128568;","&#127752;"],"!":["&#127848;","&#128523;","&#127748;","&#128509;","&#127915;","&#128530;"],"@":["&#128059;","&#128536;","&#127824;","&#128351;","&#128162;","&#128657;"],"#":["&#128099;","&#128650;","&#127755;","&#128041;","&#127818;","&#127979;"],"$":["&#128106;","&#128202;","&#127938;","&#128175;","&#128274;","&#128512;"],"%":["&#127830;","&#127806;","&#128083;","&#128538;","&#128338;","&#128159;"],"^":["&#127760;","&#127887;","&#128341;","&#127872;","&#128024;","&#128293;"],"&":["&#127823;","&#127942;","&#128222;","&#128017;","&#127816;","&#128563;"],"*":["&#128669;","&#127932;","&#127854;","&#127832;","&#128019;","&#128352;"],"(":["&#127836;","&#128227;","&#128205;","&#127881;","&#128191;","&#127885;"],")":["&#128262;","&#128048;","&#127828;","&#128223;","&#127922;","&#127931;"],"{":["&#128021;","&#128522;","&#128079;","&#128001;","&#128516;","&#128265;"],"}":["&#128263;","&#128702;","&#128665;","&#128280;","&#128109;","&#128226;"],"[":["&#127841;","&#128189;","&#127846;","&#128181;","&#127924;","&#128291;"],"]":["&#128315;","&#127797;","&#128062;","&#128269;","&#128345;","&#127754;"],"~":["&#128052;","&#128668;","&#127925;","&#127844;","&#128026;","&#128010;"],"<":["&#128252;","&#128022;","&#128283;","&#127906;","&#127860;","&#128085;"],">":["&#128144;","&#128090;","&#128134;","&#127838;","&#128273;","&#128211;"],"_":["&#127929;","&#128095;","&#127861;","&#127839;","&#128125;","&#128261;"],"-":["&#128096;","&#128257;","&#128299;","&#127840;","&#128123;","&#128060;"]," ":[" ", " ", " "],"\n":["\n"],";":["&#128511;","&#128684;","&#128590;","&#128297;","&#128238;","&#128234;"],":":["&#127972;","&#127890;","&#128043;","&#128179;","&#128097;","&#127837;"],"+":["&#128535;","&#127852;","&#127884;","&#128028;","&#128547;","&#128168;"],"=":["&#128551;","&#127757;","&#128221;","&#128576;","&#127799;","&#128000;"],"/":["&#127772;","&#128156;","&#128003;","&#127904;","&#128184;","&#128174;"],"|":["&#128111;","&#128570;","&#128540;","&#128103;","&#128573;","&#128305;"],"?":["&#127765;","&#128074;","&#128217;","&#127771;","&#127807;","&#128554;"],".":["&#127744;","&#128258;","&#128689;","&#128056;","&#128533;","&#128301;"],",":["&#128078;","&#128206;","&#128093;","&#128122;","&#128705;","&#128690;"]}

var emojiToEnglish = {"&#127776;":"0","&#127829;":"0","&#128013;":"0","&#128182;":"0","&#128296;":"0","&#128559;":"0","&#128643;":"1","&#127773;":"1","&#128528;":"1","&#127984;":"1","&#128037;":"1","&#127759;":"1","&#128549;":"2","&#127826;":"2","&#127750;":"2","&#127853;":"2","&#128706;":"2","&#128288;":"2","&#128128;":"3","&#128005;":"3","&#128185;":"3","&#127850;":"3","&#128153;":"3","&#128356;":"3","&#127862;":"4","&#128648;":"4","&#127859;":"4","&#128008;":"4","&#128073;":"4","&#127913;":"4","&#128075;":"5","&#128127;":"5","&#127751;":"5","&#128209;":"5","&#128667;":"5","&#128011;":"5","&#128076;":"6","&#127923;":"6","&#128101;":"6","&#127908;":"6","&#127857;":"6","&#128281;":"6","&#128029;":"7","&#128251;":"7","&#127809;":"7","&#128272;":"7","&#128317;":"7","&#127805;":"7","&#128641;":"8","&#127866;":"8","&#128708;":"8","&#127909;":"8","&#128023;":"8","&#128229;":"8","&#128575;":"9","&#128167;":"9","&#127763;":"9","&#128142;":"9","&#128164;":"9","&#128117;":"9","&#128284;":"10","&#128574;":"10","&#128245;":"10","&#127747;":"10","&#128256;":"10","&#128646;":"10","&#128207;":"a","&#128089;":"a","&#128644;":"a","&#128247;":"a","&#128176;":"a","&#127800;":"a","&#128344;":"b","&#127969;":"b","&#127968;":"b","&#127825;":"b","&#128585;":"b","&#128178;":"b","&#128091;":"c","&#128201;":"c","&#127746;":"c","&#128336;":"c","&#128163;":"c","&#127937;":"c","&#127810;":"d","&#128177;":"d","&#128306;":"d","&#128157;":"d","&#128154;":"d","&#127891;":"d","&#128302;":"e","&#127973;":"e","&#128531;":"e","&#127876;":"e","&#128070;":"e","&#128527;":"e","&#128192;":"f","&#128658;":"f","&#128552;":"f","&#127983;":"f","&#128031;":"f","&#127793;":"f","&#128589;":"g","&#127877;":"g","&#128183;":"g","&#128304;":"g","&#128180;":"g","&#128340;":"g","&#128359;":"h","&#128124;":"h","&#128040;":"h","&#127849;":"h","&#128560;":"h","&#128584;":"h","&#128094;":"i","&#128544;":"i","&#127939;":"i","&#128198;":"i","&#128114;":"i","&#128343;":"i","&#128663;":"j","&#128188;":"j","&#128053;":"j","&#128145;":"j","&#128653;":"j","&#128054;":"j","&#128187;":"k","&#128310;":"k","&#127977;":"k","&#128587;":"k","&#128654;":"k","&#127912;":"k","&#128218;":"l","&#128567;":"l","&#128548;":"l","&#128526;":"l","&#128640;":"l","&#128313;":"l","&#128347;":"m","&#127936;":"m","&#128581;":"m","&#127794;":"m","&#127886;":"m","&#128277;":"m","&#128027;":"n","&#127981;":"n","&#128138;":"n","&#128086;":"n","&#128235;":"n","&#128582;":"n","&#127943;":"o","&#127933;":"o","&#128208;":"o","&#128012;":"o","&#128300;":"o","&#128190;":"o","&#128038;":"p","&#128219;":"p","&#128084;":"p","&#128285;":"p","&#127928;":"p","&#127926;":"p","&#128115;":"q","&#128543;":"q","&#127821;":"q","&#127847;":"q","&#128100;":"q","&#128046;":"q","&#127865;":"r","&#128121;":"r","&#127935;":"r","&#127845;":"r","&#128508;":"r","&#128197;":"r","&#128033;":"s","&#127874;":"s","&#128072;":"s","&#128071;":"s","&#128664;":"s","&#128682;":"s","&#128066;":"t","&#128169;":"t","&#128286;":"t","&#128520;":"t","&#127834;":"t","&#128550;":"t","&#128212;":"u","&#128569;":"u","&#127976;":"u","&#128267;":"u","&#128346;":"u","&#128172;":"u","&#128656;":"v","&#128539;":"v","&#128337;":"v","&#128171;":"v","&#127820;":"v","&#128237;":"v","&#127883;":"w","&#128116;":"w","&#128278;":"w","&#127918;":"w","&#128018;":"w","&#128039;":"w","&#128155;":"x","&#128553;":"x","&#128129;":"x","&#128532;":"x","&#128591;":"x","&#128143;":"x","&#128203;":"y","&#128173;":"y","&#127980;":"y","&#128295;":"y","&#127921;":"y","&#127811;":"y","&#128239;":"z","&#128061;":"z","&#128196;":"z","&#128241;":"z","&#128642;":"z","&#128314;":"z","&#127814;":"A","&#128316;":"A","&#128666;":"A","&#128224;":"A","&#128082;":"A","&#128249;":"A","&#127873;":"B","&#128049;":"B","&#128170;":"B","&#128118;":"B","&#128358;":"B","&#128067;":"B","&#128524;":"C","&#128707;":"C","&#128266;":"C","&#127808;":"C","&#128355;":"C","&#127946;":"C","&#127882;":"D","&#128514;":"D","&#127766;":"D","&#128534;":"D","&#127920;":"D","&#128572;":"D","&#128098;":"E","&#128289;":"E","&#127827;":"E","&#127934;":"E","&#128555;":"E","&#128102;":"E","&#128015;":"F","&#127878;":"F","&#128564;":"F","&#127749;":"F","&#128200;":"F","&#128586;":"F","&#128194;":"G","&#127764;":"G","&#127888;":"G","&#128009;":"G","&#128264;":"G","&#128588;":"G","&#128287;":"H","&#128058;":"H","&#128230;":"H","&#128557;":"H","&#128160;":"H","&#128517;":"H","&#128152;":"I","&#128312;":"I","&#128007;":"I","&#128149;":"I","&#128354;":"I","&#128652;":"I","&#127795;":"J","&#128562;":"J","&#128525;":"J","&#128087;":"J","&#128136;":"J","&#127774;":"J","&#128645;":"K","&#128276;":"K","&#128348;":"K","&#128133;":"K","&#127889;":"K","&#128002;":"K","&#128303;":"L","&#128529;":"L","&#127822;":"L","&#128051;":"L","&#128135;":"L","&#128259;":"L","&#128659;":"M","&#128661;":"M","&#128055;":"M","&#127819;":"M","&#128349;":"M","&#128126;":"M","&#128350;":"N","&#127940;":"N","&#128088;":"N","&#128290;":"N","&#128036;":"N","&#127864;":"N","&#128565;":"O","&#127851;":"O","&#128016;":"O","&#128186;":"O","&#128006;":"O","&#128050;":"O","&#128151;":"P","&#128309;":"P","&#127910;":"P","&#127792;":"P","&#127761;":"P","&#128292;":"P","&#128510;":"Q","&#128307;":"Q","&#127804;":"Q","&#128357;":"Q","&#128057;":"Q","&#127770;":"Q","&#127796;":"R","&#128518;":"R","&#127813;":"R","&#128020;":"R","&#127875;":"R","&#127756;":"R","&#128132;":"S","&#127919;":"S","&#128243;":"S","&#128246;":"S","&#127803;":"S","&#127812;":"S","&#128225;":"T","&#128081;":"T","&#128215;":"T","&#128077;":"T","&#127843;":"T","&#128150;":"T","&#128069;":"U","&#127815;":"U","&#128268;":"U","&#128137;":"U","&#127907;":"U","&#128112;":"U","&#128030;":"V","&#128080;":"V","&#128166;":"V","&#128271;":"V","&#128583;":"V","&#128250;":"V","&#128148;":"W","&#128108;":"W","&#127911;":"W","&#128195;":"W","&#128545;":"W","&#128546;":"W","&#127974;":"X","&#128210;":"X","&#128566;":"X","&#128542;":"X","&#128047;":"X","&#127944;":"X","&#127833;":"Y","&#128025;":"Y","&#127916;":"Y","&#128199;":"Y","&#128691;":"Y","&#128651;":"Y","&#127753;":"Z","&#127914;":"Z","&#127768;":"Z","&#128119;":"Z","&#128244;":"Z","&#127769;":"Z","&#128236;":"'","&#128045;":"'","&#127905;":"'","&#127970;":"'","&#128165;":"'","&#128558;":"'","&#128660;":"\"","&#128064;":"\"","&#128068;":"\"","&#127802;":"\"","&#128568;":"\"","&#127752;":"\"","&#127848;":"!","&#128523;":"!","&#127748;":"!","&#128509;":"!","&#127915;":"!","&#128530;":"!","&#128059;":"@","&#128536;":"@","&#127824;":"@","&#128351;":"@","&#128162;":"@","&#128657;":"@","&#128099;":"#","&#128650;":"#","&#127755;":"#","&#128041;":"#","&#127818;":"#","&#127979;":"#","&#128106;":"$","&#128202;":"$","&#127938;":"$","&#128175;":"$","&#128274;":"$","&#128512;":"$","&#127830;":"%","&#127806;":"%","&#128083;":"%","&#128538;":"%","&#128338;":"%","&#128159;":"%","&#127760;":"^","&#127887;":"^","&#128341;":"^","&#127872;":"^","&#128024;":"^","&#128293;":"^","&#127823;":"&","&#127942;":"&","&#128222;":"&","&#128017;":"&","&#127816;":"&","&#128563;":"&","&#128669;":"*","&#127932;":"*","&#127854;":"*","&#127832;":"*","&#128019;":"*","&#128352;":"*","&#127836;":"(","&#128227;":"(","&#128205;":"(","&#127881;":"(","&#128191;":"(","&#127885;":"(","&#128262;":")","&#128048;":")","&#127828;":")","&#128223;":")","&#127922;":")","&#127931;":")","&#128021;":"{","&#128522;":"{","&#128079;":"{","&#128001;":"{","&#128516;":"{","&#128265;":"{","&#128263;":"}","&#128702;":"}","&#128665;":"}","&#128280;":"}","&#128109;":"}","&#128226;":"}","&#127841;":"[","&#128189;":"[","&#127846;":"[","&#128181;":"[","&#127924;":"[","&#128291;":"[","&#128315;":"]","&#127797;":"]","&#128062;":"]","&#128269;":"]","&#128345;":"]","&#127754;":"]","&#128052;":"~","&#128668;":"~","&#127925;":"~","&#127844;":"~","&#128026;":"~","&#128010;":"~","&#128252;":"<","&#128022;":"<","&#128283;":"<","&#127906;":"<","&#127860;":"<","&#128085;":"<","&#128144;":">","&#128090;":">","&#128134;":">","&#127838;":">","&#128273;":">","&#128211;":">","&#127929;":"_","&#128095;":"_","&#127861;":"_","&#127839;":"_","&#128125;":"_","&#128261;":"_","&#128096;":"-","&#128257;":"-","&#128299;":"-","&#127840;":"-","&#128123;":"-","&#128060;":"-"," ":" ","\n":"\n","&#128511;":";","&#128684;":";","&#128590;":";","&#128297;":";","&#128238;":";","&#128234;":";","&#127972;":":","&#127890;":":","&#128043;":":","&#128179;":":","&#128097;":":","&#127837;":":","&#128535;":"+","&#127852;":"+","&#127884;":"+","&#128028;":"+","&#128547;":"+","&#128168;":"+","&#128551;":"=","&#127757;":"=","&#128221;":"=","&#128576;":"=","&#127799;":"=","&#128000;":"=","&#127772;":"/","&#128156;":"/","&#128003;":"/","&#127904;":"/","&#128184;":"/","&#128174;":"/","&#128111;":"|","&#128570;":"|","&#128540;":"|","&#128103;":"|","&#128573;":"|","&#128305;":"|","&#127765;":"?","&#128074;":"?","&#128217;":"?","&#127771;":"?","&#127807;":"?","&#128554;":"?","&#127744;":".","&#128258;":".","&#128689;":".","&#128056;":".","&#128533;":".","&#128301;":".","&#128078;":",","&#128206;":",","&#128093;":",","&#128122;":",","&#128705;":",","&#128690;":","}