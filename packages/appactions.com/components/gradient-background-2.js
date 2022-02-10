import React, { useEffect, useRef } from 'react';
import MiniGL from './minigl';

function normalizeColor(hexCode) {
    return [((hexCode >> 16) & 255) / 255, ((hexCode >> 8) & 255) / 255, (255 & hexCode) / 255];
}

const shaderFiles = {
    vertex: `varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,
    noise: `//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,
    blend: `//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
    return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
    // Note : Same implementation as BlendSubtractf
    return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
    // Note : Same implementation as BlendSubtract
    return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
    // Note : Same implementation as BlendAddf
    return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
    // Note : Same implementation as BlendAdd
    return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,
    fragment: `varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`,
};

shaderFiles.fragment = `
float f(in vec2 p)
{
    float time = u_time * u_global.noiseSpeed * 1000.0;
    return sin(p.x+sin(p.y+time*0.1)) * sin(p.y*p.x*0.1+time*0.2);
}

vec2 field(in vec2 p)
{
	vec2 ep = vec2(.05,0.);
    vec2 rz= vec2(0);
	for( int i=0; i<7; i++ )
	{
		float t0 = f(p);
		float t1 = f(p + ep.xy);
		float t2 = f(p + ep.yx);
        vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
		vec2 t = vec2(-g.y,g.x);
        
        p += .9*t + g*0.3;
        rz= t;
	}
    
    return rz;
}

void main()
{
	vec2 p = gl_FragCoord.xy / resolution.xy-0.5;
	p.x *= resolution.x/resolution.y;
    p *= 10.;
	
    vec2 fld = field(p);
    vec3 col = sin(vec3(-.3,0.1,0.5)+fld.x-fld.y)*0.65+0.35;
	gl_FragColor = vec4(col,1.0);
}
            `;

class Gradient {
    constructor(height, colors) {
        this.height = height;
        this.playing = false;
        this.time = 1253106;
        this.last = 0;

        this.density = [0.06, 0.16];
        this.angle = 0;
        this.seed = 5;
        this.amp = 320;
        this.freqX = 14e-5;
        this.freqY = 29e-5;

        this.colors = colors
            .map(hex => {
                //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
                if (4 === hex.length) {
                    const hexTemp = hex
                        .substr(1)
                        .split('')
                        .map(hexTemp => hexTemp + hexTemp)
                        .join('');
                    hex = `#${hexTemp}`;
                }
                return hex && `0x${hex.substr(1)}`;
            })
            .filter(Boolean)
            .map(normalizeColor);
    }

    createMaterial = () => {
        this.vertexShader = [shaderFiles.noise, shaderFiles.blend, shaderFiles.vertex].join('\n\n');
        this.fragmentShader = shaderFiles.fragment;

        this.uniforms = {
            u_time: new this.minigl.Uniform({
                value: 0,
            }),
            u_shadow_power: new this.minigl.Uniform({
                value: 10,
            }),
            u_darken_top: new this.minigl.Uniform({
                value: 0,
            }),
            u_active_colors: new this.minigl.Uniform({
                value: [1, 1, 1, 1],
                type: 'vec4',
            }),
            u_global: new this.minigl.Uniform({
                value: {
                    noiseFreq: new this.minigl.Uniform({
                        value: [this.freqX, this.freqY],
                        type: 'vec2',
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 5e-6,
                    }),
                },
                type: 'struct',
            }),
            u_vertDeform: new this.minigl.Uniform({
                value: {
                    incline: new this.minigl.Uniform({
                        value: 0,
                    }),
                    offsetTop: new this.minigl.Uniform({
                        value: -0.5,
                    }),
                    offsetBottom: new this.minigl.Uniform({
                        value: -0.5,
                    }),
                    noiseFreq: new this.minigl.Uniform({
                        value: [3, 4],
                        type: 'vec2',
                    }),
                    noiseAmp: new this.minigl.Uniform({
                        value: this.amp,
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 10,
                    }),
                    noiseFlow: new this.minigl.Uniform({
                        value: 3,
                    }),
                    noiseSeed: new this.minigl.Uniform({
                        value: this.seed,
                    }),
                },
                type: 'struct',
                excludeFrom: 'fragment',
            }),
            u_baseColor: new this.minigl.Uniform({
                value: this.colors[0],
                type: 'vec3',
                excludeFrom: 'fragment',
            }),
            u_waveLayers: new this.minigl.Uniform({
                value: [],
                excludeFrom: 'fragment',
                type: 'array',
            }),
        };
        for (let e = 1; e < this.colors.length; e += 1)
            this.uniforms.u_waveLayers.value.push(
                new this.minigl.Uniform({
                    value: {
                        color: new this.minigl.Uniform({
                            value: this.colors[e],
                            type: 'vec3',
                        }),
                        noiseFreq: new this.minigl.Uniform({
                            value: [2 + e / this.colors.length, 3 + e / this.colors.length],
                            type: 'vec2',
                        }),
                        noiseSpeed: new this.minigl.Uniform({
                            value: 11 + 0.3 * e,
                        }),
                        noiseFlow: new this.minigl.Uniform({
                            value: 6.5 + 0.3 * e,
                        }),
                        noiseSeed: new this.minigl.Uniform({
                            value: this.seed + 10 * e,
                        }),
                        noiseFloor: new this.minigl.Uniform({
                            value: 0.1,
                        }),
                        noiseCeil: new this.minigl.Uniform({
                            value: 0.63 + 0.07 * e,
                        }),
                    },
                    type: 'struct',
                }),
            );

        return new this.minigl.Material(this.vertexShader, this.fragmentShader, this.uniforms);
    };

    init = el => {
        this.minigl = new MiniGL(el);

        this.material = this.createMaterial();
        this.geometry = new this.minigl.PlaneGeometry();
        this.mesh = new this.minigl.Mesh(this.geometry, this.material);

        this.playing = true;

        this.resize();
        requestAnimationFrame(this.animate);
        window.addEventListener('resize', this.resize);
    };

    resize = () => {
        this.width = window.innerWidth;
        this.minigl.setSize(this.width, this.height);
        this.minigl.setOrthographicCamera();
        this.xSegCount = Math.ceil(this.width * this.density[0]);
        this.ySegCount = Math.ceil(this.height * this.density[1]);
        this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount);
        this.mesh.geometry.setSize(this.width, this.height);
    };

    animate = delta => {
        if (0 !== this.last && this.isStatic) {
            this.minigl.render();
            this.disconnect();
            return;
        }

        if (!this.shouldSkipFrame(delta)) {
            this.time += Math.min(delta - this.last, 1e3 / 15);
            this.last = delta;
            this.mesh.material.uniforms.u_time.value = this.time;
            this.minigl.render();
        }

        if (this.playing) {
            requestAnimationFrame(this.animate);
        }
    };

    shouldSkipFrame = delta => {
        return !!window.document.hidden || !this.playing || parseInt(delta, 10) % 2 === 0;
    };

    disconnect = () => {
        window.removeEventListener('resize', this.resize);
    };
}

export default function GradientBackground({ height = 600, colors, style = {} }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const gradient = new Gradient(height, colors);

        gradient.init(ref.current);

        window.gradient = gradient;

        return () => gradient.disconnect();
    }, [ref.current]);

    return (
        <canvas
            ref={ref}
            style={{ width: '100vw', height, maxWidth: '100%', position: 'absolute', zIndex: -100, ...style }}
        />
    );
}
