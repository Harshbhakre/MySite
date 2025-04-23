varying vec2 vUv;
varying float vElevation;
uniform float uColor;
void main() {
	vec4 c1 = vec4(0.4078, 0.8863, 0.9922, 1.0);
	vec4 c2 = vec4(1., 1., 1.0, 1.0);


    vec4 c3 = vec4(0.9961, 0.9725, 0.5059, 1.0);
	vec4 c4 = vec4(1.0, 1., 1., 1.0);


	float v = smoothstep(-.14, .14, vElevation*.2);
	vec4 colorred = mix(c1,c2, v);
	vec4 coloryellow = mix(c3,c4,v);

	vec4 final = mix(colorred,coloryellow,uColor);

	gl_FragColor = final;
}
