/** @namespace */
var shaders	= shaders 		|| {};

var shaders.glow = {};
var shaders.glow.vertex = 
[
"uniform vec3 viewVector;",
"uniform float c;",
"uniform float p;",
"varying float intensity;",
"void main()",
"{",
    "vec3 vNormal = normalize( normalMatrix * normal );",
	"vec3 vNormel = normalize( normalMatrix * viewVector );",
	"intensity = pow( c - dot(vNormal, vNormel), p );",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
"}"
].join("\n");

var shaders.glow.fragment = 
[
"uniform vec3 glowColor;",
"varying float intensity;",
"void main()",
"{",
	"vec3 glow = glowColor * intensity;",
    "gl_FragColor = vec4( glow, 1.0 );",
"}"
].join("\n");